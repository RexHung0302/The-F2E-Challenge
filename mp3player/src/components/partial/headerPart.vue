<template lang="pug">
  .header.w-100.position-relative
    .header__titleBox
      img.header__titleLogo(:src="titleLogo")
    .header__searchBox.text-center.position-relative
      .searchRow.no-gutters.d-flex.justify-content-center
        .searchRow__selectBox.text-right
          select.searchRow__select
            option(v-for="system in systems" :key="system.id") {{ system.item }}
        .searchRow__inputBox
          input.searchRow__input(placeHolder="輸入關鍵字搜尋")
        .searchRow__buttonBox.text-left
          button.searchRow__button.rounded-circle
            font-awesome-icon.searchRow__button-icon(:icon="['fa', 'search']") 

</template>

<script>
export default {
  name: "headerPart",
  data(){
    return {
      titleLogo: null,
      systems: [
        {'id':'1','item':'全部'},
        {'id':'2','item':'銀櫃'},
        {'id':'3','item':'好樂迪'},
        {'id':'4','item':'音圓'},
        {'id':'5','item':'點將'},
        {'id':'6','item':'金影'}
        ]
    }
  },
  mounted(){
    // 到 store 取得頭部 logo
    this.titleLogo = this.$store.state.titleLogo;
  },
}
</script>


<style lang="scss"></style>
