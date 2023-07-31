<template lang="pug">
q-page(padding)
.row.flex.flex-center
  step
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
