<template>
  <q-list class="flex flex-col">
    <q-item
      v-for="(u, k) in users"
      :key="'usr_' + k"
      v-show="true || u.isTeacher"
      class="flex flex-col"
    >
      <p class="fluid bold">
        <q-img
          v-show="u.photoURL || u.img"
          class="avatar margin"
          :src="u.photoURL || u.img"
          :alt="u.name"
        ></q-img>
        {{ u.name }}({{ u.email }})
      </p>
      <q-checkbox
        v-model="showTeacherUser[u.id]"
        label="顯示於網站"
        v-on:click="updateTeacherUsers"
      ></q-checkbox>
      <p class="fluid">簡介<br />{{ u.des }}</p>
      <p class="fluid">理念<br />{{ u.thought }}</p>
      <p>專業證照</p>
      <ul v-if="u.certifications">
        <li v-for="(c, j) in u.certifications" :key="k + '_' + j">
          {{ c }}
        </li>
      </ul>
    </q-item>
    <q-item v-for="(t, k) in teachers" :key="k" class="flex flex-col">
      <p class="fluid bold">
        <q-img class="avatar margin" :src="t.img" :alt="t.name"></q-img>
        {{ t.name }}
      </p>
      <q-checkbox
        v-model="showTeacher[k]"
        label="顯示於網站"
        v-on:click="updateTeachers"
      ></q-checkbox>
      <p class="fluid" v-html="'簡介<br/>：' + t.des"></p>
      <p class="fluid" v-html="'理您<br/>：' + t.thought"></p>
      <p>專業證照</p>
      <ul v-if="t.certifications">
        <li v-for="(c, j) in t.certifications" :key="k + '_' + j">
          {{ c }}
        </li>
      </ul>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'TeacherList',
  props: {
    users: {
      type: Object,
      default: () => {
        return { id: 'test', name: 'test' };
      },
    },
    teachers: {
      type: Object,
      default: () => {
        return { id: 'test', name: 'test' };
      },
    },
  },
  setup() {
    const obj: any = {};
    const showTeacherUser = ref(obj);
    return {
      showTeacherUser,
    };
  },
  methods: {
    updateTeacherUsers() {
      // console.log('updateTeachers')
      const ks = Object.keys(this.showTeacherUser);
      // console.log(this.showTeacherUser)
      for (let k = 0; k < ks.length; k++) {
        if (this.showTeacherUser[ks[k]]) {
          set(dbRef(db, 'users/' + ks[k] + '/showTeacher'), true);
          set(dbRef(db, 'users_public/' + ks[k] + '/showTeacher'), true);
        } else {
          set(dbRef(db, 'users/' + ks[k] + '/showTeacher'), false);
          set(dbRef(db, 'users_public/' + ks[k] + '/showTeacher'), false);
        }
      }
    },
  },
});
</script>
