<template>
  <q-page id="ar-page" class="lw-back">
    <div class="article-container">
      <div class="row padded white-back">
        <h2 class="text-dark-gray">三月線上公益講座　這樣溝通，親子關係不緊繃</h2>
      </div>
      <div class="row long-padded-left flex flex-start-center">
        <q-img src="https://i.imgur.com/HJKHiU4.jpg" class="med avatar"></q-img>
        <div class="col col-xs-4 col-md-2 col-sm-3 flex flex-col margin padded">
          <p class="flex small">
            <span class="text-gray">by　</span><span class="text-dark-gray bold">Lydia</span></p>
          <p class="flex text-gray small">2023/03/30</p>
        </div>
        <div class="col flex flex-col margin padded">
          <div class="row flex flex-start-center clickable">
            <q-icon color="green" size="md" name="share"></q-icon>
          <p class="flex small text-gray" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://colearna.pages.dev/example_article')">分享此文章</p>
          </div>
        </div>
        <div class="filler"></div>
      </div>
      <div class="row white-back long-padded">
        <h6 class="text-dark-gray">讓熱愛旅行的你，輕鬆享受世界的一切美好旅行本來就該輕鬆愜意！我們的任務是在眾多令人眼花撩亂的旅遊體驗中，幫助旅客找到「想要的」跟「需要的」一切，讓每趟旅程充滿難忘的回憶。</h6>
        <p class="small">每一天，我們都在幫助旅客發掘全球最棒的景點、行程與最難忘的旅遊體驗！
  你可以從所有熱門的目的地中開始探索，並用最優惠的價格預訂任何行程與服務：從容不迫地搭上香港機場快綫、走進東京迪士尼滿足你的童趣之心，或在峇里島探索靜謐的海底世界⋯，專屬於你的旅程就此展開！
        </p>
      </div>
      <div class="row white-back long-padded">
        <q-img src="https://i.imgur.com/JO8sVpa.png" class="fluid"></q-img>
      </div>
      <div class="row white-back long-padded">
        
        <h6 class="text-dark-gray">讓熱愛旅行</h6>
        <p class="small">輕鬆享受世界的一切美好旅行本來就該輕鬆愜意！我們的任務是在眾多令人眼花撩亂的旅遊體驗中，幫助旅客找到「想要的」跟「需要的」一切，讓每趟旅程充滿難忘的回憶。</p>

        <h6 class="text-dark-gray">輕鬆享受世界</h6>
        <p class="small">每一天，我們都在幫助旅客發掘全球最棒的景點、行程與最難忘的旅遊體驗！<br/>你可以從所有熱門的目的地中開始探索，並用最優惠的價格預訂任何行程與服務：從容不迫地搭上香港機場快綫、走進東京迪士尼滿足你的童趣之心，或在峇里島探索靜謐的海底世界⋯，專屬於你的旅程就此展開！讓熱愛旅行的你，輕鬆享受世界的一切美好旅行本來就該輕鬆愜意！我們的任務是在眾多令人眼花撩亂的旅遊體驗中，幫助旅客找到「想要的」跟「需要的」一切，讓每趟旅程充滿難忘的回憶。</p>

        <h6 class="text-dark-gray">地搭上香港機場</h6>
        <p class="small">每一天，我們都在幫助旅客發掘全球最棒的景點、行程與最難忘的旅遊體驗！<br/>你可以從所有熱門的目的地中開始探索，並用最優惠的價格預訂任何行程與服務：從容不迫地搭上香港機場快綫、走進東京迪士尼滿足你的童趣之心，或在峇里島探索靜謐的海底世界⋯，專屬於你的旅程就此展開！讓熱愛旅行的你，輕鬆享受世界的一切美好旅行本來就該輕鬆愜意！我們的任務是在眾多令人眼花撩亂的旅遊體驗中，幫助旅客找到「想要的」跟「需要的」一切，讓每趟旅程充滿難忘的回憶。</p>

        <p class="small">每一天，我們都在幫助旅客發掘全球最棒的景點、行程與最難忘的旅遊體驗！<br/>你可以從所有熱門的目的地中開始探索，並用最優惠的價格預訂任何行程與服務：從容不迫地搭上香港機場快綫、走進東京迪士尼滿足你的童趣之心，或在峇里島探索靜謐的海底世界⋯，專屬於你的旅程就此展開！</p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'

import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'user', 'email', 'photoURL', 'isLogout', 'isInApp'],
  setup () {
    const metaData = {
      title: '這樣溝通，親子關係不緊繃',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)
    
    const meta = ref<Meta>({
      totalCount: 1200
    });
    const step = ref(0)

    return { meta, step };
  }, 
  mounted () {
    // setInterval(this.go, 1000)
  },
  methods: {
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

  #ar-page {
    padding-bottom: 4em;
  }

  .article-container {
    position: relative;
    top: 6em;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    width: 86%;
    min-width: 320px;
    max-width: 980px;
    margin-bottom: 12em;
  }

  h6 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Inter";
    margin-bottom: 20px;
  }

  p {
    color: #464444;
    font-size: 24px;
  }

  p.small {
    width: fit-content !important;
    font-size: 14px;
    font-family: "Inter";
    line-height: 1.6;
    margin: .1em;
  }

</style>
