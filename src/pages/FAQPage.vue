<template lang="pug">
q-page.faq
  .row.padded
    .col-12
      h6.text-center.text-black.fluid.text-underline 關於共學島
      button.question.no-border.no-bg(@click="show[0] = !show[0]") Q: 什麼是共學課？
        q-icon(name="expand_more", v-show="!show[0]")
      p.answer(v-show="show[0]") A:「共學課」泛指家長自行聘請老師，組織給孩子的課外小班課堂。 家長或「團媽」（較積極組織共學課的家長）通常擔任主導角色，一手包辦找老師，策劃課程內容、招生等流程。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[1] = !show[1]") Q: 共學島的理念是什麼？
        q-icon(name="expand_more", v-show="!show[1]")
      p.answer(v-show="show[1]") A: 點燃孩子學習的熱忱 成為理想中的大人
        br
        | 我們認為孩子接受教育，不應該是學習把自己硬塞成為現成套版的模樣。
        br
        | 共學島致力讓家長可以輕鬆找到最適合自己孩子的老師，能夠針對每個孩子的獨特需要，令個人化教育更容易負擔，真正做到因材施教，因時施教，為孩子無憂準備迎接2050年的世界，讓孩子成為理想中的大人。
  .row.padded
    .col-12
      h6.text-center.text-black.fluid.text-underline 課堂相關問題
      button.question.no-border.no-bg(@click="show[2] = !show[2]") Q: 是否可以用現金付款？
        q-icon(name="expand_more", v-show="!show[2]")
      p.answer(v-show="show[2]") A: 抱歉本平台目前只接受信用卡線上付款方式。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[3] = !show[3]") Q: 如何聯絡共學島的客戶服務？
        q-icon(name="expand_more", v-show="!show[3]")
      p.answer(v-show="show[3]") A: 您可以電郵至
        a(href="malto:contact@colearna.co") contact@colearna.co
        | 或透過共學島的Line官方帳戶於辦公時間內聯絡共學島的工作人員。
        br
        br
        | 共學島Line官方帳戶 (
        a(href="https://page.line.me/colearna", target="_blank", rel="noopener norefferer") @colearna
        | )
        br
        | 客戶服務時段： 周一至周五
        br
        | 10:00 – 12:00
        br
        | 13:30 – 18:00
        br
        | 19:30 – 22:00
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[4] = !show[4]") Q: 我要申請退款，平台將如何處理？
        q-icon(name="expand_more", v-show="!show[4]")
      p.answer(v-show="show[4]") A:
        br
        br
        | 尚未開課課程之退款條件：
        br
        | (1)於開課日七日（含當日）前，得退還該課程金額之百分之百。
        br
        | (2)於開課日五日（含當日）前，得退還該課程金額之百分之七十。
        br
        | (3)於開課日三日（含當日）前，得退還該課程金額之百分之五十。
        br
        | (4)若用戶錯過上述所列的退款期限，不予退款，但平台將贈送相同課堂價格面額（扣除行政費後）之折價券供下次於平台購課使用。
        br
        br
        | 已開課課程（非單次課程之情形）之退款條件：
        br
        | (1)開課日前之退款要求等同上述單次課之規範。
        br
        | (2)首節課堂結束後至第二堂課之前（不含當日），得退還等同該課程價值之之抵用券（扣除行政費）以供往後於本平台使用。
        br
        | (3)於第二堂課當日及以後，平台得視乎具體情況決定如何處理退款申請。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[5] = !show[5]") Q: 我的孩子因故未能參加已報名之課堂或需要其中一堂請假，程序為何？可以退款嗎？
        q-icon(name="expand_more", v-show="!show[5]")
      p.answer(v-show="show[5]") A: 請假只適用於非單次課。報名單次課者若未能上課，平台將依照退款政策作用戶申請退款處理。
        br
        | 非單次課的課程期間，學生得每四堂課免費請假一次。課程只有四堂課或以下者，則最多可免費請假一堂課。
        br
        | 若老師有開放補課，則可選擇老師開放補課之時段補上課。
        br
        | 若老師未有開放補課，則退學費金額等同的共學點於平台使用。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[6] = !show[6]") Q: 孩子若未能上課，可以安排補課嗎？
        q-icon(name="expand_more", v-show="!show[6]")
      p.answer(v-show="show[6]") A: 是否接受補課視乎個別老師決定，請參考課堂頁面裡的相關說明。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[7] = !show[7]") Q: 共學點是什麼？
        q-icon(name="expand_more", v-show="!show[7]")
      p.answer(v-show="show[7]") A: 新台幣1元 = 10個 共學點，點數沒有使用期限，可以折抵在共學島平台上的消費。
      q-separator(inset)
      button.question.no-border.no-bg(@click="show[8] = !show[8]") Q: 我有疑問，可以如何取得協助？
        q-icon(name="expand_more", v-show="!show[8]")
      p.answer(v-show="show[8]") A: 您可以電郵至
        a(href="malto:contact@colearna.co") contact@colearna.co
        | 或透過共學島的Line官方帳戶於辦公時間內聯絡共學島的工作人員。
        br
        br
        | 共學島Line官方帳戶 (
        a(href="https://page.line.me/colearna", target="_blank", rel="noopener norefferer") @colearna
        | )
        br
        | 客戶服務時段： 周一至周五
        br
        | 10:00 – 12:00
        br
        | 13:30 – 18:00
        br
        | 19:30 – 22:00
  .row.padded
    .col-12
      h6.text-center.text-black.fluid.text-underline 關於老師
      button.question.no-border.no-bg(@click="show[9] = !show[9]") Q: 平台上的老師有通過什麼形式的資歷審查嗎？
        q-icon(name="expand_more", v-show="show[9]")
      p.answer(v-show="!show[9]") A: 平台有邀請老師提供無犯罪記錄證明書及支持相關教學資歷的證明作驗證，平台上的新老師亦有經過不少於三位有一定資歷的共學老師推薦。
</template>

<script lang="ts">
import { useMeta } from 'quasar';

import { Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FAQPage',
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
  ],
  setup() {
    const show = ref([]);
    const metaData = {
      title: 'FAQ',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const step = ref(0);

    return { meta, step, show };
  },
  mounted() {
    // setInterval(this.go, 1000)
  },
  methods: {
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
.faq {
  max-width: 680px;
  margin: 0 auto;
  background-color: #eee;
}

.about_card {
  width: 45%;
  margin: 1.6em;
  min-width: 360px;
  max-width: 380px;
  height: 600px;
  padding: 1em;
}

.about_card h4 {
  font-size: 28px;
  font-weight: 700;
  font-family: 'Inter';
  margin-bottom: 2em;
}

.about_card p {
  font-size: 24px;
  font-weight: 400;
  font-family: 'Inter';
}

.bk {
  background-image: url('/img/about_decade_bk.png');
  background-repeat: no-repeat;
  overflow: visible;
  padding: 0;
  height: 3em;
  width: 6em;
}

h6 {
  font-size: 24px;
  font-weight: 700;
  font-family: 'Inter';
  margin-bottom: 20px;
}

p,
button {
  padding: 0;
  margin: 0.2em;
  color: black;
  font-size: 16px;
}

button:hover {
  text-decoration: underline;
}

.q-separator {
  margin-top: 1em;
  margin-bottom: 1em;
}

.q-btn:hover {
  text-decoration: underline;
}
/* Single Page Style*/
</style>
