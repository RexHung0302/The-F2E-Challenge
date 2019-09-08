<template lang="pug">
  .headerPart.position-relative.w-100.row.no-gutters.text-left.animated.slideInDown
    .col-3.text-center
      router-link(:to="{name: 'index'}")
        span.headerPart__logo.font-weight-bold.cursor-pointer ColudStorage
    .col-7.pl-2
      font-awesome-icon.mr-2(:icon="['fa', 'search']")
      input.headerPart__searchInput(placeHolder="搜尋雲端硬碟")
    .col-2
      .row.no-gutters
        .col
          font-awesome-icon.mr-4.cursor-pointer.headerPart__icon(:icon="['fa', 'bell']")
          font-awesome-icon.mr-4.cursor-pointer.headerPart__icon(:icon="['fa', 'cog']")
        .col-auto.text-right.px-3
          .headerPart__userPofileImgBox.overflow-hidden
            img.img-fluid.w-100.h-100.rounded-circle.cursor-pointer(:src="userPofileImg")
</template>

<script>
export default {
  name: 'haederPart',
  data() {
    return {
      userPofileImg: null,
    }
  },
  mounted(){
    // 到 store 取得頭部 logo
    this.userPofileImg = this.$store.state.userPofileImg;
  },
}
</script>

<style lang="scss" scoped>
.headerPart {
  height: 86px;
  line-height: 80px;
  border-bottom: 1px solid #e0e0e0;
  // 最左上角的 logo
  &__logo {
    color: #2B3E62;
    font-size: 36px;
    transition: all .3s;
    &:hover {
      color: #6d88bb;
    }
  }
  // 搜尋 input
  &__searchInput {
    border: none;
  }
  // 每一個 icon
  &__icon {
    transition: all .3s;
    font-size: 25px;
    &:hover {
      color: #9c9c9c;
    }
  }
  // 右上角的大頭貼
  &__userPofileImgBox {
    width: 44px;
  }
}
</style>