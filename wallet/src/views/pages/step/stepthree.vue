<template lang="pug">
  .stepthree.position-relative.h-100
    .stepthree__finishBox.position-relative.animated.fadeIn
      .finishBox__titleBox.w-100.text-left.pb-5
        .finishBox__titleBox-img.d-inline-block.pr-3
          img.vertical-align-baseline(:src="require('@/assets/images/payModeImg/checked.png')")
        .finishBox__titleBox-disInfo.d-inline-block.vertical-align-middle 
          h3 付款完成
          h4.text-muted Order Complete
          p.text-muted 我們將寄送完整訂購明細至您的E-mail
      .finishBox__infoBox.text-left.text-muted.pb-5
        .row.no-gutters
          .col-4.pb-3 訂單編號
          .col-8 No.00639
        .row.no-gutters  
          .col-4.pb-3 訂購人
          .col-8 {{ cardOwner }}
        .row.no-gutters(v-for="good in goods")
          .col-4.pb-3 商品名稱
          .col-8 {{ good.name }}*{{ good.order }}
        .row.no-gutters
          .col-4.pb-3 實付金額
          .col-8 NT.{{ totalPrice }}
        .row.no-gutters  
          .col-4.pb-3 付款方式
          .col {{ payment }}
          span(v-if="payment === '信用卡付款'") {{ cardNumOne }} **** {{ cardNumThree }} ****
        .row.no-gutters  
          .col-4.pb-3 運送方式
          .col-8 {{ shippingModeOption }}

    .stepthree__buttonBox.position-relative.text-right
      button.btn.button(@click="finish") 完成    
</template>

<script src="./stepthree.js"></script>

<style lang="scss" scoped>

</style>


