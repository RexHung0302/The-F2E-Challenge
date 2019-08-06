<template lang="pug">
  .steptwo.position-relative.w-100
    .steptwo__payInfoBox.position-relative.w-100.h-100.row.no-gutters.animated.fadeIn
      .payInfoBox__leftPart.position-relative.h-100.col-3.text-left.mr-4.rounded
        h4 訂單資訊
        h5.text-muted Order Information
        .goodsTitle.row.no-gutters.pt-4.pb-2
          .col-8
            span 商品名稱/數量
          .col.text-right
            span 小計
        .goodsInfo.row.no-gutters.pb-2(v-for="good in goods")
          .col-8
            span {{ good.name }}*{{ good.order }}
          .col.text-right
            span NT.{{ good.price * good.order }}
        .goodsSendMode.row.no-gutters.pb-2
          .col-8
            span {{ shippingModeOption }}
          .col.text-right
            span NT.{{ shippingFree }}
        hr.mb-2
        .goodsTotalPriceBox.text-right
          span.goodsTotalPrice__span.font-weight-bold NT.{{ totalPrice }}
      .payInfoBox__rightPart.position-relative.h-100.text-left.col-8.rounded
        .rightPart__titleBox.row.no-gutters
          .col-3.rightPart__titleBox.text-left
            h4 付款資訊
            h5.text-muted Payment
          .col.rightPart__paymentBox.text-right.row
            .col-4.paymentItem.paymentBox__creditCard.text-center
              .paymentItem__box.position-relative.w-100.h-100.rounded(@click="chosePayment('creditCard')", :class=" { active: payment === 'creditCard' } ")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/select_creditCard.png')", v-if="payment === 'creditCard'")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/creditCard.png')", v-else)
                span 使用信用卡付款
            .col-4.paymentItem.paymentBox__atm.text-center
              .paymentItem__box.position-relative.w-100.h-100.rounded(@click="chosePayment('atm')", :class=" { active: payment === 'atm' } ")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/select_atm.png')", v-if="payment === 'atm'")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/atm.png')", v-else)
                span 使用ATM付款
            .col-4.paymentItem.paymentBox__convenienceStore.text-center
              .paymentItem__box.position-relative.w-100.h-100.rounded(@click="chosePayment('store')", :class=" { active: payment === 'store' } ")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/select_store.png')", v-if="payment === 'store'")
                img.paymentItem__img.d-block.pb-2(:src="require('@/assets/images/payModeImg/store.png')", v-else)
                span 使用超商代碼付款
        .rightPart__profileInfo.pt-4
          .rightPart__profileInfo-cardRow.pb-3.row.no-gutters
            .col-2
              span 卡號
            .col
              input.cardRow__input.text-center(maxlength="4", v-model="cardNumOne")
              input.cardRow__input.text-center(maxlength="4", v-model="cardNumTwo")
              input.cardRow__input.text-center(maxlength="4", v-model="cardNumThree")
              input.cardRow__input.text-center(maxlength="4", v-model="cardNumFour")
              img(:src="require('@/assets/images/payModeImg/error.png')", v-if="this.isCardNumOneError || this.isCardNumTwoError || this.isCardNumThreeError || this.isCardNumFourError")
              span.remindRed.vertical-align-middle(v-if="this.isCardNumOneError || this.isCardNumTwoError || this.isCardNumThreeError || this.isCardNumFourError") 請填妥有效的信用卡
          .rightPart__profileInfo-nameRow.pb-3.row.no-gutters
            .col-2
              span 持卡人
            .col
              input.nameRow__input.text-center(v-model="cardOwner")
              img(:src="require('@/assets/images/payModeImg/error.png')", v-if="this.isCardOwnerError")
              span.remindRed.vertical-align-middle(v-if="this.isCardOwnerError") 請填妥信用卡持卡人姓名
          .rightPart__profileInfo-cardDateRow.pb-3.row.no-gutters
            .col-3
              span 卡片效期(MM/YY)
            .col
              input.cardDateRow__input.text-center.mr-1(maxlength="2", v-model="cardExpiryDateMonth")
              span  / 
              input.cardDateRow__input.text-center.ml-1(maxlength="2", v-model="cardExpiryDateDate")
              img(:src="require('@/assets/images/payModeImg/error.png')", v-if="this.isCardExpiryMonthError || this.isCardExpiryDateError")
              span.remindRed.vertical-align-middle(v-if="this.isCardExpiryMonthError || this.isCardExpiryDateError") 請填妥有效的信用卡效期
          .rightPart__profileInfo-safeNumRow.pb-3.row.no-gutters
            .col-2
              span 安全碼
            .col
              input.safeNumRow__input.text-center(maxlength="3", v-model="cardSafeNum")
              img(:src="require('@/assets/images/payModeImg/error.png')", v-if="this.isSafeNumError")
              span.remindRed.vertical-align-middle(v-if="this.isSafeNumError") 請填妥信用卡安全碼 (cvv)
          .rightPart__profileInfo-checkBoxRow.pb-5
            .custom-control.custom-checkbox.pb-3
              input.custom-control-input(type="checkbox" id="customCheck1")
              label.custom-control-label(for="customCheck1") 儲存卡片資訊
            .custom-control.custom-checkbox
              input.custom-control-input(type="checkbox" id="customCheck2")
              label.custom-control-label(for="customCheck2") 我同意接受商家名稱服務條款及隱私權政策
          .rightPart__profileInfo-remindBoxRow
            img.px-3(:src="require('@/assets/images/payModeImg/sm_creditCard.png')")
            span.remindBoxRow__span.text-muted 使用SSL 128 Bit 安全加密機制，保障個人及信用卡資料不外洩
      
      .col-3.mr-4
      .payInfoBox__buttonPart.col-8
        .row.no-gutters
          .col-6.text-left
            router-link(:to="{name:'stepone'}")
              button.btn 上一步
          .col-6.text-right
            button.btn.button(@click="finishBtn") 確認付款 

</template>

<script src="./steptwo.js"></script>

<style lang="scss" scoped></style>
