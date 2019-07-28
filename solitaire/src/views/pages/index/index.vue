<template lang="pug">
  .index.w-100.h-100.text-center.position-relative
    img.index__logo(src="@/assets/img/logo.svg")
    router-link.nav-link(:to="{ name: 'game'}")
      button.d-block.font-weight-bold.index__startBtn Start
</template>

<script src="./index.js"></script>

<style lang="scss"></style>

