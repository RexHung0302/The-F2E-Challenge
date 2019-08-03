<template lang="pug">
    .col-2.sideBar.BrandBg.position-relative.h-100(:class="{ hidden: isClose}")
      font-awesome-icon.position-absolute.hamburgerBtn(:icon="['fa', 'hamburger']", @click="isClose ? isClose = false : isClose = true")
      .sideBar__profileBox.position-relative.w-100
        .profile__imgBox.position-relative.rounded-circle
          img.profileImgBox__img.w-100.h-100(:src="profileImg")
        span.profile__name.d-block Rex Hung
        button.profile__logOutBtn 登出
      .sideBar__itemBox.position-relative.w-100.text-left
        .itemBox__title(:class="{ active: nowSelect === 'index'}")
          router-link(to="/taiwansongking/home/index")
            span.title__span.cursor-pointer(@click="nowSelect = 'index'") 首頁
        .itemBox__title
          span.title__span 音樂庫 
        .itemBox__listItem(:class="{ active: nowSelect === 'songList'}")
          font-awesome-icon.mr-2(:icon="['fa', 'folder']")
          span.listItem__span(@click="nowSelect = 'songList'") 你的歌單
        .itemBox__listItem(:class="{ active: nowSelect === 'search'}")
          font-awesome-icon.mr-2(:icon="['fa', 'search']")
          router-link(to="/taiwansongking/home/search")
            span.listItem__span(@click="nowSelect = 'search'") 搜尋歌曲
        .itemBox__listItem.itemBox__lastListItem(:class="{ active: nowSelect === 'hotSong'}")
          font-awesome-icon.mr-2(:icon="['fa', 'music']")
          span.listItem__span(@click="nowSelect = 'hotSong'") 熱門點播   
        .itemBox__title
          span.title__span 關注我們
        .itemBox__listItem(:class="{ active: nowSelect === 'youtube'}")
          font-awesome-icon.mr-2(:icon="['fab', 'youtube']")
          span.listItem__span(@click="nowSelect = 'youtube', jumpToOtherPlace('youtube')") Youtube
        .itemBox__listItem(:class="{ active: nowSelect === 'facebook'}")
          font-awesome-icon.mr-2(:icon="['fab', 'facebook']")
          span.listItem__span(@click="nowSelect = 'facebook', jumpToOtherPlace('facebook')") Facebook
        .itemBox__listItem(:class="{ active: nowSelect === 'github'}")
          font-awesome-icon.mr-2(:icon="['fab', 'github']")
          span.listItem__span(@click="nowSelect = 'github', jumpToOtherPlace('GitHub')") GitHub
        .itemBox__listItem(:class="{ active: nowSelect === 'share'}")
          font-awesome-icon.mr-2(:icon="['fa', 'share']")
          span.listItem__span(@click="nowSelect = 'share'") 分享        
</template>

<script>
export default {
  name: "sideBar",
  data(){
    return {
      profileImg: null, // 頭貼照片 從 VueX 讀取
      nowSelect: 'index', // 用來判斷是否替 sidBar 的 item 加上背景色
      isClose: false, // 用來顯示或隱藏 sideBar
    }
  },
  mounted(){
    // 到 store 取得左側使用者頭像
    this.profileImg = this.$store.state.profileImg;
  },
  methods:{
    // 跳轉至其他網站
    jumpToOtherPlace: function(type) {
      // 判斷點選的是哪一個地方
      switch(type){
        case 'youtube':
          window.location.href='https://www.youtube.com/';
          break;
        case 'facebook':
          window.location.href='https://www.facebook.com/groups/173311386703334/?epa=SEARCH_BOX';
          break;
        case 'GitHub':
          window.location.href='https://github.com/RexHung0302/The-F2E-Challenge';
          break;
      }
      
    }
  }
}
</script>


<style lang="scss"></style>
