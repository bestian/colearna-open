<template lang="pug">
q-card.welcome-card
  .top.right.attached
    button.no-border.no-bg(@click="stopWelcome")
      q-icon(name="close")

  .row.flex.flex-start-top
    .col-12.flex.flex-col.flex-start-center
      h2.text-dark-green.no-margin 升級版預告
      h6.text-dark-green.no-margin 全新共學島，即將上線囉！7/04~7/23會逐步完善
  .row.flex.flex-center.no-margin.no-padding
    .col-12.flex.flex-col.flex-center.no-margin.no-padding
      q-list.flex.flex-center.no-padding.no-margin
       q-item(clickable @click="tryLogin").bold.fluid.text-accent.no-margin.no-padding
          q-avatar(icon="tips_and_updates")
          q-item-section.text-underline
            | 按此「登入/註冊」
  .row.flex.flex-start-top
    .col-md-6.col-sm-6.col-xs-12.flex.flex-col.flex-start-center
      h4.text-dark-green.no-margin 原本有共學島帳號的老朋友
      h6.text-dark-green.no-margin 歡迎升級您的共學島帳號
      q-list.fluid(style="min-height:320px")
        q-item.fluid
          q-avatar(icon="person_add_alt")
          q-item-section
            | 您可用Google或email註冊，請使用和原帳號相同的方式及Email來註冊。
        q-item.fluid
          q-avatar(icon="contact_mail")
          q-item-section
            | 若您原本是用Line登入，請使用和您的Line帳號相同的Email來進行Email註冊。
        q-item.fluid
          q-avatar(icon="contact_mail")
          q-item-section
            span
              | 原本共學島的老師請聯絡客服信箱：
              a.inline-block.fit-content(href="mailto:inquiry@colearna.co") inquiry@colearna.co
              | ，我們會請專人協助您升級新帳號。
        q-item.fluid
          q-avatar(icon="account_circle")
          q-item-section
            | 舊版網站的帳號資料我們已妥善保存。 2023/06/23起，您可將您原本儲存在共學島平台的資料（如課程、 點數等），整併到新帳號。
    .col-md-6.col-sm-6.col-xs-12.flex.flex-col.flex-start-center
      h4.text-dark-green.no-margin 新朋友
      h6.text-dark-green.no-margin 歡迎加入共學島
      q-list.fluid(style="min-height:320px")
        q-item.fluid
          q-avatar(icon="person_add_alt")
          q-item-section
            | 共學島是一站式的組課平台（含學前、中小學、親子與家長成長等）
        q-item.fluid
          q-avatar(icon="balance")
          q-item-section
            | 平衡「進入體制內框架」和「逃出體制外自學」的學習系統。
        q-item.fluid
          q-avatar(icon="contact_mail")
          q-item-section
            | 由家長自行聘請老師，為孩子們量身設計的小班制課程。
        q-item(clickable @click="goAbout()").bold.fluid.text-light-blue-14
          q-avatar(icon="tips_and_updates")
          q-item-section.text-underline
            | 關於我們的理念和作法，請按此「瞭解更多」
  .row.flex.flex-center
    .col-12.flex.flex-col.flex-center
      q-list.flex.flex-center.no-padding.no-margin
       q-item(clickable @click="tryLogin").bold.fluid.text-accent.no-padding.no-margin
          q-avatar(icon="tips_and_updates")
          q-item-section.text-underline
            | 按此「登入/註冊」
    q-checkbox#i-understand.no-margin(label="我瞭解了，不要再提示", v-model="neverShowWelcome")

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LogIn',
  setup() {
    const neverShowWelcome = ref(false);
    return {
      neverShowWelcome,
    };
  },
  methods: {
    tryLogin() {
      this.$emit('tryLogin');
    },
    stopWelcome() {
      this.$emit('stopWelcome', this.neverShowWelcome);
    },
    goAbout() {
      this.$router.push('/about');
      this.$emit('stopWelcome', this.neverShowWelcome);
    },
    goFAQ() {
      this.$router.push('/faq');
      this.$emit('stopWelcome', this.neverShowWelcome);
    },
  },
});
</script>

<style type="text/css" scoped>
#i-understand {
  position: absolute;
  bottom: 2em;
  left: 1.6em;
}

.welcome-card {
  width: 90%;
  max-width: 920px;
  max-height: 95vh;
  overflow: auto;
  position: relative;
  border-radius: 30px;
  padding-bottom: 0;
  padding-top: 1.4em;
}

.row {
  padding: 0.8em 0.4em;
}

.top.right.attached {
  position: absolute;
  top: 0.8em;
  right: 0.8em;
  font-size: 18px;
}

.fb-btn {
  background-color: #3b5998;
}

.fb-btn,
.g-btn,
.e-btn {
  min-width: 8em;
  margin: 0 0.6em;
}

.e-btn {
  background-color: #999;
  color: white;
}

.e-btn:hover {
  background-color: #666;
}

.forget {
  position: relative;
  right: 15vmin;
}

@media screen and (max-width: 831px) {
  .forget {
    position: relative;
    right: 20px;
  }
}
</style>
