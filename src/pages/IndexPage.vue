<template>
  <q-page>
    <div class="row lwww-back padded flex flex-center">
      <div class="col-12 flex flex-col flex-center">
        <h2 class="text-dark-green text-center fluid">從小島到大世界</h2>
        <h6 class="text-dark-green text-center fluid">孩子未來學習的最佳夥伴！</h6>
      </div>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      :infinite="false"
      :swipeable="false"
      control-color="primary"
      class="no-border lwww-back"
    >
      <q-carousel-slide name="style" class="row no-wrap flex-center">
        <q-img fit="contain" class="main" loading="lazy" alt="Home" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/home.png"></q-img>
      </q-carousel-slide>
    </q-carousel>

    <div class="row light-yellow-back long-padded">
      <div class="filler">
      </div>
      <div class="col-6 col-md-8 col-sm-10 col-xs-12 flex flex-start-center flex-col">
        <h2 class="text-dark-green">未來教育為何重要？</h2>
        <h4 class="text-dark-gray text-left home-des">教育是百年大計，<br/>是現在對未來最大的投資。</h4>
        <p class="home-des">2050年的世界是什麼模樣？下一代如何適應超乎想像的快速變化？身心被迫歸零的父母如何與孩子一起成長？除了進入體制內框架和逃出體制外自學之外，第三條路在哪個方向？</p>
        <q-btn to="/articles" color="light-blue margin" size="lg" rounded icon= "info"> 看更多文章</q-btn>
      </div>
      <div class="filler">
      </div>
    </div>

    <div class="row lw-back padded">
      <div class="col-6 col-md-6 col-sm-7 col-xs-12 flex flex-start-center flex-col">

        <h2 class="text-dark-green">何謂學習風格？</h2>
        <p class="home-des">現代的教育研究者發現，每個人擅長的學習方式都有不同。即使在同一個課室中，每個人去掌握和理解的方法也不一樣。這就是每個人的學習風格。</p>

        <q-btn to="/assesment" color="orange margin" size="lg" rounded icon= "assessment"> 學習風格檢測</q-btn>

      </div>
      <div class="col-6 col-md-6 col-sm-5 col-xs-12 flex flex-center flex-col">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 60%; min-width: 30vw; height: auto; border-radius: 15px;"
         src = "../assets/SMpost23-10.png"></q-img> 
       </div>      
    </div>

    <div class="row light-yellow-back padded">
      <div class="col-6 col-md-6 col-sm-12 col-xs-12 flex flex-start-center flex-col">
        <h2 class="text-dark-green">共學島是什麼？</h2>
        <h4 class="text-dark-gray text-left home-des">我們讓孩子飛，<br/>為人父母的你讓心自由。</h4>
        <p class="home-des">不只孩子渴望釋放內在的超能力，為人父為人母的你，也在探索的過程，對內重新認識自己，對外發現新世界。掙脫傳統框架，期望發現更好的教育模式，在體制內和體制外尋找平衡點，和孩子一起自由翱翔於無垠的天空。我們都是超級英雄！</p>
        <q-btn to="/about" color="green margin" size="lg" rounded icon= "info"> 瞭解更多</q-btn>
      </div>
      <div class="col-6 col-md-6 col-sm-12 col-xs-12">
      </div>
    </div>

    <div class="row lw-back padded">
      <div class="col-6 col-md-6 col-sm-12 col-xs-12 flex flex-center flex-col">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 62%; height:  auto; border-radius: 15px;"
         src = "../assets/island-1.png"></q-img>
      </div>
      <div class="col-6 col-md-6 col-sm-12 col-xs-12 flex flex-start-center flex-col">
        <h2 class="text-dark-green">人生如處一孤島？</h2>
        <h4 class="text-dark-gray text-left home-des">海面上各自獨立，<br/>海床下彼此相連。</h4>
        <p class="home-des">不只孩子渴望釋放內在的超能力，為人父為人母的你，也在探索的過程，對內重新認識自己，對外發現新世界。掙脫傳統框架，期望發現更好的教育模式，在體制內和體制外尋找平衡點，和孩子一起自由翱翔於無垠的天空。我們都是超級英雄！</p>
      </div>
    </div>

    <div class="row light-yellow-back long-padded">
      <div class="col-4 col-md-4 col-sm-4 col-xs-12 flex flex-col flex-start-center">

        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 75%; height:  auto; border-radius: 15px;"
         src = "../assets/main001.png"></q-img>

        <h4 class="text-dark-gray home-des text-center">我之島</h4>
        <p class="home-des text-left">學習，從個體出發，從生存、到成長、到自我實現、到智慧傳承。</p>
      </div>

      <div class="col-4 col-md-4 col-sm-4 col-xs-12 flex flex-col flex-start-center">

        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 85%; height:  auto; border-radius: 15px; margin: 0 auto;"
         src = "../assets/main001.png"></q-img>

        <h4 class="text-dark-gray home-des text-center">世界之島</h4>
        <p class="home-des text-left">認識環境、進入人群、參與社會，從家庭、到社區、國家、世界、宇宙。</p>
      </div>

      <div class="col-4 col-md-4 col-sm-4 col-xs-12 flex flex-col flex-start-center">

        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 95%; height:  auto; border-radius: 15px;"
         src = "../assets/main001.png"></q-img>

        <h4 class="text-dark-gray home-des text-center">未來之島</h4>
        <p class="home-des text-left">立足現在，放眼未來。資訊革命與<a href="https://zh.wikipedia.org/zh-tw/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD" target="_blank" rel="noopener onreferrer">人工智能（Artificial Intelligence, AI）</a>的演進，已讓社會產生巨大變革。孩子是未來的主人翁，他們該何去何從？</p>
      </div>
    </div>

    <div class="row light-yellow-back long-padded">
      <div class="filler">
      </div>
      <div class="col-6 col-md-8 col-sm-10 col-xs-12 flex flex-start-center flex-col">
        <q-btn to="/articles" color="light-blue margin" size="lg" rounded icon= "info"> 看更多文章</q-btn>
      </div>
      <div class="filler">
      </div>
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
