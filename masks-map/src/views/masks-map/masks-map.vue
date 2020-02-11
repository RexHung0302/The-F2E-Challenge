<template lang="pug">
  //- 用來導頁用的
  .masksMap.position-relative.w-100.h-100
    .contentDiv.w-100.h-100
      .sidePartDiv.h-100
        sidePart
      .mainPartDiv.h-100
        router-view
</template>

<script src="./masks-map.js"></script>