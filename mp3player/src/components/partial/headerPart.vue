<template lang="pug">
  .header.w-100.position-relative
    .header__titleBox
      img.header__titleLogo(:src="titleLogo")
    .header__searchBox.text-center.position-relative
      .searchRow.no-gutters.d-flex.justify-content-center
        .searchRow__selectBox.text-right
          select.searchRow__select
            option 1
        .searchRow__inputBox
          input.searchRow__input(placeHolder="輸入關鍵字搜尋")
        .searchRow__buttonBox.text-left
          button.searchRow__button.rounded-circle OK   

</template>

<script>
export default {
  name: "headerPart",
  data(){
    return {
      titleLogo: null,
    }
  },
  mounted(){
    // 到 store 取得頭部 logo
    this.titleLogo = this.$store.state.titleLogo;
  },
}
</script>


<style lang="scss">
.header {
  padding-bottom: 67px;
  // 頂部的 logo
  &__titleLogo {
    margin-top: 40px;
    padding-bottom: 40.85px;
  }
  // 搜尋的那條
  &__searchBox {
      .searchRow {
        height: 45px;
        &__selectBox {
          .searchRow__select{
            border-radius: 23px;
            border: 2px solid #619CFF;
            width: 150px;
            height: 100%;
          }
        }
        &__inputBox {
          padding: 0 11px 0 20px;
          .searchRow__input{
            border-radius: 23px;
            border: 2px solid #619CFF;
            padding-left: 20px; 
            width: 300px;
            height: 100%;
          }
        }
        &__buttonBox {
          .searchRow__button{
            width: 45px;
            height: 100%;
          }
        }  
      }
  }
}

</style>
