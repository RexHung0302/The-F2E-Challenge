<template lang="pug">
  .headerPart.position-relative.w-100.animated.fadeInDown
    .row.no-gutters
      .col-3.text-center.headerPart__itemBox
        font-awesome-icon.cursor-pointer.iconHover(:icon="['fas', 'bars']")
      .col-6.text-center.headerPart__itemBox
        span {{ nowRoomName }}
      .col-3.text-center.headerPart__itemBox
        font-awesome-icon.ml-3.cursor-pointer.iconHover(:icon="['fas', 'comment']")
        span.badge.badge-pill.badge-danger &nbsp;
</template>

<script>
export default {
  name: 'headerPart',
  data() {
    return {

    }
  },
  computed:{
    nowRoomName: function() {
      return this.$store.state.nowRoomName;
    }
  }
}
</script>

<style lang="scss">
.headerPart {
  height: 64px;
  line-height: 64px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  background-color: #3C1B49;
  color: #fff;
  // 每一個 itemBox 
  &__itemBox:first-child {
    &::after {
      content: "";
      position: absolute;
      right: 10px;
      height: 80%;
      top: 10%;
      width: 1px;
      border: 1px solid #d8d8d838;
    }
  }
  &__itemBox:last-child {
    &::after {
      content: "";
      position: absolute;
      left: 10px;
      height: 80%;
      top: 10%;
      width: 1px;
      border: 1px solid #d8d8d838;
    }
  }
}

.badge {
  background-color: #B94040;
  position: relative;
  right: 4px;
  top: -4px;
  width: 2px;
  height: 10px;
  border-radius: 50%;
}
</style>