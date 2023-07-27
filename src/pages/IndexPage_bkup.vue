<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      :autoplay="2500"
      :infinite="true"
      :swipeable="true"
      :transition-duration="1500"
      control-color="primary"
      class="no-border"
    >
      <q-carousel-slide name="style" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style1" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style2" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
    </q-carousel>

    <div class="row lw-back">
      <h2 class="text-center fluid text-dark-green">探索世界答這些大哉界盡情探索自然會探索自然會有標</h2>
      <h6 class="text-center fluid text-dark-green">探索探索世界答這些大哉界盡情探索自然會探索自然會</h6>
      <h6 class="text-center fluid text-dark-green">有標世盡情探索自然會探索自然會有標</h6>
    </div>

    <div class="row white-back long-padded">
      <h4 class="text-center fluid text-dark-green">讓深度知識帶你看見不一樣的世界 feature events</h4>

      <div class="fluid flex flex-center">
        <q-card class="my-featured-card-2">
          <img src="../assets/seminar_exmaple.png" alt="Exmaple"/>
          <h6 class="text-dark-gray little-padded no-margin">線上公益講座 | 這樣溝通，親子關係不緊繃！</h6>
          <p class="text-orange text-left bold little-padded no-margin fluid flex flex-start-center">喜閱樹 X 芙愛占心學院Ｘ共學島 線上公益講座
          <span class="filler"></span>
          <span class="text-gray little-padded text-right">公益免費</span></p>
          <div class="small-space"></div>
          <div class="small-space"></div>
          <div class="small-space"></div>
          <q-btn class="text-white w-180 b-right margin or-back" rounded to = "/sample_article">瞭解詳情</q-btn>

        </q-card>
        <q-card class="my-featured-card-2">
          <img src="../assets/seminar_exmaple.png" alt="Exmaple"/>
          <h6 class="text-dark-gray little-padded no-margin">線上公益講座 | 這樣溝通，親子關係不緊繃！</h6>
          <p class="text-orange text-left bold little-padded no-margin fluid flex flex-start-center">喜閱樹 X 芙愛占心學院Ｘ共學島 線上公益講座
          <span class="filler"></span>
          <span class="text-gray little-padded text-right">公益免費</span></p>
          <div class="small-space"></div>
          <div class="small-space"></div>
          <div class="small-space"></div>
          <q-btn class="text-white w-180 b-right margin or-back" rounded to = "/sample_article">瞭解詳情</q-btn>

        </q-card>
      </div>
    </div>

    <div class="row white-back long-padded flex flex-center">
      <h4 class="text-center fluid text-dark-green">選擇一門課程 讓綠芽隨著光肆意成長(new classes)</h4>
      <div class="q-pa-md flex flex-center flex-rwd">
        <q-card class="my-card" v-for = "(r, k) in (Object.values(classes || {})).slice(0,3)" :key="k">
          <q-img class="clickable" :src="r.img" :alt="r.des" fit="cover" style="height:220px" @click="goto(r.id)"></q-img>
          <q-card-section class="col flex flex-col">
            <div class="filler"></div>
            <div class="my-card-title">{{r.des}}</div>
            <p class="small no-margin text-gray flex flex-start-center">
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <span style="position: relative; top:1px; left: 4px;">  5.0 (2)</span>
            </p>
            <h6 class="fluid text-left text-orange no-margin">
              {{r.price}}
            </h6>
            <div class="row">
              <p class="text-dark-gray bold fluid px-16 text-left no-margin">
                <img :src="r.teacher_img" class="avatar float right" alt="Teacher" width="50" height="50">
                {{r.teacher}}
                <br/>
                <span class="text-gray bold">{{(r.tags || []).join(' / ')}}</span>
              </p>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat round color="blue" icon="info" @click="goto(r.id)"/>
            <q-btn flat round color="red" icon="favorite" @click="like(r.id)" />
            <!-- <q-btn flat round color="teal" icon="add_shopping_cart" @click="add_to_cart(r.id)" /> -->
            <q-btn flat round color="primary" icon="share" @click="share(r.id)" />
          </q-card-actions>
        </q-card>
        <h6 class="fluid text-center text-dark-green long-padded">
          <router-link to="/classes">
            <span class="underline">
              更多課程
            </span>+
          </router-link>
        </h6>
      </div>
    </div>
    
    <div class="row light-yellow-back flex flex-center">
      <h4 class="text-center fluid text-dark-green">選擇一趟旅行 讓綠芽隨著光肆 (trips)</h4>

      <q-card class="my-trip-card" v-for="(t, j) in trips" :key="j">
        <img :src = "t.img" :alt="t.title"/>
        <q-card-section>
          <h6 class="text-left text-dark-gray bold no-margin">{{t.title}}</h6>
          <p class="text-left text-orange bold no-margin">{{t.sub}}</p>
          <h6 class="text-gray text-left fluid bold no-margin">{{t.price}}</h6>
        </q-card-section>
        <div class="space"></div>
        <q-btn class="text-white b-right or-back w-180" rounded>瞭解詳情</q-btn>
      </q-card>
        <h6 class="fluid text-center text-dark-green long-padded">
          <router-link to="/classes">
            <span class="underline">
              更多旅行
            </span>+
          </router-link>
        </h6>
    </div>

    <div class="row white-back flex flex-center long-padded">
      <h4 class="text-center fluid text-dark-green">關於生活的種種模樣 (articles)</h4>

      <div class="q-pa-md flex flex-center flex-rwd">
        <q-card class="my-article-card" v-for = "(a, r) in articles" :key="r">
          <img :src = "a.img" :alt="a.title" class="clickable" @click="gotoA(a.id)" />
          <q-card-section>
            <h4 class="text-left text-black bold">{{a.title}}</h4>
            <h6 class="text-left text-gray bold">{{a.sub}}</h6>
            <p class="text-left text-gray tiny">{{a.author}}</p>
          </q-card-section>
          <q-card-section align="right">
            <q-btn flat round color="blue" icon="info" @click="gotoA(a.id)"/>
          </q-card-section>

        </q-card>
      </div>
      <h6 class="fluid text-center text-dark-green long-padded">
        <br/>
        <router-link to="/classes">
          <span class="underline">
            更多文章
          </span>+
        </router-link>
      </h6>
    </div>
    <div class="row green-back flex flex-center long-padded">
      <h4 class="text-center fluid text-white">企業合作</h4>

      <q-card class="my-collaborate-card" v-for="(c,j) in cos" :key="j">
        <img :src="c.img" :alt="c.title"/>
        <q-card-section>
          <h4 class="text-dark-gray text-left bold">{{c.title}}</h4>
          <h4 class="fluid text-right text-gray">{{c.price}}</h4>
        </q-card-section>
        <div class="space"></div>
        <q-btn class="text-white bottom-attached or-back" rounded>瞭解詳情</q-btn>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
  
