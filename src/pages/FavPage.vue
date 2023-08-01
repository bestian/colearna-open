<template lang="pug">
q-page(padding)
  .row.flex.flex-start-center.long-padded(v-if="!uid")
    h2.text-dark-green 您尚未登入，請先登入或註冊
  .row.flex.flex-start-center.long-padded(v-else)
    h2.text-dark-green 施工中
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import {
  QCalendarMonth,
  today,
} from '@quasar/quasar-ui-qcalendar/src/index.js';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass';
import NavigationBar from '../components/NavigationBar.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CalenDar',
  props: ['photoURL', 'myName', 'myKey', 'classes', 'me'],
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  setup() {
    const metaData = {
      title: '我的收藏',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    const selectedDate = ref(today());
    const dateType = ref('square');
    const role = ref('家長');
    const op = ref('課程一覽');
    const filter_act = ref('所有課程');
    const action = ref('我的收藏');
    return {
      selectedDate,
      dateType,
      op,
      filter_act,
      action,
      role,
    };
  },
  mounted() {
    // ...
  },
  watch: {
    action(newA) {
      if (newA == '我的收藏') {
        const metaData2 = {
          title: '我的收藏',
          noscript: {
            default: 'This is content for browsers with no JS (or disabled JS)',
          },
        };
        useMeta(metaData2);
      }
      if (newA == '完成課程') {
        const metaData3 = {
          title: '我的課程',
          noscript: {
            default: 'This is content for browsers with no JS (or disabled JS)',
          },
        };
        useMeta(metaData3);
      }
    },
  },
  methods: {
    setRole(r: string) {
      this.role = r;
    },
    setFil(f: string) {
      this.filter_act = f;
    },
    setOp(o: string) {
      this.op = o;
    },
    onToday() {
      const cal: any = this.$refs.calendar;
      cal.moveToToday();
    },
    onPrev() {
      const cal: any = this.$refs.calendar;
      cal.prev();
    },
    onNext() {
      const cal: any = this.$refs.calendar;
      cal.next();
    },
    onMoved(data: string) {
      console.log('onMoved', data);
    },
    onChange(data: string) {
      console.log('onChange', data);
    },
    onClickDate(data: string) {
      console.log('onClickDate', data);
    },
    onClickDay(data: string) {
      console.log('onClickDay', data);
    },
    onClickWorkweek(data: string) {
      console.log('onClickWorkweek', data);
    },
    onClickHeadDay(data: string) {
      console.log('onClickHeadDay', data);
    },
    onClickHeadWorkweek(data: string) {
      console.log('onClickHeadWorkweek', data);
    },
  },
});
</script>

<style type="text/css" scoped>
.heart {
  position: relative;
  top: -0.7em;
  padding: 0.2em;
  left: 80%;
  border-radius: 50%;
  background-color: white;
  z-index: 99999;
}
</style>
