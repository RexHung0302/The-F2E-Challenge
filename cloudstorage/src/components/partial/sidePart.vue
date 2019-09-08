<template lang="pug">
  .sidePart.position-relatuve.h-100.text-left.animated.slideInLeft
    .sidePart__upPart.position-relatuve.w-100
      button.btn.sidePart__addBtn.mb-4
        font-awesome-icon.mr-4(:icon="['fa', 'plus']")
        span 新增
      .sidePart__itemBox.cursor-pointer
        font-awesome-icon.ml-2.mr-3(:icon="['fa', 'folder']")
        span 我的雲端硬碟
      .sidePart__itemBox.cursor-pointer
        font-awesome-icon.ml-2.mr-3(:icon="['fa', 'clock']")
        span 近期存取
      .sidePart__itemBox.cursor-pointer  
        font-awesome-icon.ml-2.mr-3(:icon="['fa', 'star']")
        span 已加星號
      .sidePart__itemBox.cursor-pointer.pb-3  
        font-awesome-icon.ml-2.mr-3(:icon="['fa', 'trash']")
        span 垃圾桶
    hr.sidePart__hr
    .sidePart__downPart.position-relatuve.h-100.w-100
      .sidePart__itemBox.cursor-pointer.pb-3  
        font-awesome-icon.ml-2.mr-3(:icon="['fa', 'database']")
        span 儲存空間
        small.form-text.text-muted.sidePart__remindText 目前使用量: 19.4 GB
</template>

<script>
export default {
  name: 'sidePart',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.sidePart {
  box-shadow: 3px 4px 6px #989898;
  // 上方的部分
  &__upPart {
    padding: 24px 30px 0 30px;
  }
  // 下方的部分
  &__downPart {
    padding: 24px 30px 0 30px;
  }
  // 分隔線
  &__hr {
    border: 1px solid #e0e0e0;
    margin-top: 0;
  }
  // 新增按鈕
  &__addBtn {
    background-color: #3E68B7;
    color: #fff;
    transition: all .3s;
    &:hover {
      background-color: #5e87d4;
    }
  }
  // 左側每一行選項
  &__itemBox {
    padding-bottom: 32px;
  }
  &__itemBox:last-child {
    padding-bottom: 0;
  }
  // 提示字
  &__remindText {
    margin-left: 37px;
  }
}
</style>