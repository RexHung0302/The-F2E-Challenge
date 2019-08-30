<template lang="pug">
  .loading.position-absolute.w-100.h-100
      img.loading__img(:src="require('@/assets/images/loadImg.gif')")
      span.loading__title.d-block Loading...
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  top: 25%;
  left: 0;
  // load 圖片
  &__img {
    position: relative;
    top: 50%;
  }
  // load 標題
  &__title {
    font-size: 30px;
    color: #fff;
  }
}
</style>