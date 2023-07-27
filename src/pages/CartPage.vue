<template>
  <q-page>
    <div class="pop-container" v-show="showPop">
      <div class="pop-back clickable" @click="showPop = false"></div>
      <div class="test"></div>
      <q-card class="pop-card">
        <q-form>
          <h4 class="text-dark-green">信用卡結帳</h4>
          <!-- -->
          <h6 class="text-dark-gray">
            網站改版中，2023/06/23即可完整體驗，敬請期待
          </h6>
          <div class="small-space"></div>

          <div id="cardview-container"></div>

          <div class="small-space"></div>
          <div class="small-space"></div>

          <!-- <q-input rounded outlined class = "fluid relative" type="text" label="" v-model="card_number">
            <i class="red star tl">*</i>
            <p class="text-dark-gray atl">信用卡號 Credit Card Number</p>
          </q-input> -->
          <q-input
            rounded
            outlined
            class="fluid relative"
            type="text"
            label=""
            v-model="addr"
          >
            <i class="red star tl">*</i>
            <p class="text-dark-gray atl">帳單地址</p>
          </q-input>
          <div class="small-space"></div>
          <div class="small-space"></div>
          <q-input
            class="margin relative"
            rounded
            outlined
            style="width: 260px; display: inline-block"
            type="text"
            label=""
            v-model="card_owner"
          >
            <i class="red star tl">*</i>
            <p class="text-dark-gray atl">持卡人姓名</p>
          </q-input>
          <!-- <q-input class="margin relative" rounded outlined style="width: 120px; display: inline-block;" type="text" label="MM" v-model="card_month">
            <i class="red star tl">*</i>
            <p class="text-dark-gray atl">卡片有效期限</p>
          </q-input>
          <span class="margin">/ </span>
          <q-input class="margin relative" rounded outlined style="width: 120px; display: inline-block;"  type="text" label="YY" v-model="card_year">
          </q-input>
          <div class="small-space"></div>
          <div class="small-space"></div>        -->

          <q-input
            class="margin relative"
            rounded
            outlined
            style="width: 120px; display: inline-block"
            type="text"
            label="郵遞區號"
            v-model="zip"
          >
            <i class="red star tl">*</i>
            <p class="text-dark-gray atl">郵遞區號</p>
          </q-input>
          <div class="small-space"></div>
          <q-checkbox
            toggle-order="ft"
            v-model="use_tax_id_number"
            label="身份證字號/統一編號"
            class="text-dark-green bold"
          />
          <q-input
            class="margin relative"
            rounded
            outlined
            style="width: 220px; display: inline-block"
            type="text"
            label="身份證字號/統一編號"
            v-model="tax_id_number"
          ></q-input>
          <br />
          <q-checkbox
            toggle-order="ft"
            v-model="use_mobile_carrier"
            label="手機載具"
            class="text-dark-green bold"
          />
          <q-input
            class="margin relative"
            rounded
            outlined
            style="width: 220px; display: inline-block"
            type="text"
            label="載具號碼"
            v-model="mobile_carrier"
          ></q-input>
        </q-form>

        <div class="row flex flex-end-center long-padded">
          <h2 class="text-orange">總金額{{ countTotal() }}</h2>
        </div>

        <div class="row">
          <div class="filler"></div>
          <div class="col-md-2 col-sm-3 col-xs-4">
            <q-btn
              rounded
              unelevated
              class="or-border text-orange"
              @click="
                step = 0;
                showPop = false;
              "
              style="min-width: 84px"
            >
              取消
            </q-btn>
          </div>
          <div class="col-md-2 col-sm-3 col-xs-4">
            <q-btn
              v-if="!isAdmin"
              disabled
              rounded
              unelevated
              class="or-back text-white"
              style="min-width: 84px"
              title="網站改版中，2023/06/23即可完整體驗，敬請期待"
            >
              現在付款
            </q-btn>
            <q-btn
              v-else
              rounded
              unelevated
              class="or-back text-white"
              style="min-width: 84px"
              @click="pay()"
            >
              現在付款
            </q-btn>
          </div>
        </div>
      </q-card>
    </div>
    <h4 class="text-dark-green margin">購物車</h4>
    <div class="q-pa-md" v-if="!uid">
      <h2 class="text-dark-green">您尚未登入，請先登入或註冊</h2>
    </div>
    <div class="q-pa-md" id="my-cart" v-else>
      <q-table
        flat
        bordered
        :rows="
          my_cart(Object.values(classes || {}), me.cart || [], me.paid || [])
        "
        :columns="columns"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      >
        <template v-slot:bottom>
          <div class="row fluid flex flex-end-center">
            <h4 class="text-orange margin">總金額{{ countTotal() }}</h4>
            <q-btn
              v-if="selected.length > 0"
              color="primary"
              no-caps
              :label="'前往結帳'"
              icon="shopping_cart_checkout"
              @click="gopay(selected)"
            >
            </q-btn>
            <q-btn
              color="orange"
              size="lg"
              @click="goto('classes')"
              v-else
              icon="explore"
              >探索課程</q-btn
            >
          </div>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td>
              <q-checkbox
                :model-value="props.selected"
                @update:model-value="
                  (val, evt) => {
                    Object.getOwnPropertyDescriptor(props, 'selected').set(
                      val,
                      evt
                    );
                  }
                "
              />
            </q-td>

            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span
                v-if="
                  col.name != 'img' &&
                  col.name != 'plans' &&
                  col.name != 'price'
                "
              >
                {{ col.value }}</span
              >

              <q-img
                v-if="col.name == 'img'"
                style="width: 200px"
                :src="col.value"
              />

              <span v-if="col.name == 'plans'">
                <q-list>
                  <q-item v-for="(p, idx) in col.value" :key="idx">
                    {{ p.plan }}<br />{{ p.price }}<br />× {{ p.num }}
                  </q-item>
                </q-list>
              </span>

              <span v-if="col.name == 'price'"> NT$ {{ col.value }} </span>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <!-- <div class="row flex flex-end-center long-padded">
        <q-btn color="blue" size="lg" @click = "showPop = true" v-if="my_cart(Object.values(classes || {}), (me.cart || []), (me.paid || [])).length > 0" icon="shopping_cart_checkout">
       前往結帳</q-btn>
        <q-btn color="orange" size="lg" @click = "goto('classes')" v-else icon="explore">探索課程</q-btn>
      </div> -->

      <h4 class="text-dark-green">已購課程</h4>

      <q-table
        flat
        bordered
        :rows="
          my_paid(Object.values(classes || {}), me.cart || [], me.paid || [])
        "
        :columns="columns"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span
                v-if="
                  col.name != 'img' &&
                  col.name != 'plans' &&
                  col.name != 'price' &&
                  col.name != 'id'
                "
              >
                {{ col.value }}</span
              >

              <router-link
                v-if="col.name == 'id'"
                :to="'/classInfo' + col.value"
              >
                前往課程
                <q-icon name="chevron_right" />
              </router-link>

              <q-img
                v-if="col.name == 'img'"
                style="width: 200px"
                :src="col.value"
              />

              <span v-if="col.name == 'plans'">
                <q-list>
                  <q-item v-for="(p, idx) in col.value" :key="idx">
                    {{ p.plan }}<br />{{ p.price }} × {{ p.num }}
                  </q-item>
                </q-list>
              </span>

              <span v-if="col.name == 'price'"> NT$ {{ col.value }} </span>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <h4 class="text-dark-green">訂單明細</h4>

      <q-table
        flat
        bordered
        :rows="
          my_paylogs(Object.values(classes || {}), me.cart || [], me.paid || [])
        "
        :columns="columns_paylogs"
        row-key="id"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span v-if="col.name == 'amount'"> NT$ {{ col.value }} </span>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';
