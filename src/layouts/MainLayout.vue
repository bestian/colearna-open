<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header()
    q-toolbar.light-green-back.navbar.no-overflow
      q-carousel.no-border.mini.no-padding.no-overflow(
        v-model="mar",
        transition-prev="slide-right",
        transition-next="slide-left",
        animated,
        :classNotifications = "countClassNotifications",
        :autoplay="12000",
        :infinite="true",
        :swipeable="true",
        :transition-duration="6000",
        control-color="primary",
        class="")
        q-carousel-slide.mini.no-overflow.no-padding.no-margin(v-for ="(m,k) in marquees" :name="k")
          p.fluid.text-center.no-margin.p-18.p-thin-14.no-overflow.no-padding
            a.text-white(:href="m.href", target="_blank", rel="noopener noreferrer", v-html="m.text")

    q-toolbar.lwww-back.navbar
      q-btn.toggle-left-drawer(
        @click="toggleLeftDrawer"
        color="black"
        aria-label="Menu"
        icon="menu"
        round=""
        dense=""
        flat=""
        )
      router-link(to = "/")
        q-img(
          style="height: 42px; width: 120px;"
          src="/img/logo-colearna-120-x-42.svg"
          )
        span.true-hidden 首頁
      // router-link(to="/") 家長
      router-link.fat-only.relative(to="/admin", v-if="isAdmin") 管理系統
        q-badge(color="red" floating v-show="nn(requests).length > 0") {{nn(requests).length + countClassNotifications() }}
      router-link.fat-only(to="/teacher_board", v-if="isTeacher") 老師後台
      router-link.fat-only(to="/classes") 課程
      router-link.fat-only(to="/teachers") 老師
      router-link.fat-only(to="/news") 最新消息
      // router-link(to="/about") 關於我們
      // router-link(to="/contact") 聯絡我們
      .filler

      q-input.fat-only.search(disable, readonly, title="課程資訊建構中，敬請期待！" class="h-small" v-model="myKey", type="search", rounded="rounded", outlined="outlined", placeholder="資訊建構中，敬請期待！")
        template(v-slot:append)
          q-icon(name="search")
      button#login(
        @click="showLogin = true"
        v-show="!uid"
        )
        | 登入
      q-btn-dropdown.no-border.white(color="white", v-if="uid", :menu-offset="[14, 4]")
        template(v-slot:label)
          q-img.avatar(
            :basic="true"
            :no-transition="true"
            :no-spinner="true"
            :no-default-spinner="true"
            :src="photoURL"
            referrerpolicy="no-referrer"
            alt="photo"
            v-show="photoURL"
            loading="eager"
            )
        q-list
          q-item(to="/profile", class="flex flex-start-center")
            q-icon(name="person" size="lg")
            | 會員資料
          q-item(to="/assesment", class="flex flex-start-center")
            q-icon(name="info" size="lg")
            | 學習評估
          q-item(to="/member_only", class="flex flex-start-center")
            q-icon(name="hotel_class" size="lg")
            | 會員專區
          q-item(to="/cart", class="flex flex-start-center")
            div.inline-flex.relative
              q-badge(floating, color="orange",text-color="black",:label="me && me.cart && me.cart.length", v-show="me && me.cart && me.cart.length > 0")
              q-icon(name="shopping_cart" size="lg")
            | 購物車
          q-item(to="/cal", class="flex flex-start-center")
            q-icon(name="date_range" size="lg")
            | 我的課程
          q-item(to="/my_fav", class="flex flex-start-center")
            q-icon(name="favorite" size="lg")
            | 我的收藏
          q-item(to="/my_point", class="flex flex-start-center")
            q-icon(name="paid" size="lg")
            | 我的點數
          // q-item(class="flex flex-center clickable" clickable @click="testEvent()")
            q-icon(name="send" size="lg")
            | 測試事件
          q-item
            button#logout(
              @click="logout()"
              )
              | 登出
  q-drawer(
    bordered=""
    v-model="leftDrawerOpen"
    )
    q-list.side.menu
      q-item.greenback
        button#login-side(
          @click="showLogin = true"
          v-show="!uid"
          ) 登入
      // q-item(to="/") 家長
      q-item(to="/admin", v-if="isAdmin") 管理員系統
      q-item(to="/teacher_board", v-if="isTeacher") 老師後台
      q-item(to="/classes") 課程
      q-item(to="/teachers") 老師
      q-item(to="/news") 最新消息
      q-item(to="/about") 關於我們
      q-item(to="/faq") 常見問題FAQ
      // q-item(to="/contact") 聯絡我們
  q-page-container
    router-view(
      :dummyImg = "dummyImg",
      :we_have_real_data = "we_have_real_data",
      :colearna_events = "colearna_events",
      :mail = "mail",
      :articles = "articles",
      :trips = "trips",
      :videos = "videos",
      :marquees = "marquees",
      :isTeacher="isTeacher",
      :isAdmin="isAdmin",
      :classes="classes",
      :teachers="teachers",
      :uid="uid",
      :email="email",
      :myName="name",
      :isinapp="isInApp",
      :photoURL="photoURL",
      :user="user",
      :users="users",
      :users_public="users_public",
      :logs="logs",
      :requests="requests",
      :paylogs="paylogs",
      :logged_in="logged_in",
      :me="me",
      :myKey="myKey",
      @mailto="mailto",
      @addPayLog="addPayLog"
      @addStuToClass="addStuToClass"
      @removeR="removeR",
      @logout="logout",
      @logingoole="loginGoogle",
      @forgetPassWord = "forgetPassWord"
      @updateMe = "updateMe",
      @addEvent = "addEvent",
      @addEventToDataBase = "addEventToDataBase"
      @add_to_cart = "add_to_cart",
      @updateUser = "updateUser",
      @get_current_user = "get_current_user"
      )
  .pop-container(v-show = "showLogin")
    login(@loginGoogle = "loginGoogle", @loginFB = "loginFB", @loginEmail = "loginEmail", @registerWithEmail = "registerWithEmail", @stopLogin = "stopLogin", @forgetPassWord = "forgetPassWord")
  .pop-container(v-if = "showWelcome && (($route.path != '/term' && $route.path != '/privacy' && $route.path != '/sandbox'))")
    welcome(v-if = "showWelcome && (($route.path != '/term' && $route.path != '/privacy' && $route.path != '/sandbox'))" @stopWelcome="stopWelcome", @tryLogin="tryLogin")
  footer
    .row.fluid
      .col-3.col-sm-3.col-md-3.col-xs-12
        .row.top
          img.colearna-logo(src="../assets/logo-footer-colearna.svg", alt="Colearna")
          | {{ showWelcome }}
        .row
          .small-space
        .row
          a(href="https://www.facebook.com/Colearna.co/", rel="noopener noreferrer", target="_blank")
            img.icon(src="../assets/logo-facebook.svg", alt="Facebook")
          a(href="https://www.instagram.com/colearna.co/", rel="noopener noreferrer", target="_blank")
            img.icon(src="../assets/logo-ig.svg", alt="IG")
          a(href="https://page.line.me/colearna", rel="noopener noreferrer", target="_blank")
            img.icon(src="../assets/logo-line.svg", alt="Line")
          a(href="mailto: contact@colearna.co", rel="noopener noreferrer")
            img.icon(src="../assets/logo-mail.svg", alt="e-mail")
        .row
          q-list(dense="dense", padding="padding", role="list")
            q-item.bold 共學島Line官方帳戶(@colearna)
            q-item 客戶服務時段：周一至周五
            q-item 10:00 – 12:00
            q-item 13:30 – 18:00
            q-item 19:30 – 22:00
      .filler
      .col-9.col-sm-9.col-md-9.col-xs-12.row
        .col-4.col-md-4.col-sm-4.col-xs-12
          q-list(dense="dense", padding="padding", role="list")
            q-item.bold.f-link 認識我們
            q-item.f-link(to="/about") 關於我們
            q-item.f-link(to="/news") 最新消息
        .col-4.col-md-4.col-sm-4.col-xs-12
          q-list(dense="dense", padding="padding", role="list")
            q-item.bold.f-link  加入我們
            q-item.f-link 成為共學島夥伴
            q-item.f-link 企業合作
        .col-4.col-md-4.col-sm-4.col-xs-12
          q-list(dense="dense", padding="padding", role="list")
            q-item.bold.f-link 幫助
            q-item.f-link(to="/faq") 常見問題FAQ
            q-item.f-link(to="/term") 服務條款
            q-item.f-link(to="/privacy") 隱私條款
    .row
      .small-space
    .row
      q-list(dense="dense", padding="padding", role="list")
        q-item 共學島 Colearna 2023 © All Rights Reserved.

