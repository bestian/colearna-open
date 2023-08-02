<template lang="pug">
q-page(padding)
  step(:steps="steps")
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import Step from '../components/core/Step.vue';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  components: {
    Step,
  },
  props: [
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
  ],
  setup() {
    const metaData = {
      title: '聯絡我們',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    return {
      steps: ref(
        `
        要如何參與本專案的開發呢？

        #join #open-source #contribute

        1. [先進入此專案](https://www.github.com/bestian/colearna-open/)
        2. [看Wiki](https://github.com/bestian/colearna-open/wiki)
        3. [看README.md](https://github.com/bestian/colearna-open#readme)
        4. [錯誤回報和功能建議，請上Issues](https://github.com/bestian/colearna-open/issues)
        `
      ),
    };
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

<style scopoed>
/* Single Page Style*/
</style>
