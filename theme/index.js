'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const subTheme = mandelbrot({
  styles: ['/subtheme/css/style.css'],
  format: 'yaml',
  nav: ['docs', 'components'],
  panels: ['html', 'notes', 'resources', 'info'],
  favicon: '/subtheme/favicon.ico'
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + '/dist', '/subtheme');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = subTheme;
