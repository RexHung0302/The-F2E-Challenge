<template lang="pug">
  .404page.position-relative
    img.mt-5(src="@/assets/img/404.png")
    p.mt-5.font-weight-bold.title 404 Not Found.
</template>

<script>
export default {
  name: 'page404',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
}
</style>