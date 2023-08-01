<template lang="pug">
q-page
  .row.long-padded(v-if="!uid || !me || !isTeacher")
    h2.text-dark-green 您沒有老師權限，請先登入
  .row(v-else)
    .col.col-md-3.col-sm-4.col-xs-12.padded
      q-card.teacher-profile-card.fluid.flex.flex-col.flex-start-center
        img.big.avatar(:src="myPhotoURL")
        q-btn.no-border.no-bg.text-dark-green.text-underline(unelevated, @click="editP = true") 編輯
        h6.text-orange.margin-left
          q-icon(name="check_circle_outline")
          | 已認證
        q-form.flex.flex-center.fluid(v-show="editP")
          q-file.fluid(color="teal", filled, label="上傳大頭貼", accept="image/*", @input="uploadImage($event)", name="photoURL")
            template(v-slot:prepend)
              q-icon(name="cloud_upload")
      q-card.teacher-profile-card
        q-list
          q-item.text-gray.flex.flex-start-center(clickable, v-for="(o, k) in inner_options", :key="k", @click="sel(o)", :class=`{
                'text-bold': action == o.t,
                'text-dark-green': action == o.t,
                'llgg-back': action == o.t,
              }`) {{ o.t }}
          q-separator(style="margin-bottom: 1em")
          q-item.text-gray.flex.flex-start-center(v-for="(o, k) in options", :key="k", :to="o.path", :class=`{
                'text-dark-green': action == o.t,
                'light-green-back': action == o.t,
              }`) {{ o.t }}
          q-separator(style="margin-bottom: 1em")
          q-item.text-gray.flex.flex-start-center(@click="logout") 登出
    .col.col-md-9.col-sm-8.col-xs-12.padded
      q-card.profile-card-2(v-if="action == '教師檔案'")
        h4.text-left.text-dark-green.fluid 教師檔案
        p.text-gray.bold 填入以下資料，系統將會自動老師個人頁面
        .row
          .col-12
            q-form.flex.flex-start-center.fluid.row
              q-input.margin(rounded, outlined, v-model="myName", placeholder="你喜歡學生怎麼稱呼你?", style="width: 100%", @focus=`
                    focusDate = [];
                    focusMyDate = false;
                  `)
            h4.text-left.text-dark-green.fluid 我的簡介
            q-form.flex.flex-start-center.fluid.row
              q-input.margin(rounded, outlined, type="textarea", v-model="newDes", placeholder="關於我的簡介", style="width: 100%")
            h4.text-left.text-dark-green.fluid 教學理念
            q-form.flex.flex-start-center.fluid.row
              q-input.margin(rounded, outlined, type="textarea", v-model="newThought", placeholder="教學理念", style="width: 100%")
            h4.text-left.text-dark-green.fluid 專業證照
            q-input(rounded, outlined, v-model="newCer", placeholder="專業證照(選填)", style="width: 66%; min-width: 320px")
              template(v-slot:prepend)
                q-icon(name="add", color="green")
              template(v-slot:append)
                q-btn(color="secondary", @click="addCer()") 新增
            q-list(bulleted, style="width: 66%; min-width: 320px")
              q-item(v-for="(c, k) in newCertifications || []", :key="k")
                .flex.margin {{ k + 1 }}
                  | ：
                  | {{ c }}
                .filler
                q-btn(size="xs margin", color="red", @click="removeCer(k)")
                  q-icon(name="delete")
        q-form
          q-btn.margin(unelevated, rounded, color="green-6", @click="submit()", size="lg", icon="save") 儲存
          q-btn.margin(unelevated, rounded, color="blue-3", @click="previewProfile()", size="lg", icon="visibility") 預覽
          q-btn.margin(unelevated, rounded, color="orange-12", @click="gotoT(uid)", size="lg", icon-right="navigate_next") 前往我的老師個人頁面
      .teacher-profile-card-3(v-if="action == '收入概覽'")
        h4.text-dark-green 收入概覽
        .row.no-margin.fluid.flex.flex-start-center.llgg-back
          .col-md-6.col-sm-6.col-xs-12.flex.flex-col.flex-center
            h6.text-dark-green 2023年05月收入總額：
          .col-md-6.col-sm-6.col-xs-12.flex.flex-col.flex-center
            h4.text-dark-green 21,000TWD

