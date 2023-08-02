<template>
  <q-page>
    <div class="row padded">
      <h2 class="text-dark-green">
        <q-icon name="menu_book"></q-icon>
        會員資料
      </h2>
    </div>
    <div class="row long-padded" v-if="!uid">
      <h2 class="text-dark-green">您尚未登入，請先登入或註冊</h2>
    </div>
    <div class="row long-padded flex flex-center light-yellow-back" v-else>
      <q-card class="profile-card">
        <h4 class="text-left text-dark-green fluid">家長資料</h4>
        <div class="row">
          <div class="col-6 col-md-6 col-sm-8 col-xs-8 flex-col">
            <q-form class="flex flex-start-center fluid row">
              <label class="text-gray margin"
                >真實姓名<span class="red star">*</span></label
              >
              <q-input
                class="margin"
                v-model="myName"
                placeholder="姓名*"
                style="max-width: 300px"
                @focus="
                  focusDate = [];
                  focusMyDate = false;
                "
              >
              </q-input>
            </q-form>
            <q-form class="flex flex-start-center fluid row">
              <label class="text-gray margin"
                >生日<span class="red star">*</span></label
              >
              <q-input
                class="margin"
                v-model="myDate"
                placeholder="生日"
                style="max-width: 300px"
                @focus="focusMyDate = true"
                @click="focusMyDate = true"
              >
              </q-input>
              <div
                class="date-picker row flex flex-center"
                v-show="focusMyDate"
              >
                <q-date v-model="myDate" />
                <q-btn
                  class="confirm-date"
                  color="secondary"
                  @click="
                    focusDate = [];
                    focusMyDate = false;
                  "
                  >確認</q-btn
                >
              </div>
            </q-form>
            <q-form class="flex flex-start-center fluid">
              <label class="text-gray margin"
                >居住城市<span class="red star">*</span></label
              >
              <q-input
                class="margin"
                type="text"
                v-model="myCity"
                placeholder="居住城市"
                style="max-width: 300px"
                @focus="
                  focusDate = [];
                  focusMyDate = false;
                "
              >
              </q-input>
            </q-form>
            <q-form class="flex flex-start-center fluid">
              <label class="text-gray margin">關於我</label>
              <q-input
                class="margin"
                filled
                type="textarea"
                v-model="myIntro"
                placeholder="介紹一下自己吧！興趣、工作等等，越詳細對媒合愈有幫助喔"
                style="max-width: 300px"
                @focus="
                  focusDate = [];
                  focusMyDate = false;
                "
              >
              </q-input>

              <!--- 我也要測學習風格!! -->
            </q-form>
            <q-form class="flex flex-start-center fluid">
              <label class="text-gray margin"
                >手機號碼<span class="red star">*</span></label
              >
              <q-input
                class="margin"
                type="text"
                v-model="myPhone"
                placeholder="手機號碼*"
                style="max-width: 300px"
                @focus="
                  focusDate = [];
                  focusMyDate = false;
                "
              >
              </q-input>
            </q-form>
            <q-form class="flex flex-start-center fluid">
              <label class="text-gray margin"
                >Email信箱<span class="red star">*</span></label
              >
              <q-input
                bg-color="teal-2"
                standout="bg-teal-4 text-black"
                square
                class="margin readonly-input"
                type="email"
                v-model="myEmail"
                placeholder="Email*"
                :readonly="true"
                style="max-width: 300px"
                @focus="
                  focusDate = [];
                  focusMyDate = false;
                "
                v-if="myEmail"
              >
              </q-input>
            </q-form>

            <p class="text-orange mini margin-top" v-show="!myEmail">
              **請先填寫完再繼續
            </p>
          </div>
          <div class="filler"></div>
          <div
            class="col-6 col-md-4 col-sm-4 col-xs-4 flex flex-col flex-start-center"
          >
            <img class="big avatar" :src="myPhotoURL" />
            <q-btn
              unelevated
              class="no-border no-bg text-dark-green"
              @click="editP = true"
              >編輯</q-btn
            >
            <q-form class="flex flex-start-center fluid" v-show="editP">
              <q-file
                color="teal"
                filled
                label="上傳大頭貼"
                accept="image/*"
                @input="uploadImage($event)"
                name="photoURL"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
            </q-form>
          </div>
        </div>
        <div class="row fluid flex flex-start-center">
          <div class="filler"></div>
          <q-btn
            unelevated
            rounded
            class="margin or-back text-white"
            @click="submit()"
            size="lg"
            >更新資料</q-btn
          >
        </div>
        <div class="row">
          <q-form class="flex flex-start-center fluid">
            <h4 class="text-left text-dark-green fluid">學生資料</h4>
            <q-btn
              unelevated
              color="primary"
              rounded
              size="lg"
              icon="person_add"
              @click="
                childern.push({
                  likeDay: false,
                  likeNight: false,
                  likeWeekend: false,
                  publicSchool: false,
                  priviteSchool: false,
                  homeSchool: false,
                  style_v: 10,
                  style_a: 10,
                  style_r: 10,
                  style_k: 10,
                  int_linguistic: 80,
                  int_logical: 80,
                  int_spatial: 80,
                  int_musical: 80,
                  int_kinesthetic: 80,
                  int_interpersonal: 80,
                  int_intrapersonal: 80,
                  int_naturalist,
                  standard: 80,
                })
              "
            >
              新增子女
            </q-btn>
          </q-form>
          <div class="row padded" v-for="(c, i) in childern" :key="i">
            <div class="col-6 col-md-6 col-sm-8 col-xs-8 flex flex-col">
              <q-form class="flex flex-start-center fluid row">
                <h4 class="text-dark-gray">{{ i + 1 }}.</h4>
                <q-input
                  class="margin"
                  v-model="c.name"
                  placeholder="姓名*"
                  style="max-width: 300px"
                  @focus="
                    focusDate[i] = false;
                    focusMyDate = false;
                  "
                >
                </q-input>

                <q-select
                  v-model="c.gender"
                  :options="['女', '男', '雙性', '其他']"
                  label="性別"
                  style="max-width: 300px; min-width: 200px"
                />
              </q-form>

              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >生日<span class="red star">*</span></label
                >
                <q-input
                  class="margin"
                  v-model="c.date"
                  placeholder="生日*"
                  style="max-width: 300px"
                  @focus="
                    focusDate[i] = true;
                    focusMyDate = false;
                  "
                >
                </q-input>

                <div
                  class="date-picker row flex flex-center"
                  v-show="focusDate[i]"
                >
                  <q-date v-model="c.date" />
                  <q-btn
                    class="confirm-date"
                    color="secondary"
                    @click="confirmS()"
                    >確認</q-btn
                  >
                </div>
              </q-form>

              <div class="small-space"></div>

              <div class="row flex flex-col flex-start-center">
                <q-btn
                  @click="goAssessment()"
                  color="green margin"
                  size="lg"
                  rounded
                  icon="assessment"
                  >學習風格檢測</q-btn
                >

                <h4 class="text-dark-green">VARK學習風格</h4>
                <p>
                  <!-- 請參考：<a
                    href="https://vark-learn.com/vark%E5%95%8F%E5%8D%B7/"
                    target="_blank"
                    rel="noopener norefferer"
                    >VARK學習風格線上測驗</a
                  > -->
                </p>
              </div>

              <div class="small-space"></div>

              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >視覺/圖象：{{ c.style_v }}</label
                >
                <label class="text-gray margin"
                  >聽覺/語音：{{ c.style_a }}</label
                >
                <label class="text-gray margin"
                  >閱讀/書寫：{{ c.style_r }}</label
                >
                <label class="text-gray margin"
                  >實作/體驗：{{ c.style_k }}</label
                >
              </q-form>

              <div class="row flex flex-col flex-start-center">
                <h4 class="text-dark-green">多元智能</h4>
                <p>
                  <!-- 請參考：<a
                    href="https://www.tests.com.tw/mdsya.asp"
                    target="_blank"
                    rel="noopener norefferer"
                    >多元智能線上測驗</a
                  > -->
                </p>
              </div>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >語言智能：{{ c.int_linguistic }}</label
                >
                <label class="text-gray margin"
                  >數理邏輯智能：{{ c.int_logical }}</label
                >
                <label class="text-gray margin"
                  >空間智能：{{ c.int_spatial }}</label
                >
                <label class="text-gray margin"
                  >音樂智能：{{ c.int_musical }}</label
                >
                <label class="text-gray margin"
                  >肢體動覺智能：{{ c.int_kinesthetic }}</label
                >
                <label class="text-gray margin"
                  >人際智能：{{ c.int_interpersonal }}</label
                >
                <label class="text-gray margin"
                  >內省智能：{{ c.int_intrapersonal }}</label
                >
                <label class="text-gray margin"
                  >自然智能：{{ c.int_naturalist }}</label
                >
              </q-form>

              <div class="small-space"></div>

              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >總合學習能力：{{ c.standard }}</label
                >
              </q-form>

              <q-form class="flex flex-start-center fluid row">
                <div class="row fluid">
                  <label class="text-gray flex flex-center">首選時間</label>
                  <q-checkbox
                    toggle-order="ft"
                    v-model="c.likeDay"
                    label="上學時間"
                  />
                  <q-checkbox
                    toggle-order="ft"
                    v-model="c.likeNight"
                    label="放學後和晚上"
                  />
                  <q-checkbox
                    toggle-order="ft"
                    v-model="c.likeWeekend"
                    label="週末"
                  />
                </div>

                <div class="row fluid">
                  <label class="text-gray flex flex-center">就讀學校</label>
                  <q-checkbox
                    toggle-indeterminate
                    toggle-order="ft"
                    v-model="c.publicSchool"
                    label="公立學校"
                  />
                  <q-checkbox
                    toggle-indeterminate
                    toggle-order="ft"
                    v-model="c.priviteSchool"
                    label="私立學校"
                  />
                  <q-checkbox
                    toggle-indeterminate
                    toggle-order="ft"
                    v-model="c.homeSchool"
                    label="在家自學"
                  />
                </div>
              </q-form>
            </div>
            <div class="filler"></div>
            <div
              class="col-6 col-md-6 col-sm-4 col-xs-4 flex flex-col flex-start-center"
            >
              <q-img class="big avatar" :src="c.photoURL || ''"></q-img>
              <!-- --><q-btn
                unelevated
                class="no-border no-bg text-dark-green"
                @click="editP = true"
                >編輯</q-btn
              >
              <q-form class="flex flex-start-center fluid" v-if="editP">
                <q-file
                  color="teal"
                  filled
                  label="上傳大頭貼"
                  accept="image/*"
                  @input="uploadImage1($event, i)"
                  :name="c.name + '_photoURL'"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
              </q-form>
            </div>
          </div>
        </div>
        <div class="row">
          <q-form>
            <q-btn
              unelevated
              rounded
              class="margin or-border text-orange"
              @click="cancel()"
              size="lg"
              >取消</q-btn
            >

            <q-btn
              unelevated
              rounded
              class="margin or-back text-white"
              @click="submit()"
              size="lg"
              >更新資料</q-btn
            >

            <q-btn
              @click="goAssessment()"
              color="green margin"
              size="lg"
              rounded
              icon="assessment"
              >學習風格檢測</q-btn
            >
          </q-form>
        </div>
        <div class="row" v-if="me.provider == 'email'">
          <q-form class="flex flex-start-center fluid">
            <h4 class="text-left text-dark-green fluid">變更密碼</h4>
          </q-form>
          <q-form class="flex flex-start-center fluid">
            <q-btn color="secondary" @click="forgetPassWord()">變更密碼</q-btn>
          </q-form>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import convert from 'image-file-resize';
