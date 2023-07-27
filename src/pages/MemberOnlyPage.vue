<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      :autoplay="2500"
      :infinite="true"
      :swipeable="true"
      :transition-duration="1500"
      control-color="primary"
      class="no-border"
    >
      <q-carousel-slide name="style" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style1" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="style2" class="row no-wrap flex-center">
        <q-img class="main" :no-transition="true" :no-spinner="true" loading="eager" alt="text" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 0;"
         src = "../assets/main001.png"></q-img>
      </q-carousel-slide>
    </q-carousel>
    
    <div class="row white-back long-padded flex flex-start-center narrow-only">
      <q-select style="width:160px" outlined v-model="myOption.explore" :options="cs" label="探索課程" />
      <q-select style="width:160px" outlined v-model="myOption.age" :options="ages" label="適合年齡" />
      <q-select style="width:160px" outlined v-model="myOption.place" :options="places" label="上課地區" />
      <q-select style="width:160px" outlined v-model="myOption.date" :options="dates" label="上課日期" />
      <q-select style="width:160px" outlined v-model="myOption.price" :options="prices" label="價格" />
      <q-select style="width:160px" outlined v-model="myOption.sorting" :options="sortings" label="排序" />
    </div>
    <div class="row white-back long-padded flex flex-start-center fater-only">
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'explore' ? '' : 'explore'" @mouseover="hoverD = 'explore'" :class="{'llgg-back': hoverD == 'explore' && showD != 'explore', 'lg-border': hoverD == 'explore' || showD == 'explore', 'lgg-back': showD == 'explore', 'text-white': showD == 'explore'}"> 探索課程
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'age' ? '' : 'age'" @mouseout="hoverD = ''" @mouseover="hoverD = 'age'" :class="{'llgg-back': hoverD == 'age' && showD != 'age', 'lg-border': hoverD == 'age' || showD == 'age', 'lgg-back': showD == 'age', 'text-white': showD == 'age'}"> 適合年齡
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'place' ? '' : 'place'" @mouseout="hoverD = ''" @mouseover="hoverD = 'place'" :class="{'llgg-back': hoverD == 'place' && showD != 'place', 'lg-border': hoverD == 'place' || showD == 'place', 'lgg-back': showD == 'place', 'text-white': showD == 'place'}"> 上課地區
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'date' ? '' : 'date'" @mouseout="hoverD = ''" @mouseover="hoverD = 'date'" :class="{'llgg-back': hoverD == 'date' && showD != 'date', 'lg-border': hoverD == 'date' || showD == 'date', 'lgg-back': showD == 'date', 'text-white': showD == 'date'}"> 上課日期
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'price' ? '' : 'price'" @mouseout="hoverD = ''" @mouseover="hoverD = 'price'" :class="{'llgg-back': hoverD == 'price' && showD != 'price', 'lg-border': hoverD == 'price' || showD == 'price', 'lgg-back': showD == 'price', 'text-white': showD == 'price'}"> 價格
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
      <div class="filler">
      </div>
      <q-btn class="border text-gray bold margin" rounded unelevated @click="showD = showD == 'sorting' ? '' : 'sorting'" @mouseout="hoverD = ''" @mouseover="hoverD = 'sorting'" :class="{'llgg-back': hoverD == 'sorting' && showD != 'sorting', 'lg-border': hoverD == 'sorting' || showD == 'sorting', 'lgg-back': showD == 'sorting', 'text-white': showD == 'sorting'}"> 排序
        <div class="filler"></div>
        <q-icon class="text-lg" name="expand_more"></q-icon>
      </q-btn>
    </div>
    <div class="row long-padded flex flex-start-center fater-only">
      <q-list id="op1" v-show="showD == 'explore'">
        <q-item class="text-gray bold" clickable @click="myOption.explore = 'all'" :class="{'llgg-back': myOption.explore == 'all' || myOption.hoverExplore == 'all'}">顯示所有課程</q-item>
        <q-item class="text-gray" clickable v-for="(c,k) in cs" @click="myOption.explore = c" :key="k" :class="{'llgg-back': myOption.explore == c || myOption.hoverExplore == c}">{{c}}</q-item>
      </q-list>
      <q-list id="op2" v-show="showD == 'age'">
        <q-item class="text-gray bold" clickable @click="myOption.age = 'all'" :class="{'llgg-back': myOption.age == 'all' || myOption.hoverAge == 'all'}">顯示所有年齡</q-item>
        <q-item class="text-gray" clickable v-for="(a,j) in as" @click="myOption.age = a" :key="j" :class="{'llgg-back': myOption.age == a || myOption.hoverAge == a}">{{a}}</q-item>
      </q-list>
      <q-list id="op3" v-show="showD == 'place'">
        <q-item class="text-gray bold" clickable @click="myOption.place = 'all'" :class="{'llgg-back': myOption.place == 'all' || myOption.hoverAge == 'all'}">顯示所有地區</q-item>
        <q-item class="text-gray" clickable v-for="(p,i) in places" @click="myOption.place = p" :key="i" :class="{'llgg-back': myOption.place == p || myOption.hoverPlace == p}">{{p}}</q-item>
      </q-list>
      <q-list id="op4" v-show="showD == 'date'">
        <q-item class="text-gray bold" clickable @click="myOption.date = 'all'" :class="{'llgg-back': myOption.date == 'all' || myOption.hoverAge == 'all'}">顯示所有日期</q-item>
        <q-item class="text-gray" clickable v-for="(d,l) in dates" @click="myOption.date = d" :key="l" :class="{'llgg-back': myOption.date == d || myOption.hoverDate == d}">{{d}}</q-item>
      </q-list>
      <q-list id="op5" v-show="showD == 'price'">
        <q-item class="text-gray bold">價格範圍</q-item>
        <q-item class="text-gray" clickable v-for="(p,k) in prices" @click="myOption.price = p" :key="k" :class="{'llgg-back': myOption.price == p || myOption.hoverPrice == p}">{{p}}</q-item>
      </q-list>
      <div class="filler"></div>
      <q-list id="op6" v-show="showD == 'sorting'">
        <q-item class="text-gray" clickable v-for="(s,j) in sortings" @click="myOption.sorting = s" :key="j" :class="{'llgg-back': myOption.sorting == s || myOption.hoverSorting == s}">{{s}}</q-item>
      </q-list>
    </div>
    <div class="row white-back long-padded">
      <!-- <h4 class="text-center fluid text-dark-green">選擇一門課程 讓綠芽隨著光肆意成長 new classes</h4>
      
      <h4 class="text-center med">
        <q-input v-model="myKey2" type="search" rounded="rounded" outlined="outlined" placeholder="尋找課程">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
      </h4>
      <h4 class="text-left fluid">
        <q-btn unelevated rounded v-for = "(a, k) in as" :key="k" @click="myKey3 = a"  @mouseover="myH = a" @mouseout="myH = null" class="bold margin"
        :class="
        {
          'dgg-back': myH == a || myKey3 == a,
          'text-white': myH == a || myKey3 == a,
          'text-gray': myH != a && myKey3 != a,
          border: myH != a && myKey3 != a
        }
        "> {{ a }}</q-btn>
      </h4>
      <h4 class="text-left fluid">
        <q-btn unelevated rounded class="margin" @click="myKey2 = ''"  @mouseover="myH2 = ''" @mouseout="myH2 = null"
        :class="{
          'lgg-back': myH2 == '' || myKey2 == '',
          'text-white': myH2 == '' || myKey2 == '',
          'text-gray': myH2 != '' && myKey2 != '',
          border: myH2 != '' && myKey2 != ''
        }">全部課程</q-btn>
        <q-btn unelevated rounded class="margin" v-for = "(c, idx) in cs" :key="idx" @click="myKey2 = c" @mouseover="myH2 = c" @mouseout="myH2 = null"
        :class="{
          'lgg-back': myH2 == c || myKey2 == c,
          'text-white': myH2 == c || myKey2 == c,
          'text-gray': myH2 != c && myKey2 != c,
          border: myH2 != c && myKey2 != c
        }"
        > {{ c }}</q-btn>
      </h4> -->
      <div class="q-pa-md flex flex-center">
        <q-card class="my-card" v-for = "(r, k) in classes" :key="k">
          <q-img class="clickable" :src="r.img" :alt="r.des" fit="cover" style="height:220px" @click="goto(r.id)"></q-img>
          <q-card-section class="col flex flex-col">
            <div class="filler"></div>
            <div class="my-card-title">{{r.des}}</div>
            <p class="small no-margin text-gray flex flex-start-center">
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <q-icon name="star" color="yellow"></q-icon>
              <span style="position: relative; top:1px; left: 4px;">  5.0 (2)</span>
            </p>
            <h6 class="fluid text-left text-orange no-margin">
              {{r.price}}
            </h6>
            <div class="row">
              <p class="text-dark-gray bold fluid px-16 text-left no-margin">
                <img :src="r.teacher_img" class="avatar float right" alt="Teacher" width="50" height="50">
                {{r.teacher}}
                <br/>
                <span class="text-gray bold">{{(r.tags || []).join(' / ')}}</span>
              </p>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat round color="blue" icon="info" @click="goto(r.id)"/>
            <q-btn flat round color="red" icon="favorite" @click="like(r.id, uid)"/>
            <q-btn flat round color="teal" icon="add_shopping_cart" @click="add_to_cart(r.id, uid)"/>
            <q-btn flat round color="primary" icon="share" @click="share(r.id)"/>
          </q-card-actions>
        </q-card>
        <!-- <h6 class="fluid text-center text-dark-green">
          <router-link to="/classes">
            <span class="underline">
              更多課程
            </span>+
          </router-link>
        </h6> -->
      </div>
    </div>
    <div class="row">
      <h4 class="text-center text-gray fluid narrow">
        <q-btn unelevated size="lg">
          <q-icon name="arrow_back_ios" class="narrow"></q-icon>
        </q-btn>
        <q-btn unelevated size="lg">
          1
        </q-btn>
        <q-btn unelevated size="lg">
          2
        </q-btn>
        <q-btn unelevated size="lg">
          3
        </q-btn>
        <q-btn unelevated size="lg">
          <q-icon name="arrow_forward_ios" class="narrow"></q-icon>
        </q-btn>
      </h4>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ClassesPage',
  // components: { ExampleComponent },
  props: ['uid', 'me', 'users', 'user', 'email', 'photoURL', 'isLogout', 'isInApp', 'myKey', 'classes'],
  setup () {
    const metaData = {
      title: '會員專區',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)
    const myOption = ref(
    {
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
      hoverSorting: ''
    })
    const hoverD = ref('')
    const showD = ref('')
    const step = ref(0)
    const myH = ref(null)
    const myH2 = ref(null)
    const myKey2 = ref('')
    const myKey3 = ref('適合年齡')
    const slide = ref('style')
    const cs = ref(['親子課程', '大人課程', '線上課程', '社交情感', '語言學習', 'STEAM', '運動'])
    const ages = ref(['3~6歲', '6~9歲', '9~12歲', '13~15歲', '15~18歲', '18歲以上', '成人'])
    const places = ref(['線上課程', '臺北市', '新北市', '基隆市', '桃園市', '宜蘭縣'])
    const dates = ref(['平日', '假日', '三天', '本週', '兩週', '本月'])
    const prices = ref(['最高價格', '最低價格', '限時優惠', '特價折扣', '顧客自訂價格'])
    const sortings = ref(['最新上架', '即將開始'])
    const as = ref(['適合年齡', '上課地區', '上課時間', '價格'])
    return { 
      myOption, 
      ages, places, dates, prices, sortings,
      hoverD, showD, step, myH, myH2, myKey2, myKey3, slide, cs, as };
  }, 
  mounted () {
    // setInterval(this.go, 1000)
  },
  methods: {
    goto (rid:string) {
      this.$router.push('/class_info/' + rid)
    },
    go () {
      this.$nextTick(() => {
        this.step++
      });
    },
    loginGoogle () {
      this.$emit('loginGoogle')
    },
    logout () {
      this.$emit('logout')
    }
  }
});
</script>

<style scoped>
/* Single Page Style*/

#op1 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: .5em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op2 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 12.5em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op3 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 23.5em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op4 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 35em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op5 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: 46em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

#op6 {
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  left: .5em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}

</style>
