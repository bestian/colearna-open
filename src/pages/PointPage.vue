<template>
  <q-page padding>
    <div class="row">
      <h2 class="text-dark-green text left bold no-margin">我的點數</h2>
    </div>
    <div class="row">
      <h6 class="text-dark-gray text left bold no-margin">目前擁有</h6>
    </div>
    <div class="row">
      <h2 class="text-dark-green text left bold margin">10</h2>
      <div class="flex flex-col">
        <div class="filler"></div>
        <h6 class="text-dark-gray text left bold margin">點數</h6>
      </div>
      <div class="flex flex-col">
        <div class="filler"></div>
        <q-btn size="lg" rounded unelevated class="margin or-back text-white" @click="setBank = true">
          <q-icon name="add"></q-icon>
          <span class="text-underline">設定銀行帳戶</span></q-btn>
      </div>
    </div>
    <div class="row long-padded lw-back">
      <q-input :dense="false" class = "white-back margin" outlined v-model="code" placeholder="輸入兌換碼"></q-input>
      <q-btn size="md" rounded unelevated class="margin or-back text-white w-8" @click="setBank = true">兌換</q-btn>
    </div>
    <div class="row padded flex flex-start-center">
      <q-checkbox v-model="useAll">
      </q-checkbox>
      <div class="flex flex-col">
        <div class="filler"></div>
        <h6 class="text-dark-green">全部兌換</h6>
      </div>
    </div>
    <div class="row padded">
      <q-table
      hide-bottom
      virtual-scroll
      :dense="$q.screen.lt.md"
      class="fluid class-pt-table"
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
    </div>
    <div class="pop" v-show="setBank">
      <div class="pop-back" @click = "setBank = false"></div>
      <q-card class="bank-card">
        <h4 class="text-dark-green">設定銀行帳戶</h4>

        <q-form class="flex flex-start-center">
          <q-input class="margin" style="display:inline-block; width:45%; max-width: 340px;" outlined rounded v-model="bank_code" placeholder="銀行代碼"></q-input>
          <div class="filler"></div>
          <q-input class="margin" style="display:inline-block; width:45%; max-width: 340px;" outlined rounded v-model="bank_account" placeholder="銀行帳號"></q-input>
        </q-form>
        <q-form class="flex flex-start-center">
          <q-input class="margin" style="display:inline-block; width:45%; max-width: 340px;" outlined rounded v-model="bank_name" placeholder="銀行"></q-input>
          <div class="filler"></div>
          <q-input class="margin" style="display:inline-block; width:45%; max-width: 340px;" outlined rounded v-model="account_name" placeholder="戶名"></q-input>
        </q-form>
        <q-form class="flex flex-start-center">
          <q-input class="margin" style="display:inline-block; width:45%; max-width: 340px;" outlined rounded v-model="bank_branch" placeholder="分行"></q-input>
        </q-form>

        <h6 class="text-dark-gray">
          ．上課日前 1 日 (不含上課日) 前通知取消訂單 (含整筆取消及部分人數取消) ，可全額退費。<br/>
          ．上課日前 1 日至前 1 日內 (不含上課日) 如因不可歸責於主辦單位之因素，須退辦理取消報名並退費者 (含整筆取消及部分人數取消) ，將扣除原價金額的 20% 手續費用。<br/>
          ．出發日前 1 日告知取消訂單 (含整筆取消及部分人數取消) ，則並不予退回款項。範例：週一開始的活動，於前一週週六 (含) 前申請取消，將扣除原價金額的 20% <br/>．手續費用後退回剩餘款項；前一週週日起申請取消，即不得退回任何款項。
          如因天災等不可抗力因素，Colearna 將主動聯繫延期或退款。
        </h6>
        <div class="row flex flex-start-center long-padded">
          <div class="filler"></div>
          <q-btn size="lg" rounded unelevated class="or-back text-white" @click="saveBank()">確認儲存</q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar'
import { useDatabase } from 'vuefire'
import { ref as dbRef, set } from 'firebase/database'

const db = useDatabase()

import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MyPoint',
  props: ['photoURL', 'myName', 'myKey', 'items', 'me', 'uid'],
  setup () {
    const metaData = {
      title: '我的點數',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
      }
    }
    useMeta(metaData)
    const bank_code = ref('')
    const bank_account = ref('')
    const bank_name = ref('')
    const account_name = ref('')
    const bank_branch = ref('')
    const setBank = ref(false)
    const useAll = ref(false)
    const code = ref('')
    const dateType = ref('square')
    const role = ref('家長')
    const op = ref('月')
    const filter_act = ref('所有課程')
    const action = ref('完成課程')

    const columns = [
      {
        name: 'name',
        required: true,
        label: '課程名稱',
        align: 'left',
        field: 'name',
        sortable: true
      },
      { name: 'time', align: 'center', label: '購買時間', field: 'time', sortable: true },
      { name: 'points', align: 'center', label: '回饋點數', field: 'points' },
      { name: 'status', align: 'center', label: '狀態', field: 'status' },
      { name: 'code', align: 'center', label: '兌換碼', field: 'code' }
    ]

    const rows = [
      {
        name: '線上課程｜拼音入門 Beginner Phonics – 孩子自己讀的第一本書',
        time: '2023/03/16',
        points: 1200,
        status: '已兌換',
        code: 'GROUP20'
      },
      {
        name: '線上課程｜拼音入門 Beginner Phonics – 孩子自己讀的第一本書',
        time: '2023/03/22',
        points: 1200,
        status: '未兌換',
        code: 'GROUP21'
      }
    ]
    return {
      dateType, op, filter_act, action, role, setBank,
      useAll, code,
      columns, rows,
      bank_code, bank_account, bank_name, account_name, bank_branch
    }
  },
  mounted () {
    if (this.$route.params.action == 'my_fav') {
      this.action = '我的收藏'
      const metaData1 = {
        title: '我的收藏',
        noscript: {
          default: 'This is content for browsers with no JS (or disabled JS)'
        }
      }
      useMeta(metaData1)
    }
    if (this.me) {
      this.bank_code = this.me.bank_code || ''
      this.bank_account = this.me.bank_account || ''
      this.bank_name = this.me.bank_name || ''
      this.account_name = this.me.account_name || ''
      this.bank_branch = this.me.bank_branch || ''
    }
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
    saveBank () {
      console.log(this.uid)
      set(dbRef(db, 'users/' + this.uid + '/bank_name'), this.bank_name)
      set(dbRef(db, 'users/' + this.uid + '/bank_code'), this.bank_code)
      set(dbRef(db, 'users/' + this.uid + '/bank_account'), this.bank_account)
      set(dbRef(db, 'users/' + this.uid + '/account_name'), this.account_name).then(() => {
        window.alert('設定已儲存')
        this.setBank = false
      })
    }
  }
})
</script>

<style type="text/css" scoped>
  .heart {
    position: absolute;
    top: 6em;
    right: .2em;
  }
</style>