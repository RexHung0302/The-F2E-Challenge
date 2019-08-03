<template lang="pug">
  .headerPlayer.w-100.position-relative
    img.headerPlayer__img.img-fluid.w-100.h-100(:src="require('@/assets/images/searchImg/Rectangle 170.png')")
    .headerPlayer__playerBox.position-absolute.w-100.text-left
      span 1:51
</template>

<script>
export default {
  name: 'headerPlayer',
}
</script>

<style lang="scss" scoped>
.headerPlayer {
  height: 280px;
  &__playerBox {
    z-index: 99;
    left: 0;
    bottom: 0;
    height: 65px;
    line-height: 65px;
    background-color: #ffffff33;
    padding-left: 40px;
    color: #fff;
  }
}
</style>

