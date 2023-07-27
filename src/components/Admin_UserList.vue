<template>
  <q-list>
    <q-item
      v-for="(u, k) in Object.values(users)"
      :key="k"
      class="flex-col flex-start-center"
    >
      <div class="row flex flex-start-center">
        <p class="fluid">
          <q-checkbox v-model="checked[k]"></q-checkbox>
          {{ u.name }}({{ u.email }})
        </p>
      </div>
    </q-item>
  </q-list>

  <q-list>
    <div class="row flex flex-center">
      <vue-excel-xlsx
        :data="toArray(users)"
        :columns="toColumns(users)"
        :file-name="'Colearna-users-export-' + today()"
        :file-type="'xlsx'"
        :sheet-name="'users'"
        class="xlsx-button"
        >儲存為xlsx檔<q-icon name="download"></q-icon>
      </vue-excel-xlsx>
    </div>
    <q-item v-for="(u, k) in users" :key="k" class="flex-col flex-start-center">
      <div class="row flex flex-start-center">
        <p class="fluid">
          {{ u.name }}({{ u.email }})
          <br />
          <span class="tiny" v-show="u.childern">孩子：</span>
          <span
            class="tiny"
            v-for="(c, j) in u.childern"
            :key="u.email + '_' + j"
          >
            {{ c.name }} ({{ c.gender }}) ({{ c.date }})
          </span>
        </p>
        <q-btn
          class="margin"
          rounded
          icon="send"
          color="orange"
          @click="editEmail(u.email)"
          >發送Email</q-btn
        >
        <q-btn
          class="margin"
          rounded
          icon="restart_alt"
          color="purple"
          v-if="u.provider == 'email'"
          @click="forgetPassWord(u.email)"
          >重設密碼</q-btn
        >
        <q-btn
          class="margin"
          rounded
          icon="delete"
          color="blue"
          @click="deleteUser(u.id)"
          >刪除帳號</q-btn
        >
      </div>
      <div class="row flex flex-center" v-show="reciever == u.email">
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
            @click="mailto(reciever, mySubject, myHTML)"
            >寄出</q-btn
          >
        </q-form>
      </div>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'UserList',
  props: {
    users: {
      type: Object,
      default: () => {
        return { id: 'test', name: 'test' };
      },
    },
  },
  setup() {
    const mySubject = ref('');
    const myHTML = ref('');
    const reciever = ref('');
    const arr: any = ref([]);
    const checked = ref(arr);

    return {
      mySubject,
      myHTML,
      reciever,
      checked,
    };
  },
  methods: {
    today() {
      return new Date().toLocaleDateString();
    },
    toColumns(obj: any) {
      // console.log(obj);
      let keys = Object.keys(obj.uh5kMlNL9DYL2b411ORz65TGQRK2);
      const ans = keys.map(function (k: any) {
        return {
          label: k,
          field: k,
        };
      });
      return ans;
    },
    mailto(email: string, subject: string, html: string) {
      this.$emit('mailto', email, subject, html);
      this.mySubject = '';
      this.myHTML = '';
      this.reciever = '';
    },
    toArray(obj: any) {
      const keys = Object.keys(obj);
      // console.log(keys)
      var ans: Array<any> = [];
      for (var i = 0; i < keys.length; i++) {
        const o = { ...obj[keys[i]] };
        o.childern = (o.childern || [])
          .map(function (c: any, idx: number) {
            return (
              '孩子' +
              (idx + 1) +
              ': ' +
              c.name +
              '(' +
              c.gender +
              ', 生日: ' +
              c.date +
              ')'
            );
          })
          .join(' \n ');
        // console.log(o)
        ans.push(o);
      }
      return ans;
    },
  },
});
</script>
