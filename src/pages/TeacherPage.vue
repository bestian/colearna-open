<template lang="pug">
q-page
  q-carousel.no-border(v-model="slide", transition-prev="slide-right", transition-next="slide-left", animated, :infinite="true", :swipeable="true", :transition-duration="1000", control-color="primary")
    q-carousel-slide.row.no-wrap.flex-center(name="style")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
    q-carousel-slide.row.no-wrap.flex-center(name="style1")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
    q-carousel-slide.row.no-wrap.flex-center(name="style2")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
  .row.long-padded.light-yellow-back
    h6.fluid.text-center.text-dark-green 歡迎加入我們的師資社區
      br
    q-btn#join-us.light-green-back.text-white.med.wide.h-small(rounded, @click="join_us()") 立刻加入我們
  .row.white-back.flex.flex-col.long-padded
    h4.fluid.text-center.text-dark-green.bold 專業師資
    .row.flex.flex-center.long-padded
      .col-1
      .col-md-2.col-sm-4.col-xs-5.row.flex
        q-input.h-small(v-model="myKey2", type="search", rounded="rounded", outlined="outlined", placeholder="教師類別")
          template(v-slot:append)
            q-icon(name="search")
      .col-md-6.col-sm-6.col-xs-6
        q-btn#ser.light-green-back.text-white.h-small(rounded) 搜索
      .filler
    .row.flex.flex-center.padded
      .teacher(v-for="(u, j) in users_public", :key="j", v-show="u.isTeacher && u.showTeacher")
        router-link.flex.flex-col.flex-center(:to="'/teacher_user_info/' + u.id")
          q-img(:src="u.img || u.photoURL", loading="lazy", :alt="u.name", referrerpolicy="no-referrer", style=`
                width: 35vmin;
                height: 35vmin;
                max-width: 150px;
                max-height: 150px;
                border-radius: 50%;
                margin: 0.8em auto;
              `)
          h6.text-black.text-center.bold {{ u.name }}
          p.text-dark-gray.text-center {{ u.des }}
      .teacher(v-for="(t, k) in teachers", :key="k", v-show="t.showTeacher")
        router-link.flex.flex-col.flex-center(:to="'/teacher_info/' + k")
          q-img(:src="t.img", loading="lazy", :alt="t.name", referrerpolicy="no-referrer", style=`
                width: 35vmin;
                height: 35vmin;
                max-width: 150px;
                max-height: 150px;
                border-radius: 50%;
                margin: 0.8em auto;
              `)
          h6.text-black.text-center.bold {{ t.name }}
          p.text-dark-gray.text-center {{ t.zh }}
          p.text-dark-gray.text-center {{ t.en }}
  .small-space
  #my-form.row.long-padded.flex.flex-center.light-yellow-back(ref="my-form")
    h4.fluid.text-center.text-dark-green.bold 只需提供課程時間及內容，其他就交給共學島！
    h6.fluid.text-center.text-dark-green 共學島是一個課程組織平台，
      br
      | 服務目前在台灣為數不少，不選擇成為學校或補習班等教育機構全職僱員的獨立工作老師。
    q-stepper(v-model="step", header-nav, ref="stepper", color="primary", animated, rounded)
      q-step(:name="1", title="填寫您的資料", icon="settings", :done="done1")
        q-input(v-model="name", placeholder="老師資料")
          template(v-slot:prepend)
            q-icon(name="add", color="green")
        q-input.readonly-input(bg-color="teal-2", standout="bg-teal-4 text-black", square, v-model="new_email", placeholder="您的Email", :readonly="true")
          template(v-slot:prepend)
            q-icon(name="email", color="green")
        q-stepper-navigation
          .flex.flex-col.little-padded
            q-btn(rounded, @click=`
                  () => {
                    done1 = true;
                    step = 2;
                  }
                `, color="primary", label="繼續")
            p.text-orange.mini.margin-top(v-show="!name") **請先填寫完再繼續
      q-step(:name="2", title="註冊帳號", icon="create_new_folder", :done="done2")
        q-input(type="textarea", v-model="des", placeholder="老師簡介")
          template(v-slot:prepend)
            q-icon(name="add", color="green")
        q-input(type="textarea", v-model="thought", placeholder="教學理念")
          template(v-slot:prepend)
            q-icon(name="add", color="green")
        q-input(v-model="newCer", placeholder="專業證照(選填)")
          template(v-slot:prepend)
            q-icon(name="add", color="green")
          template(v-slot:append)
            q-btn(color="secondary", @click="addCer()") 新增
        q-list
          q-item(v-for="(c, k) in certifications", :key="k")
            .flex.margin {{ c }}
            .filler
            q-btn(size="xs margin", color="red", @click="removeCer(k)")
              q-icon(name="delete")
        q-stepper-navigation
          q-btn.q-ml-sm(flat, @click="step = 1", color="primary", label="上一步")
          .flex.flex-col.little-padded
            q-btn(rounded, @click=`
                  () => {
                    done2 = true;
                    step = 3;
                  }
                `, color="primary", label="繼續")
            p.text-orange.mini.margin-top(v-show="!new_email") **請先填寫完再繼續
      q-step(:name="3", title="送出申請", icon="add_comment", :done="done3") 確認您填寫的資料正確無誤後，請按「送出申請」
        q-stepper-navigation
          q-btn.q-ml-sm(flat, @click="step = 2", color="primary", label="上一步")
          q-btn(color="primary", label="送出申請", @click="submit()")

