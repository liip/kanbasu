var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var dest = process.argv[2];

if (!dest) {
	return console.error('Missing path argument!');
}

// Ensure destination exists
mkdirp(path.join(dest, 'settings'), function(err) {
	if (err) {
		return console.error(err);
	}

	/**
	 * Copy root file
	 */
	fs.readFile(__dirname + '/src/assets/scss/kanbasu.scss', 'utf8', function(err, data) {
		if (err) {
			return console.error(err);
		}

		// Update path to partials
		var pathToAssets = path.relative(dest, __dirname + '/src/assets/scss');
		// Import project settings after Kanbasu default settings
		var result = data
			.replace(/@import '/g, "@import '"+pathToAssets+"/")
			.replace(/(settings\/settings';[\r\n])/g, "$1@import 'settings/settings';\r\n");

		var destFile = path.join(dest, 'main.scss');
		fs.writeFile(destFile, result, 'utf8', function(err) {
			if (err) {
				return console.error(err);
			}
			console.log('Writing "' + destFile + '"');
		});
	});

	/**
	 * Copy settings file
	 */
	fs.readFile(__dirname + '/src/assets/scss/settings/_settings.scss', 'utf8', function(err, data) {
		if (err) {
			return console.error(err);
		}

		// Remove Sass !default flags
		var result = data.replace(/ !default/g, '');

		var destFile = path.join(dest, 'settings/_settings.scss');
		fs.writeFile(destFile, result, 'utf8', function(err) {
			if (err) {
				return console.error(err);
			}
			console.log('Writing "' + destFile + '"');
		});
	});
});
