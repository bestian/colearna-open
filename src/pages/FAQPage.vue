<template lang="pug">
q-page.faq
  .row.padded
    h4 施工中
</template>

<script lang="ts">
import { useMeta } from 'quasar';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FAQPage',
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
  ],
  setup() {
    const show = ref([]);
    const metaData = {
      title: 'FAQ',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const step = ref(0);

    return { step, show };
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
.faq {
  max-width: 680px;
  margin: 0 auto;
  background-color: #eee;
}

.about_card {
  width: 45%;
  margin: 1.6em;
  min-width: 360px;
  max-width: 380px;
  height: 600px;
  padding: 1em;
}

.about_card h4 {
  font-size: 28px;
  font-weight: 700;
  font-family: 'Inter';
  margin-bottom: 2em;
}

.about_card p {
  font-size: 24px;
  font-weight: 400;
  font-family: 'Inter';
}

.bk {
  background-image: url('/img/about_decade_bk.png');
  background-repeat: no-repeat;
  overflow: visible;
  padding: 0;
  height: 3em;
  width: 6em;
}

h6 {
  font-size: 24px;
  font-weight: 700;
  font-family: 'Inter';
  margin-bottom: 20px;
}

p,
button {
  padding: 0;
  margin: 0.2em;
  color: black;
  font-size: 16px;
}

button:hover {
  text-decoration: underline;
}

.q-separator {
  margin-top: 1em;
  margin-bottom: 1em;
}

.q-btn:hover {
  text-decoration: underline;
}
/* Single Page Style*/
</style>
