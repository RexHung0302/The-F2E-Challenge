<template lang="pug">
  .chatroom.position-relative.h-100
    headerPart
    router-view
</template>

<script src="./chatroom.js"></script>

<style lang="scss" scoped>
.chatroom {
  width: 100%;
  margin: 0 auto;
}
</style>