'use strict';

// modules
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var webpack = require('webpack');
var ghPages = require('gulp-gh-pages');
var metadata = require('./package.json');
var markdown = require('markdown-it')();


// configuration
var config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: [
				'./src/assets/fabricator/scripts/fabricator.js',
				'./src/assets/fabricator/scripts/kanbasu.js'
			],
			kanbasu: './src/assets/scripts/kanbasu.js'
		},
		styles: {
			fabricator: 'src/assets/fabricator/styles/fabricator.scss',
			kanbasu: 'src/assets/scss/kanbasu.scss'
		},
		images: 'src/assets/fabricator/images/**/*',
		views: 'src/kanbasu/views/*.html'
	},
	dest: 'dist',
	browsers: 'last 2 versions, ie 9'
};


// webpack
var webpackConfig = require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function (cb) {
	del([config.dest], cb);
});


// styles
gulp.task('styles:fabricator', function () {
	return gulp.src(config.src.styles.fabricator)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix(config.browsers))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:kanbasu', function () {
	return gulp.src(config.src.styles.kanbasu)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix(config.browsers))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(gulp.dest(config.dest + '/assets/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles', ['styles:fabricator', 'styles:kanbasu']);


// scripts
gulp.task('scripts', function (done) {
	webpackCompiler.run(function (error, result) {
		if (error) {
			gutil.log(gutil.colors.red(error));
		}
		result = result.toJson();
		if (result.errors.length) {
			result.errors.forEach(function (error) {
				gutil.log(gutil.colors.red(error));
			});
		}
		done();
	});
});


// images
gulp.task('images', ['favicon'], function () {
	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest + '/assets/fabricator/images'));
});

gulp.task('favicon', function () {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.dest));
});


// Copy various files
gulp.task('copy', function () {
	return gulp.src([
			'CNAME'
		])
		.pipe(gulp.dest(config.dest));
});


// assemble
gulp.task('assemble', function (done) {
	assemble({
		logErrors: config.dev,
		helpers: {
			currentVersion: function() {
				return metadata.version;
			},
			markdown: function(value) {
				return markdown.render(value);
			}
		},
	});
	done();
});


// server
gulp.task('serve', function () {

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'FABRICATOR',
		open: false
	});

	/**
	 * Because webpackCompiler.watch() isn't being used
	 * manually remove the changed file path from the cache
	 */
	function webpackCache(e) {
		var keys = Object.keys(webpackConfig.cache);
		var key, matchedKey;
		for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
			key = keys[keyIndex];
			if (key.indexOf(e.path) !== -1) {
				matchedKey = key;
				break;
			}
		}
		if (matchedKey) {
			delete webpackConfig.cache[matchedKey];
		}
	}

	gulp.task('assemble:watch', ['assemble'], reload);
	gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

	gulp.task('styles:fabricator:watch', ['styles:fabricator'], reload);
	gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:kanbasu:watch', ['styles:kanbasu'], reload);
	gulp.watch('src/assets/scss/**/*.scss', ['styles:kanbasu:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch(['src/assets/fabricator/scripts/**/*.js', 'src/assets/scripts/**/*.js'], ['scripts:watch']).on('change', webpackCache);

	gulp.task('images:watch', ['images'], reload);
	gulp.watch(config.src.images, ['images:watch']);

});


// deploy to GitHub pages
gulp.task('deploy', function() {
	return gulp.src(config.dest + '/**/*').pipe(ghPages());
});


// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'styles',
		'scripts',
		'images',
		'assemble',
		'copy'
	];

	// run build
	runSequence(tasks, function () {
		if (config.dev) {
			gulp.start('serve');
		}
	});

});
