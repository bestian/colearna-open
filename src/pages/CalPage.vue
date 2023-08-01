<template lang="pug">
q-page(padding)
  .row.flex.flex-start-center.long-padded(v-if="!uid")
    h2.text-dark-green 您尚未登入，請先登入或註冊
  .row.flex.flex-start-center.long-padded(v-else)
    h2.text-dark-green 施工中
  // div(v-else)
    .row
      h2.text-dark-green.text.left.bold.no-margin 我的活動
    .row
      .col-sm-6.col-md-4
        .row.flex.flex-start-center
          q-img.avatar(:src="photoURL")
          h2.text-dark-green.text.left.margin {{myName}}
      .filler
      .col-sm-6.col-md-4
        .row.flex.flex-start-center
          .col-6.clickable(@click="action = '完成活動'")
            h1.text-center.bold.no-margin(:class=`{
                'text-gray': action == '我的收藏', 'text-dark-green': action == '完成活動'  }`) 12
            h6.text-gray.bold.text-center.no-margin 完成活動
          .col-6.clickable(@click="action = '我的收藏'")
            h1.bold.text-center.no-margin(:class=`{
                'text-gray': action == '完成活動', 'text-dark-green': action == '我的收藏'  }`) 10
            h6.text-gray.bold.text-center.no-margin 我的收藏
    .row.justify-center.fluid
      .subcontent.fluid
        navigation-bar(:inTeacher ="false", :me ="me"
        , :selectedDate ="selectedDate", :op ="op", :filter_act ="filter_act", :role ="role", @setRole="setRole", @setOp="setOp", @setFil="setFil", @today="onToday", @prev="onPrev", @next="onNext")

        .row.justify-center(v-show="op == '活動一覽'")
          q-card.my-card(v-for ="(r, k) in my_paid(Object.values(classes || {}), (me.cart || []), (me.paid || []))', :key="k", v-show =' "action == '完成活動'')
            img(:src="r.img", :alt="r.des")
            q-card-section.col.flex.flex-col
              .filler
              .my-card-title {{r.des}}
              .row
                p.text-black.bold.fluid.px-16
                  img.avatar.float.right(:src="r.teacher_img")

                  | {{r.teacher}}

                  br
                  span.text-gray.bold {{(r.tags || []).join(' / ')}}
                h6.fluid.text-left.text-orange.no-margin {{r.price}}

                  q-btn.float.right.lg-back.no-border.text-white(rounded, :to="'/class_info/' + k") 立即報名
          q-card.my-card(v-for ="(r, k) in fil(Object.values(classes || {}), myKey).slice(0, 4)", :key="k", v-show = "action == '我的收藏' && (me.likes || []).indexOf(r.id) > -1")
            img(:src="r.img", :alt="r.des")
            q-icon.heart(name="favorite", color="red", size="md")
            q-card-section.col.flex.flex-col
              .filler
              .my-card-title {{r.des}}
              .row
                p.text-black.bold.fluid.px-16
                  img.avatar.float.right(:src="r.teacher_img")

                  | {{r.teacher}}

                  br
                  span.text-gray.bold {{(r.tags || []).join(' / ')}}
                h6.fluid.text-left.text-orange.no-margin {{r.price}}

                  q-btn.float.right.lg-back.no-border.text-white(rounded, :to="'/class_info/' + k") 立即報名

        .row.justify-center(v-show="op == '月'")
          div(style="display: flex; max-width: 1280px; width: 100%;")
            q-calendar-month(ref="calendar", v-model="selectedDate", :date-type="dateType", :day-min-height="20", animated, bordered, @change="onChange", @moved="onMoved", @click-date="onClickDate", @click-day="onClickDay", @click-workweek="onClickWorkweek", @click-head-workweek="onClickHeadWorkweek", @click-head-day="onClickHeadDay")
              template(#day="{ scope: { timestamp } }")
                template(v-for="(event, kk) in eventsMap[timestamp.date]", :key="event.id")
                  .my-event.clickable(:class="badgeClasses(kk, 'day', event.bgcolor || '')", :style="badgeStyles(kk, 'day')", @click.stop="goto('class_info/' + event.id.replace(/^.+:/,''))")
                     div.title.q-calendar__ellipsis") {{ event.date.replace(/^.+T/,'').replace(/\s-.+\d/,'') + '' + event.title.replace(/^.+｜/, '') }}
                      q-tooltip {{ event.des }}
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import {
  QCalendarMonth,
  // addToDate,
  parseDate,
  // parseTimestamp,
  today,
} from '@quasar/quasar-ui-qcalendar/src/index.js';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass';
import NavigationBar from '../components/NavigationBar.vue';

import { defineComponent, ref } from 'vue';

function getDay(day: any) {
  const newDay = new Date(day);
  const tm = parseDate(newDay);
  return tm.date;
}

function my_parse_dateTime(dt: string) {
  return dt
    .replace(/\s*\(.+\)\s*/, '')
    .replace(/T/, ' ')
    .replace(/\s+-\s*.+$/, '');
}

export default defineComponent({
  name: 'CalenDar',
  props: ['photoURL', 'myName', 'myKey', 'classes', 'me', 'uid'],
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  setup() {
    const metaData = {
      title: '我的活動',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    const selectedDate = ref(today());
    const dateType = ref('square');
    const role = ref('家長');
    const op = ref('月');
    const filter_act = ref('所有活動');
    const action = ref('完成活動');
    return {
      selectedDate,
      dateType,
      op,
      filter_act,
      action,
      role,
    };
  },
  computed: {
    eventsMap() {
      const map: any = {};
      var cls = Object.values(this.classes) || [];

      console.log(cls);

      if (cls && cls.length > 0) {
        if (this.filter_act == '由我開的活動') {
          cls = cls.filter((o: any) => {
            return o.tid == this.uid;
          });
        }

        if (this.filter_act == '所有活動') {
          cls = cls.filter((o: any) => {
            return (o.students || [])
              .map((s: any) => {
                return s.uid;
                console.log(s);
              })
              .includes(this.uid);
          });
          console.log(cls);
        }

        if (this.filter_act == '已結束活動') {
          cls = cls
            .filter((o: any) => {
              return (o.students || [])
                .map((s: any) => {
                  return s.uid;
                })
                .includes(this.uid);
            })
            .filter((o: any) => {
              let last = (o.classes || []).at(-1);
              if (!last) {
                return false;
              } else {
                let datetime =
                  last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                  'T' +
                  last.t;

                return (
                  new Date(my_parse_dateTime(datetime)).getTime() <
                  new Date().getTime()
                );
              }
            });
        }

        if (this.filter_act == '即將開課') {
          cls = cls
            .filter((o: any) => {
              return (o.students || [])
                .map((s: any) => {
                  return s.uid;
                })
                .includes(this.uid);
            })
            .filter((o: any) => {
              let last = (o.classes || []).at(-1);
              if (!last) {
                return false;
              } else {
                let datetime =
                  last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                  'T' +
                  last.t;

                return (
                  new Date(my_parse_dateTime(datetime)).getTime() -
                    new Date().getTime() >
                    -1000 * 60 * 60 * 24 * 1 &&
                  new Date(my_parse_dateTime(datetime)).getTime() -
                    new Date().getTime() <
                    1000 * 60 * 60 * 24 * 30
                );
              }
            });
        }

        cls = cls.map((o: any) => {
          let obj = { ...o };
          obj.date = o.startdate
            .replace(/\//g, '-')
            .replace(/\s*(\(.+\))/g, '')
            .replace(/T.+$/, '');
          console.log(obj.date);
          obj.dates = (o.classes || []).map((c: any) => {
            let date2 = getDay(
              c.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '')
            );
            return date2;
          });
          console.log(obj.dates);
          return obj;
        });

        cls.sort((a: any, b: any) => {
          console.log(a);
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        cls.forEach((ev: any) => {
          ev.dates.forEach((dt: string) => {
            (map[dt] = map[dt] || []).push(ev);
          });
        });
      }
      console.log(map);
      return map;
    },
  },
  mounted() {
    // console.log(today())
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
      if (newA == '完成活動') {
        const metaData3 = {
          title: '我的活動',
          noscript: {
            default: 'This is content for browsers with no JS (or disabled JS)',
          },
        };
        useMeta(metaData3);
      }
    },
  },
  methods: {
    goto(r: string) {
      this.$router.push('/' + r);
    },
    setRole(r: string) {
      this.role = r;
    },
    setFil(f: string) {
      this.filter_act = f;
    },
    setOp(o: string) {
      this.op = o;
    },
    badgeClasses(k: number, type: any, bgcolor: string) {
      // console.log(type)
      const colors = [
        'green',
        'brown',
        'red',
        'blue',
        'purple',
        'orange',
        'yellow',
      ];
      return {
        [`text-white bg-${bgcolor || colors[k]}`]: true,
        'rounded-border': true,
      };
    },
    badgeStyles(day: any) {
      const s: any = {};
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      if (day) {
        s.bottom = 1.2 * parseInt(day) + 0.4 + 'em';
      }
      // console.log(day)
      // console.log(event)
      return s;
    },
    onToday() {
      this.selectedDate = today();
      const cal: any = this.$refs.calendar;
      cal.moveToToday();
    },
    onPrev() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() - 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
      const cal: any = this.$refs.calendar;
      cal.prev();
    },
    onNext() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() + 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
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
