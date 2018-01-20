[![npm version](https://badge.fury.io/js/kanbasu.svg)](https://badge.fury.io/js/kanbasu)
[![Build Status](https://travis-ci.org/liip/kanbasu.svg)](https://travis-ci.org/liip/kanbasu)

![カンバス Kanbasu](http://kanbasu.liip.ch/2/logo.svg)

Kanbasu is a toolbox to create responsive web interfaces quickly. It’s focused on the layout and voluntarily avoid defining much “styling” properties which can be completely different from project to project.

Written is Sass, it’s highly customizable, every component being optional and customizable with variables.

CSS features used are working in all current major browsers. The oldest Internet Explorer version supported is 11. However, the framework does not include vendor-prefixed properties! When building it, we recommend you to use Autoprefixer to ensure a complete compatibility.

Read more and browse the documentation on [kanbasu.liip.ch](http://kanbasu.liip.ch/).

## Install

**With NPM** (recommended)

```bash
npm install --save-dev kanbasu@next
```

**As a Git submodule**

```bash
git submodule add git@github.com:liip/kanbasu.git
```

**Manually**

[Download the latest release archive](https://github.com/liip/kanbasu/archive/master.tar.gz)

## Setup

Easily scaffold a new project by running the script below in your project directory to:

1. duplicate `kanbasu.scss` (renamed `main.scss`) and `settings/_settings.scss` to the specified destination
2. adapt paths inside `main.scss` to match the Node module location
3. remove Sass `!default` flags from `settings/_settings.scss`
4. import `settings/_settings.scss` into `main.scss`

```bash
node node_modules/kanbasu/scripts/scaffold.js path/to/your/project/sass/directory
```
Note: the script might be in a different location if you didn’t use NPM to install Kanbasu.

### Disclaimer

Kanbasu does not include vendor-prefixed properties. You should consider using a tool like [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure the properties used match the desired browser support.

## What’s next?

Have a look at the [documentation →](http://kanbasu.liip.ch/)
