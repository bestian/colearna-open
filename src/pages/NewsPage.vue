<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      :autoplay="3500"
      :infinite="true"
      :swipeable="true"
      :transition-duration="2500"
      control-color="primary"
      class="no-border"
    >
      <q-carousel-slide name="style" class="row no-wrap flex-center">
        <q-img
          class="main"
          :no-transition="true"
          :no-spinner="true"
          loading="eager"
          alt="text"
          referrerpolicy="no-referrer"
          style="width: 100%; height: 100%; border-radius: 0"
          src="../assets/main001.png"
        ></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style1" class="row no-wrap flex-center">
        <q-img
          class="main"
          :no-transition="true"
          :no-spinner="true"
          loading="eager"
          alt="text"
          referrerpolicy="no-referrer"
          style="width: 100%; height: 100%; border-radius: 0"
          src="../assets/main001.png"
        ></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style2" class="row no-wrap flex-center">
        <q-img
          class="main"
          :no-transition="true"
          :no-spinner="true"
          loading="eager"
          alt="text"
          referrerpolicy="no-referrer"
          style="width: 100%; height: 100%; border-radius: 0"
          src="../assets/main001.png"
        ></q-img>
      </q-carousel-slide>
    </q-carousel>
    <!--
    <div class="row light-yellow-back long-padded">

      <h4 id="news-search" class="text-center med">
        <q-input
          class="h-small"
          v-model="myKey2"
          type="search"
          rounded="rounded"
          outlined="outlined"
          placeholder="搜尋"
          icon="search"
        ></q-input>
      </h4>
      <h4 class="text-center fluid">
        <q-btn
          unelevated
          rounded
          class="margin"
          @click="myKey2 = ''"
          :class="{
            'or-back': myKey2 == '',
            'text-white': myKey2 == '',
            'text-gray': myKey2 != '',
            'gray-bordered': myKey2 != '',
          }"
          >全部文章</q-btn
        >
        <q-btn
          unelevated
          rounded
          class="margin"
          v-for="(c, idx) in cs"
          :key="idx"
          @click="myKey2 = c"
          :class="{
            'or-back': myKey2 == c,
            'text-white': myKey2 == c,
            'text-gray': myKey2 != c,
            'gray-bordered': myKey2 != c,
          }"
        >
          {{ c }}</q-btn
        >
      </h4>
    </div>

    <div class="row white-back flex flex-center padded">
      <h2 class="text-center fluid text-dark-green">最新活動</h2>
      <h4 class="text-dark-green fluid text-center">
        文章資訊建構中，敬請期待！
      </h4>
    </div> -->
    <!--<div class="row white-back">
      <h2 class="text-center fluid text-dark-green">最新活動</h2>
      <div class="fluid flex flex-center">
        <q-card class="my-featured-card-2" v-for="(e, k) in colearna_events" :key="k">
          <img :src="e.img" :alt="e.title"/>
          <h6 class="text-dark-gray padded">{{e.title}}</h6>
          <p class="text-gray padded rtrt">{{e.price}}</p>
          <q-btn class="text-white bottom-attached dg-back" rounded to = "/sample_article">瞭解更多</q-btn>
        </q-card>
      </div>
    </div> -->

    <!--<div class="row white-back flex flex-center padded">
      <h2 class="text-center fluid text-dark-green">最新文章</h2>

      <q-card class="my-article-card" v-for = "(a, r) in articles" :key="r">
        <img :src = "a.img" :alt="a.title"/>
        <q-card-section>
          <h4 class="text-left text-black bold">{{a.title}}</h4>
          <h6 class="text-left text-gray bold">{{a.sub}}</h6>
          <p class="text-left text-gray tiny">{{a.author}}</p>
        </q-card-section>
      </q-card>
      <h6 class="fluid text-center text-dark-green">
        <router-link to="/articles">
          <span class="underline">
            更多文章
          </span>+
        </router-link>
      </h6>
    </div>-->


    <div class="row white-back flex flex-center padded">
      <h2 class="text-center fluid text-dark-green">最新文章</h2>
      <q-card class="my-article-card clickable" v-for = "(a, r) in articles" :key="r" @click="gotoA(a.id)">
        <q-img fit="contain" :src = "a.img || dummyImg" :alt="a.title" style="max-height: 280px;"></q-img>
        <q-card-section>
          <h4 class="text-left text-black bold">{{a.title || a.id}}</h4>
          <h6 class="text-left text-gray bold">{{a.sub || noHTML(a.text).substring(0,50)}} ... </h6>
          <p class="text-left text-gray tiny">{{a.author || '本團隊與AI合作生成'}}</p>
        </q-card-section>
      </q-card>
    </div>


    <div class="row light-yellow-back flex flex-center">
      <h2 class="text-center fluid text-dark-green">最新影音</h2>

      <q-card class="my-article-card" v-for="(t, j) in videos" :key="j">
        <iframe
          class="fluid"
          :src="t.src"
          :alt="t.title"
          title="t.title"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <q-card-section>
          <h6 class="text-left text-dark-gray bold">{{ t.title }}</h6>
          <h6 class="text-left text-orange bold">{{ t.sub }}</h6>
          <div class="space"></div>
          <div class="row flex flex-start-center">
            <div class="filler"></div>
            <q-btn
              :href="parseYoutubeEBLink(t.src)"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              unelevated
              rounded
              class="text-dark-green no-back"
              icon-right="chevron_right"
              >前往站外影片</q-btn
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NewsPage',
  // components: { ExampleComponent },
  props: [
    'uid',
    'me',
    'users',
    'articles',
    'trips',
    'videos',
    'user',
    'dummyImg',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'myKey',
    'colearna_events',
  ],

  setup() {
    const metaData = {
      title: '最新消息',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const step = ref(0);
    const myKey2 = ref('');
    const slide = ref('style');
    const cs = ref(['專欄', '訪談', '親職', '最新消息']);

    return { meta, step, myKey2, slide, cs };
  },
  mounted() {
    // setInterval(this.go, 1000)
  },
  methods: {
    parseYoutubeEBLink(href: string) {
      return href.replace('embed/', 'watch?v=');
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
    noHTML (html:string) {
      return (html || '').replace(/<\/?div.+?>/g, '')
        .replace(/<p>/g, '')
        .replace(/<\p>/g, '')
    },
    gotoA (aid:string) {
      this.$router.push('/zoom_in_art/' + aid)
    }
  },
});
</script>

<style scoped>
/* Single Page Style*/
</style>
