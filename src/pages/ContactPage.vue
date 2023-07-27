<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      :autoplay="2500"
      :infinite="true"
      :swipeable="true"
      :transition-duration="1500"
      control-color="primary"
      class="no-border"
    >
      <q-carousel-slide name="style" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style1" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style2" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'

import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'user', 'email', 'photoURL', 'isLogout', 'isInApp'],
  setup () {
    const metaData = {
      title: '聯絡我們',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)

    const meta = ref<Meta>({
      totalCount: 1200
    });
    const step = ref(0)

    return { meta, step };
  }, 
  mounted () {
    // setInterval(this.go, 1000)
  },
  methods: {
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
    }
  }
});
</script>

<style scopoed>

/* Single Page Style*/

</style>
