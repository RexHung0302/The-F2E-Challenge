<template lang="pug">
  .index.position-relative
    chartChannel(v-for="chartChannel in chartChannelData", :chartChannelIcon="chartChannel.chartChannelIcon", :chartChannelId="chartChannel.id", :chartChannelName="chartChannel.chartChannelName", :chartChannelDesc="chartChannel.chartChannelDesc", @enterChannel="enterChannel", v-if="isLoading === false")
    loading(v-else)
      
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
.index {
  padding: 33px 23px;
  max-width: 414px;
  margin: 0 auto;
}


</style>