</template>

<script lang="ts">
import { useMeta } from 'quasar';
import meta from '../utils/meta.js';
import { defineComponent, ref } from 'vue';
import Login from '../components/Login.vue';
import Welcome from '../components/Welcome.vue';
//import { setLogLevel } from 'firebase/app';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from 'firebase/auth';
import { getFunctions, httpsCallableFromURL } from 'firebase/functions';
import { collection, addDoc } from 'firebase/firestore';
import {
  useDatabase,
  useDatabaseObject,
  useDatabaseList,
  useFirebaseAuth,
  useCollection,
  useFirestore,
} from 'vuefire';
import { ref as dbRef, set, get, onValue } from 'firebase/database';
import InApp from 'detect-inapp';

const db = useDatabase();
const db2 = useFirestore();
const auth: any = useFirebaseAuth();
const functions = getFunctions();

const provider = new GoogleAuthProvider();
provider.addScope('email');
// provider.addScope('https://www.googleapis.com/auth/calendar.events')
// provider.addScope('https://www.googleapis.com/auth/calendar')

const providerFB = new FacebookAuthProvider();
providerFB.addScope('email');

export default defineComponent({
  name: 'MainLayout',
  components: {
    Welcome,
    Login,
  },
  setup() {
    const mar = ref(0);
    const metaData = {
      title: '歡迎',
      titleTemplate: (title: string) => {
        return `${title} - 共學島`;
      },
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const inapp = new InApp(navigator.userAgent || navigator.vendor);

    const isInApp = ref(inapp.isInApp);
    const logged_in = ref(false);

    const dummyImg = 'https://i.imgur.com/pDiMhm5.png';

    const mail: any = useCollection(collection(db2, 'mail'));
    const logs: any = ref([]);
    const paylogs: any = ref([]);
    const google_events: any = ref([]);
    const trips: any = ref(useDatabaseObject(dbRef(db, 'trips'))) || ref({});
    const videos: any = ref(useDatabaseObject(dbRef(db, 'videos'))) || ref({});
    // const news:any = ref(useDatabaseList(dbRef(db, 'news'))) || ref([])
    const articles: any =
      ref(useDatabaseObject(dbRef(db, 'articles'))) || ref({});

    const colearna_events: any =
      ref(useDatabaseObject(dbRef(db, 'colearna_events'))) || ref({});

    const marquees: any =
      ref(useDatabaseList(dbRef(db, 'marquees'))) || ref([]);
    const teachers: any =
      ref(useDatabaseList(dbRef(db, 'teachers'))) || ref([]);
    const requests: any = ref([]);
    const users: any = ref({});
    const users_public: any =
      ref(useDatabaseObject(dbRef(db, 'users_public'))) || ref({});
    const classes: any =
      ref(useDatabaseObject(dbRef(db, 'classes'))) || ref({});
    const leftDrawerOpen = ref(false);
    const email = ref('');
    const token = ref('');

    const obj4: any = {};
    const credential = ref(obj4);
    const uid = ref('');

    const obj3: any = ref({});
    const me = ref(obj3);
    const isTeacher = ref(false);
    const isAdmin = ref(false);
    const photoURL = ref('');
    const isLogout = ref(true);
    const step = ref(0);
    const user = ref({});
    const myKey = ref('');
    const slide = ref('style');
    const showLogin = ref(false);
    const showWelcome = ref(true);
    const neverShowWelcome = ref(false);
    const name = ref('');

    const we_have_real_data = ref(false);

    return {
      we_have_real_data,
      dummyImg,
      showWelcome,
      neverShowWelcome,
      logs,
      paylogs,
      google_events,
      mail,
      logged_in,
      articles,
      classes,
      colearna_events,
      trips,
      videos, // news,
      isTeacher,
      isAdmin,
      marquees,
      mar,
      leftDrawerOpen,
      step,
      user,
      myKey,
      slide,
      showLogin,
      name,
      email,
      token,
      credential,
      uid,
      photoURL,
      isLogout,
      users,
      users_public,
      me,
      isInApp,
      teachers,
      requests,
      metaTags: {
        description: '共學島',
        title: '歡迎 | 共學島',
        url: 'https://next.colearna.co/',
        image: 'https://next.colearna.co/img/logo.png',
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  meta,
  mounted() {
    //    setLogLevel('silent');

    onValue(dbRef(db, 'google_events'), (snapshot) => {
      var data = snapshot.val();
      if (!this.uid || (!this.isAdmin && !this.isTeacher)) {
        data = (data || []).map((o: any) => {
          return {
            timestamp: o.timestamp,
          };
        });
      } else {
        console.log('get google_events');
      }
      this.logs = data;
    });

    onValue(dbRef(db, 'paylogs'), (snapshot) => {
      var data = snapshot.val();
      if (!this.uid || (!this.isAdmin && !this.isTeacher)) {
        data = (data || []).map((o: any) => {
          return {
            timestamp: o.timestamp,
          };
        });
      } else {
        console.log('get paylogs');
      }
      this.logs = data;
    });

    onValue(dbRef(db, 'logs'), (snapshot) => {
      var data = snapshot.val();
      if (!this.uid || (!this.isAdmin && !this.isTeacher)) {
        data = (data || []).map((o: any) => {
          return {
            time: o.time,
          };
        });
      } else {
        console.log('get logs');
      }
      this.logs = data;
    });

    onValue(dbRef(db, 'requests'), (snapshot) => {
      const data = snapshot.val();
      console.log('get requests');
      this.requests = data;
    });

    let ww = localStorage.getItem('welcome');
    if (ww === 'done') {
      this.showWelcome = false;
      this.neverShowWelcome = true;
    }
  },
  watch: {
    isAdmin(nA) {
      if (nA) {
        onValue(dbRef(db, 'users'), (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            this.users = { ...data };
          } else {
            console.log('No data available');
          }
        });
      }
    },
    isTeacher(nT) {
      if (nT && !this.isAdmin) {
        onValue(dbRef(db, 'users'), (snap) => {
          if (snap.exists()) {
            console.log('get some data from users');
            const us = snap.val();
            var objU = { ...this.users_public };

            const keys = Object.keys(us);
            for (let uk = 0; uk < keys.length; uk++) {
              objU[keys[uk]].childern = us[keys[uk]].childern;
              objU[keys[uk]].notifications = us[keys[uk]].notifications;
              objU[keys[uk]].email = us[keys[uk]].email;
            }
            this.users = { ...objU };
          } else {
            console.log('No data available');
          }
        });
      }
    },
    $route(newR, oldR) {
      if (newR.path !== oldR.path) {
        this.leftDrawerOpen = false;
      }
    },
    users(newU) {
      console.log('update users');
      if (Object.keys(newU).length > 0) {
        this.me = (this.users || this.users_public)[this.uid] || {};
        if ((this.users || this.users_public)[this.uid]) {
          this.photoURL = (this.users || this.users_public)[this.uid].photoURL;
        }
      }
    },
  },
  methods: {
    updateUser(cart: any[], paid: any[]) {
      set(dbRef(db, 'users/' + this.uid + '/cart'), cart);
      set(dbRef(db, 'users/' + this.uid + '/paid'), paid);
    },
    countClassNotifications() {
      // console.log('c')
      const arr: any = Object.values(this.classes) || [];
      var ans = 0;
      for (let j = 0; j < arr.length; j++) {
        const cs = arr[j].classes || [];
        for (let k = 0; k < cs.length; k++) {
          let dd = cs[k].d.replace(/\(.+\)/g, '');
          // console.log(new Date(dd).getTime() - new Date().getTime())
          // console.log(1000 * 60 * 60 * 24 * 2)
          if (
            (arr[j].location == '線上課程' || arr[j].location == '線上') &&
            !arr[j].href &&
            new Date(dd).getTime() - new Date().getTime() <
              1000 * 60 * 60 * 24 * 2 &&
            new Date(dd).getTime() - new Date().getTime() > 0
          ) {
            ans++;
          }
        }
      }
      return ans;
    },
    inCart(list: Array<any>, cart: Array<any>, paid: Array<any>) {
      return (
        list
          .filter(function (o) {
            return (
              cart
                .map(function (c) {
                  return c.cid;
                })
                .indexOf(o.id) > -1
            );
          })
          .map(function (o) {
            const obj = { ...o };
            if (
              paid
                .map(function (c) {
                  return c.cid;
                })
                .indexOf(obj.id) > -1
            ) {
              obj.status = '已付款';
            } else {
              obj.status = '尚末付款';
            }
            return obj;
          }).length > 0
      );
    },
    addPayLog(
      uid: string,
      parent_name: string,
      amount: number,
      cardholder: any,
      item_list: any[],
      timestamp: number
    ) {
      const newIndex = this.paylogs.length;
      set(dbRef(db, 'paylogs/' + newIndex), {
        id: timestamp + '__' + ('' + Math.random()).substring(2, 8),
        uid: uid,
        parent_name: parent_name,
        amount: amount,
        cardholder: cardholder,
        item_list: item_list,
        timestamp: timestamp,
      });

      if (this.me) {
        const pls = { ...(this.me.paylogs || []) };
        const newPIndex = pls.length;
        const log: any = {
          id: timestamp + '__' + ('' + Math.random()).substring(2, 8),
          uid: uid,
          parent_name: parent_name,
          amount: amount,
          cardholder: cardholder,
          item_list: item_list,
          timestamp: timestamp,
        };
        set(dbRef(db, 'paylogs/' + newPIndex), log).then(() => {
          console.log('paylog added to user: ' + parent_name);
        });
      } else {
        console.log('error: no MEobj founded');
      }
    },
    add_to_cart(
      students: any[],
      cid: string,
      datetime: any,
      plans: any[],
      total: number,
      pn: string,
      phone: string
    ) {
      const me: any = this.me;
      const cart: any[] = me.cart || [];
      const paid: any[] = me.paid || [];

      console.log('add_to_cart_s2');
      console.log(cid);
      console.log(students);

      if (!this.inCart([{ id: cid }], cart, paid || [])) {
        cart.push({
          cid: cid,
          students: students,
          datetime: datetime,
          plans: plans,
          total: total,
          parent_name: pn,
          phone: phone,
        });
        set(dbRef(db, 'users/' + this.uid + '/cart'), cart)
          .then(() => {
            console.log('cart added');
            window.alert('已將課程加入購物車');
            setTimeout(() => {
              this.$router.push('/cart');
            }, 100);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.alert('課程原本已存在於購物車，請先移除方能重新選購方案');
      }
    },
    addStuToClass(n: string, cid: string, childern: any[], uid: string) {
      console.log('try add student');
      childern.forEach((c: any) => {
        if (c.name == n) {
          console.log(n);
          var stus = (this.classes[cid].students || []).filter((s: any) => {
            return s.uid != uid && s.name != c.name;
          });
          stus.push({
            name: c.name,
            uid: uid,
            timestamp: new Date().getTime(),
          });

          set(dbRef(db, 'classes/' + cid + '/students'), stus)
            .then(() => {
              console.log('student added');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    removeR(k: number) {
      let arr = [...this.requests];
      arr = arr.filter(function (r, j) {
        return j != k;
      });
      this.requests = [...arr];
    },
    nn(list: any[]) {
      if (!list) {
        list = [];
      }
      return list.filter(function (r) {
        return !r.approved;
      });
    },
    mailto(email: string, subject: string, html: string) {
      console.log('send mail');
      addDoc(collection(db2, 'mail'), {
        to: email,
        bcc: 'inquiry@colearna.co',
        message: {
          subject: subject,
          html: html,
        },
      }).then(() => {
        window.alert('Email 已寄送給: ' + email);
      });
    },
    tryLogin() {
      this.showWelcome = false;
      this.showLogin = true;
    },
    stopLogin() {
      this.showLogin = false;
    },
    stopWelcome(bool: boolean) {
      console.log(bool);
      if (bool) {
        this.neverShowWelcome = true;
        localStorage.setItem('welcome', 'done');
      } else {
        this.neverShowWelcome = false;
        localStorage.setItem('welcome', 'sure');
      }
      this.showWelcome = false;
    },
    get_current_user(u: any) {
      // console.log(u)
      this.users[u.id] = { ...u };
      this.me = { ...u };
      // this.email = u.email;
    },
    updateMe(
      uid: string,
      email: string,
      name: string | null,
      photoURL: string,
      provider: string
    ) {
      console.log('update me');
      this.email = email;
      this.uid = uid;
      this.name = name || '';
      this.photoURL = photoURL;

      get(dbRef(db, 'users/' + this.uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log('get me');
            const m = snapshot.val();
            // console.log(m)
            this.me = { ...m };
            this.me.email = this.email;

            this.isAdmin = this.me.isAdmin;
            if (this.me) {
              this.isTeacher = this.me.isTeacher;
            }

            if (this.isAdmin) {
              get(dbRef(db, 'users'))
                .then((snap: any) => {
                  if (snapshot.exists()) {
                    console.log('get full users');
                    const us = snap.val();
                    this.users = { ...us };
                  } else {
                    console.log('No data available');
                  }
                })
                .catch((err: any) => console.log(err));
            }

            if (!this.isAdmin && this.isTeacher) {
              get(dbRef(db, 'users'))
                .then((snap: any) => {
                  if (snap.exists()) {
                    console.log('get some data from users');
                    const us = snap.val();
                    var objU = { ...this.users_public };

                    const keys = Object.keys(us);
                    for (let uk = 0; uk < keys.length; uk++) {
                      objU[keys[uk]].childern = us[keys[uk]].childern;
                      objU[keys[uk]].notifications = us[keys[uk]].notifications;
                      objU[keys[uk]].email = us[keys[uk]].email;
                    }
                    this.users = { ...objU };
                  } else {
                    console.log('No data available');
                  }
                })
                .catch((err: any) => console.log(err));
            }
          } else {
            console.log('No data available');
          }
        })
        .catch((error: any) => {
          console.error(error);
        });

      // console.log(this.users)
      try {
        set(dbRef(db, 'users/' + uid + '/provider'), provider);
      } catch (err) {
        console.log(err);
      }

      if ((this.users || this.users_public)[this.uid]) {
        this.photoURL =
          ((this.users || {})[this.uid] || this.users_public[this.uid])
            .photoURL || photoURL;
      }
      if (!this.me) {
        this.me = {
          uid: uid,
          name: name,
          points: 0,
          photoURL: photoURL,
          email: email,
          email_for_migration: email.replace(/\./g, '_'),
          provider: provider,
          createTime: new Date().getTime(),
          childern: [],
        };
        set(dbRef(db, 'users/' + uid), {
          id: uid,
          name: name,
          points: 0,
          email: email,
          email_for_migration: email.replace(/\./g, '_'),
          provider: provider,
          isParent: true,
          isTeacher: false,
          isAdmin: false,
          photoURL: photoURL,
          childern: [],
          createTime: new Date().getTime(),
        }).then(() => {
          console.log('user created!');
        });
        set(dbRef(db, 'users_public/' + uid), {
          id: uid,
          name: name,
          isParent: true,
          isTeacher: false,
          isAdmin: false,
          createTime: new Date().getTime(),
        }).then(() => {
          console.log('public user created!');
        });
      } else {
        this.isTeacher =
          (
            (this.users || {})[this.uid] ||
            (this.users_public || {})[this.uid] ||
            {}
          ).isTeacher || false;
        this.isAdmin =
          (
            (this.users || {})[this.uid] ||
            (this.users_public || {})[this.uid] ||
            {}
          ).isAdmin || false;
      }
      this.showLogin = false;

      console.log(this.$route.path);

      if (this.$route.path !== '/profile' && !this.isAdmin) {
        this.$router.push('/profile');
      }
      if (this.isAdmin) {
        this.$router.push('/admin');
      }
    },
    createAccount(uid: string, email: string) {
      if (!this.users[uid]) {
        set(dbRef(db, 'users/' + uid), {
          id: uid,
          email: email,
          email_for_migration: email.replace(/\./g, '_'),
          createTime: new Date().getTime(),
        }).then(() => {
          console.log('user created!');
          let us = Object.values(this.users);
          for (let k = 0; k < us.length; k++) {
            let u = us[k] as any;
            let uid = u.id;
            if (u.isAdmin) {
              let arr: any[] = [];
              let notifications = u.notifications || arr;
              notifications.push({
                time: new Date().getTime(),
                msg:
                  '用戶' +
                  uid +
                  '(' +
                  email +
                  ') 註冊成為了共學島用戶，請至管理員系統查看',
                route: 'admin',
              });
              set(
                dbRef(db, 'users/' + uid + '/notifications'),
                notifications
              ).then(() => {
                console.log('notification sent!');
              });
              this.$emit(
                'mailto',
                u.email,
                'Colearna_新用戶註冊',
                '用戶' +
                  uid +
                  '(' +
                  email +
                  ') 註冊成為了共學島用戶，請至<a href="https://next.colearn.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
              );
            }
          }
        });
        set(dbRef(db, 'users_public/' + uid), {
          id: uid,
          createTime: new Date().getTime(),
        }).then(() => {
          console.log('public user created!');
        });
      }
    },
    registerWithEmail(email: string, password: string) {
      if (email == '' || password == '') {
        window.alert('請輸入效的email和password');
        return;
      }
      if (password.length < 8) {
        window.alert('密碼至少8位');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          this.showLogin = true;
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            console.log('Email Verification sent! Check your mail box');
            this.createAccount(data.user.uid, email);
            alert(
              'Email確認信已寄出，請至收件匣確認。如未收到，請檢查垃圾信件匣'
            );
          });
        })
        .catch((error) => {
          console.log(error.message);
          window.alert('Email已經被註冊，無法重新註冊');
        });
    },
    loginEmail(email: string, password: string) {
      console.log('try login with Email');
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          // console.log(data)
          console.log(data.user);
          if (data.user.emailVerified) {
            this.user = data.user;
            const uid = data.user.uid;
            const name = data.user.displayName || '';
            const email = data.user.email || '';
            const photoURL = 'https://i.imgur.com/ADEVjSv.jpg';
            console.log('logged in');
            this.showLogin = false;
            this.isLogout = false;
            this.logged_in = true;
            this.updateMe(uid, email, name, photoURL, 'email');
          } else {
            if (window.confirm('Email尚末確認。要重寄確認信嗎？')) {
              sendEmailVerification(auth.currentUser).then(() => {
                // Email verification sent!
                console.log('Email Verification sent! Check your mail box');
                alert(
                  'Email確認信已寄出，請至收件匣確認。如未收到，請檢查垃圾信件匣。\n確認後即可重新載入並以密碼登入'
                );
              });
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
          window.alert('電子郵件信箱或密碼不正確');
        });
    },
    forgetPassWord(email: string) {
      if (email == '') {
        window.alert('請輸入效的email');
        return;
      } else {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            window.alert(
              '密碼重設信已寄至: ' + email + '\n若您未收到，請檢查垃圾信箱'
            );
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      }
    },
    loginFB() {
      this.isLogout = false;
      console.log('try login Facebook');
      if (this.isInApp) {
        window.alert(
          '本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝'
        );
      } else {
        signInWithPopup(auth, providerFB)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token =
              (credential || { accessToken: null }).accessToken || '';
            // The signed-in user info.
            console.log(result);
            this.credential = credential || '';
            this.token = token;
            const user = result.user;
            const uid = user.uid;
            const name = user.providerData[0].displayName || '';
            const email = user.providerData[0].email || '';
            const photoURL = decodeURI(user.photoURL || '');
            console.log('logged in');
            this.updateMe(uid, email, name, photoURL, 'facebook');
          })
          .catch((error: { code: string; message: string }) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode);
            console.log(errorMessage);
          });
        // signInWithRedirect(auth, provider)
      }
    },
    async testEvent() {
      console.log('test');
      const event = {
        summary: 'TEST',
        location: '線上',
        description: 'This is a test event',
        start: {
          dateTime: '2023-05-03T13:00-14:00',
          timeZone: 'Asia/Taipei',
        },
        end: {
          dateTime: '2023-05-03T13:00-14:00',
          timeZone: 'Asia/Taipei',
        },
        recurrence: [],
        attendees: [{ email: this.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 60 },
            { method: 'popup', minutes: 10 },
          ],
        },
      };

      const addToCalendar = httpsCallableFromURL(
        functions,
        'https://addtocalendar-2vk5tkdcga-uc.a.run.app/addtocalendar'
      );

      addToCalendar({
        event: event,
      })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addEvent(ev: any) {
      const event = ev;
      const addToCalendar = httpsCallableFromURL(
        functions,
        'https://addtocalendar-2vk5tkdcga-uc.a.run.app/addtocalendar'
      );
      addToCalendar({
        event: event,
      })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addEventToDataBase(ev: any) {
      const arr: any[] = this.me.events || [];
      arr.push(ev);
      set(dbRef(db, '/users/' + this.uid + '/events'), arr).then(() => {
        console.log('event added');
      });
    },
    loginGoogle() {
      console.log('try login google');
      if (this.isInApp) {
        window.alert(
          '本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝'
        );
      } else {
        signInWithPopup(auth, provider)
          .then((result) => {
            this.isLogout = false;
            this.logged_in = true;
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token =
              (credential || { accessToken: null }).accessToken || '';
            this.credential = credential || '';
            this.token = token;
            // The signed-in user info.
            const user = result.user;
            const uid = user.uid;
            const name = user.providerData[0].displayName;
            const email = user.providerData[0].email || '';
            const photoURL = decodeURI(user.photoURL || '');
            console.log('logged in');
            // this.addEvent()
            this.updateMe(uid, email, name, photoURL, 'goole');
          })
          .catch((error: { code: string; message: string }) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode);
            console.log(errorMessage);
          });
        // signInWithRedirect(auth, provider)
      }
    },
    async logout() {
      this.isLogout = true;
      auth
        .signOut()
        .then(() => {
          this.user = {};
          this.uid = '';
          this.photoURL = '';
          this.me = {};
          console.log('user logout');
          this.isLogout = true;
          this.showLogin = true;
          this.$forceUpdate();
        })
        .catch((error: { code: string; message: string }) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode);
          console.log(errorMessage);
        });
    },
  },
});
</script>