</template>

<script lang="ts">
import convert from 'image-file-resize';
import { useMeta } from 'quasar';

import {
  QCalendarMonth,
  parseDate,
  today,
} from '@quasar/quasar-ui-qcalendar/src/index.js';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass';
import NavigationBar from '../components/NavigationBar.vue';

// import ExampleComponent from 'components/ExampleComponent.vue'
// import InApp from 'detect-inapp'
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';
import { defineComponent, ref } from 'vue';

const db = useDatabase();

function my_parse_dateTime(dt: string) {
  return dt
    .replace(/\s*\(.+\)\s*/, '')
    .replace(/T/, ' ')
    .replace(/\s+-\s*.+$/, '');
}

function getDay(day: any) {
  const newDay = new Date(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: [
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'teachers',
    'classes',
    'myKey',
    'isAdmin',
    'isTeacher',
    'logs',
  ],
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  setup() {
    const metaData = {
      title: '老師後台',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const saved = ref(false);

    const myMonth = ref('');
    const months = ref(['2023-05', '2023-06', '2023-07', '2023-08']);

    const myPhone = ref('');
    const account_name = ref('');
    const bank_name = ref('');
    const bank_code = ref('');
    const bank_account = ref('');

    const arrC: any[] = [];
    const myAccounts = ref(arrC);

    const myAddr = ref('');
    const myContactAddr = ref('');
    const id_number = ref('');

    const id_card_front = ref('');
    const id_card_back = ref('');

    const sameAddr = ref(false);

    const focusAcc = ref(Infinity);

    const done1 = ref(false);
    const done2 = ref(false);
    const done3 = ref(false);
    const myName = ref('');
    const new_email = ref('');
    const slide = ref('style');
    const step = ref(1);
    const myKey2 = ref('');
    const action = ref('');
    const newDes = ref('');
    const newThought = ref('');

    const inner_options = ref([
      {
        t: '教師檔案',
      },
      {
        t: '新增活動',
      },
      {
        t: '教學管理',
      },
      {
        t: '收入概覽',
      },
      {
        t: '電子勞務',
      },
    ]);

    const options = ref([
      {
        t: '會員資料',
        path: '/profile',
      },
      {
        t: '會員專區',
        path: '/member_only',
      },
      {
        t: '我的活動',
        path: '/cal',
      },
      {
        t: '訂單管理',
        path: '/cart',
      },
      {
        t: '我的點數',
        path: '/my_point',
      },
    ]);

    const arr2: any[] = [];
    const newClasses = ref(arr2);
    const newDate = ref('');
    const newTime = ref('');
    const newEndTime = ref('');

    const myImg = ref('');
    const newCer = ref('');
    const newZh = ref('');
    const newEn = ref('');
    const newTags = ref('');
    const newT_Zh = ref('');
    const newT_En = ref('');
    const newMin = ref(1);
    const newMax = ref(10);
    const newOldPrice = ref('NT$0');
    const newNewPrice = ref('NT$0');
    const newPrice = ref('NT$0');
    const newTitle = ref('');
    const newLocation = ref('');
    const newAddr = ref('');
    const newHref = ref('');
    const newClassImg = ref('');

    const myOption = ref({
      explore: 'all',
      hoverExplore: '',
      age: 'all',
      hoverAge: '',
      place: 'all',
      hoverPlace: '',
      date: 'all',
      hoverDate: '',
      price: 'all',
      hoverPrice: '',
      sorting: 'newest',
      hoverSorting: '',
    });
    const hoverD = ref('');
    const showD = ref('');

    const arr: string[] = [];
    const newCertifications = ref(arr);

    const editP = ref(false);
    const editC = ref('');

    let d = new Date();
    let cid =
      d.getFullYear() +
      '_' +
      (d.getMonth() + 1) +
      '_' +
      d.getDate() +
      '_' +
      ('' + Math.random()).substring(3, 12);

    const newCid = ref(cid);
    const myPhotoURL = ref('');

    const previewP = ref(false);
    const previewC = ref(false);

    const columns = [
      {
        name: 'interval',
        label: '計酬區間',
        field: 'interval',
        align: 'left',
      },
      {
        name: 'predict',
        label: '預覽勞務報酬單',
        field: 'predict',
        align: 'left',
      },
      {
        name: 'confirm',
        label: '確認勞務報酬單',
        field: 'confirm',
        align: 'left',
      },
    ];

    const rows = [
      {
        interval: '線上活動｜Koala U. SEL 情緒無尾熊活動',
        predict: 'NT$12,000',
        confirm: 'NT$12,000',
      },
    ];

    const columns1 = [
      {
        name: 'name',
        label: '活動名稱',
        field: 'name',
        align: 'left',
      },
      {
        name: 'income',
        label: '活動金額',
        field: 'income',
        align: 'left',
      },
      {
        name: 'discount',
        label: '折扣金額',
        field: 'discount',
        align: 'left',
      },
      {
        name: 'details',
        label: '詳細資訊',
        field: 'details',
        align: 'left',
      },
    ];

    const rows1 = [
      {
        name: '線上活動｜Koala U. SEL 情緒無尾熊活動',
        income: 'NT$12,000',
        discount: 'NT$12,000',
        collection: 'NT$12,000',
        details: '線上活動｜Koala U. SEL 情緒無尾熊活動',
      },
    ];

    const selectedDate = ref(today());
    const dateType = ref('square');

    const role = ref('老師');
    const op = ref('活動一覽');
    const filter_act = ref('所有活動');

    return {
      saved,
      role,
      filter_act,
      op,
      selectedDate,
      dateType,
      myOption,
      hoverD,
      showD,
      columns,
      rows,
      columns1,
      rows1,
      myMonth,
      months,
      sameAddr,
      id_card_front,
      id_card_back,
      myAddr,
      myContactAddr,
      id_number,
      myPhone,
      account_name,
      bank_name,
      bank_code,
      bank_account,
      options,
      inner_options,
      action,
      myAccounts,
      focusAcc,
      previewP,
      previewC,
      newClasses,
      newTags,
      newDate,
      newTime,
      newEndTime,
      newZh,
      newEn,
      newT_Zh,
      newT_En,
      newTitle,
      newLocation,
      newAddr,
      newHref,
      newCid,
      newMin,
      newMax,
      newOldPrice,
      newNewPrice,
      newPrice,
      newClassImg,
      newCer,
      editP,
      myPhotoURL,
      editC,
      newDes,
      newThought,
      myImg,
      newCertifications,
      myName,
      new_email,
      step,
      slide,
      myKey2,
      done1,
      done2,
      done3,
    };
  },
  mounted() {
    this.myPhone = this.me.phone || '';
    this.bank_account = this.me.bank_account || '';
    this.bank_code = this.me.bank_code || '';
    this.account_name =
      this.me.account_name ||
      (this.me.accounts || [{}])[0].account_name ||
      this.me.name ||
      '';

    this.id_number = this.me.id_number || '';
    this.id_card_front = this.me.id_card_front || '';
    this.id_card_back = this.me.id_card_back || '';

    this.myAddr = this.me.addr || '';
    this.myContactAddr = this.me.contact_addr || '';
    this.sameAddr = this.me.same_addr || false;

    this.myAccounts = this.me.accounts || [];

    this.myName = this.me.name || '';
    this.newDes = this.me.des || '';
    this.newThought = this.me.thought || '';
    this.myImg = this.me.img || this.me.photoURL || '';
    this.myPhotoURL = this.me.photoURL || '';
    this.newCertifications = this.me.certifications || [];
  },
  watch: {
    newCertifications(nC, oC) {
      if (nC.length != oC.length) {
        this.saved = false;
      }
    },
    newDes(nD, oD) {
      if (nD != oD) {
        this.saved = false;
      }
    },
    newThought(nT, oT) {
      if (nT != oT) {
        this.saved = false;
      }
    },
    myName(nN, oN) {
      if (nN != oN) {
        this.saved = false;
      }
    },
    myAddr(nA) {
      if (this.sameAddr) {
        this.myContactAddr = nA;
      }
    },
    sameAddr(newS) {
      if (newS) {
        this.myContactAddr = this.myAddr;
      }
    },
    me(newM) {
      this.myPhone = newM.phone || '';
      this.bank_account = newM.bank_account || '';
      this.bank_code = newM.bank_code || '';
      this.account_name = newM.account_name || '';

      this.id_number = newM.id_number || '';
      this.id_card_front = newM.id_card_front || '';
      this.id_card_back = newM.id_card_back || '';

      this.myAddr = newM.addr || '';
      this.myContactAddr = newM.contact_addr || '';
      this.sameAddr = newM.same_addr || false;

      this.myAccounts = newM.accounts || [];

      this.myPhone = newM.phone || '';
      this.myName = newM.name || '';
      this.newDes = newM.des || '';
      this.newThought = newM.thought || '';
      this.myImg = newM.img || this.me.photoURL || '';
      this.myPhotoURL = newM.photoURL || '';
      this.newCertifications = newM.certifications || [];
    },
  },
  computed: {
    eventsTeacherMap() {
      const map: any = {};
      var cls = Object.values(this.classes) || [];
      if (cls && cls.length > 0) {
        if (this.filter_act == '由我開的活動') {
          cls = cls.filter((o: any) => {
            return o.tid == this.uid;
          });
        }

        if (this.filter_act == '已結束活動') {
          cls = cls.filter((o: any) => {
            let last = (o.classes || []).at(-1);
            if (!last) {
              return false;
            } else {
              let datetime =
                last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                'T' +
                last.t;

              return (
                new Date(my_parse_dateTime(datetime)).getTime() <
                new Date().getTime()
              );
            }
          });
        }

        if (this.filter_act == '即將開課') {
          cls = cls.filter((o: any) => {
            let last = (o.classes || []).at(-1);
            if (!last) {
              return false;
            } else {
              let datetime =
                last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                'T' +
                last.t;

              return (
                new Date(my_parse_dateTime(datetime)).getTime() -
                  new Date().getTime() >
                  -1000 * 60 * 60 * 24 * 1 &&
                new Date(my_parse_dateTime(datetime)).getTime() -
                  new Date().getTime() <
                  1000 * 60 * 60 * 24 * 30
              );
            }
          });
        }

        cls = cls.map((o: any) => {
          let obj = { ...o };
          obj.date = o.startdate
            .replace(/\//g, '-')
            .replace(/\s*(\(.+\))/g, '')
            .replace(/T.+$/, '');
          //console.log(obj.date)
          obj.dates = (o.classes || []).map((c: any) => {
            let date2 = getDay(
              c.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '')
            );
            return date2;
          });
          //console.log(obj.dates)
          return obj;
        });

        cls.sort((a: any, b: any) => {
          // console.log(a)
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        cls.forEach((ev: any) => {
          ev.dates.forEach((dt: string) => {
            (map[dt] = map[dt] || []).push(ev);
          });
        });
      }
      // console.log(map)
      return map;
    },
  },
  methods: {
    setRole(r: string) {
      this.role = r;
    },
    setFil(f: string) {
      this.filter_act = f;
    },
    setOp(o: string) {
      this.op = o;
    },
    badgeClasses(k: number, type: any, bgcolor: string) {
      // console.log(type)
      const colors = [
        'green',
        'brown',
        'red',
        'blue',
        'purple',
        'orange',
        'yellow',
      ];
      return {
        [`text-white bg-${bgcolor || colors[k]}`]: true,
        'rounded-border': true,
      };
    },
    badgeStyles(day: any) {
      const s: any = {};
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      if (day) {
        s.bottom = 1.2 * parseInt(day) + 0.4 + 'em';
      }
      // console.log(day)
      // console.log(event)
      return s;
    },
    onToday() {
      this.selectedDate = today();
      const cal: any = this.$refs.calendar;
      cal.moveToToday();
    },
    onPrev() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() - 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
      const cal: any = this.$refs.calendar;
      cal.prev();
    },
    onNext() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() + 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
      const cal: any = this.$refs.calendar;
      cal.next();
    },
    onMoved(data: string) {
      console.log('onMoved', data);
    },
    onChange(data: string) {
      console.log('onChange', data);
    },
    onClickDate(data: string) {
      console.log('onClickDate', data);
    },
    onClickDay(data: string) {
      console.log('onClickDay', data);
    },
    onClickWorkweek(data: string) {
      console.log('onClickWorkweek', data);
    },
    onClickHeadDay(data: string) {
      console.log('onClickHeadDay', data);
    },
    onClickHeadWorkweek(data: string) {
      console.log('onClickHeadWorkweek', data);
    },
    goto(rid: string) {
      this.$router.push('/class_info/' + rid);
    },
    gotoT(tid: string) {
      if (
        this.saved ||
        window.confirm('確定要前往嗎？您未儲存的更動將會遺失')
      ) {
        this.$router.push('/teacher_user_info/' + tid);
      }
    },
    sel(o: any) {
      this.action = o.t;
      // this changes the scrolling behavior to "smooth"
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    editAcc(l: number) {
      this.focusAcc = l;
      this.account_name = this.myAccounts[l].account_name;
      this.bank_name = this.myAccounts[l].bank_name;
      this.bank_code = this.myAccounts[l].bank_code;
      this.bank_account = this.myAccounts[l].bank_account;
    },
    cancelAcc() {
      this.focusAcc = Infinity;
      this.myAccounts = this.myAccounts.filter((o) => {
        return o.bank_name !== '新帳戶';
      });
    },
    saveAll() {
      if (!this.account_name) {
        window.alert('請先輸入您的姓名');
        return;
      }
      if (!this.myPhone) {
        window.alert('請先輸入您的手機號碼');
        return;
      }
      if (!this.id_number) {
        window.alert('請先輸入您的身份證字號');
        return;
      }
      if (!this.myAddr) {
        window.alert('請先輸入您的地址');
        return;
      }
      set(dbRef(db, 'users/' + this.uid + '/account_name'), this.account_name);
      set(dbRef(db, 'users/' + this.uid + '/phone'), this.myPhone);
      set(dbRef(db, 'users/' + this.uid + '/addr'), this.myAddr);
      set(
        dbRef(db, 'users/' + this.uid + '/contact_addr'),
        this.myContactAddr || this.myAddr
      );
      set(dbRef(db, 'users/' + this.uid + '/same_addr'), this.sameAddr);
      set(
        dbRef(db, 'users/' + this.uid + '/id_card_front'),
        this.id_card_front
      );
      set(dbRef(db, 'users/' + this.uid + '/id_card_back'), this.id_card_back);
      set(dbRef(db, 'users/' + this.uid + '/id_number'), this.id_number).then(
        () => {
          console.log('user updated');
          window.alert('資料已更新');
        }
      );
    },
    saveAcc(l: number) {
      this.myAccounts[l] = {
        account_name: this.account_name,
        bank_name: this.bank_name,
        bank_code: this.bank_code,
        bank_account: this.bank_account,
      };
      set(dbRef(db, 'users/' + this.uid + '/accounts'), this.myAccounts).then(
        () => {
          console.log('accounts updated!');
          this.focusAcc = Infinity;
        }
      );
    },
    deleteAcc(l: number) {
      if (window.confirm('確定要移除此帳戶嗎？這可能導至您的權益受損')) {
        var arr = [...this.myAccounts];
        for (let k = 0; k < this.myAccounts.length; k++) {
          if (k != l) {
            arr.push(this.myAccounts[k]);
          }
        }

        this.myAccounts = [...arr];

        set(dbRef(db, 'users/' + this.uid + '/accounts'), this.myAccounts).then(
          () => {
            console.log('account deleted!');
            this.focusAcc = Infinity;
          }
        );
      }
    },
    addDateTime() {
      if (!this.newDate || !this.newTime || !this.newEndTime) {
        window.alert('請先選取日期/時間/結束時間');
        return;
      } else {
        const arr = this.newClasses || [];
        arr.push({
          d: this.newDate,
          t: this.newTime + ' - ' + this.newEndTime,
        });
        this.newClasses = arr;
      }
    },
    removeDateTime(k: number) {
      const arr = this.newClasses || [];
      const ans = [];
      for (let j = 0; j < arr.length; j++) {
        if (j !== k) {
          ans.push(arr[j]);
        }
      }
      this.newClasses = ans;
    },
    previewProfile() {
      this.previewP = true;
    },
    previewClass() {
      this.previewC = true;
    },
    startEditC(cid: string) {
      if (cid !== this.uid) {
        window.alert('這不是您的活動，無法編輯');
        return;
      }
      const arr = this.classes;
      const obj = arr[cid];
      this.newTitle = obj.title || '';
      this.newHref = obj.href || '';
      this.newClassImg = obj.img || '';
      this.newClasses = obj.classes || [];
      this.myImg = obj.teacher_img || '';
      this.newZh = obj.zh || '';
      this.newEn = obj.en || '';
      this.newT_Zh = obj.t_zh || '';
      this.newT_En = obj.t_en || '';
      this.newLocation = obj.location || '';
      this.newAddr = obj.addr || '';
      this.newOldPrice = obj.old_price || '0';
      this.newNewPrice = obj.new_price || '0';
      this.newPrice = obj.price || '0';
      this.newTags = (obj.tags || []).join(',');
      this.editC = cid;
    },
    updateC(cid: string) {
      set(dbRef(db, 'classes/' + cid + '/id'), cid);
      set(dbRef(db, 'classes/' + cid + '/en'), this.newEn);
      set(dbRef(db, 'classes/' + cid + '/zh'), this.newZh);
      set(dbRef(db, 'classes/' + cid + '/tid'), this.uid);
      set(dbRef(db, 'classes/' + cid + '/t_en'), this.newT_En);
      set(dbRef(db, 'classes/' + cid + '/t_zh'), this.newT_Zh);
      set(
        dbRef(db, 'classes/' + cid + '/showClass'),
        this.classes[cid].showClass
      );
      set(dbRef(db, 'classes/' + cid + '/old_price'), this.newOldPrice);
      set(dbRef(db, 'classes/' + cid + '/new_price'), this.newNewPrice);
      set(dbRef(db, 'classes/' + cid + '/price'), this.newPrice);
      set(dbRef(db, 'classes/' + cid + '/teacher'), this.me.name || '');
      set(dbRef(db, 'classes/' + cid + '/teacher_img'), this.myImg);
      set(dbRef(db, 'classes/' + cid + '/tags'), this.newTags.split(','));
      set(dbRef(db, 'classes/' + cid + '/img'), this.newClassImg);
      set(dbRef(db, 'classes/' + cid + '/location'), this.newLocation);
      set(dbRef(db, 'classes/' + cid + '/addr'), this.newAddr);
      set(dbRef(db, 'classes/' + cid + '/href'), this.newHref);
      set(dbRef(db, 'classes/' + cid + '/classes'), this.newClasses);
      set(dbRef(db, 'classes/' + cid + '/title'), this.newTitle).then(() => {
        console.log('class updated!');
        window.alert('活動資訊已更新');
      });
    },
    copyC() {
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const newId: string = window.prompt('請輸入複製後的新活動id')!;
      const ks = Object.keys(this.classes);
      if (ks.indexOf(newId) > -1) {
        window.alert('不能使用已存在的活動Id');
        return;
      } else {
        set(dbRef(db, 'classes/' + newId), {
          id: newId,
          tid: this.uid,
          title: this.newTitle || '',
          teacher: this.me.name || '',
          teacher_img: this.myImg,
          classes: this.newClasses || [],
          showClass: true,
          zh: this.newZh || '',
          en: this.newEn || '',
          location: this.newLocation || '',
          addr: this.newAddr,
          href: this.newHref,
          tags: this.newTags.split(','),
          price: this.newPrice,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          t_zh: this.newT_Zh || '',
          t_en: this.newT_En || '',
          min: this.newMin || 1,
          max: this.newMax || 10,
        }).then(() => {
          console.log('class copied!');
          window.alert('活動已複製');
          this.startEditC(newId);
        });
      }
    },
    newC(cid: string) {
      const ks = Object.keys(this.classes);
      if (ks.indexOf(cid) > -1) {
        window.alert('不能使用已存在的活動Id');
        return;
      } else {
        const logs: Array<any> = [...this.logs] || [];
        logs.push({
          time: new Date().getTime(),
          msg:
            '教師(id: ' +
            this.uid +
            ', 名稱: ' +
            this.myName +
            ')已上傳新活動(id: ' +
            cid +
            ', 名稱: ' +
            this.newTitle +
            ')，等待審核中',
          from: this.uid,
          type: '教師',
          classes: this.newClasses || [],
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        set(dbRef(db, 'classes/' + cid), {
          id: cid,
          en: this.newEn,
          zh: this.newZh,
          tid: this.uid,
          t_en: this.newT_En,
          t_zh: this.newT_Zh,
          showClass: false,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          price: this.newPrice,
          teacher: this.myName,
          teacher_img: this.myImg,
          tags: this.newTags.split(','),
          img: this.newClassImg,
          location: this.newLocation,
          addr: this.newAddr,
          href: this.newHref,
          title: this.newTitle,
          classes: this.newClasses || [],
        }).then(() => {
          console.log('class updated!');

          let d = new Date();
          let cid_new =
            d.getFullYear() +
            '_' +
            (d.getMonth() + 1) +
            '_' +
            d.getDate() +
            '_' +
            ('' + Math.random()).substring(3, 12);

          this.newCid = cid_new;
          window.alert('活動資訊已上傳，等待管理員審核中');
        });

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
                this.me.name +
                '(' +
                this.me.email +
                ') 提出了新活動申請，請至管理員系統查看',
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
              'Colearna_新活動申請',
              '用戶' +
                this.me.name +
                '(' +
                this.me.email +
                ') 提出了新活動申請，請至<a href="https://next.colearna.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
            );
          }
        }
      }
    },
    uploadImage(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'photoURL';
      i.onload = function () {
        var w = i.width;
        var h = i.height;
        console.log('IMAGE width', w);
        console.log('IMAGE height: ', h);

        var errMSG = '';

        if (w / h > 1.4) {
          errMSG =
            '寬高比過大，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (w / h < 0.7) {
          errMSG =
            '寬高比過小，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (!errMSG || window.confirm(errMSG)) {
          convert({
            file: file,
            width: 120,
            height: 120,
            type: 'png',
          })
            .then((resp: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(resp);
              reader.onload = (e) => {
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */
                set(dbRef(db, 'users/' + uid + '/img'), e.target!.result).then(
                  () => {
                    console.log('image updated!');
                  }
                );
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                set(
                  dbRef(db, 'users_public/' + uid + '/img'),
                  e.target!.result
                );
              };
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
    },
    uploadIdCardFront(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'id_card_front';
      i.onload = () => {
        convert({
          file: file,
          width: 860 * 2,
          height: 540 * 2,
          type: 'png',
        })
          .then((resp: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(resp);
            reader.onload = (e) => {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              set(
                dbRef(db, 'users/' + uid + '/id_card_front'),
                e.target!.result
              ).then(() => {
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                console.log('id_card_front updated!');
              });
            };
          })
          .catch((error: string) => {
            console.log(error);
          });
      };
    },
    uploadIdCardBack(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'id_card_back';
      i.onload = () => {
        convert({
          file: file,
          width: 860 * 2,
          height: 540 * 2,
          type: 'png',
        })
          .then((resp: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(resp);
            reader.onload = (e) => {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              set(
                dbRef(db, 'users/' + uid + '/id_card_back'),
                e.target!.result
              ).then(() => {
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                console.log('id_card_back updated!');
              });
            };
          })
          .catch((error: string) => {
            console.log(error);
          });
      };
    },
    removeCer(k: number) {
      var arr: string[] = [...this.newCertifications];
      arr = arr.filter(function (c, j) {
        return j != k;
      });
      this.newCertifications = [...arr];
    },
    addCer() {
      var arr: string[] = [...this.newCertifications];
      arr.push(this.newCer);
      this.newCer = '';
      this.newCertifications = [...arr];
    },
    go() {
      this.$nextTick(() => {
        this.step++;
      });
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    },
    logout() {
      this.$emit('logout');
    },
    cancel() {
      this.action = '';
    },
    submit() {
      if (!this.myName) {
        window.alert('請先輸入您的姓名');
        return;
      }
      if (!this.newDes) {
        window.alert('請先輸入您的簡介');
        return;
      }
      if (!this.newThought) {
        window.alert('請先輸入您的教學理念');
        return;
      }
      set(dbRef(db, 'users/' + this.uid + '/des'), this.newDes || '');

      set(dbRef(db, 'users/' + this.uid + '/thought'), this.newThought || '');

      set(
        dbRef(db, 'users/' + this.uid + '/certifications'),
        this.newCertifications || []
      );

      set(
        dbRef(db, 'users/' + this.uid + '/photoURL'),
        this.myImg || this.myPhotoURL || this.me.photoURL || ''
      ).then(() => {
        this.saved = true;
        console.log('user data updated!');
        window.alert('資料已更新');
      });

      const logs: Array<any> = [...this.logs] || [];

      logs.push({
        time: new Date().getTime(),
        msg: '教師(id: ' + this.uid + ', 名稱: ' + this.myName + ')已更新資料',
        from: this.uid,
        type: '教師',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });

      set(dbRef(db, 'users_public/' + this.uid), {
        id: this.uid,
        name: this.myName || '',
        img: this.myImg || this.myPhotoURL,
        photoURL: this.myPhotoURL || this.photoURL,
        isParent: true,
        isTeacher: this.isTeacher || false,
        isAdmin: this.isAdmin || false,
        des: this.me.des || '',
        thought: this.me.thought || '',
        certifications: this.me.certifications || [],
        createTime: this.me.createTime || new Date().getTime(),
        updateTime: new Date().getTime(),
      }).then(() => {
        console.log('public user data updated!');
      });
    },
  },
});
</script>

<style scoped>
/* Single Page Style */

.q-field__control {
  margin-left: 1em;
  max-width: 200px;
}

.q-btn#ser {
  margin-left: 1em;
  max-height: 1.5em !important;
}

.teacher {
  display: inline-flex;
  flex-direction: column;
  margin: 5em;
}

.q-stepper__nav {
  display: flex;
  flex-direction: row-reverse;
}

.q-stepper__nav .q-btn {
  max-height: 2.6em;
}

.teacher-profile-card {
  padding: 1.2em 0;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-2 {
  padding: 1.2em 2em;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-3 {
  padding: 1.2em 0;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-3 h2,
.teacher-profile-card-3 h4 {
  padding: 0 22px;
}

.teacher-profile-card .big.avatar {
  border-radius: 50%;
}

.teacher-bank-card {
  padding: 2em;
  width: 100%;
  border: none;
  box-shadow: none;
}

@media screen and (max-width: 831px) {
  .teacher {
    margin: 1em;
  }
}
</style>
