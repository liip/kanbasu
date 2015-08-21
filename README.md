# カンバス Kanbasu

Kanbasu is a CSS framework with very basic styling. It can be used as a base for any web project or for prototyping. It will provides you all the basics and common patterns used to display content on the web today.

Read more and browse the documentation on [kanbasu.liip.ch](http://kanbasu.liip.ch/).

## How to use

### Install

**With NPM**

	$ npm install --save-dev kanbasu

**As a Git submodule**

	$ git submodule add git@github.com:liip/kanbasu.git

Or simply [download the zip](https://github.com/liip/kanbasu/archive/master.zip).

### Setup

It’s recommended to copy the framework main file to your project to customize it as you wish. You’ll have to change all "import" paths to match the framwork location then.

	$ cp node_modules/kanbasu/src/assets/scss/kanbasu.scss destination/kanbasu.scss

It’s also recommended to duplicated the settings file to have a quick access to all the variables and adapt them to your needs.

	$ cp node_modules/kanbasu/src/assets/scss/settings/_settings.scss destination/settings/_kanbasu.scss

You should then import it in your main Sass file, **before** other Kanbasu files, to overrides the framework default settings. Learn more about [Sass default variables](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_).

**Notice:** Kanbasu does not include vendor-prefixed properties. If you build it by yourself, we recommend you to use [Autoprefixer](https://github.com/postcss/autoprefixer).
