<template lang="pug">
  .sidePart.position-relatuve
    .upPart
      img.icon.icon-arrowLeft(v-show="isPhone && windowWidth < 700 && !sideBarHidden", src="@/assets/images/arrowLeft.svg", @click="siderBarHandler('hidden')")
      span.d-block {{ new Date() | filterDate }}
      span.d-block.upPart__weekText {{ new Date() | filterWeek }}
      span.upPart__decText 
        | 身分證末一碼 
        span.redRemind {{ new Date() | filterEvenOdd }} 
        | 字號者可購買口罩
      small.d-block.upPart__remindText ※一週限購一次，每次一人限購兩片
    .downPart
      //- 第一欄為搜尋欄位
      .downPart__firstDiv
        //- 搜尋部分
        .searchPart
          input.form-control.serchInput(placeholder="搜尋區域 , 地址 , 藥局", v-model.trim="keywordText")
          img.searchIcon.cursor-pointer(src="@/assets/images/Icon_search.svg", @click="searchHandle")
        //- 條件部分
        .selectPart
          .conditionDiv
            input.form-check-input.conditionDiv__cheekBoxInput.conditionDiv__cheekBoxInput_1.d-none(type="checkbox", id="select_1", value="1", v-model="maskCondition", @change="searchHandle")
            label.conditionDiv__label.cursor-pointer(for="select_1") 所有口罩
          .conditionDiv
            input.form-check-input.conditionDiv__cheekBoxInput.conditionDiv__cheekBoxInput_2.d-none(type="checkbox", id="select_2", value="2", v-model="maskCondition", @change="searchHandle")
            label.conditionDiv__label.cursor-pointer(for="select_2") 成人口罩
          .conditionDiv
            input.form-check-input.conditionDiv__cheekBoxInput.conditionDiv__cheekBoxInput_3.d-none(type="checkbox", id="select_3", value="3", v-model="maskCondition", @change="searchHandle")
            label.conditionDiv__label.cursor-pointer(for="select_3") 兒童口罩
        //- 文字提醒部分
        .remindPart
          span
            | 目前尚有 
            span.remindPart__storeNumberText {{ storeList ? storeList.length : '0' }} 
            | 家藥局供應口罩
      //- 第二欄開始才是藥局及藥局口罩資訊
      .downPart__storeDiv.position-relative(v-for="(store,index) in storeList" :key="index" :class="{ 'downPart__storeDiv-hasAdultMasks': store.properties.mask_adult > 0, 'downPart__storeDiv-hasChildMasks': store.properties.mask_child > 0 }")
        //- 藥局資訊
        .storeInfoPart
          span.d-block.storeName {{ store.properties.name }}
          span.d-block.storeAddress {{ store.properties.address }}
          span.d-block.storePhone {{ store.properties.phone }}
          span.moreInfo.btn.btn-primary.btn-sm.mr-2.mt-2(@click="showInfo(store.properties)") 詳細資訊
          span.moreInfo.btn.btn-info.btn-sm.mt-2(@click="jumpToTarget(store.geometry.coordinates)") 目標地
        //- 口罩資訊
        .storeMasksInfoPart.mt-2
          .storeMasksInfoDiv.storeMasksInfoDiv-adult(v-show="store.properties.mask_adult > 0")
            span 成人口罩 {{ store.properties.mask_adult }}個
          .storeMasksInfoDiv.storeMasksInfoDiv-child(v-show="store.properties.mask_child > 0")
            span 兒童口罩 {{ store.properties.mask_child }}個
          .storeMasksInfoDiv.storeMasksInfoDiv-none(v-show="store.properties.mask_adult === 0 && store.properties.mask_child === 0")
            span 口罩缺貨中
</template>

<script src="./sidePart.js"></script>

<style lang="scss" scoped></style>