<template lang="pug">
  .stepone.position-relative.w-100
    .stepone__infoBox.position-relative.rounded.text-left.animated.fadeIn
      h3 訂單資訊
      h4.text-muted Order Information

      table.table
        thead
          tr.table-active
            th(scope="col") 商品名稱
            th(scope="col") 單價
            th(scope="col") 數量
            th(scope="col") 操作
        tbody
          tr(v-for="(good,index) in goods")
            th(scope="row") {{ good.name }}
            td NT.{{ good.price }}
            td {{ good.order }}
            td 
              button.btn.btn-sm.btn-primary(@click="deleteGood(index)") 刪除

      table.table
        thead
          tr.table-active
            th(scope="col") 運送方式
            th(scope="col") 運費
        tbody
          tr
            th(scope="row")
              select.form-control(v-model="shippingModeOption", @change="selectedMode")
                option(v-for="mode in shippingMode") {{ mode.mode }}
            td
              label.col-form-label NT.{{ shippingFree }}

      hr.infoBox__hr

      h5.text-right 總計 ${{ totalPrice }}


    .stepone__buttonBox.position-relative.row.no-gutters
      .col-6.text-left
        button.button.btn(@click="reloadGoods") 重整訂單
      .col-6.text-right
        button.button.btn(@click="nextPage") 下一步 
      

    
</template>

<script src="./stepone.js"></script>

<style lang="scss" scoped></style>


