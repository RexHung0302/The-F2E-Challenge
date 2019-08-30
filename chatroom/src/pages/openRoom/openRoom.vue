<template lang="pug">
  .openRoom.position-relative.w-100.h-100.pt-4
    h5 已加入聊天室
    .otherSide.position-relative.w-100.pt-4
      .row.no-gutters
        .col-6.text-left
          .otherSide__userName
            span 閒閒沒事
          .otherSide__userTextBox
            span.otherSide__userTextBox-span 哈哈是吼！！
            small.form-text.text-muted.d-inline-block.otherSide__userTextBox-time 10:24
        .col
    .ownSide.position-relative.w-100.pt-4
      .row.no-gutters
        .col-6
        .col.text-right
          .ownSide__userTextBox
            //- small.form-text.text-muted.d-inline-block.ownSide__userTextBox-time 10:24
            span.ownSide__userTextBox-span 哈哈是吼！！
    .chartInputRow.w-100.animated.fadeInUp
      .row.no-gutters.position-relative.w-100.h-100
        .col-10
          input.chartInputRow__input.w-100
        .col
          font-awesome-icon.cursor-pointer.iconHover.chartInputRow__updateIcon.h-100(:icon="['fas', 'paperclip']")


</template>

<script src="./openRoom.js"></script>

<style lang="scss" scoped>
.openRoom {
  color: white;
  padding: 0 20px;
  font-size: 12px;
  // 對方
  .otherSide {
    &__userName {
      padding: 0 10px;
    }
    // 對話框
    &__userTextBox {
      padding: 10px;
      margin-top: 5px;
      &-span {
        background-color: #654D8D;
        padding: 10px;
        border-radius: 23px;
      }
      &-time {
        position: absolute;
        bottom: 0;
        color: #FFFFFF;
        margin-left: 5px;
      }
    }
  }
  // 自己
  .ownSide {
    // 對話框
    &__userTextBox {
      padding: 10px;
      &-span {
        background-color: #654D8D;
        padding: 10px;
        border-radius: 23px;
      }
      &-time {
        position: absolute;
        bottom: 0;
        color: #FFFFFF;
        margin-left: 5px;
        left: 20px;
      }
    }
  }
}

.chartInputRow {
  background-color: #3C1B49;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  &__input {
    background-color: #654D8D;
    border-radius: 20px;
    border: none;
    height: 40px;
    padding: 0 20px;
    color: #fff;
  }
  &__updateIcon {
    font-size: 26px;
  }
}
</style>