import { setLogLevel } from 'firebase/app';
import { useMeta } from 'quasar'
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'user', 'email', 'photoURL', 'isLogout', 'isInApp', 'myKey', 'classes', 'articles'],
  setup () {
    const metaData = {
      title: '歡迎',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)

    const meta = ref<Meta>({
      totalCount: 1200
    });
    const cs = ref(['親子', '父母', '兒童', '線上', '社交情感', '語言', 'STEAM', '運動'])
    const step = ref(0)
    const myKey2 = ref('')
    const slide = ref('style')
    const cos = ref([
      {
        img: 'https://i.imgur.com/XupJC2l.png',
        title: '多元化服務及合作方案，讓舉辦公司活動、慰勞員工不再勞心勞力！',
        price:'NT$200'
      },
      {
        img: 'https://i.imgur.com/XupJC2l.png',
        title: '多元化服務及合作方案，讓舉辦公司活動、慰勞員工不再勞心勞力！',
        price:'NT$200'
      }
    ])
    const trips = ref([
      {
        img: 'https://i.imgur.com/OgPuKHx.jpg',
        title: 'PODCAST｜從孩子的畫裡讀出他的特別',
        sub: '皮皮老師x雲媽咪溫度對談',
        price: 'NT$200'
      },
      {
        img: 'https://i.imgur.com/OgPuKHx.jpg',
        title: 'PODCAST｜從孩子的畫裡讀出他的特別',
        sub: '皮皮老師x雲媽咪溫度對談',
        price: 'NT$200'
      }
    ])
    

    return { meta, step, slide, cs, cos, trips, myKey2 };
  }, 
  mounted () {
    setLogLevel('silent')
    // setInterval(this.go, 1000)
  },
  methods: {
    fil (list: Array<any>, k:string) {
      if (!k) {
        return list
      } else {
        return list.filter(function(o) {
          return JSON.stringify(o).indexOf(k) > -1
        })
      }
    },
    gotoA (aid:string) {
      this.$router.push('/article/' + aid)      
    },
    goto (k:string) {
      this.$router.push('/class_info/' + k)
    },
    go () {
      this.$nextTick(() => {
        this.step++
      });
    },
    loginGoogle () {
      this.$emit('loginGoogle')
    },
    logout () {
      this.$emit('logout')
    }
  }
});
</script>

<style scoped>

/* Single Page Style*/

</style>
