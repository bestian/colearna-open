if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const b=e=>a(e,f),r={module:{uri:f},exports:d,require:b};s[f]=Promise.all(c.map((e=>r[e]||b(e)))).then((e=>(i(...e),d)))}}define(["./workbox-8f0eebf3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"colearna-open"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about_green_mountain.0229e424.png",revision:"f0b725f18df51525605bbf755e4722a0"},{url:"assets/about_idea.215c89a5.png",revision:"3a5282048e62fef6196f673a9d2c30f6"},{url:"assets/about_red_mountain.c3217b49.png",revision:"f9253c50d7aa89254ebfb8a4213a8d5c"},{url:"assets/about_system_img.b421d208.js",revision:"275ce0d4d29b063439f89db4710b1602"},{url:"assets/about_system_img.f7c2ae55.png",revision:"cceda76ebe2161431f203d1adb7225de"},{url:"assets/about_system_title.56c79e3d.png",revision:"e4081b0a337857b7694d0ae19544e197"},{url:"assets/about_target_title.24773b25.png",revision:"61215662df635f47abb9fc45a5cd540c"},{url:"assets/about_title.4c5b4d91.png",revision:"891455966b875313271d99c7f465275f"},{url:"assets/about_yellow_mountain.be07c9e3.png",revision:"e1fb1d8b6f9411fb9d274ad7a1df8df4"},{url:"assets/AboutPage.3b8cb0d6.js",revision:"74ef183eb90e653c21c6391392c30605"},{url:"assets/AboutPage.c29504c5.css",revision:"e963d1df9ff9715502e6f7c637b027ba"},{url:"assets/AdminPage.4ff06e50.css",revision:"073bfbe9573d3611c354afb922ad54f0"},{url:"assets/AdminPage.d4b30567.js",revision:"d5c91772586f9326a69cf4ef3441e58a"},{url:"assets/ArticlesPage.a7fc83c4.js",revision:"e512ed1b208b86c0c49f1fbeb47977fd"},{url:"assets/AssesmentPage.13e32520.css",revision:"a128a1ad6d3fef06f0226d06f8eced37"},{url:"assets/AssesmentPage.59555ad5.js",revision:"2b6152ce0beced50d4c43821529accc8"},{url:"assets/axios.30dc70c2.js",revision:"3a17f02f58799999e0fd0a93c0efcc3e"},{url:"assets/book_and_magnifier.bb51fd86.png",revision:"edd55e6aba92ba596f59d93ba94746d5"},{url:"assets/CalPage.a5fe7815.js",revision:"94545bb741181912afb658d2084a3caf"},{url:"assets/CalPage.f7ce084e.css",revision:"1fcf44fa8af60b8bca06429694cb6f9c"},{url:"assets/CartPage.b3dc2ac0.js",revision:"f22c0cb3428e2ecefe53cfd00eec23a5"},{url:"assets/CartPage.d8bb7ad1.css",revision:"3bd11637355eb5d8d3d43fed59d06437"},{url:"assets/chris.c98ef983.png",revision:"3cbf3619927e2375d5cfcb224dae643d"},{url:"assets/ClassesPage.4bf348a5.css",revision:"5fa37f44236c03b6adca666363cd5a78"},{url:"assets/ClassesPage.f53547e6.js",revision:"583fcf3681c9b91f491fdc206b504b35"},{url:"assets/ClassInfoPage.35aeb5db.js",revision:"03096e7757f900999628667c3fdecab6"},{url:"assets/ClassInfoPage.c0265ad2.css",revision:"f380de0d1763ca5535a76545ba1f42fe"},{url:"assets/ContactPage.e6e034d0.js",revision:"029b06ef20620f16103ec8695be49768"},{url:"assets/economic_growth.e7206d12.png",revision:"5f7f19afd5d3d5e8d3c9c17c18546e9d"},{url:"assets/ErrorNotFound.f5ec76c7.js",revision:"05f95f6427b8a0980e1e4f0d5e90409a"},{url:"assets/FAQPage.3f26e535.js",revision:"8408658c124e55307d920e8bf4e5dbb9"},{url:"assets/FAQPage.6612e6e4.css",revision:"22f25c28d8498a6249ab0e3d21b960a4"},{url:"assets/FavPage.752522d7.css",revision:"40db3d8b4225dd4facca2634737b324a"},{url:"assets/FavPage.83c330cd.js",revision:"5ce783bd393cefb74e9d6dd3297c4ae4"},{url:"assets/firebase.ce05dac2.js",revision:"e3567d67fdd568767e78335425c1ac34"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.3e32b8d9.js",revision:"2954b7b5a48a723807f59a26b0869b24"},{url:"assets/globe_teacher.40322d23.png",revision:"793589c2d8ce7483f3531b922a380c59"},{url:"assets/google-analytics.4f7b9fa6.js",revision:"46dc0c0a2f8489d78b6af38f78553990"},{url:"assets/google-icon.ca314be9.png",revision:"e62ff48bddc9c083616d57e90638a039"},{url:"assets/i18n.b76f2471.js",revision:"734f131a88f01afdd3fcd3fdcfb0ebbe"},{url:"assets/index.097f57f7.js",revision:"7dbbd3d7747fd870d13576428efbbf5d"},{url:"assets/index.619f7a66.js",revision:"30f3c20f1690393fe82e75d86395ff5b"},{url:"assets/index.8ec42a17.css",revision:"4f0cb33ec94d4ee1e67bdef615a1318a"},{url:"assets/index.c21c1f33.js",revision:"986eaed7280e601383bdea32337b4b9e"},{url:"assets/index.esm.5c1ec681.js",revision:"50d1d9e216bb1ce9c457b71e3ffac47a"},{url:"assets/index.esm2017.1a148143.js",revision:"e0d6addcd04c3a1b938f467a970b117d"},{url:"assets/IndexPage.98bdc02a.js",revision:"006af87eb1bef70e03161505e4d0bfe5"},{url:"assets/IndexPage.c63e55ef.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/island-1.798df10c.png",revision:"b9380aaab9c57d4dc2c857b03ba38a9f"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/laptop_show_hand.05035f2f.png",revision:"256afa98a7831fc23ad3fd5067972d2d"},{url:"assets/logo-colearna-120-x-42.8b578dbe.svg",revision:"e10ee7e68b3c261b41c206c564315536"},{url:"assets/logo-facebook.914912d7.svg",revision:"4b900546f3f1e3fb3ba72e4ae43adb5e"},{url:"assets/logo-footer-colearna.28679d6e.svg",revision:"b7a9e79b751dd92564f1e9f0cf633142"},{url:"assets/logo-ig.1ad11eff.svg",revision:"709036762ba5c24429b3e151bd257673"},{url:"assets/logo-line.91cdad53.svg",revision:"380e04cbd04db200dc444bf0569acd02"},{url:"assets/logo-mail.f8ebb640.svg",revision:"0291f3d0c4b6adad68053143d928d6e5"},{url:"assets/main001.5a0d3241.png",revision:"bbeceeb99dd4563bf12fcb1f1ecbac31"},{url:"assets/main001.a408614e.js",revision:"dd1812997869b2560837c01f4d081412"},{url:"assets/MainLayout.7f6b89a3.js",revision:"3887b47e1a36a895947c4f0c3abec28f"},{url:"assets/MainLayout.85b263ff.css",revision:"3e97bb882ab53bb22ef0ddb2402a0772"},{url:"assets/MemberOnlyPage.23eef268.js",revision:"bba75fbdaae08c6845a16a4fb679b523"},{url:"assets/MemberOnlyPage.8dd0fbb7.css",revision:"d7b0b14bd958feb63b7eddeb689e10f3"},{url:"assets/NavigationBar.37523808.js",revision:"8607ac3c0a2a152e621d1c125b72b231"},{url:"assets/NavigationBar.7d0cc1d7.css",revision:"2f2bec51a5bc14357f25dee3ff5dabf5"},{url:"assets/NewsPage.70890e6c.js",revision:"2a885fdbd3b2307c57ba9d2dc8177959"},{url:"assets/phone_with_qa.5d0cbfb2.png",revision:"a158279fac190f8ac1fc7b7bd262d7d9"},{url:"assets/PointPage.d9ef9c30.js",revision:"c7d92033f26615c8e7eae7c2ba1bd9ca"},{url:"assets/PointPage.eef14a3e.css",revision:"29423884a29e497dcaa1a5d63a9ff5b6"},{url:"assets/PrivacyPage.10062b6f.js",revision:"860d709bff853c953ae651a6f03211cd"},{url:"assets/PrivacyPage.7e7551ff.css",revision:"ef6f2059cf93d4ee5c5c9f231e807717"},{url:"assets/ProfilePage.4a2d1073.css",revision:"cb1cdecc094e01b5942cca3eff92e2ff"},{url:"assets/ProfilePage.d7e4f2a5.js",revision:"409070d56bc79a15b46fddc2423970c5"},{url:"assets/QBtn.59771501.js",revision:"94cbac3f22fc3380cc0809c78ceb2d33"},{url:"assets/QBtnDropdown.a5acea99.js",revision:"cd8efb2178bc6b2025b0e082aa67b8f0"},{url:"assets/QCard.83a88736.js",revision:"54424742566c8f6356b7bcc844859acf"},{url:"assets/QCardActions.5f3ce50b.js",revision:"5084770f5b3af7b0e25e436c7f906d0a"},{url:"assets/QCardSection.e3c81031.js",revision:"4226d5526f2cf7ef380352b4db14b47d"},{url:"assets/QCarousel.76b48a47.js",revision:"08739b054ff9729994f6766768bb2fb0"},{url:"assets/QCheckbox.0bc0867b.js",revision:"bed6d816a70057ff1ac51f1716440066"},{url:"assets/QChip.dd84ca47.js",revision:"4daf3f11a1e0efe6ed3638e03748ffe7"},{url:"assets/QDate.148e3329.js",revision:"c38665472e254b44b6328cd9b3de07b8"},{url:"assets/QFile.fc648b43.js",revision:"fcc93abdbe89912f1ed226d24d2ed660"},{url:"assets/QForm.17c38f4e.js",revision:"c169f915e98f285c3fb93f5146d3d21c"},{url:"assets/QIcon.e796ac66.js",revision:"2fa9b33b75f125c5b0c85591ba462bd6"},{url:"assets/QImg.cd1498f0.js",revision:"cbd62b9af4044b9565670d91f6954190"},{url:"assets/QInput.c9d9e0f1.js",revision:"515ae5ea93e1020c4dd9ac1bbb4dcf84"},{url:"assets/QItem.0bee584c.js",revision:"4a2ede712b8e349dfc511fc46477a9b9"},{url:"assets/QList.356a9c5f.js",revision:"e4bb035650933cbf843d1c65171ce084"},{url:"assets/QPage.15b384d9.js",revision:"7ea3c5b28ec2b31ee24ab59f63631607"},{url:"assets/QResizeObserver.85b71d73.js",revision:"cda965fe8a8358106207456f04150329"},{url:"assets/QSelect.a11a6b9d.js",revision:"19cd1531270f3349f788f540604f012f"},{url:"assets/QSeparator.78f37bdc.js",revision:"c9de1ed965823d2181982c252a28907d"},{url:"assets/QSpinner.2804683d.js",revision:"a794e136cb61eeb76d7051a8c01394c2"},{url:"assets/QStepper.37ddfb9b.js",revision:"ba0572d6babeb0d50c659db4b3c08d9e"},{url:"assets/QTable.74ea1183.js",revision:"4241f2611ff12f16e1ac2a82f06969bd"},{url:"assets/quality_education.33eca7e2.png",revision:"48e8e9895e5276a17a106745c9a1788a"},{url:"assets/render.b725ce54.js",revision:"ee99385ca38cac36a2524a6917bea09a"},{url:"assets/Ripple.1fbc5a01.js",revision:"faecd6e26777f7f85450d9d3222964a4"},{url:"assets/SampleArticlePage.06efcdd0.css",revision:"4c43d3a4059db553a1f2e4ef289ee1f8"},{url:"assets/SampleArticlePage.821f0a7e.js",revision:"0eff8a55d61d742f28c522a9b33abb28"},{url:"assets/SandBox.82f35dc0.css",revision:"989738f8df2ea9cdc1d618e9643c4a06"},{url:"assets/SandBox.d6478f5e.js",revision:"6fb7bcaafdc65c68e973ce9a4b658d96"},{url:"assets/selection.7492b4cf.js",revision:"0c324ee3c42bfdb8cfdd331becc10600"},{url:"assets/SMpost23-10.7b6e09de.png",revision:"ababd01d4c74b9a575e3ba1f6bcbcfb4"},{url:"assets/TeacherBoardPage.2e27f591.css",revision:"cf993edbc8015925cd0426115d876b2a"},{url:"assets/TeacherBoardPage.eb22852e.js",revision:"e1f02227b4c1c1ce679f8abd4b57e6bc"},{url:"assets/TeacherInfoPage.1ecd651b.css",revision:"39ed6421e99d3bba9eaa76dbfbb5e3eb"},{url:"assets/TeacherInfoPage.52ab0fcf.js",revision:"9a18a7fbfebc3485282f6a1b8714dca6"},{url:"assets/TeacherPage.59273062.css",revision:"9eabd9b012a94a4b4df7a05ef0050228"},{url:"assets/TeacherPage.df5376ba.js",revision:"99594b7b69d555637a4487c2a5a95f5f"},{url:"assets/TeacherUserInfoPage.34d51ba2.js",revision:"15cb70081d579d9c5a2e1fd5052cd9ee"},{url:"assets/TeacherUserInfoPage.89b4845e.css",revision:"b7f59993861b6c5183048216821e001e"},{url:"assets/TermPage.3422f127.js",revision:"83fe4ddc9bc03f41db4d99a947256a00"},{url:"assets/TermPage.e372d775.css",revision:"3078d2d2d126eadd942e844a73f2f132"},{url:"assets/touch.3df10340.js",revision:"88ce3843cbd234458fc111496fd90393"},{url:"assets/TouchPan.f7bf0ac9.js",revision:"8bbc5d9a1eb896193d561699fdc90b08"},{url:"assets/use-cache.b0833c75.js",revision:"d45f61c33f10a0a891dd5ee39a64ecaf"},{url:"assets/use-dark.22fc53d1.js",revision:"d06a80d02ed31d1b553c96c087c1a7c7"},{url:"assets/use-fullscreen.c8a9b8b5.js",revision:"8e686797619ad1eef180c6a3a863a880"},{url:"assets/use-key-composition.61626304.js",revision:"94038e67c2a2f0213ed923c82761d8a6"},{url:"assets/use-meta.8c3cb670.js",revision:"58180b40c14213454325319fb9e29efb"},{url:"assets/use-panel.007b65e3.js",revision:"bfe175aff9cef4c3ce3a97c04d68b0d1"},{url:"assets/use-prevent-scroll.c7c6ced3.js",revision:"df539f0fdb072b3c32b46f27fc5211fd"},{url:"assets/use-router-link.a1acbd8d.js",revision:"99e792fab48a462d2eeb3fb52417f49c"},{url:"assets/vm.78afe1d7.js",revision:"e5e0efa9330dd2ade0e8e484aa587e3c"},{url:"assets/vue-gtag.26e30a6f.js",revision:"ffc146f86ca77e709ed4e48d99c4ba8d"},{url:"assets/Zoom_In_Art_Page.400ebe2c.css",revision:"d7f4e972135c7015973ecaf6c330561b"},{url:"assets/Zoom_In_Art_Page.9d0c38eb.js",revision:"6bd7cdded4fc266e303b274bd66b41d1"},{url:"favicon.ico",revision:"6051ea02b0f3471f837ecdcfbc37ffd7"},{url:"icons/apple-icon-120x120.png",revision:"9da35db92844022320ecb76211c89b79"},{url:"icons/apple-icon-152x152.png",revision:"4d0d5b15c507c1e4176d5161aab8b4c4"},{url:"icons/apple-icon-167x167.png",revision:"dc79c0179480449e1412a7170c36ea0d"},{url:"icons/apple-icon-180x180.png",revision:"675a33fd21fc6c336aaa9e1f23aa6e7d"},{url:"icons/apple-launch-1125x2436.png",revision:"9545e70806b3835933b1dfd4b478f700"},{url:"icons/apple-launch-1170x2532.png",revision:"22dcdaef3b0f0166827f2668197ae099"},{url:"icons/apple-launch-1242x2208.png",revision:"8f289082a774d8a5e4f044db8a45b2b0"},{url:"icons/apple-launch-1242x2688.png",revision:"8690965f6694ac9f4c6b665ceb4a658b"},{url:"icons/apple-launch-1284x2778.png",revision:"ab47f4b4f0b6599d0488a9d8812df316"},{url:"icons/apple-launch-1536x2048.png",revision:"d096035cd370ccfd301284a1f998c35e"},{url:"icons/apple-launch-1620x2160.png",revision:"567160984ef7d97768c178bf43dbc5b4"},{url:"icons/apple-launch-1668x2224.png",revision:"33e29f4b99d65c3da1893d5c36dc8cc3"},{url:"icons/apple-launch-1668x2388.png",revision:"7dbe5cdaba85f9ce6b8b65e32a31556e"},{url:"icons/apple-launch-2048x2732.png",revision:"d9b2390194506f7ac03e8806af30046c"},{url:"icons/apple-launch-750x1334.png",revision:"36da14db6893849612a89b87e33b9c71"},{url:"icons/apple-launch-828x1792.png",revision:"05402eeb4a5dc778a5fb42fa5f86d9d1"},{url:"icons/favicon-128x128.png",revision:"2476515858e89607a63071f79220c252"},{url:"icons/favicon-16x16.png",revision:"b8dd0b3623a98a8cbc9ebd98225fda81"},{url:"icons/favicon-32x32.png",revision:"215e14021af1812cf187fc6dbf2ac208"},{url:"icons/favicon-96x96.png",revision:"9617d5731ba49a8f725fb4e0aa944d44"},{url:"icons/icon-128x128.png",revision:"2476515858e89607a63071f79220c252"},{url:"icons/icon-192x192.png",revision:"7dbe60a633d09456f0cd795f1d1c9689"},{url:"icons/icon-256x256.png",revision:"3387d0fbe90088bde3b23c0d6f7797ea"},{url:"icons/icon-384x384.png",revision:"efb4681842d5cf526abbaecf936829e7"},{url:"icons/icon-512x512.png",revision:"bdc7e92c6105bee6269385436565c3a1"},{url:"icons/ms-icon-144x144.png",revision:"38d7d1839d0d015edbdef1ee87355099"},{url:"icons/safari-pinned-tab.svg",revision:"7d28a1629876fd652bfa53acfd936119"},{url:"img/about_decade_bk.png",revision:"49d231918e147e4328163e0767818c78"},{url:"img/banner_home_class_desktop_background.jpg",revision:"8f314be7ad111738d350ce166055f246"},{url:"img/banner-home-parents-desktop.png",revision:"4245c05011b3bdd1202d23933fedf3df"},{url:"img/banner-home-parents-text.svg",revision:"4acbceb4a13af3392a13426f966e702f"},{url:"img/logo-colearna-120-x-42.svg",revision:"e10ee7e68b3c261b41c206c564315536"},{url:"img/logo.png",revision:"0535bbf8fc31c495fecbf57e27b40b79"},{url:"img/quasar-logo-vertical.svg",revision:"ef0c03f0d188f763626d94f6d2318d5d"},{url:"index.html",revision:"c04fca9a64f98e63bbc2831c3e076ea6"},{url:"manifest.json",revision:"8635ae41edc3dd2fe1d16258214064c7"},{url:"robots.txt",revision:"75b2ba192e52e5d6e3a963a654f5429c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
