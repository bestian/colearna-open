<template lang="pug">


h2.text-dark-green 學習料理的步驟
q-stepper(v-model="step", header-nav, ref="stepper", color="primary", animated, rounded)
  q-step(:name="1", title="Step 1", icon="blind", :done="step > 1")
    h3 Step 1


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavBar',
  props: {
    testdata: {
      type: String,
      default: `
      ## 學習料理的步驟
        1.先在家裡廚房幫忙
        2.觀察外食店家的食材搭配
        3.採購的時候，幫忙一起採購
        4.可以到[自然美食DIY網站](https://food.bestian.tw)找食譜
        5.可以自己研發一些料理來嘗試看看
        6.還可以借圖書館的一些食譜書，學習健康飲食`,
    },
  },
  setup() {
    const step = ref(1);
    return {
      step,
    };
  },
});
</script>

<style type="text/css" scoped></style>
