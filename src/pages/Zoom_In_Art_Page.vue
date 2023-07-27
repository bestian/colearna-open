<template>
  <q-page id="ar-page" class="lw-back">
    <div
      class="article-container"
      v-if="articles && articles[$route.params.aid]"
    >
      <div class="row padded white-back">
        <h2 class="text-dark-gray">{{ articles[$route.params.aid].title || $route.params.aid }}</h2>
      </div>
      <div class="row long-padded-left flex flex-start-center">
        <q-img
          :src="articles[$route.params.aid].img || dummyImg"
          class="med avatar back"
        ></q-img>
        <div class="col col-xs-4 col-md-2 col-sm-3 flex flex-col margin padded">
          <p class="flex small">
            <span class="text-gray">by　</span
            ><span class="text-dark-gray bold">{{
              articles[$route.params.aid].author || '共學島團隊 + chatGPT'
            }}</span>
          </p>
        </div>
        <div class="col flex flex-col margin padded">
          <div class="row flex flex-start-center clickable">
            <q-icon color="green" size="md" name="share"></q-icon>
            <p
              class="flex small text-gray"
              onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://colearna.pages.dev/example_article')"
            >
              分享此文章
            </p>
          </div>
        </div>
        <div class="filler"></div>
      </div>
      <div class="row white-back long-padded">
        <div v-html="articles[$route.params.aid].text"></div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AboutPage',
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
    'articles',
    'dummyImg'
  ],
  setup(props) {
    const route = useRoute();
    const metaData = {
      title: props.articles[String(route.params.aid)].title,
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const step = ref(0);

    return { meta, step };
  },
  mounted() {
    // setInterval(this.go, 1000)
  },
  methods: {
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
  font-family: 'Inter';
  margin-bottom: 20px;
}

p {
  color: #464444;
  font-size: 24px;
}

p.small {
  width: fit-content !important;
  font-size: 18px;
  font-family: 'Inter';
  line-height: 1.6;
  margin: 0.1em;
}
</style>