import { useMeta } from 'quasar';
import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set, get } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'ClassesPage',
  props: [
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'logged_in',
    'isLogout',
    'isInApp',
    'myKey',
    'items',
    'isTeacher',
    'isAdmin',
  ],
  setup() {
    const metaData = {
      title: '帳號',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const arr: any[] = [];

    const meta = ref<Meta>({
      totalCount: 1200,
    });

    const editP = ref(false);
    const editCP = ref([]);
    const myDate = ref('');
    const myCity = ref('');
    const myIntro = ref('');
    const myPayMethod = ref('信用卡');
    const focusDate = ref([]);
    const focusMyDate = ref(false);
    const myName = ref('');
    const myEmail = ref('');
    const myPhone = ref('');
    const myPhotoURL = ref('');
    const childern = ref(arr);

    return {
      meta,
      myDate,
      focusMyDate,
      editP,
      editCP,
      myCity,
      myIntro,
      myPayMethod,
      myName,
      myEmail,
      myPhone,
      childern,
      focusDate,
      myPhotoURL,
    };
  },
  mounted() {
    if (this.me && this.me.name) {
      this.myName = this.me.name;
      this.myEmail = this.email;
      this.myPhone = this.me.phone;
      this.myDate = this.me.date;
      this.myCity = this.me.city;
      this.myIntro = this.me.intro;
      this.childern = this.me.childern || [];
      this.myPhotoURL = this.me.photoURL || this.photoURL;
      this.myPayMethod = this.me.payMethod || '信用卡';
    } else if (this.email) {
      this.myEmail = this.email;
    }
    if (this.uid) {
      get(dbRef(db, 'users/' + this.uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log('get me');
            const m = snapshot.val();
            // console.log(m)
            this.myName = m.name;
            this.myEmail = this.email;
            this.myPhone = m.phone;
            this.myDate = m.date;
            this.myCity = m.city;
            this.myIntro = m.intro;
            this.childern = m.childern || [];
            this.myPhotoURL = m.photoURL || this.photoURL;
            this.myPayMethod = m.payMethod || '信用卡';
            this.$emit('get_current_user', m);
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  watch: {
    logged_in(nL) {
      console.log(nL);
      if (this.uid) {
        get(dbRef(db, 'users/' + this.uid))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log('get user data');
              const m = snapshot.val();
              // console.log(m)
              this.myName = m.name;
              this.myEmail = m.email || this.email;
              this.myPhone = m.phone;
              this.myDate = m.date;
              this.myCity = m.city;
              this.myIntro = m.intro;
              this.childern = m.childern || [];
              this.myPhotoURL = m.photoURL || this.photoURL;
              this.myPayMethod = m.payMethod || '信用卡';

              setTimeout(() => {
                this.$emit('get_current_user', m);
                // this.$emit('updateMe', this.uid, m.email, m.name, m.photoURL, m.provider)
              }, 100);
            } else {
              console.log('No data available');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    childern(newC, oldC) {
      for (let i = 0; i < newC.length; i++) {
        if (!oldC[i] || !oldC[i].date || newC[i].date !== oldC[i].date) {
          this.focusDate = [];
        }
      }
    },
    me(newM) {
      if (newM && newM.name) {
        this.myName = newM.name;
        this.myCity = newM.city || '';
        this.myIntro = newM.intro || '';
        this.myDate = newM.date;
        this.myEmail = newM.email || this.email;
        this.myPhone = newM.phone || '';
        this.childern = newM.childern || [];
        this.myPhotoURL = newM.photoURL || this.photoURL;
        this.myPayMethod = newM.payMethod || '信用卡';
      }
    },
  },
  methods: {
    goAssessment() {
      setTimeout(() => {
        this.$router.push('/assesment');
      }, 100);
    },
    confirmS() {
      const arr = this.childern.map(function (c: any) {
        return c.name;
      });

      function hasDuplicates(array: string[]) {
        var valuesSoFar: any = Object.create(null);
        for (var i = 0; i < array.length; ++i) {
          var value: string = array[i];
          if (value in valuesSoFar) {
            return true;
          }
          valuesSoFar[value] = true;
        }
        return false;
      }

      if (!hasDuplicates(arr)) {
        this.focusDate = [];
        this.focusMyDate = false;
        return;
      } else {
        window.alert('學生姓名不可重覆');
        return;
      }
    },
    forgetPassWord() {
      this.$emit('forgetPassWord', this.myEmail);
    },
    uploadImage(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'photoURL';
      i.onload = function () {
        var w = i.width;
        var h = i.height;
        console.log('IMAGE width', w);
        console.log('IMAGE height: ', h);

        var errMSG = '';

        if (w / h > 1.4) {
          errMSG =
            '寬高比過大，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (w / h < 0.7) {
          errMSG =
            '寬高比過小，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (!errMSG || window.confirm(errMSG)) {
          convert({
            file: file,
            width: 120,
            height: 120,
            type: 'png',
          })
            .then((resp: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(resp);
              reader.onload = (e) => {
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */
                set(dbRef(db, 'users/' + uid + '/photoURL'), e.target!.result);
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */
                set(
                  dbRef(db, 'users_public/' + uid + '/photoURL'),
                  e.target!.result
                );
              };
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
    },
    uploadImage1(event: Event, idx: number) {
      const uid = this.uid;
      const updateC = this.updateC;
      var i = document.createElement('img');
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'photoURL';
      i.onload = function () {
        var w = i.width;
        var h = i.height;
        console.log('IMAGE width', w);
        console.log('IMAGE height: ', h);

        var errMSG = '';

        if (w / h > 1.4) {
          errMSG =
            '寬高比過大，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (w / h < 0.7) {
          errMSG =
            '寬高比過小，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (!errMSG || window.confirm(errMSG)) {
          // console.log(file)
          convert({
            file: file,
            width: 120,
            height: 120,
            type: 'png',
          })
            .then((resp: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(resp);
              reader.onload = (e) => {
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */
                set(
                  dbRef(db, 'users/' + uid + '/childern/' + idx + '/photoURL'),
                  e.target!.result
                );
                updateC(idx, e.target!.result as string);
              };
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
    },
    updateC(idx: number, f: string) {
      // console.log(idx)
      // console.log(f)
      this.childern[idx].photoURL = f;
      this.$forceUpdate();
    },
    cancel() {
      if (window.confirm('確定要取消嗎？您的變更將不會儲存')) {
        this.$router.push('/');
      }
    },
    submit(bool: boolean) {
      if (!this.myName) {
        window.alert('請先輸入您的姓名');
        return;
      }
      if (!this.myEmail) {
        window.alert('請先輸入您的Email');
        return;
      }
      if (!this.myPhone) {
        window.alert('請先輸入您的手機號碼');
        return;
      }
      let pattern = new RegExp('^[0-9\-\\+\(\)]+$');

      console.log(this.myPhone);
      console.log(pattern.test(this.myPhone));
      let bo = pattern.test(this.myPhone);

      console.log(bo);

      if (!bo) {
        window.alert('手機號碼格式錯誤');
        return;
      }

      for (let i = 0; i < this.childern.length; i++) {
        if (!this.childern[i].name) {
          window.alert('請先輸入子女姓名');
          return;
        }
        if (!this.childern[i].date) {
          window.alert('請先輸入子女生日');
          return;
        }
      }
      set(dbRef(db, 'users/' + this.uid), {
        id: this.uid,
        bank_code: this.me.bank_code || '',
        bank_account: this.me.bank_account || '',
        bank_name: this.me.bank_code || '',
        account_name: this.me.bank_account || '',
        provider: this.me.provider || '',
        photoURL: this.myPhotoURL || this.photoURL,
        date: this.myDate || '',
        name: this.myName || '',
        email: this.myEmail || '',
        email_for_migration: this.myEmail.replace(/\./g, '_'),
        phone: this.myPhone || '',
        city: this.myCity || '',
        intro: this.myIntro || '',
        childern: this.childern || [],
        des: this.me.des || '',
        thought: this.me.thought || '',
        certifications: this.me.certifications || [],
        isParent: true,
        payMethod: this.myPayMethod || '信用卡',
        isTeacher: this.isTeacher || false,
        isAdmin: this.isAdmin || false,
        notifications: this.me.notifications || [],
        createTime: this.me.createTime || new Date().getTime(),
        updateTime: new Date().getTime(),
      }).then(() => {
        console.log('user data updated!');
        if (!bool) {
          window.alert('資料已送出，謝謝');
        }
      });
      set(dbRef(db, 'users_public/' + this.uid), {
        id: this.uid,
        name: this.myName || '',
        photoURL: this.myPhotoURL || this.photoURL,
        isParent: true,
        isTeacher: this.isTeacher || false,
        isAdmin: this.isAdmin || false,
        des: this.me.des || '',
        thought: this.me.thought || '',
        certifications: this.me.certifications || [],
        createTime: this.me.createTime || new Date().getTime(),
        updateTime: new Date().getTime(),
      }).then(() => {
        console.log('public user data updated!');
      });
    },
  },
});
</script>

<style scoped>
.date-picker {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  width: fit-content;
}

.confirm-date {
  position: absolute;
  bottom: 0em;
  right: 0;
}

.red.star {
  position: relative;
  top: -0.4em;
}

/* Single Page Style*/
</style>
