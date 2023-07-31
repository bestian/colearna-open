<template lang="pug">

q-stepper(v-model="step", ref="stepper", color="primary", animated)
  q-step(:name="1", title="Select campaign settings", icon="settings", :done="step > 1") For each ad campaign that you create, you can control how much you&apos;re willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
  q-step(:name="2", title="Create an ad group", caption="Optional", icon="create_new_folder", :done="step > 2") An ad group contains one or more ads which target a shared set of keywords.
  q-step(:name="3", title="Ad template", icon="assignment", disable) This step won&apos;t show up because it is disabled.
  q-step(:name="4", title="Create an ad", icon="add_comment") Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they&apos;re running and how to resolve approval issues.
  template(v-slot:navigation)
    q-stepper-navigation
      q-btn(@click="$refs.stepper.next()", color="primary", :label="step === 4 ? 'Finish' : 'Continue'")
      q-btn.q-ml-sm(v-if="step > 1", flat, color="primary", @click="$refs.stepper.previous()", label="Back")



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
