<template lang="pug">
q-page
  q-carousel.no-border(v-model="slide", transition-prev="slide-right", transition-next="slide-left", animated, :autoplay="2500", :infinite="true", :swipeable="true", :transition-duration="1500", control-color="primary")
    q-carousel-slide.row.no-wrap.flex-center(name="style")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
    q-carousel-slide.row.no-wrap.flex-center(name="style1")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
    q-carousel-slide.row.no-wrap.flex-center(name="style2")
      q-img.main(:no-transition="true", :no-spinner="true", loading="eager", alt="text", referrerpolicy="no-referrer", style="width: 100%; height: 100%; border-radius: 0", src="../assets/main001.png")
  .row.white-back.long-padded.flex.flex-start-center.narrow-only
    q-select(style="width: 160px", outlined, v-model="myOption.explore", :options="cs", label="探索課程")
    q-select(style="width: 160px", outlined, v-model="myOption.age", :options="ages", label="適合年齡")
    q-select(style="width: 160px", outlined, v-model="myOption.place", :options="places", label="上課地區")
    q-select(style="width: 160px", outlined, v-model="myOption.date", :options="dates", label="上課日期")
    q-select(style="width: 160px", outlined, v-model="myOption.price", :options="prices", label="價格")
    q-select(style="width: 160px", outlined, v-model="myOption.sorting", :options="sortings", label="排序")
  .row.white-back.long-padded.flex.flex-start-center.fater-only
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'explore' ? '' : 'explore'", @mouseover="hoverD = 'explore'", :class=`{
          'llgg-back': hoverD == 'explore' && showD != 'explore',
          'lg-border': hoverD == 'explore' || showD == 'explore',
          'lgg-back': showD == 'explore',
          'text-white': showD == 'explore',
        }`) 探索課程
      .filler
      q-icon.text-lg(name="expand_more")
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'age' ? '' : 'age'", @mouseout="hoverD = ''", @mouseover="hoverD = 'age'", :class=`{
          'llgg-back': hoverD == 'age' && showD != 'age',
          'lg-border': hoverD == 'age' || showD == 'age',
          'lgg-back': showD == 'age',
          'text-white': showD == 'age',
        }`) 適合年齡
      .filler
      q-icon.text-lg(name="expand_more")
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'place' ? '' : 'place'", @mouseout="hoverD = ''", @mouseover="hoverD = 'place'", :class=`{
          'llgg-back': hoverD == 'place' && showD != 'place',
          'lg-border': hoverD == 'place' || showD == 'place',
          'lgg-back': showD == 'place',
          'text-white': showD == 'place',
        }`) 上課地區
      .filler
      q-icon.text-lg(name="expand_more")
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'date' ? '' : 'date'", @mouseout="hoverD = ''", @mouseover="hoverD = 'date'", :class=`{
          'llgg-back': hoverD == 'date' && showD != 'date',
          'lg-border': hoverD == 'date' || showD == 'date',
          'lgg-back': showD == 'date',
          'text-white': showD == 'date',
        }`) 上課日期
      .filler
      q-icon.text-lg(name="expand_more")
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'price' ? '' : 'price'", @mouseout="hoverD = ''", @mouseover="hoverD = 'price'", :class=`{
          'llgg-back': hoverD == 'price' && showD != 'price',
          'lg-border': hoverD == 'price' || showD == 'price',
          'lgg-back': showD == 'price',
          'text-white': showD == 'price',
        }`) 價格
      .filler
      q-icon.text-lg(name="expand_more")
    .filler
    q-btn.border.text-gray.bold.margin(rounded, unelevated, @click="showD = showD == 'sorting' ? '' : 'sorting'", @mouseout="hoverD = ''", @mouseover="hoverD = 'sorting'", :class=`{
          'llgg-back': hoverD == 'sorting' && showD != 'sorting',
          'lg-border': hoverD == 'sorting' || showD == 'sorting',
          'lgg-back': showD == 'sorting',
          'text-white': showD == 'sorting',
        }`) 排序
      .filler
      q-icon.text-lg(name="expand_more")
  .row.long-padded.flex.flex-start-center.fater-only.no-height.show-overflow
    q-list#op1(v-show="showD == 'explore'")
      q-item.text-gray.bold(clickable, @click="myOption.explore = 'all'", :class=`{
            'llgg-back':
              myOption.explore == 'all' || myOption.hoverExplore == 'all',
          }`) 顯示所有課程
      q-item.text-gray(clickable, v-for="(c, k) in cs", @click="myOption.explore = c", :key="k", :class=`{
            'llgg-back': myOption.explore == c || myOption.hoverExplore == c,
          }`) {{ c }}
    q-list#op2(v-show="showD == 'age'")
      q-item.text-gray.bold(clickable, @click="myOption.age = 'all'", :class=`{
            'llgg-back': myOption.age == 'all' || myOption.hoverAge == 'all',
          }`) 顯示所有年齡
      q-item.text-gray(clickable, v-for="(a, j) in ages", @click="myOption.age = a", :key="j", :class="{ 'llgg-back': myOption.age == a || myOption.hoverAge == a }") {{ a }}
    q-list#op3(v-show="showD == 'place'")
      q-item.text-gray.bold(clickable, @click="myOption.place = 'all'", :class=`{
            'llgg-back': myOption.place == 'all' || myOption.hoverAge == 'all',
          }`) 顯示所有地區
      q-item.text-gray(clickable, v-for="(p, i) in places", @click="myOption.place = p", :key="i", :class=`{
            'llgg-back': myOption.place == p || myOption.hoverPlace == p,
          }`) {{ p }}
    q-list#op4(v-show="showD == 'date'")
      q-item.text-gray.bold(clickable, @click="myOption.date = 'all'", :class=`{
            'llgg-back': myOption.date == 'all' || myOption.hoverAge == 'all',
          }`) 顯示所有日期
      q-item.text-gray(clickable, v-for="(d, l) in dates", @click="myOption.date = d", :key="l", :class=`{
            'llgg-back': myOption.date == d || myOption.hoverDate == d,
          }`) {{ d }}
    q-list#op5(v-show="showD == 'price'")
      q-item.text-gray.bold 價格範圍
      q-item.text-gray(clickable, v-for="(p, k) in prices", @click="myOption.price = p", :key="k", :class=`{
            'llgg-back': myOption.price == p || myOption.hoverPrice == p,
          }`) {{ p }}
    .filler
    q-list#op6(v-show="showD == 'sorting'")
      q-item.text-gray(clickable, v-for="(s, j) in sortings", @click="myOption.sorting = s", :key="j", :class=`{
            'llgg-back': myOption.sorting == s || myOption.hoverSorting == s,
          }`) {{ s }}
  // .row.white-back.long-padded(v-if="!we_have_real_data || testing")
    h2.text-dark-green.fluid.text-center 課程資訊建構中，敬請期待！
  .row.white-back.long-padded()
    .q-pa-md.fluid.flex.flex-center
      .row.fluid.flex.flex-center
        h4.text-dark-green.text-center(v-show="my_filter(classes, myOption).length == 0") 很抱歉，目前沒有附合您查詢條件的課程
      q-card.my-card(v-for="(r, k) in my_filter(classes, myOption)", :key="k", v-show="r.showClass")
        q-img.clickable(:src="r.img", :alt="r.des", fit="cover", style="height: 220px", @click="goto(r.id)")
        q-card-section.col.flex.flex-col
          .filler
          .my-card-title {{ r.des }}
          p.small.no-margin.text-gray.flex.flex-start-center
            q-icon(name="star", color="yellow")
            q-icon(name="star", color="yellow")
            q-icon(name="star", color="yellow")
            q-icon(name="star", color="yellow")
            q-icon(name="star", color="yellow")
            span(style="position: relative; top: 1px; left: 4px") 5.0 (2)
          h6.fluid.text-left.text-orange.no-margin {{ r.price }}
          .row
            p.text-dark-gray.bold.fluid.px-16.text-left.no-margin
              img.avatar.float.right(:src="r.teacher_img", alt="Teacher", width="50", height="50")

              | {{ r.teacher }}

              br
              span.text-gray.bold
                | {{
                | (r.tags || []).join(&apos; / &apos;)
                | }}
        q-card-actions(align="right")
          q-btn(flat, round, color="blue", icon="info", @click="goto(r.id)")
          q-btn(flat, round, color="red", icon="favorite", @click="like(r.id, uid)")
          q-btn(flat, round, color="primary", icon="share", @click="share(r.id)")
  .row(v-if="my_filter(classes, myOption).length > 0")
    h4.text-center.text-gray.fluid.narrow
      q-btn(unelevated, size="lg")
        q-icon.narrow(name="arrow_back_ios")
      q-btn(unelevated, size="lg") 1
      q-btn(unelevated, size="lg") 2
      q-btn(unelevated, size="lg") 3
      q-btn(unelevated, size="lg")
        q-icon.narrow(name="arrow_forward_ios")

</template>

<script lang="ts">
import { useMeta } from 'quasar';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ClassesPage',
  // components: { ExampleComponent },
  props: [
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'myKey',
    'classes',
  ],
  setup() {
    const metaData = {
      title: '課程',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);
    const myOption = ref({
      explore: 'all',
      hoverExplore: '',
      age: 'all',
      hoverAge: '',
      place: 'all',
      hoverPlace: '',
      date: 'all',
      hoverDate: '',
      price: 'all',
      hoverPrice: '',
      sorting: 'newest',
      hoverSorting: '',
    });
    const hoverD = ref('');
    const showD = ref('');
    const step = ref(0);
    const myH = ref(null);
    const myH2 = ref(null);
    const myKey2 = ref('');
    const myKey3 = ref('適合年齡');
    const slide = ref('style');
    const cs = ref([
      '親子課程',
      '大人課程',
      '線上課程',
      '社交情感',
      '語言學習',
      'STEAM',
      '運動',
    ]);
    const ages = ref([
      '3~6歲',
      '6~9歲',
      '9~12歲',
      '13~15歲',
      '15~18歲',
      '18歲以上',
      '成人',
    ]);
    const places = ref([
      '線上課程',
      '臺北市',
      '新北市',
      '基隆市',
      '桃園市',
      '宜蘭縣',
    ]);
    const dates = ref(['平日', '假日', '三天', '本週', '兩週', '本月']);
    const prices = ref([
      '最高價格',
      '最低價格',
      '限時優惠',
      '特價折扣',
      '顧客自訂價格',
    ]);
    const sortings = ref(['最新上架', '即將開始']);
    const as = ref(['適合年齡', '上課地區', '上課時間', '價格']);
    return {
      myOption,
      ages,
      places,
      dates,
      prices,
      sortings,
      hoverD,
      showD,
      step,
      myH,
      myH2,
      myKey2,
      myKey3,
      slide,
      cs,
      as,
    };
  },
  mounted() {
    // setInterval(this.go, 1000)
  },
  methods: {
    my_filter(obj: any, op: any) {
      const exp = op.explore;
      console.log(exp);
      var arr = Object.values(obj || {}) || [];
      if (op.explore !== 'all') {
        arr = arr.filter((o: any) => {
          return (
            (o.top_tags || []).concat(o.tags || []).includes(exp) ||
            o.location == exp
          );
        });
      }

      const pattern = new RegExp(/(\d+)\s*~s*(\d+)/, 'i');
      const pattern_1 = new RegExp(/.+(\d+)yrs*\+.+/, 'i');

      if (op.age == '18歲以上' || op.age == '成人') {
        arr = arr.filter((o: any) => {
          let t = (o.top_tags || []).concat(o.tags || []).join(',');
          if (pattern_1.test(t)) {
            let n = parseInt(
              t.replace(pattern_1, (match: any, match_1: any) => {
                console.log(match_1 + 'M1');
                return match_1;
              })
            );
            console.log(n);
            return n < 18;
          } else {
            return false;
          }
        });
      }

      if (pattern.test(op.age)) {
        const maxAge = parseInt(
          op.age.replace(pattern, (match: any, match_1: any, match_2: any) => {
            console.log(match_2 + 'M2');
            return match_2;
          })
        );
        console.log(maxAge);
        arr = arr.filter((o: any) => {
          let t = (o.top_tags || []).concat(o.tags || []).join(',');
          if (pattern_1.test(t)) {
            let n = parseInt(
              t.replace(pattern_1, (match: any, match_1: any) => {
                console.log(match_1 + 'M1');
                return match_1;
              })
            );
            console.log(n);
            return n < maxAge;
          } else {
            return false;
          }
        });
      }

      if (op.place !== 'all') {
        const patt = new RegExp(op.place.replace('市', ''), 'i');
        arr = arr.filter((o: any) => {
          return patt.test(o.location + o.addr);
        });
      }

      return arr;
    },
    goto(rid: string) {
      this.$router.push('/class_info/' + rid);
    },
    go() {
      this.$nextTick(() => {
        this.step++;
      });
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    },
    logout() {
      this.$emit('logout');
    },
  },
});
</script>

<style scoped>
/* Single Page Style*/

#op1 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 0.5em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op2 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 12.5em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op3 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 23.5em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op4 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 35em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op5 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 46em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op6 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 0.5em;
  top: -4.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}
</style>
