[![npm version](https://badge.fury.io/js/kanbasu.svg)](https://badge.fury.io/js/kanbasu)
[![Build Status](https://travis-ci.org/liip/kanbasu.svg)](https://travis-ci.org/liip/kanbasu)

### Kanbasu 2 is on its way, try it now! [See changes](https://github.com/liip/kanbasu/blob/2.0.0/CHANGELOG.md#200), [read the doc](http://kanbasu.liip.ch/2/), [browse the code](https://github.com/liip/kanbasu/tree/2.0.0), [report bugs](https://github.com/liip/kanbasu/issues).

---

# カンバス Kanbasu

Kanbasu is a CSS framework with very basic styling. It can be used as a base for any web project or for prototyping. It will provide you all the basics and common patterns used to display content on the web today.

Read more and browse the documentation on [kanbasu.liip.ch](http://kanbasu.liip.ch/).

## How to use

### Install

**With NPM** (recommended)

	$ npm install --save-dev kanbasu

**As a Git submodule**

	$ git submodule add git@github.com:liip/kanbasu.git

Or simply [download the zip](https://github.com/liip/kanbasu/archive/master.zip).

### Setup

Easily scaffold a new project by running the script below in your project directory to:

1. duplicate `kanbasu.scss` (renamed `main.scss`) and `settings/_settings.scss` to the specified destination
2. adapt paths inside `main.scss` to match the Node module location
3. remove Sass `!default` flags from `settings/_settings.scss`
4. import `settings/_settings.scss` into `main.scss`

```
node node_modules/kanbasu/scaffold.js path/to/your/project/sass/directory
```
Note: the script might be in a different location if you didn’t use NPM to install Kanbasu.

### Disclaimer

Kanbasu does not include vendor-prefixed properties. You should consider using a tool like [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure the properties used match the desired browser support.
