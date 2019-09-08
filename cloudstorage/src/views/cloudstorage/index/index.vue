<template lang="pug">
  .index.position-relative.w-100.h-100
    h4.text-left.index__titleText 我的雲端硬碟
    span.index__remindText 因車禍受傷，日後會再補上功能及頁面，請多包涵...
</template>

<script>


export default {
  name: 'index',
  components: {
  },
  data() {
    return {
    }
  },
  mounted(){
  },
}
</script>

<style lang="scss" scoped>
.index {
  padding: 24px 32px 0 32px;
  // 最左上方標題
  &__titleText {
    color: #7B7B7B;
  }
  &__remindText {
  }
}
</style>