<template lang="pug">
    .index.position-relative.w-100.h-100
        .index__titlePart.position-relative
            transition-group(tag="div" name="fade" class="animateBox position-relative")
                img.img-fluid.titlePart__showImg.w-100(v-for="(src, index) in allRoomImg" :key="src" :src="src" v-show="index === nowImgActive")
            .lastPageBtn.rounded-circle.position-absolute(@click="changePage(nowImgActive - 1)")
            .nextPageBtn.rounded-circle.position-absolute(@click="changePage(nowImgActive + 1)")
        .index__roomShow.position-relative.w-100.h-100
            h4.text-left.roomTypeTitle Room type
            .row.no-gutters
                .roomShow__box.position-relative.col-lg-4.col-md-4.col-sm-2(v-for="(room,index) in allRoom" :key="index")
                    .blur.position-relative.w-100.h-100
                        img.img-fluid.roomShow__roomImg.w-100.h-100(:src="room.imageUrl")
                        span.roomShow__roomName.font-weight-bold {{ room.name }}
                    
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
.index {
    .animateBox {
        height: 700px;
    }
    // 首頁照片輪播
    .titlePart__showImg {
        max-height: 100%;
    }
    // 上一頁的按鈕
    .lastPageBtn {
        width: 54px;
        height: 54px;
        top: 50%;
        left: 39px;
        margin-top: -27px;
        border: 2px solid #fff;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background-color: #ccc;
        }
        &:before {
            content: '';
            position: absolute;
            width: 0px;
            top: 5px;
            height: 25px;
            left: 20px;
            border: 2px solid #fff;
            -webkit-transform: rotate(50deg);
        }
        &:after {
            content: '';
            position: absolute;
            width: 0px;
            top: 20px;
            height: 25px;
            left: 20px;
            border: 2px solid #fff;
            -webkit-transform: rotate(-50deg);
        }
    }
    // 下一頁的按鈕
    .nextPageBtn {
        width: 54px;
        height: 54px;
        top: 50%;
        right: 39px;
        margin-top: -27px;
        border: 2px solid #fff;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background-color: #ccc;
        }
        &:before {
            content: '';
            position: absolute;
            width: 0px;
            top: 5px;
            height: 25px;
            border: 2px solid #fff;
            -webkit-transform: rotate(-50deg);
        }
        &:after {
            content: '';
            position: absolute;
            width: 0px;
            top: 20px;
            height: 25px;
            border: 2px solid #fff;
            -webkit-transform: rotate(50deg);
        }
    }
    // Room type
    &__roomShow {
        padding: 32px 76px 79px 76px;
        // 標題
        .roomTypeTitle {
            padding-bottom: 28px;
        }
        // 每一個房間的 div
        .roomShow__box{
            height: 250px;
            padding: 5px;
            overflow: hidden;
            // 毛玻璃
            .blur {
                filter: grayscale(100%);
                transition: all .3s;
                transform: scale(1);
                cursor: pointer;
                &:hover {
                    filter: grayscale(30%);
                    transform: scale(1.2);
                }
                &:active {
                    transform: scale(1);
                }
            }
            // 每一個房間得名稱
            .roomShow__roomName {
                position: relative;
                top: -50%;
                color: #fff;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>


