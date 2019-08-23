<template lang="pug">
  .footer.position-relative.w-100
    .d-flex.w-100.text-left
        .leftPart
            .leftPart__logoImg
                img(src="@/assets/img/logo.svg")
            .leftPart__infoIcon.pl-2
                font-awesome-icon.mr-2.icon(:icon="['fab', 'facebook']", @click="infoBtn('facebook')")
                font-awesome-icon.mr-2.icon(:icon="['fab', 'instagram']", @click="infoBtn('instagram')")
                font-awesome-icon.mr-2.icon(:icon="['fab', 'github']", @click="infoBtn('github')")
        .rightPart
            p 台北市最貴的那區最長的大道最高的那棟之六六段六六號六六樓
            p Mail: RexHung666@mail.com
            p Tel: +886 6 6666-66666
</template>

<script>
export default {
  name: 'footerPart',
  data(){
    return {

    }
  },
  methods: {
    // 點擊 icon 後
    infoBtn: function(type) {
      // 判斷種類
      switch(type) {
        case 'facebook':
          window.location.href='https://www.facebook.com/groups/173311386703334/?epa=SEARCH_BOX';
          break;
        case 'instagram':
          window.location.href='https://www.instagram.com/hexschool/';
          break;
        case 'github':
          window.location.href='https://github.com/RexHung0302/The-F2E-Challenge';
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: #e8e8e8;
  padding: 20px;
  // 左半部
  .leftPart {
    flex: 0 0 30%;
    // 整個 infoIcon
    &__infoIcon {
      font-size: 28px;
      // 每一個 icon
      .icon {
        cursor: pointer;
        transition: all .3s;
        transform: scale(1);
        color: #4e4e4e;
        &:hover {
          color: #000;
          transform: scale(1.2);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
  // 右半部
  .rightPart {
      flex: 0 0 70%;
  }
}
</style>