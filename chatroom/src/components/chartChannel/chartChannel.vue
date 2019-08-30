<template lang="pug">
  .chartChannel.mb-3.cursor-pointer.chartChannelHover.animated.fadeInUp(@click="enterChannel(chartChannelId)")
    .row.no-gutters.h-100.w-100.position-relative
      .col-4.text-center.h-100.w-100.position-relative
        .chartChannel__chartIcon.h-100.position-relative.mt-1
          img.img-fluid.chartChannel__chartIcon-img(:src="this.chartChannelIcon")
      .col.h-100.text-left
        .chartChannel__chartRemindText.whiteRemind
          span.d-block.mb-2 {{ this.chartChannelName }}
          small.form-text.text-muted {{ this.chartChannelDesc }}
</template>

<script>
export default {
  name: 'chartChannel',
  props: {
    'chartChannelId': Number, // 編號
    'chartChannelIcon': String, // 圖示
    'chartChannelName': String, // 名稱
    'chartChannelDesc': String, // 描述
  },
  data() {
    return {
    }
  },
  methods:{
    // 相父元件發起進入請求
    enterChannel: function(channelId) {
      this.$emit('enterChannel', channelId);  
    }
  }
}
</script>

<style lang="scss">
// 每一行聊天室
.chartChannel {
  background-color: #3C1B49;
  padding: 25px 5px;
  border-radius: 4px;
  // 聊天室的 icon
  &__chartIcon {
    width: 52px;
    margin: 0 auto;
    &-img {
      border-radius: 50%;
    }
  }
}
</style>