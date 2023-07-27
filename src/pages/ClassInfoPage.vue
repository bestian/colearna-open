<template lang="pug">
row.long-padded.flex.flex-center.z-10(:style=`{
    background: '#444',
      'background-blend-mode': 'darken',
      'background-size': 'cover',
      'background-image': 'url(' + classes[$route.params.cid].img + ')',
    }`)
  img.wide.cropped(:src="classes[$route.params.cid].img")

// 因為不賣課程，所以這個頁面會被改寫成別的課程詳情頁面
</template>

<script lang="ts">
import { useMeta } from 'quasar';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'ClassesPage',
  props: [
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'myKey',
    'classes',
    'isAdmin',
    'isTeacher',
  ],
  setup() {
    const metaData = {
      title: '課程詳情',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    // const d = new Date()
    const arr: any[] = [];
    // const showPop = ref(false)
    const editR = ref(false);
    const ratingModel = ref(5);
    const myReview = ref('');
    const nums = ref([1, 1, 0, 0, 0]);
    const myIdx = ref(0);
    const step = ref(0);
    const useCode = ref(false);
    const newCode = ref('');
    const myKey2 = ref('');
    const myKey3 = ref('適合年齡');
    const slide = ref('style');
    const focusDate = ref(false);
    const students = ref(arr);
    const newPName = ref('');
    const newPhone = ref('');
    const newName = ref('');
    const newAge = ref(0);
    const newDate = ref(''); // ref(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())
    const cs = ref([
      '親子課程',
      '大人課程',
      '線上課程',
      '社交情感',
      '語言學習',
      'STEAM',
      '運動',
    ]);
    const as = ref(['適合年齡', '上課地區', '上課時間', '價格']);
    return {
      editR,
      ratingModel,
      myReview,
      step,
      nums,
      myIdx,
      myKey2,
      myKey3,
      slide,
      cs,
      as,
      newName,
      newAge,
      newDate,
      focusDate,
      students,
      newCode,
      useCode,
      newPName,
      newPhone, //,
      // ,showPop
    };
  },
  mounted() {
    if (this.me && this.me.name) {
      this.newPName = this.me.name;
    }
    if (this.me && this.me.phone) {
      this.newPhone = this.me.phone;
    }
  },
  watch: {
    newDate() {
      this.focusDate = false;
    },
    newName(nN) {
      console.log(nN);
      function calculateAge(birthday: string) {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age;
      }

      const idx = this.indexChildOfMe(nN);

      if (idx > -1) {
        const child_sel = this.me.childern[idx];
        this.newDate = child_sel.date;
        console.log(child_sel.date);
        console.log(calculateAge(child_sel.date));
        this.newAge = calculateAge(child_sel.date);
        this.$forceUpdate();
      }
    },
  },
  methods: {
    indexChildOfMe(name: string) {
      const cs = this.me.childern;
      var ans = -1;
      cs.forEach((c: any, i: number) => {
        if (c.name == name) {
          ans = i;
        }
      });
      return ans;
    },
    amountMean(list: any[]) {
      var ans = 0;
      for (let i = 0; i < list.length; i++) {
        ans += list[i].star;
      }
      ans /= list.length;
      return String(ans).substr(0, 3);
    },
    nothing() {
      console.log('btn clicked');
    },
    add_to_cart() {
      if (!this.newPName) {
        window.alert('請先家長姓名');
        return;
      }
      if (!this.newPhone) {
        window.alert('請先家長手機號碼');
        return;
      }

      console.log('add_to_cart');

      var stus = this.students.filter((s) => {
        return s != this.newName;
      });
      stus.push({
        name: this.newName,
      });

      this.$emit(
        'add_to_cart',
        stus,
        String(this.$route.params.cid),
        this.classes[String(this.$route.params.cid)].classes[this.myIdx],
        this.countPlans(),
        this.countTotal(),
        this.newPName,
        String(this.newPhone)
      );

      /* for (let j = 0; j < (this.students || []).length; j++) {
        this.$emit('addStuToClass', this.students[j].name, this.$route.params.cid, this.me.childern)
      }

      this.showPop = true
      this.step = 0 */
    },
    isStarted(c: any) {
      return (
        new Date(c.startdate.replace(/\//g, '-')).getTime() <
        new Date().getTime()
      );
    },
    isPaid(cid: string) {
      return (
        (this.me.paid || []).filter((o: any) => {
          return o.cid == cid;
        }).length > 0
      );
    },
    inCh(n: string) {
      if (!this.me || this.me.childern) {
        return false;
      } else {
        return (
          this.me.childern
            .map(function (c: any) {
              return c.name;
            })
            .indexOf(n) > -1
        );
      }
    },
    getDate_1(n: string) {
      if (!this.me || this.me.childern) {
        return null;
      } else {
        return (
          (this.me.childern.filter(function (c: any) {
            return c.name == n;
          }) || [])[0].date || ''
        );
      }
    },
    countAge(n: string) {
      var a = 0;
      if (!this.me || this.me.childern) {
        return null;
      } else {
        const cd: any = new Date(
          (this.me.childern.filter(function (c: any) {
            return c.name == n;
          }) || [])[0].date
        );
        a = new Date().getFullYear() - cd.getFullYear();
        if (
          new Date().getMonth() < cd.getMonth() ||
          (new Date().getMonth() == cd.getMonth() &&
            new Date().getDate() < cd.getDate())
        ) {
          a--;
        }
        return a;
      }
    },
    addStudent() {
      if (!this.newName) {
        window.alert('請先輸入姓名');
        return;
      }
      if (!this.newAge && !this.inCh(this.newName)) {
        window.alert('請先輸入年齡');
        return;
      }
      if (!this.newDate && !this.inCh(this.newName)) {
        window.alert('請先輸入生日');
        return;
      }
      function Stu(
        this: any,
        name: string,
        age: string | number,
        date: string
      ) {
        this.name = name;
        this.age = age;
        this.date = date;
      }

      let obj = new (Stu as any)(
        this.newName,
        this.inCh(this.newName) ? this.countAge(this.newName) : this.newAge,
        this.inCh(this.newName) ? this.getDate_1(this.newName) : this.newDate
      );

      this.students.push(obj);
      this.newName = '';
      this.newAge = 0;
      this.newDate = '';
    },
    countPlans() {
      var ans: any[] = [];

      const st = this.classes[String(this.$route.params.cid)].new_price
        .replace(/NT\$\s?/g, '')
        .replace(/,/g, '')
        .replace(/,/g, '')
        .replace(/\/.*$/, '');

      const price = st == 'Free' || st == '免費' ? 0 : parseInt(st);

      const ls = this.classes[String(this.$route.params.cid)].plans || [];

      for (let i = 0; i < ls.length; i++) {
        if (this.nums[i] > 0) {
          ans[i] = {
            plan: ls[i],
            num: this.nums[i],
            price: price,
          };
        }
      }
      return ans;
    },
    submitR(r: number, t: string) {
      var rs = this.classes[String(this.$route.params.cid)].reviews || [];
      rs.push({
        date: new Date()
          .toUTCString()
          .replace(/^.+,s*/, '')
          .replace(/\s\d+:\d+:\d+\s[a-zA-z]+$/, ''),
        from: this.me.name,
        star: r,
        text: t,
      });
      set(dbRef(db, 'classes/' + this.$route.params.cid + '/reviews'), rs).then(
        () => {
          console.log('review added');
          window.alert('評論已送出');
        }
      );
    },
    countTotal() {
      var ans = 0;

      const st = this.classes[String(this.$route.params.cid)].new_price
        .replace(/NT\$\s?/g, '')
        .replace(/,/g, '')
        .replace(/,/g, '')
        .replace(/\/.*$/, '');

      const price = st == 'Free' || st == '免費' ? 0 : parseInt(st);

      const ls = this.classes[String(this.$route.params.cid)].plans || [];
      for (let i = 0; i < ls.length; i++) {
        if (this.nums[i] > 0) {
          ans += price * this.nums[i];
        }
      }
      return ans;
    },
    fil(list: Array<any>, k: string) {
      if (!k) {
        return list;
      } else {
        return list.filter(function (o) {
          return JSON.stringify(o).indexOf(k) > -1;
        });
      }
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
  },
});
</script>

<style scoped>
/* Single Page Style */

#date-picker {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
}

p.small {
  font-size: 14px !important;
}

#colearna {
  color: #33f !important;
}
</style>
