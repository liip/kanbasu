'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const pkg = require(path.join(__dirname, 'package.json'));

fractal.set('project.title', 'Kanbasu');
fractal.set('project.version', pkg.version);

fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.html');
fractal.components.set('label', 'Patterns');

fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('server.sync', true);
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));

fractal.components.set('statuses', {
  prototype: {
    label: "Prototype",
    description: "Do not implement.",
    color: "#F67280"
  },
  wip: {
    label: "WIP",
    description: "Work in progress. Implement with caution.",
    color: "#FFB270"
  },
  ready: {
    label: "Ready",
    description: "Ready to implement.",
    color: "#2AAF74"
  }
})

const kanbasuTheme = require('mandelbrot-kanbasu');
fractal.web.theme(kanbasuTheme);

/**
 * Prevent Bluebird warnings like "a promise was created in a handler but was not returned from it"
 * caused by Nunjucks from polluting the console
 */
const bluebird = require('bluebird');
bluebird.config({
  warnings: false
});
