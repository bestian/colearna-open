<template>
  <h6 class="text-dark-gray text-center" v-if="noNewer()">
    目前沒有新老師申請
  </h6>
  <q-list class="flex flex-col">
    <q-item
      v-for="(r, k) in requests"
      :key="k"
      v-show="!r.approved && !r.rejected"
      class="flex flex-col"
    >
      <p class="fluid bold">{{ r.name }}({{ r.email }})</p>
      <p class="fluid">簡介{{ r.des }}</p>
      <p class="fluid">理念{{ r.thought }}</p>
      <p>專業證照</p>
      <ul v-if="r.certifications">
        <li v-for="(c, j) in r.certifications" :key="k + '_' + j">
          {{ c }}
        </li>
      </ul>
      <p>
        <q-btn unelevated rounded color="red" @click="reject(k)">拒絕</q-btn>
        <q-btn
          unelevated
          rounded
          class="or-back margin text-white"
          @click="approve(k)"
          >同意</q-btn
        >
      </p>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'NewTeacher',
  props: ['requests', 'users', 'logs', 'uid'],
  methods: {
    noNewer() {
      return (
        this.requests.filter((r: any) => !r.approved && !r.rejected).length ===
        0
      );
    },
    reject(k: number) {
      let arr = [...this.requests];
      arr[k].approved = false;
      arr[k].rejected = true;
      set(dbRef(db, 'requests'), arr).then(() => {
        console.log('request rejected');
      });
      const logs: Array<any> = [...this.logs] || [];
      logs.push({
        time: new Date().getTime(),
        msg:
          '新教師申請(id: ' +
          arr[k].uid +
          ', 名稱: ' +
          this.users[arr[k].uid] +
          ')已拒絕',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });
      let u = this.users[arr[k].uid] as any;
      let notifications = u.notifications || arr;
      notifications.push({
        time: new Date().getTime(),
        msg: '您的教師申請已被拒絕 (' + new Date().toString() + ')',
        route: 'teachers',
      });
      set(dbRef(db, 'users/' + arr[k].uid + '/notifications'), notifications);
      set(dbRef(db, 'users/' + arr[k].uid + '/isTeacher'), false).then(() => {
        window.alert('已拒絕申請');
      });
    },
    approve(k: number) {
      let arr = [...this.requests];

      arr[k].approved = true;

      set(dbRef(db, 'requests'), arr).then(() => {
        console.log('request approved');
      });

      const logs: Array<any> = [...this.logs] || [];

      logs.push({
        time: new Date().getTime(),
        msg:
          '新教師申請(id: ' +
          arr[k].uid +
          ', 名稱: ' +
          this.users[arr[k].uid].name +
          ')已同意',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });

      set(dbRef(db, 'users/' + arr[k].uid + '/des'), arr[k].des);
      set(dbRef(db, 'users/' + arr[k].uid + '/thought'), arr[k].thought);
      if (arr[k].certifications) {
        set(
          dbRef(db, 'users/' + arr[k].uid + '/certifications'),
          arr[k].certifications
        );
      }

      set(dbRef(db, 'users_public/' + arr[k].uid + '/isTeacher'), true).then(
        () => {
          'user\'s role updated';
        }
      );
      set(dbRef(db, 'users_public/' + arr[k].uid + '/des'), arr[k].des);
      set(dbRef(db, 'users_public/' + arr[k].uid + '/thought'), arr[k].thought);
      if (arr[k].certifications) {
        set(
          dbRef(db, 'users_public/' + arr[k].uid + '/certifications'),
          arr[k].certifications
        );
      }
      let u = this.users[arr[k].uid] as any;
      let notifications = u.notifications || arr;

      notifications.push({
        time: new Date().getTime(),
        msg: '您的教師申請已被核准 (' + new Date().toString() + ')',
        route: 'teachers',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'users/' + arr[k].uid + '/notifications'), notifications);

      set(dbRef(db, 'users/' + arr[k].uid + '/isTeacher'), true).then(() => {
        window.alert('已同意申請');
      });
    },
  },
});
</script>
