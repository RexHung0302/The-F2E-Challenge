<template lang="pug">
    .index.position-relative
        headerPart
        .index__content
            .content__title.text-left
                h4 2019 KTV 熱門點播
            .content__body.text-left.row
                .col.albumBox(v-for="album in albumImg" :key="album.id")
                    img(:src="require(`@/assets/images/albumImg/${album.albumName}.png`)")
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
.index {
    padding: 0 43px;
}
</style>


