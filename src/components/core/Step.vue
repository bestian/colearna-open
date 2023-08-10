<template lang="pug">
q-pa-md
  h4.text-dark-green {{parsedSteps.intros[0]}}
  div(v-if="parsedSteps && parsedSteps.intros && parsedSteps.intros.length > 0")
    h6.text-dark-gray(v-for="(intro, idx) in parsedSteps.intros", :key="idx") {{intro}}

  q-stepper(v-model="step", header-nav, ref="stepper", color="primary", animated, rounded, bordered, vertical)
    q-step(v-for="(m, k) in parsedSteps.steps", :name="k", :title="m.n", icon="blind", :done="step > k")
      router-link(v-if="m.r", :to="m.r") {{m.n}}
      a(v-else-if="m.h", :href="m.h", target="_blank", rel="noopener noreferrer") {{m.n}}
      p(v-else) {{(m.n || '')}}
</template>

<script lang="ts">
import { parseMarkdownToSteps } from 'edu-lang';
import { defineComponent, ref, computed, onMounted } from 'vue';
export default defineComponent({
  name: 'StepPer',
  props: {
    steps: {
      type: String,
      default: `
      學習料理的步驟有哪些？
      讓我們來看看吧！

        1.先在家裡廚房幫忙
        2.觀察外食店家的食材搭配
        3.採購的時候，幫忙一起採購
        `,
    },
  },
  setup(props) {
    const step = ref(0);

    onMounted(() => {
      console.log('mounted');
      console.log(props.steps);
      console.log(parseMarkdownToSteps(props.steps));
    });

    return {
      step,
      parseMarkdownToSteps,
      parsedSteps: computed(() => parseMarkdownToSteps(props.steps)),
    };
  },
});
</script>

<style type="text/css" scoped></style>
