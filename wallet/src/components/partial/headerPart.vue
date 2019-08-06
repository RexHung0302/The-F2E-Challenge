<template lang="pug">
  .header.w-100.position-relative
    .header__payStep.w-100.h-100.d-flex
      .payStep__stepBox.w-100.h-100
        .stepBox__icon.rounded-circle.font-weight-bold(:class="{active:nowStep === 1}") 1
        span.stepBox__title.position-relative.d-block(:class="{active:nowStep === 1}") 選擇運送方式
        span.stepBox__SecTitle.position-relative.d-block(:class="{active:nowStep === 1}") Shipping
      .payStep__stepBox.w-100.h-100
        .stepBox__icon.rounded-circle.font-weight-bold(:class="{active:nowStep === 2}") 2
        span.stepBox__title.position-relative.d-block(:class="{active:nowStep === 2}") 選擇付款方式
        span.stepBox__SecTitle.position-relative.d-block(:class="{active:nowStep === 2}") Payment
      .payStep__stepBox.w-100.h-100
        .stepBox__icon.rounded-circle.font-weight-bold(:class="{active:nowStep === 3}") 3
        span.stepBox__title.position-relative.d-block(:class="{active:nowStep === 3}") 付款完成
        span.stepBox__SecTitle.position-relative.d-block(:class="{active:nowStep === 3}") Order Complete
</template>

<script>
export default {
  name: "headerPart",
  data(){
    return {
    }
  },
  computed:{
    // 到 store 取得目前進度 (必須放 computed 不然不會即時更新)
    nowStep(){
      return this.$store.state.nowStep
    } 
  }
}
</script>


<style lang="scss">
.header {
  height: 180px;
  line-height: 180px;
  background-color: #efefef;
  margin-bottom: 34px;
  &__payStep {
    align-items: baseline;
    .payStep__stepBox {
      // 1.2.3 的圓框框
      .stepBox__icon {
        width: 60px;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        background-color: #ccc;
        color: #fff;
        margin-top: 35px;
      }
      // 目前的進度要替 step 加上顏色
      .stepBox__icon.active {
        background-color: #1a2930;
      }
      // 標題
      .stepBox__title {
        top: -65px;
        color: #ccc;
      }
      // 目前的進度要替標題加上額外的 css
      .stepBox__title.active {
        color: #1a2930;
      }
      // 英文翻譯
      .stepBox__SecTitle {
        top: -215px;
        color: #ccc;
      }
      // 目前的進度要替英文翻譯加上額外的 css
      .stepBox__SecTitle.active {
        color: #1a2930;
      }
    }
  }
}
</style>