</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue'
// import InApp from 'detect-inapp'
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: [
    'uid',
    'me',
    'users_public',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'teachers',
    'requests',
  ],
  setup() {
    const metaData = {
      title: '教師',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const done1 = ref(false);
    const done2 = ref(false);
    const done3 = ref(false);
    const name = ref('');
    const des = ref('');
    const thought = ref('');
    const newCer = ref('');
    const arr: string[] = [];
    const certifications = ref(arr);
    const new_email = ref('');
    const slide = ref('style');
    const step = ref(1);
    const myKey2 = ref('');

    return {
      name,
      new_email,
      meta,
      step,
      thought,
      des,
      slide,
      myKey2,
      done1,
      done2,
      done3,
      newCer,
      certifications,
    };
  },
  watch: {
    uid(nU) {
      if (nU && this.me && this.me.name && this.me.email) {
        this.name = this.me.name;
        this.new_email = this.me.email;
      }
    },
  },
  mounted() {
    if (this.uid && this.me) {
      this.name = this.me.name;
      this.new_email = this.me.email || this.email;
    } else if (this.email) {
      this.new_email = this.email;
    }
  },
  methods: {
    removeCer(k: number) {
      var arr: string[] = [...this.certifications];
      arr = arr.filter(function (c, j) {
        return j != k;
      });
      this.certifications = [...arr];
    },
    addCer() {
      var arr: string[] = [...this.certifications];
      arr.push(this.newCer);
      this.newCer = '';
      this.certifications = [...arr];
    },
    join_us() {
      /* eslint-disable  @typescript-eslint/no-non-null-assertion */
      try {
        const el: HTMLElement = document.getElementById('my-form')!;
        el.scrollIntoView();
      } catch (err) {
        console.log(err);
      }
    },
    submit() {
      function par(s: string) {
        return s.replace(/</g, '&lt;').replace(/</g, '&gt;');
      }
      var bool = false;
      for (let j = 0; j < this.requests.length; j++) {
        let rq = this.requests[j] as any;
        if (rq.uid === this.uid && !rq.rejected && !rq.approved) {
          bool = true;
        }
      }
      if (!this.uid) {
        window.alert('請先登入');
        return;
      } else if (bool) {
        window.alert('您已提出過申請。請耐心等候回覆，謝謝！');
        return;
      } else {
        let arr = [...this.requests];
        arr.push({
          time: new Date().getTime(),
          uid: this.uid,
          name: this.name,
          email: this.new_email,
          des: par(this.des),
          thought: par(this.thought),
          certifications: this.certifications,
        });
        this.done3 = true;
        set(dbRef(db, 'requests'), arr).then(() => {
          window.alert('申請已送出。請耐心等候回覆，謝謝！');
        });

        // this.$emit('mailto', 'inquiry@colearn.co', 'Colearna_新教師申請', '用戶' + this.name + '(' + this.me.email + ') 提出了成為教師的申請，請至<a href="https://next.colearn.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看')
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
                this.name +
                '(' +
                this.me.email +
                ') 提出了成為教師的申請，請至管理員系統查看',
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
              'Colearna_新教師申請',
              '用戶' +
                this.name +
                '(' +
                this.me.email +
                ') 提出了成為教師的申請，請至<a href="https://next.colearna.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
            );
          }
        }
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

.q-field__control {
  margin-left: 1em;
  max-width: 200px;
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

#join-us {
  padding-left: 1em;
  padding-right: 1em;
  min-width: 100px;
  max-width: 150px;
}

@media screen and (max-width: 831px) {
  .teacher {
    margin: 1em;
  }
}
</style>