/* import {
  parseDate
} from '@quasar/quasar-ui-qcalendar/src/index.js' */

const TPDirect = window.TPDirect;

/* function getDay (day:any) {
  const newDay = new Date(day)
  const tm = parseDate(newDay)
  return tm.date
} */

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
    'isAdmin',
    'isTeacher',
  ],
  setup() {
    const metaData = {
      title: '購物車',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const arr6: any[] = [];

    const selected = ref(arr6);

    const columns_paylogs = ref([
      {
        name: 'id',
        label: '編輯',
        field: 'id',
        align: 'center',
        required: true,
        sortable: true,
      },
      {
        name: 'timestemp',
        label: '交易時間',
        field: 'amount',
        align: 'center',
        required: true,
        sortable: true,
      },
      {
        name: 'amount',
        label: '總金額',
        field: 'amount',
        align: 'center',
        required: true,
        sortable: true,
      },
    ]);

    const columns = ref([
      {
        name: 'checked',
        label: '',
        field: 'checked',
        align: 'center',
      },
      {
        name: 'img',
        label: '圖片',
        field: 'img',
        align: 'center',
      },
      {
        name: 'title',
        label: '課程名稱',
        field: 'title',
        align: 'center',
        required: true,
        sortable: true,
      },
      {
        name: 'plans',
        label: '方案',
        align: 'left',
        field: 'plans',
      },
      {
        name: 'price',
        label: '價格',
        align: 'center',
        field: 'price',
      },
      {
        name: '前往',
        label: '',
        field: 'id',
        align: 'center',
      },
      /*{
        name: 'status',
        label: '狀態',
        align: 'center',
        field: 'status'
      } */
    ]);

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

    const card_number = ref('');
    const card_owner = ref('');
    const addr = ref('');
    const card_month = ref('');
    const card_year = ref('');
    const cvc = ref('');
    const zip = ref('');
    const use_tax_id_number = ref(false);
    const mobile_carrier = ref('');
    const use_mobile_carrier = ref(false);
    const tax_id_number = ref('');
    const showPop = ref(false);
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
      columns_paylogs,
      columns,
      selected,
      use_mobile_carrier,
      mobile_carrier,
      addr,
      card_number,
      card_owner,
      card_month,
      card_year,
      cvc,
      tax_id_number,
      use_tax_id_number,
      zip,
      showPop,
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
    TPDirect.setupSDK(
      127044,
      'app_pENDXkVEoHhGT8DHLdyTetjnGSYaXCYPz7BDfqO9x9xWPyg4WKk9OQ0kEf5N',
      'sandbox'
    );

    var defaultCardViewStyle = {
      color: 'rgb(0,0,0)',
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: '300',
      errorColor: 'red',
      placeholderColor: '',
    };

    // 帶入第三個參數, config.isUsedCcv 為以下兩種參數代表不同意思
    // false 為 CCV 非必填
    // true 為 CCV 必填

    // 卡號輸入完畢，驗證成功後會將設定的起始位元至結束位元以 * 做遮蔽
    // 若遮蔽後，點擊到信用卡欄位做變更(輸入或刪除卡號)，會將遮蔽卡號 * 清除
    // 若結束位元超過信用卡卡號長度，會以信用卡卡號長度上限做遮蔽

    // isMaskCreditCardNumber: boolean
    // 設定是否要啟用遮蔽卡號功能
    // beginIndex: Int
    // 起始遮蔽卡號位元
    // endIndex: Int
    // 結束遮蔽卡號位元
    try {
      TPDirect.card.setup('#cardview-container', defaultCardViewStyle, {
        isUsedCcv: true,
        // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
        isMaskCreditCardNumber: window.innerWidth > 620,
        maskCreditCardNumberRange: {
          beginIndex: 6,
          endIndex: 11,
        },
      });

      TPDirect.card.onUpdate(function (update: any) {
        if (update.canGetPrime) {
          console.log('good!');
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
  watch: {
    me() {
      this.$forceUpdate();
    },
  },
  methods: {
    countTotal() {
      const cart = (this.me && this.me.cart) || [];
      var ans = 0;
      for (let i = 0; i < cart.length; i++) {
        if (
          this.selected
            .map((c) => {
              return c.id;
            })
            .includes(cart[i].cid)
        )
          ans += cart[i].total || 0;
      }
      return ans;
    },
    gopay() {
      this.showPop = true;
    },
    my_paylogs() {
      return this.me.paylogs;
    },
    pay() {
      const cart = (this.me && [...this.me.cart]) || [];
      const selected = this.selected;

      const zip = this.zip;
      const addr = this.addr;
      const card_owner = this.card_owner;
      const tax_id_number = this.tax_id_number;
      const mobile_carrier = this.mobile_carrier;

      /* if (!this.card_number) {
        window.alert('請先輸入卡號')
        return
      }
      if (!this.card_month || !this.card_year) {
        window.alert('請先輸入有效期限')
        return
      }
      if (!this.cvc) {
        window.alert('請先輸入安全號')
        return
      } */

      if (!this.card_owner) {
        window.alert('請先輸入持卡人姓名');
        return;
      }

      var prime;

      // console.log(selected)

      TPDirect.card.getPrime((result: any) => {
        if (result.status !== 0) {
          console.error('getPrime error');
          window.alert('請輸入正確的卡號和日期與安全碼');
          return;
        }
        prime = result.card.prime;
        // console.log(result)
        console.log('getPrime success');
        // console.log('getPrime success: ' + prime)
        this.$axios
          .post(
            'https://tap-pay-service.inquiry1541.workers.dev/',
            {
              prime: prime,
              details: 'TapPay Test',
              amount: this.countTotal(),
              cardholder: {
                phone_number: this.me.phone,
                name: this.card_owner,
                email: this.me.email,
                zip_code: this.zip,
                address: this.addr,
                national_id: this.tax_id_number || '',
              },
              remember: true,
            },
            {
              headers: {
                'content-type': 'text/json',
              },
            }
          )
          .then((response: any) => {
            // console.log(response);
            if (response.data.msg == 'Success') {
              var paid: any[] = (this.users[this.uid].paid || [])
                .concat(
                  cart.filter((item: any) => {
                    return selected
                      .map((c: any) => {
                        return c.id;
                      })
                      .includes(item.cid);
                  })
                )
                .map((o: any) => {
                  let obj = { ...o };
                  obj.zip = zip;
                  obj.addr = addr;
                  obj.card_owner = card_owner;
                  obj.tax_id_number = tax_id_number;
                  obj.mobile_carrier = mobile_carrier;
                  return obj;
                });
              for (let k = 0; k < cart.length; k++) {
                var students = cart[k].students;
                // console.log(students)
                var cid = cart[k].cid;
                // var datetime = this.users[this.uid].cart[k].datetime
                // console.log(cid)
                if (
                  selected
                    .map((o: any) => {
                      return o.id;
                    })
                    .indexOf(cid) > -1
                ) {
                  for (let j = 0; j < (students || []).length; j++) {
                    // console.log('emit addStuToClass')
                    this.$emit(
                      'addStuToClass',
                      students[j].name,
                      cid,
                      this.me.childern,
                      this.uid
                    );
                  }

                  /* const event = {
                  'id': (new Date()).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ':' + cid,
                  'summary': this.classes[cid].title.replace(/^.+｜/, ''),
                  'location': this.classes[cid].addr || this.classes[cid].href || this.classes[cid].location || '',
                  'description': this.classes[cid].des,

                  'date': getDay(datetime.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '').replace(/T.+$/, '')),

                  'start': {
                    'dateTime':  datetime.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') + 'T' + datetime.t,
                    'timeZone': 'Asia/Taipei'
                  },
                  'end': {
                    'dateTime':  datetime.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') + 'T' + datetime.t,
                    'timeZone': 'Asia/Taipei'
                  },
                  'recurrence': [
                    // 'RRULE:FREQ=DAILY;COUNT=2'
                  ],
                  'attendees': [
                    {email: this.email}
                  ],
                  'reminders': {
                    'useDefault': false,
                    'overrides': [
                      {'method': 'email', 'minutes': 24 * 60},
                      {'method': 'popup', 'minutes': 10}
                    ]
                  }
                }
                setTimeout(() => {
                  this.$emit('addEvent', event)
                  this.$emit('addEventToDataBase', event)
                }, 2000) */
                }
              }

              this.$emit(
                'updateUser',
                cart.filter((item: any) => {
                  return !selected
                    .map((c: any) => {
                      return c.id;
                    })
                    .includes(item.cid);
                }),
                paid
              );

              this.$emit(
                'addPayLog',
                this.uid,
                this.me.name,
                this.countTotal(),
                {
                  phone_number: this.me.phone,
                  name: this.card_owner,
                  email: this.me.email,
                  zip_code: this.zip,
                  address: this.addr,
                  national_id: this.tax_id_number || '',
                },
                cart
                  .filter((item: any) => {
                    var cid = item.cid;
                    return (
                      selected
                        .map((c: any) => {
                          return c.id;
                        })
                        .indexOf(cid) > -1
                    );
                  })
                  .map((o: any) => {
                    let obj = { ...o };
                    obj.zip = zip;
                    obj.addr = addr;
                    obj.card_owner = card_owner;
                    obj.tax_id_number = tax_id_number;
                    obj.mobile_carrier = mobile_carrier;
                    return obj;
                  }),
                new Date().toLocaleString('zh-TW')
              );

              this.showPop = false;
              this.step = 0;

              setTimeout(() => {
                window.alert('交易成功');
              }, 2000);
            } else {
              window.alert('交易失敗，請聯絡客服人員');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    },
    goto(r: string) {
      this.$router.push('/' + r);
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
  left: 0.5em;
  top: -7.8em;
  background-color: #ffffff;
  z-index: 99;
  width: 9.8em;
}
</style>
