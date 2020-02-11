<template lang="pug">
  .mainPart.position-relative.h-100
    .mapDiv.position-relative
      div(style='height: 100%; width: 100%')
        l-map(:zoom='zoom' :center='center' style='height: 100%' @ready="onReady" @locationfound="onLocationFound")
          l-tile-layer(:url='url' :attribution='attribution')
          l-marker-cluster
            //- Use default icon
            l-marker(v-for="(store,index) in storeList" :lat-lng="store.geometry.coordinates" :icon="store.properties.mask_adult !== 0 || store.properties.mask_child !== 0 ? (store.properties.mask_adult > 0 && store.properties.mask_child > 0 ? icon_hasAllMask : icon_onlyOneMask ) : icon_noMask"  :key="store.properties.id" :visible="true")
              l-popup
                span.d-block.storeName(style="font-size:16px;font-weight: bold;") {{ store.properties.name }}
                span.d-block.storeAddress.mt-2(style="font-size:12px;") {{ store.properties.address }}
                span.d-block.storePhone.mt-2(style="font-size:12px;") 聯絡電話 | {{ store.properties.phone }}
                small.form-text.storeUpdateRemindText(style="font-size:12px;color: #CCCCCC;") 更新於 {{ store.properties.updated ? store.properties.updated : '-' }}
                .storeMasksInfoDiv.storeMasksInfoDiv-adult.mt-2(style="display: inline-block;border-radius: 10px;margin-right: 8px;padding: 8px;font-size: 14px;background: rgb(255, 230, 212);color: #FF973B;" v-show="store.properties.mask_adult > 0")
                  span 成人口罩 {{ store.properties.mask_adult }}個
                .storeMasksInfoDiv.storeMasksInfoDiv-child.mt-2(style="display: inline-block;border-radius: 10px;margin-right: 8px;padding: 8px;font-size: 14px;background: rgb(255, 246, 216);color: #F8BE00;" v-show="store.properties.mask_child > 0")
                  span 兒童口罩 {{ store.properties.mask_child }}個
                .storeMasksInfoDiv.storeMasksInfoDiv-none.mt-2(style="display: inline-block;border-radius: 10px;margin-right: 8px;padding: 8px;font-size: 14px;background: rgb(248, 248, 248);color: #CCCCCC;" v-show="store.properties.mask_adult === 0 && store.properties.mask_child === 0")
                  span 口罩缺貨中
                span.moreInfo.btn.btn-block.btn-primary.btn-sm.mt-2(@click="showInfo(store.properties)") 詳細資訊
                a.moreInfo.btn.btn-block.btn-success.btn-sm.mt-2(:href="`http://maps.google.com/?q=${store.geometry.coordinates[0]},${store.geometry.coordinates[1]}`" target="_blank" style="color: #FFFFFF;") Google 路線導航
</template>

<script src="./index.js"></script>