<template>
  <q-page padding>
    <div class="row">
      <h2 class="text-dark-green text left bold no-margin">我的課程</h2>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="row flex flex-start-center">
          <q-img class="avatar" :src="photoURL"></q-img>
          <h2 class="text-dark-green text left margin">{{myName}}</h2>
        </div>
      </div>
      <div class="filler"></div>
      <div class="col-sm-6 col-md-4">
        <div class="row flex flex-start-center">
          <div class="col-6 clickable" @click="action = '完成課程'">
            <h1 class="text-center bold no-margin"  :class="{
              'text-gray': action == '我的收藏', 'text-dark-green': action == '完成課程'  }">12</h1>
            <h6 class="text-gray bold text-center no-margin">完成課程</h6>
          </div>
          <div class="col-6 clickable" @click="action = '我的收藏'">
            <h1 class="bold text-center no-margin" :class="{
              'text-gray': action == '完成課程', 'text-dark-green': action == '我的收藏'  }">10</h1>
            <h6 class="text-gray bold text-center no-margin">我的收藏</h6>
          </div>
        </div>
      </div>
    </div>
     <div class="row justify-center fluid">
      <div class="subcontent fluid">
        <navigation-bar
          :me = "me"
          :selectedDate = "selectedDate"
          :op = "op"
          :filter_act = "filter_act"
          :role = "role"
          @setRole="setRole"
          @setOp="setOp"
          @setFil="setFil"
          @today="onToday"
          @prev="onPrev"
          @next="onNext"
        />
        <div class="row justify-center" v-show="op == '課程一覽'">
          <q-card class="my-card" v-for = "(r, k) in fil(Object.values(classes || {}), myKey)" :key="k" v-show = "action == '完成課程'">
            <img :src="r.img" :alt="r.des">
            <q-card-section class="col flex flex-col">
              <div class="filler"></div>
              <div class="my-card-title">{{r.des}}</div>
              <div class="row">
                <p class="text-black bold fluid px-16">
                  <img :src="r.teacher_img" class="avatar float right">
                  {{r.teacher}}
                  <br/>
                  <span class="text-gray bold">{{(r.tags || []).join(' / ')}}</span>
                </p>
                <h6 class="fluid text-left text-orange no-margin">
                  {{r.price}}
                  <q-btn class="float right lg-back no-border text-white" rounded :to="'/class_info/' + k">立即報名</q-btn>
                </h6>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="my-card" v-for = "(r, k) in fil(Object.values(classes || {}), myKey).slice(0, 4)" :key="k" v-show = "action == '我的收藏' && (me.likes || []).indexOf(r.id) > -1">
            <img :src="r.img" :alt="r.des">
            <q-icon name="favorite" color="red" class="heart" size="md"></q-icon>
            <q-card-section class="col flex flex-col">
              <div class="filler"></div>
              <div class="my-card-title">{{r.des}}</div>
              <div class="row">
                <p class="text-black bold fluid px-16">
                  <img :src="r.teacher_img" class="avatar float right">
                  {{r.teacher}}
                  <br/>
                  <span class="text-gray bold">{{(r.tags || []).join(' / ')}}</span>
                </p>
                <h6 class="fluid text-left text-orange no-margin">
                  {{r.price}}
                  <q-btn class="float right lg-back no-border text-white" rounded :to="'/class_info/' + k">立即報名</q-btn>
                </h6>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="row justify-center" v-show="op == '月'">
          <div style="display: flex; max-width: 800px; width: 100%;">
            <q-calendar-month
              ref="calendar"
              v-model="selectedDate"
              :date-type="dateType"
              :day-min-height="40"
              animated
              bordered
              @change="onChange"
              @moved="onMoved"
              @click-date="onClickDate"
              @click-day="onClickDay"
              @click-workweek="onClickWorkweek"
              @click-head-workweek="onClickHeadWorkweek"
              @click-head-day="onClickHeadDay"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
import NavigationBar from '../components/NavigationBar.vue'


import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CalenDar',
  props: ['photoURL', 'myName', 'myKey', 'classes', 'me'],
  components: {
    NavigationBar,
    QCalendarMonth
  },
  setup () {
    const metaData = {
      title: '我的收藏',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)
    const selectedDate = ref(today())
    const dateType = ref('square')
    const role = ref('家長')
    const op = ref('課程一覽')
    const filter_act = ref('所有課程')
    const action = ref('我的收藏')
    return {
      selectedDate, dateType, op, filter_act, action, role
    }
  },
  mounted () {
    // ...
  },
  watch: {
    action (newA) {
      if (newA == '我的收藏') {
        const metaData2 = {
          title: '我的收藏',
          noscript: {
            default: 'This is content for browsers with no JS (or disabled JS)'
          }
        }
        useMeta(metaData2)
      }
      if (newA == '完成課程') {
        const metaData3 = {
          title: '我的課程',
          noscript: {
            default: 'This is content for browsers with no JS (or disabled JS)'
          }
        }
        useMeta(metaData3)
      }
    }
  },
  methods: {
    setRole (r:string) {
      this.role = r
    },
    setFil (f:string) {
      this.filter_act = f
    },
    setOp (o:string) {
      this.op = o
    },
    onToday () {
      const cal: any = this.$refs.calendar
      cal.moveToToday()
    },
    onPrev () {
      const cal: any = this.$refs.calendar
      cal.prev()
    },
    onNext () {
      const cal: any = this.$refs.calendar
      cal.next()
    },
    onMoved (data:string) {
      console.log('onMoved', data)
    },
    onChange (data:string) {
      console.log('onChange', data)
    },
    onClickDate (data:string) {
      console.log('onClickDate', data)
    },
    onClickDay (data:string) {
      console.log('onClickDay', data)
    },
    onClickWorkweek (data:string) {
      console.log('onClickWorkweek', data)
    },
    onClickHeadDay (data:string) {
      console.log('onClickHeadDay', data)
    },
    onClickHeadWorkweek (data:string) {
      console.log('onClickHeadWorkweek', data)
    }
  }
})
</script>

<style type="text/css" scoped>
  .heart {
    position: relative;
    top: -.7em;
    padding: .2em;
    left: 80%;
    border-radius: 50%;
    background-color: white;
    z-index: 99999;
  }
</style>