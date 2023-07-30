<template lang="pug">
q-list
  q-item.flex.flex-col(v-for="(i, k) in myMarquees", :key="k")
    q-input.margin.fluid(type="text", label="跑馬燈文字", v-model="i.text", placeholder="跑馬燈文字")
    q-input.margin.fluid(type="text", label="超連結", v-model="i.href", placeholder="超連結")
    .row.flex.flex-center
      q-btn.margin(color="primary", rounded, @click="updateM(k)")
        q-icon(name="update")
        | 更新
      q-btn.margin(color="blue", rounded, @click="copyM(k)")
        q-icon(name="content_copy")
        | 複製
      q-btn.margin(color="red", rounded, @click="removeM(k)")
        q-icon(name="delete")
        | 刪除
  q-separator
  .row.flex.flex-center.long-padded
    q-btn.margin(color="secondary", rounded, @click="addM()")
      q-icon(name="add")
      | 新增一個跑馬燈
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'MarqueesList',
  props: ['marquees', 'logs', 'uid'],
  setup() {
    const arr1: any = [];
    const myMarquees = ref(arr1);
    return {
      myMarquees,
    };
  },
  mounted() {
    if (this.marquees) {
      this.myMarquees = [...this.marquees] || [];
      this.$forceUpdate();
    }
  },
  watch: {
    marquees(newM) {
      console.log('marquees changed!');
      console.log(newM);
    },
  },
  methods: {
    addM() {
      var arr = [...this.myMarquees];
      arr.push({
        text: '',
        href: '',
      });
      this.myMarquees = [...arr];
    },

    copyM(k: number) {
      const ms = [...this.marquees];
      const newIdx = ms.length;
      set(dbRef(db, 'marquees/' + newIdx), this.marquees[k]).then(() => {
        console.log('marquee copied!');
        window.alert('跑馬燈已複製');
      });
    },
    updateM(j: number) {
      console.log(j);
      console.log('updating...');

      set(dbRef(db, 'marquees/' + j), {
        text: this.myMarquees[j].text,
        href: this.myMarquees[j].href,
      }).then(() => {
        console.log('marquees updated!');
        window.alert('跑馬燈已更新');
      });

      const logs: Array<any> = [...this.logs] || [];
      logs.push({
        time: new Date().getTime(),
        msg:
          '跑馬燈(<a href="' +
          this.myMarquees[j].href +
          '" target="_blank" rel="noopener norefferer">' +
          this.myMarquees[j].text +
          '</a>)已更新',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });
    },
    removeM(j: number) {
      if (window.confirm('確定要移除此跑馬燈內容嗎？此動作無法復原')) {
        var arr: any[] = [];
        for (let k = 0; k < arr.length; k++) {
          if (k != j) {
            arr.push(this.myMarquees[k]);
          }
        }
        const logs: Array<any> = [...this.logs] || [];

        logs.push({
          time: new Date().getTime(),
          msg:
            '跑馬燈(<a href="' +
            this.myMarquees[j].href +
            '" target="_blank" rel="noopener norefferer">' +
            this.myMarquees[j].text +
            '</a>)已移除',
          from: this.uid,
          type: '管理員',
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        set(dbRef(db, 'marquees'), arr).then(() => {
          console.log('marquees removed!');
          window.alert('跑馬燈已移除');
        });
      }
    },
  },
});
</script>
