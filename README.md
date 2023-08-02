# 共學島轉型發展開源非營利媒合及學習支持平台 (Colearna-open)
<img src="https://github.com/bestian/colearna-open/assets/109048/7cf3cb7e-d9e9-4efd-9ec5-f193ea9e9878=100x)" width="200" height="150" />


# 如何分享有餘？

## 對工程師或設計師來說，我可以：
  1. 協助前端程式碼的改良
  2. 協助UI/UX的改良(語言: scss)
  3. 協助零組件的開發(框架及語言: Vue3 x Quasar x typescript)
  4. 協助教學相關元語言剖析器的開發(語言: javascript, node.js)


## 對工程師或設計師來說，我可以：


## 對自學家長或老師來說，我可以：

 1. 當先期使用者，測試本平台的部分功提供建議。 錯誤回報及功能建議請見[議題區](https://github.com/bestian/colearna-open/issues)
 2. 在建立好的平台上，分享我的教學方法和對孩子(或成人)如何學會一樣東西的建議路程和小階梯。這些分享可以附上超連結，連到我自己的YouTube或者是部落格等等邊別處。
 3. 雖然的平台上不能上架販售課程，但是並不反對您以超連結的方式，推廣自己的線上課程。
 4. 但我也需注意：
   1. 分享的學習方法會是CC公開的，可以自行選擇公開的授權方式，但不能嚴於[CC-BY-SA](https://creativecommons.org/licenses/by-sa/3.0/tw/)
   2. 分享的學習方法會是被審核的。平台將連結有經驗與自學相關專業之非營利組織(暫定:社團法人自主學習促進會) 組成審議管理小組。
   3. 如果我分享的學習方法有爭議，平台有權附理由將之將下架，或不接受其上架。

# 如何拿取所需？

## 對工程師來說，我可以：
 拿取任何放在/src/components/ 路徑底下的零組件
 到自己的專案去使用，不需經過額外授權
 因為這是開放源碼的專案


## 對自學家長或老師來說，我可以：

## Fork請注意!!!
如要 fork 本專案，請改掉所有後端連結接口處。



# 如何參與貢獻？ How to Contribute



## 翻譯 Transator


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

