<template>
  <div class="row flex flex-center">
    <h2 class="text-dark-green">對所有人發送email</h2>

    <q-form class="fluid">
      <q-input
        outlined
        rounded
        v-model="mySubject"
        placeholder="標題"
      ></q-input>
      <q-editor
        class="fluid"
        v-model="myHTML"
        placeholder="內文(支援HTML格式)"
      ></q-editor>
      <q-btn
        class="margin"
        color="blue"
        icon="send"
        @click="mailtoall(mySubject, myHTML)"
        >寄出</q-btn
      >
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'SendEmail',
  setup() {
    const mySubject = ref('');
    const myHTML = ref('');
    return {
      mySubject,
      myHTML,
    };
  },
  props: {
    users: {
      type: Object,
      default: () => {
        return { id: 'test', name: 'test' };
      },
    },
  },
  methods: {
    mailtoall(subject: string, html: string) {
      const us = Object.values(this.users);
      // console.log(this.users);
      us.forEach((o: any) => {
        console.log('a');
        console.log(subject);
        console.log(o.email);
        this.$emit('mailto', o.email, subject, html);
        console.log('b');
      });
      this.mySubject = '';
      this.myHTML = '';
    },
  },
});
</script>
