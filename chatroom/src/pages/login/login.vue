<template lang="pug">
  .login.position-relative.w-100.h-100
    .nameInputBox.position-relative(v-if="isLoading === false")
      input.nameInputBox__input.form-control(placeholder="輸入您的聊天名稱", v-model.trem="nickName", maxlength="8")
      small.form-text.text-muted.text-right.nameInputBox__small 0 / 8
    .btnBox.position-relative(v-if="isLoading === false")
      button.btn.btnBox__visitorBtn.d-block.w-100.mb-3(@click="login('visitor')") 訪客登入
      button.btn.btnBox__facebookBtn.d-block.w-100(@click="login('facebook')") Facebook登入
      small.form-text.mt-2.whiteRemind 綁定Facebook帳號可以避免聊天內容遺失喔！
    loading(v-if="isLoading === true")
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
.login {
  max-width: 414px;
  margin: 0 auto;
  padding: 0 30px;
  .nameInputBox {
    position: relative;
    top: 40%;
    &__input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      border-radius: 0;
    }
    &__small {
      color: #FFFFFF!important;
    }
  }
  // 登入按鈕
  .btnBox {
    top: 45%;
    // 訪客登入
    &__visitorBtn {
      background-color: #654D8D;
      color: #fff;
    }
    // 臉書登入
    &__facebookBtn {
      background-color: #4D5B8D;
      color: #fff;
    }
  }
}

</style>