<template lang="pug">
q-page(padding)
  .row.flex.flex-center
    .col-xs-12.col-sm-6.col-md-6
      q-input(type="textarea", v-model="steps", outlined, cols="20", rows="15")
    .col-xs-12.col-sm-6.col-md-6
      step(:steps="steps")
  .small-space
  .row.flex.flex-center
    .col-md-8.col-sm-6.col-xs-12.red.text-center Hello World!
    .col-md-4.col-sm-6.col-xs-12.text-center
      strong {{h}}
        | Holiday!
    ul
      li(v-for="(item, index) in list", :key="index") {{item}}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Step from '../components/core/Step.vue';
import { useMeta } from 'quasar';
export default defineComponent({
  name: 'SandBox',
  components: {
    Step,
  },
  setup() {
    const metaData = {
      title: '沙盒',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    return {
      h: ref('Happy New'),
      list: ref([0, 1, 2, 3, 4, 5]),
      steps: ref(
        `
        學習料理的步驟有哪些？
        讓我們來看看吧！

        1.先在家裡廚房幫忙
        2.觀察外食店家的食材搭配
        3.採購的時候，幫忙一起採購
        4.可以到[自然美食DIY網站](https://food.bestian.tw)找食譜
        5.可以自己研發一些料理來嘗試看看
        6.還可以借圖書館的一些食譜書，學習健康飲食`
      ),
    };
  },
  mounted() {
    console.log('mounted');
  },
});
</script>

<style type="text/css" scoped>
.red {
  color: red;
}
</style>
