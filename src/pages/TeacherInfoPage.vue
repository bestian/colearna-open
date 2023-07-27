<template>
  <q-page :padding="true">
    <div class = "row padded flex flex-center text-left">
      <q-img :src="teachers[$route.params.tid].img" style="width: 150px; height: 150px; border-radius:50%; margin-left: 2em;"></q-img>
      <div class="col-4">
        <h4 class="margin-left">{{teachers[$route.params.tid].name}}</h4>
        <h6 class="text-blue margin-left">
          <q-icon name="check_circle"></q-icon>
        Colearna 認證</h6>
      </div>
    </div>
    <q-separator />
    <div class = "row padded">
      <div class="col-12">
        <h4 class="text-left text-dark-green"><q-icon name = "edit_note"></q-icon>簡介</h4>
        <p v-html="teachers[$route.params.tid].des"></p>
      </div>
    </div>
    <div class = "row padded">
      <div class="col-12">
        <h4 class="text-left text-dark-green"><q-icon name = "
  lightbulb_outline"></q-icon>教學理念</h4>
        <p v-html="teachers[$route.params.tid].thought"></p>
      </div>
    </div>
    <div class = "row padded" v-show = "teachers[$route.params.tid].certifications">
      <div class="col-12">
        <h4 class="text-left text-dark-green"><q-icon name = "school"></q-icon>專業證照</h4>
        <q-list>
          <q-item class="text-dark-gray text-left p-16" v-for="(c,j) in teachers[$route.params.tid].certifications" :key="j">{{j+1}}：{{c}}</q-item>
        </q-list>
      </div>
    </div>
    <q-separator></q-separator>

    <div class = "row padded">
      <div class="col-12">
        <h4 class="text-left text-dark-green"><q-icon name = "maps_home_work"></q-icon>開辦課程</h4>
        <p class="text-dark-gray fluid text-left" v-for="(c,k) in teachers[$route.params.tid].classes" :key="k">{{c}}</p>
        <p class="text-dark-gray fluid text-left" v-show="!teachers[$route.params.tid].classes">邀約中</p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'user', 'email', 'photoURL', 'isLogout', 'isInApp', 'teachers'],
  setup (props) {

    const route = useRoute()

    const metaData = {
      title: props.teachers[Number(route.params.tid)].name,
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)

    const meta = ref<Meta>({
      totalCount: 1200
    });
    const done1 = ref(false)
    const done2 = ref(false)
    const done3 = ref(false)
    const name = ref('')
    const new_email = ref('')
    const slide = ref('style')
    const step = ref(1)
    const myKey2 = ref('')

    return { name, new_email, meta, step,
      slide, myKey2, done1, done2, done3 };
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

<style scoped>
/* Single Page Style */

.q-page {
  max-width: 920px;
  margin: 0 auto;
}

.text-dark-green .q-icon.material-icons {
  font-size: 66px;
}

p {
  max-width: 780px;
  margin-right: auto;
}

</style>
