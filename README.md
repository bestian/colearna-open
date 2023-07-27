# Colearna-open (colearna-open)

共學島轉型發展非營利媒合及學習支持平台

## 注意

如要 fork 本專案，請改掉所有後端連結接口處。

# Colearna ReadMap

![示意圖](https://docs.google.com/drawings/d/e/2PACX-1vQGAOxqqkWWEAs7Y0Fmmawt7TxWBEiN7_eT3KGyrf0uZ97EtmUqNlbewzuXAH-_YOXCxzZZ7ZqAJJ8m/pub?w=960&h=720)

## UI/UX Designer Note

Please:

1. sign up a Github account [Here](https://github.com/)
2. Use pencil to sketch and post photo, and graphics into Issues
3. learn a few basic [HTML](https://www.w3schools.com/html/), [Pug](https://pugjs.org/api/getting-started.html), [CSS](https://www.w3schools.com/Css/) and [SCSS](https://sass-lang.com/documentation/syntax) languagues
4. improve the project by editing `.scss` files in `/src/css/` folder
5. for single page style change, go to files in `/src/pages/` folder
6. test the UI by running

```bash
quasar dev
```

6. commit changes using Github Desktop

Note:

1. the detail is render with data-binding, so don't use do duplicate work on details and different conents within same page.

## Frontend Functional Notes

3. Feature requests and bug reports, please post on [issues](https://github.com/bestian/colearna/issues)
4. When you want to release a version instead of looking it on localhost or preview mode, please make a pull request from "main" branch to "release" branch

# Before you start Hacking or Double Hacking, please do the following:

## Install the requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Quasar CLI](https://quasar.dev/start/quasar-cli)
- [Github Desktop](https://desktop.github.com/)
- [Sublime Text](https://www.sublimetext.com/download)
  -- [Package Control](https://packagecontrol.io/installation)
  -- [Vue Syntax Highlight](https://packagecontrol.io/packages/Vue%20Syntax%20Highlight)
  -- [SCSS](https://packagecontrol.io/packages/SCSS)
  -- [TypeScript](https://packagecontrol.io/packages/TypeScript)
  -- [Pug](https://packagecontrol.io/packages/Pug)

## Install the dependencies

````bash
yarn install

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
````

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

```bash
quasar build -m pwa
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
