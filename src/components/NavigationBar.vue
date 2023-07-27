<template lang="pug">
.row.padded
  .col-xs-12.col-sm-12.col-md-6
    .row
      q-btn.lg-border.text-dark-green.bold.margin.sp(rounded unelevated @click="toDay()") 今天
  .col-xs-12.col-sm-12.col-md-6
    .row.relative.flex-start-center
      .filler
      q-btn.lg-border.text-dark-green.bold.margin(rounded unelevated @click="showRole = true; showFil = false; showOp = false") {{role}}
        .filler
        q-icon.text-lg(name="expand_more")
      q-btn.lg-border.text-dark-green.bold.margin.sp(rounded unelevated @click="showFil = true; showOp = false; showRole = false") {{filter_act}}
        q-icon.text-lg(name="expand_more")
      q-btn.lg-border.text-dark-green.bold.margin(rounded unelevated @click="showOp = true; showFil = falseshowRole = false") {{op}}
        .filler
        q-icon.text-lg(name="expand_more")
    .row.relative.flex.flex-start-center.op-conatiner
      .filler
      q-list#op3(v-show="showRole")
        q-item.text-dark-green.flex.flex-start-center(clickable @click="setRole('老師')", v-show="inTeacher") 老師    
        q-item.text-dark-green.flex.flex-start-center(clickable @click="setRole('家長')", v-show="!inTeacher") 家長
        q-item.text-dark-green.flex.flex-start-center(clickable v-for="(c, l) in me.childern", :key="l", @click="setRole(c.name)", v-show="!inTeacher") 學生{{l+1}}：{{c.name}}
      q-list#op2(v-show="showFil")
        q-item.text-dark-green.flex.flex-start-center(clickable v-for="(f, j) in ['所有課程', '由我開的課程', '即將開課', '已結束課程']", :key="j", @click="setFil(f)") {{f}}
      q-list#op(v-show="showOp")
        q-item.text-dark-green.flex.flex-start-center(clickable v-for="(o, k) in ['月', '課程一覽']", :key="k", @click="setOp(o)") {{o}}
.row
  q-btn.no-border.text-gray.margin(unelevated @click="prev()")
    q-icon(name="arrow_back_ios")
  q-btn.no-border.text-gray.margin(unelevated @click="next()")
    q-icon(name="arrow_forward_ios")
  h6.no-border.text-gray.margin(unelevated) {{ par(selectedDate) }}



</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: ['selectedDate', 'op', 'filter_act', 'role', 'me', 'inTeacher'],
  setup () {
    const email = ref('')
    const password = ref('')
    const showRole = ref(false)
    const showFil = ref(false)
    const showOp = ref(false)
    return {
      showOp, showFil, showRole,
      email, password
    }
  },
  methods: {
    par (s:string) {
      const arr = s.split('-')
      return arr[0] + '年' + arr[1] + '月'
    },
    toDay () {
      this.$emit('today')
    },
    prev () {
      this.$emit('prev')
    },
    next () {
      this.$emit('next')
    },
    setRole (r:string) {
      this.$emit('setRole', r)
      this.showRole = false
    },
    setOp (o:string) {
      this.$emit('setOp', o)
      this.showOp = false
    },
    setFil (f:string) {
      this.$emit('setFil', f)
      this.showFil = false
    }
  }
});
</script>

<style type="text/css" scoped>
.op-conatiner {
  height: 0;
  overflow: visible; 
}
.bold.q-btn {
  padding-left: 1.4em;
  padding-right: .3em;
  min-width: 6.8em;
}
.bold.q-btn.sp {
  padding-left: 1.4em;
  padding-right: 1.4em;
  min-width: 6.8em;
}
</style>
