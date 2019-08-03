<template lang="pug">
  .home.w-100.h-100.position-relative
    article.w-100.h-100.row.no-gutters
      sideBar
      .col
        headerPart
        div 我是右邊下面
        router-link(to="/taiwansongking/search") Go Search
        router-view
</template>

<script src="./home.js"></script>
