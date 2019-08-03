<template lang="pug">
    .index.position-relative
        headerPart
        .index__content
            .content__title.text-left
                h4.title__text 2019 KTV 熱門點播
            .content__body.text-left.row
                .col-3.albumBox(v-for="album in albumImg", :key="album.id", v-if="album.id <= 8")
                    .albumBox__imgBox
                        img.albumBox__img.img-fluid(:src="require(`@/assets/images/albumImg/${album.fileName}.png`)")
                    span.albumBox__albumName.d-block  {{ album.albumName }}
                    span.albumBox__albumSinger.d-block.text-muted {{ album.singer }}
</template>

<script src="./index.js"></script>

<style lang="scss" scoped></style>


