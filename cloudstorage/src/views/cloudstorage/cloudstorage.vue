<template lang="pug">
  //- 用來導頁用的
  .cloudstorage.position-relative.w-100.h-100
    headerPart
    .row.no-gutters.w-100.h-100
      .col-3.h-100
        sidePart
      .col
        router-view
</template>

<script>
// 引入 headerPart
import headerPart from '@/components/partial/headerPart.vue';
// 引入 sidePart
import sidePart from '@/components/partial/sidePart.vue';

export default {
  name: 'cloudstorage',
  components: {
    headerPart,
    sidePart
  },
}
</script>

<style lang="scss" scoped>

</style>