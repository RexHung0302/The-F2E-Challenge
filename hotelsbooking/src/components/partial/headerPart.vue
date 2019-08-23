<template lang="pug">
  .header.position-relative.w-100
    .d-flex.position-relative.w-100
        .logoPart.text-left
            router-link(to="/hotelsbooking/index")
                img.logoPart__logo(src="@/assets/img/logo.svg")
        .itemPart.text-left.row.no-gutters
            .col.itemPart__aboutusBox.text-center
                router-link(to="/hotelsbooking/index/aboutus")
                    span.itemPart__span.cursor-pointer ABOUT US
            .col.itemPart__roomBox.text-center
                span.itemPart__span.cursor-pointer(href="#") ROOMS
            .col.itemPart__contactBox.text-center
                span.itemPart__span.cursor-pointer(href="#") CONTACT
            .col.itemPart__booknowBox.text-center
                button.itemPart__btn.btn BOOK NOW
            .col.itemPart__selectBox.text-center
                select.itemPart__select
                    option EL
</template>

<script>
export default {
  name: 'headerPart',
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
.header {
    height: 100px;
    line-height: 100px;
    background-color: #fff;
    font-size: 22px;
    // 每一個超連ㄐㄧㄝ
    a {
        color: #000;
        text-decoration: none;
    }
    // 左半邊
    .logoPart {
        flex: 0 0 30%;
        // LOGO
        &__logo {
            padding-left: 28px;
        }
    }
    // 右半邊
    .itemPart {
        flex: 0 0 70%;
        // 每一個可以點的文字
        &__span {
            transition: all .3s;
            &:hover {
                color: #00000094;
            }
        }
        // BOOK NOW 的按鈕
        &__btn {
            border: 1px solid #000;
            font-size: 22px;
            margin-bottom: 10px;
            border-radius: 0;
            transition: all .3s;
            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
        // 語言選擇的 select
        &__select {
            border: 1px solid #000;
            border-radius: 0;
            font-size: 18px;
            background-color: #fff;
        }
    }
}
</style>