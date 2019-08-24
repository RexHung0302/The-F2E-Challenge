<template lang="pug">
  .rooms.position-relative
    .rooms__row.row.position-relative.w-100.mb-3(v-for="room in allRoom" )
      .col-4.rooms__imgBox.position-relative
        .blur.position-relative.w-100.h-100
          img.img.img-fluid(:src="room.imageUrl")
          span.roomShow__roomName.font-weight-bold {{ room.name }}
      .col.position-relative.text-left
        h5 {{ room.name }}
        .info.row
          .col-7.info__leftPart
            .leftPart__title.row.no-gutter
              .col-6.pb-2
                span(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id") | 人數：{{ info.room[0].descriptionShort.GuestMin }} (Min) || {{ info.room[0].descriptionShort.GuestMax }} (Max)
              .col-6.pb-2
                span | 坪數：18平方公尺
              .col-6
                span(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id") | 床型：{{ info.room[0].descriptionShort.Bed[0] }}
              .col-6
                span(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities.Breakfast === true") | 餐點：附早餐
                span(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities.Breakfast === false") | 餐點：無
            .leftPart__descIcon.row.no-gutters
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Breakfast'] === true")
                img(src="@/assets/img/fork.svg")
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Refrigerator'] === true")
                img(src="@/assets/img/fridge.svg") 
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id")
                img(src="@/assets/img/toilet.svg")
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Wi-Fi'] === true")
                img(src="@/assets/img/wifi.svg") 
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Room-Service'] === true")
                img(src="@/assets/img/phone.svg")
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Pet-Friendly'] === true")
                img(src="@/assets/img/pet.svg") 
              .col-auto.pr-3.pb-3(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id && info.room[0].amenities['Smoke-Free'] === false")
                img(src="@/assets/img/noSmoking.svg")    
          .col.info__rightPart
            .rightPart__title.text-left
              .normalDayPriceBox.pb-3
                span.pr-2 平日每晚
                span.remindPriceText(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id") $ {{ info.room[0].normalDayPrice }}
              .weekendDayPriceBox
                span.pr-2 假日每晚
                span.remindPriceText(v-for="(info,index) in allRoomInfo" v-if="info.room[0].id === room.id") $ {{ info.room[0].holidayPrice }}
            .rightPart__btn
              button.btn.customBtn.rounded-0.mr-2 MORE +
              button.btn.customBtn.rounded-0 BOOK NOW

          
</template>

<script src="./rooms.js"></script>

<style lang="scss" scoped>
.rooms {
  padding: 60px 76px;
  // 每一行
  &__row {
    padding-bottom: 28px;
    // 詳細資訊
    .info {
      // 右半邊左小部分
      &__leftPart {
        // 人數坪數的資訊
        .leftPart__title {
          padding-bottom: 26px;
        }
      }
      // 右半邊右小部分
      &__rightPart {
        // 價錢部分
        .rightPart__title {
          height: 80%;
          // 價錢字體
          .remindPriceText {
            font-size: 36px;
            font-weight: bold;
          }
        }
        // 按鈕部分
        .rightPart__btn {
          height: 20%;
          // 按鈕
          .customBtn {
            border: 1px solid #000;
            background-color: #000;
            color: #fff;
            transition: all .3s;
            &:hover {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
  // 左側相片框
  &__imgBox {
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
    // 每一個房間得照片
    .img {
      width: 373px;
      height: 300px;
    }
    // 每一個房間得名稱
    .roomShow__roomName {
        position: relative;
        top: -50%;
        color: #fff;
    }
  }
  
}
</style>