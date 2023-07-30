<template lang="pug">
q-page(padding)
.row.flex.flex-center
  colerana-step()
.row.flex.flex-center
  .col-md-8.col-sm-6.col-xs-12.red.text-center Hello World!
  .col-md-4.col-sm-6.col-xs-12.text-center
    strong {{h}}
      | Holiday!
  ul
    li(v-for="(item, index) in list", :key="index") {{item}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ColearnaStep } form '@/compoments/core/Step.vue'
export default defineComponent({
  name: 'SandBox',
  components: {
    ColearnaStep
  },
  data () {
    return {
      h: 'Happy New',
      list: [
        0,1,2,3,4,5
      ]
    }
  }
})
</script>

<style type="text/css" scoped>
.red {
  color: red;
}
</style>
