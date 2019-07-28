<template lang="pug">
  .game.w-100.h-100.text-center
    // 讀取畫面
    .game.loading.w-100.h-100.position-relative(v-if="isLoading" :class="{ loadingBg:isLoading }")
      .loading__box.position-relative
        span.loading__box-span.text-break 
          | 「你各位啊！還不快點跑起來！」
          br
          | 毫不講理的咆哮在清晨中破響，
          br
          | 天啊！紅心女王又發怒啦～ 
          br 
          | 可憐的白兔先生只好四處奔走，
          br 
          | 通知那些還在傻傻塗玫瑰的菜鳥們。
          br 
          | 不想被女王砍掉頭顱的話，
          br
          | 快點幫忙撲克牌士兵們集合起來吧！
      // 讀取條
      .loading__ProgressBox.position-relative
        .loading__ProgressBox-imgBox.position-relative.text-left(:class="{animated:isJumping, infinite:isJumping, bounce:isJumping}")
          img.position-relative(src="@/assets/img/img_loading-icon.svg" :class="{ imgLoadingStyle:isRunLoading }")
        .loading__ProgressBox-bar.position-relative.text-left
          .loading__ProgressBox-barLine.position-relative.h-100(:class="{ barLoadingStyle:isRunLoading }")
        transition(name="starBtn-fade" mode="out-in")
          span.loading__ProgressBox-span.position-relative.font-weight-bold(v-if="!startBtn") Loading...
          button.d-block.font-weight-bold.index__startBtn(v-else @click="startGame") GOGO

    // 遊玩畫面
    .game.play.h-100.position-relative(v-else)
        // 上方區塊
        .play__header.position-relative.row.no-gutters
          .col(v-for="(leftTopColumnArr,index) in leftTopArr" :key="leftTopColumnArr.index")
          .col-2.play__header-timeCol
            .play__header-timeCol-box
              span.font-weight-bold 02:00
          .col(v-for="(rightTopColumnArr,index) in rightTopArr" :key="rightTopColumnArr.index")
        // 中間區塊  
        .play__deck.position-relative.w-100.text-center
          .play__deck-box.row.no-gutters.h-100
            .col.position-relative.h-100(v-for="(deckColumnArr,index) in deckArr" :key="index" @dragover="dragover($event)")
              img.img-fluid.position-absolute.animated.slideInDown(v-for="(card,index) in deckColumnArr" :key="index" :style="{top:index * 50+'px', marginLeft: -50+'px'}" :src="require(`@/assets/img/card/poker-${card.cardType}${card.cardNum}.svg`)" draggable="true" @dragstart="drag($event)" :data-cardtype="card.cardType" :data-cardNum="card.cardNum")

        // 底部區塊
        .play__footer.position-relative.w-100
          .play__footer-btnBox.row.no-gutters.w-100.h-100
            .col-3.pt-4
              button.play__footer-btnBox-btn 暫停
            .col-3.pt-4
              button.play__footer-btnBox-btn 回上一步
            .col-3.pt-4
              button.play__footer-btnBox-btn 重新開始
            .col-3.pt-4
              button.play__footer-btnBox-btn 開新一局

</template>

<script src="./game.js"></script>

<style>

</style>


