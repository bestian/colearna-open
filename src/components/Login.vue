<template lang="pug">
.q-card
  .top.right.attached
    button.no-border.no-bg(@click="stopLogin")
      q-icon(name="close")
  .row.flex.flex-center
    img.colearna-logo(src="../assets/logo-colearna-120-x-42.svg", alt="Colearna")
  //.row.flex.flex-center
     q-btn.fb-btn(rounded="rounded", @click="loginFB")
      img.login-icon(src="../assets/fb-icon.png", alt="Facebook Login")
    q-btn.g-btn(rounded="rounded", @click="loginGoogle")
      img.login-icon(src="../assets/google-icon.png", alt="Google Login")
  .row.flex.flex-center
    h6.text-deep-orange-5.no-margin
      a.clickable.text-underline(:class="{'text-grey': showTerm, 'text-orange-12': !showTerm}", @click="i_want_login()") 登入
      span.text-grey ／
      a.clickable.text-underline(:class="{'text-grey': !showTerm,'text-orange-12': showTerm}", @click="showTerm = true") 註冊
  .row.flex.flex-center
    q-btn.g-btn(rounded="rounded", @click="loginGoogle")
      img.login-icon(src="../assets/google-icon.png", alt="Google Login")
  .row.flex.flex-center
    .q-pa-md
      q-form
        q-input(outlined="outlined", type="email", v-model="email" label="電子郵件信箱", style="width: 320px", autocomplete="username")
        q-input(outlined="outlined", type="password", v-model="password" label="密碼", style="width: 320px", autocomplete="current-password")
    p.fluid.text-right(v-if="!showTerm")
      button.no-border.no-bg.text-gray.forget(@click="forgetPassWord") 忘記密碼

  .row.flex.flex-center.text-center
    p.text-gray(v-if="!showTerm") 還沒有帳號？
      button.no-border.no-bg.text-green(@click="startRegisterWithEmail") 快速註冊共學島帳號
    p.text-gray(v-else)
      q-checkbox(v-model="agreeTerm", label="我已閱讀並同意")
      router-link#to-term.inline-flex(target="_blank", to="/term") 共學島服務條款

  .row.flex.flex-center.text-center
    q-btn.e-btn(rounded="rounded", @click="loginEmail", v-if="!showTerm")
      | 使用Email登入
    q-btn.e-btn(rounded="rounded", @click="registerWithEmail", v-else)
      | 使用Email帳號註冊

    q-btn.e-btn(rounded="rounded", @click="loginGoogle", color="deep-orange-5", v-if="!showTerm")
      | 使用Google登入
    q-btn.g-btn(rounded="rounded", @click="registerWithGoogle", color="deep-orange-5", v-else)
      | 使用Google帳號註冊


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LogIn',
  setup() {
    const email = ref('');
    const password = ref('');
    const showTerm = ref(true);
    const agreeTerm = ref(false);
    return {
      email,
      password,
      showTerm,
      agreeTerm,
    };
  },
  mounted() {
    if (localStorage.getItem('want') == 'login') {
      this.showTerm = false;
    }
  },
  methods: {
    loginFB() {
      this.$emit('loginFB');
    },
    registerWithGoogle() {
      if (!this.agreeTerm) {
        window.alert('請先詳閱服務條款並勾選「我已閱讀並同意共學島服務條款」');
        return;
      } else {
        this.loginGoogle();
      }
    },
    loginGoogle() {
      this.$emit('loginGoogle');
      this.i_want_login();
    },
    loginEmail() {
      this.$emit('loginEmail', this.email, this.password);
      this.i_want_login();
    },
    startRegisterWithEmail() {
      this.showTerm = true;
    },
    registerWithEmail() {
      if (!this.agreeTerm) {
        window.alert('請先詳閱服務條款並勾選「我已閱讀並同意共學島服務條款」');
        return;
      } else {
        this.$emit('registerWithEmail', this.email, this.password);
        this.i_want_login();
      }
    },
    forgetPassWord() {
      this.$emit('forgetPassWord', this.email);
    },
    stopLogin() {
      this.$emit('stopLogin');
    },
    i_want_login() {
      this.showTerm = false;
      localStorage.setItem('want', 'login');
    },
  },
});
</script>

<style type="text/css" scoped>
.q-card {
  width: 90%;
  max-width: 520px;
  position: relative;
  border-radius: 30px;
}

#to-term {
  position: relative;
  top: 0.9px;
  left: -5px;
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
