<template>
  <q-page>
    <div class="row light-yellow-back long-padded">
      <h4 id="news-search" class="text-center med">
        <q-input v-model="myKey2" type="search" rounded="rounded" outlined="outlined" placeholder="搜尋">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
      </h4>
      <h4 class="text-center fluid">
        <q-btn unelevated rounded class="margin" @click="myKey2 = ''" :class="{ 'or-back': myKey2 == '', 'text-white': myKey2 == '', 'text-gray': myKey2 != '', 'gray-bordered': myKey2 != '' }">全部文章</q-btn>
        <q-btn unelevated rounded class="margin" v-for = "(c, idx) in cs" :key="idx" @click="myKey2 = c" :class="{ 'or-back': myKey2 == c, 'text-white': myKey2 == c, 'text-gray': myKey2 != c, 'gray-bordered': myKey2 != c}"> {{ c }}</q-btn>
      </h4>
    </div>
    
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

  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ArticlesPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'articles', 'trips', 'user', 'email', 'photoURL', 'isLogout', 'isInApp', 'myKey', 'dummyImg'],
  setup () {

    const metaData = {
      title: '最新消息',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)

    const meta = ref<Meta>({
      totalCount: 1200
    });
    const step = ref(0)
    const myKey2 = ref('')
    const slide = ref('style')
    const cs = ref(['專欄', '訪談', '親職', '最新消息'])

    return { meta, step, myKey2, slide, cs };
  }, 
  mounted () {
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
    },
    noHTML (html:string) {
      return html.replace(/<\/?div.+?>/g, '')
        .replace(/<p>/g, '')
        .replace(/<\p>/g, '')
    },
    gotoA (aid:string) {
      this.$router.push('/zoom_in_art/' + aid)
    }
  }
});
</script>

<style scoped>

/* Single Page Style*/

</style>
