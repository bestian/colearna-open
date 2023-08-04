# 共學島轉型發展開源非營利媒合及學習支持平台 (Colearna-open)

## 開發環境
 * 前端：[Quasar](https://quasar.dev/) x Vue3 x typescript
 * UI [Quasar](https://quasar.dev/) x scss   ( Wireframe:  紙筆Pencil x Zeplin  )
 * 後端API：cloudflare worker x node.js

### 開發模式
* 敏捷式 

## 這個將會是什麼？

1. 是個媒合平台。
2. 是個以學習方法為分享內容的社交平台
3. 是個非盈利平台。
4. 是個有學者專家把關的平台。
5. 其他功能視參與專案者的時間心力逐步實做。

## 這個將不是什麼？

1. 這不是另一個線上課程平台。
2. 這不是另一個線上自學平台。
3. 這不是另一個收費的盈利平台。
4. 這不是另一個充滿業配廣告的平台。

## 這個專案想做什麼？

研究(Research) / 與開發(Development)並行
創建一個在地化且國際化的學習媒合、學習方法交流平台。
並在過程中研究出可以在其他專案使用的元語言和顯示元件，以開源的形式釋出。

## 具體而言

1. 這個專案希望催生其他研究型開源子專案，例如：[教育元語言剖析專案](https://github.com/bestian/edu-lang)
2. 並以零件化的方式建構出一個示例前端平台，任何人都可以拿其中的零件去重組使用。
3. 這個示例前端平台，具有媒合家庭與家庭、媒合家庭與老師、教育資源分享及篩選、特殊學生之協助、學習風格自我探索等多重功能，將逐步實作出來。

### 註：平台的後端部分並不開源。

## 依聯合國永續目標

4. **優質教育**：確保包容性和公平的優質教育，並促進終身學習的機會。
5. **良好的工作和經濟增長**：促進持久、包容性和永續的經濟增長，並提供全面的工作。
6. **工業、創新和基礎設施**：建立抗韌性的基礎設施，促進包容性和永續的工業化，並加強創新。

# 如何分享有餘？

## 對工程師或設計師來說，我可以：

1. 協助前端程式碼的改良
2. 協助 UI/UX 的改良(語言: scss)
3. 協助零組件的開發(框架及語言: Vue3 x Quasar x typescript)
4. 協助教學相關元語言剖析器的開發(語言: javascript, node.js)

## 對自學家長或老師來說，我可以：

1.  當先期使用者，測試本平台的部分功提供建議。 錯誤回報及功能建議請見[議題區](https://github.com/bestian/colearna-open/issues)
2.  在建立好的平台上，分享我的教學方法和對孩子(或成人)如何學會一樣東西的建議路程和小階梯。這些分享可以附上超連結，連到我自己的 YouTube 或者是部落格等等邊別處。
3.  雖然的平台上不能上架販售課程，但是並不反對您以超連結的方式，推廣自己的線上課程。
4.  但我也需注意：
5.  分享的學習方法會是 CC 公開的，可以自行選擇公開的授權方式，但不能嚴於[CC-BY-SA](https://creativecommons.org/licenses/by-sa/3.0/tw/)
6.  分享的學習方法會是被審核的。平台將連結有經驗與自學相關專業之非營利組織(暫定:社團法人自主學習促進會) 組成審議管理小組。
7.  如果我分享的學習方法有爭議，平台有權附理由將之將下架，或不接受其上架。

# 如何拿取所需？

## 對工程師來說，我可以：

拿取任何放在/src/components/ 路徑底下的零組件
到自己的專案去使用，不需經過額外授權
因為這是開放源碼的專案

## 對自學家長或老師來說，我可以：

## Fork 請注意!!!

如要 fork 本專案，請改掉所有後端連結接口處。

# 如何參與貢獻？ How to Contribute

0. 請為本專打一個星號(star)，在 Github 介面右上方
1. 請填寫本[需求調查表單](https://forms.gle/2w4p13Vm7d1CoEBj9)
2. more...

## 翻譯 Transator

本專案有安裝國際化套件，您可以參與翻譯內容
src/i18n/資料夾中有翻譯檔雛形。

## 設計師指南 UI/UX Designer Note

請 Please:

1. 先註寫 Github 帳號，下載 Github 電腦版。 sign up a Github account [Here](https://github.com/)。Download Github Desktop [Here](https://desktop.github.com/)

2. 克隆本專案 Clone this repository

3. 用鉛筆打草，貼上[議題區](https://github.com/bestian/colearna-open/issues) Use pencil to sketch and post photo, and graphics into [Issues](https://github.com/bestian/colearna-open/issues)

4. 學習一些基礎的 Markdown, HTML, Pug, Css, SCSS 語言。 learn a few basic[Markdown](https://markdown.tw/), [HTML](https://www.w3schools.com/html/), [Pug](https://pugjs.org/api/getting-started.html), [CSS](https://www.w3schools.com/Css/) and [SCSS](https://sass-lang.com/documentation/syntax) languagues
5. 可以改良.scss 的部份 Improve the project by editing `.scss` files in `/src/css/` folder
6. 單一頁面的版型樣式，在`/src/pages/` for single page style change, go to files in `/src/pages/` folder
7. 單一頁面的版型樣式，在`/src/components/` 或 `/src/components/core` for single component style change, go to files in `/src/pages/` or `/src/components/core` folder
8. 近端測試 test the UI localy by running

```bash
cd Documents\Github\coleanra-open
yarn install
quasar dev
```

6. 將修訂上傳 commit changes using Github Desktop

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
