### With npm

```bash
npm install --save-dev kanbasu
```

### With Yarn

```bash
yarn add --dev kanbasu
```

### As a Git submodule

```bash
git submodule add git@github.com:liip/kanbasu.git
```

### Manually

[Download the latest release archive](https://github.com/liip/kanbasu/archive/master.tar.gz)

## Setup

Easily scaffold a new project by running the script below in your project directory to:

1. duplicate `kanbasu.scss` (renamed `main.scss`) and `settings/_settings.scss` to the specified destination
2. adapt paths inside `main.scss` to match the Node module location
3. remove Sass `!default` flags from `settings/_settings.scss`
4. import `settings/_settings.scss` into `main.scss`

With npx:

```bash
npx kanbasu path/to/your/sass/directory
```

With yarn:

```bash
yarn run kanbasu path/to/your/sass/directory
```

With Node only:

```bash
node node_modules/kanbasu/scripts/scaffold.js path/to/your/sass/directory
```

Note: the script might be in a different location if you didn’t use npm to install Kanbasu.
