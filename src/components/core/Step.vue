<template lang="pug">
q-pa-md
  h4.text-dark-green {{ parsedSteps.intro[0] }}
  div(v-if="parsedSteps.intro.length > 1")
    h6.text-dark-green(v-for = "(intro, idx)", :key="idx") {{ intro }}
  q-stepper(v-model="step", header-nav, ref="stepper", color="primary", animated, rounded, bordered, vertical)
    q-step(v-for="(m, k) in parsedSteps.steps", :name="k", :title="m.n", icon="blind", :done="step > k")
      a(v-show="m.h", :href="m.h", target="_blank", rel="noopener noreferrer") {{m.n}}
      p(v-show="!m.h") {{(m.n || '')}}


</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
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
    const step = ref(1);
    function parseMarkdown(markdownText) {
      const lines = markdownText.split('\n');
      const pattern = /\[(.*?)\]\((.*?)\)/;
      const steps = [];
      const intros = [];
      let found_number = false;

      for (const line of lines) {
        const trimmedLine = line.trim();
        // Skip empty lines
        if (!trimmedLine) {
          continue;
        }

        // Check if the line starts with a number
        if (/^\d/.test(trimmedLine)) {
          found_number = true;
        }

        // If we haven't found a line starting with a number, accumulate the lines
        if (!found_number) {
          intros.push(trimmedLine);
          continue;
        }

        const matches = trimmedLine.match(pattern);
        if (matches && matches.length >= 3) {
          steps.push({
            h: matches[2],
            n: matches[1],
          });
        } else {
          steps.push({
            n: trimmedLine,
          });
        }
      }

      // Insert the accumulated intro text as the first item
      result.unshift({ n: intro_text.join('\n') });
      return result;
    }

    return {
      step,
      parseMarkdown,
      parsedSteps: computed(() => parseMarkdown(props.steps)),
    };
  },
});
</script>

<style type="text/css" scoped></style>
