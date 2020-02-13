import Swal from 'sweetalert2';
var _ = require('lodash');
import { mapState } from 'vuex';
import L from 'leaflet';
// 地圖套件相關
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
// 範圍群組 Marker 套件
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

export default {
  name: 'index',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    lMarkerCluster: Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      // 視窗寬度
      windowWidth: window.innerWidth,
      zoom: 17,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon_hasAllMask: L.icon({
        iconUrl: require("@/assets/images/Icon_location_green.svg"),
        iconSize: [70, 100],
        iconAnchor: [22, 94]
      }),
      icon_onlyOneMask: L.icon({
        iconUrl: require("@/assets/images/Icon_location_orange.svg"),
        iconSize: [70, 100],
        iconAnchor: [22, 94]
      }),
      icon_noMask: L.icon({
        iconUrl: require("@/assets/images/Icon_location_red.svg"),
        iconSize: [70, 100],
        iconAnchor: [22, 94]
      }),
    }
  },
  methods: {
    // 顯示藥局詳細資訊
    showInfo: function(info) {
      Swal.fire({
        title: `${info.name} 詳細資訊`,
        html: `<div class="row" style="align-items: flex-start;">
        <div class="col-3 mt-3">電話</div>
        <div class="col-9 text-left mt-3">${info.phone ? info.phone : '-'}</div>
        <hr>
        <div class="col-3 mt-3">地址</div>
        <div class="col-9 text-left mt-3">${info.address ? info.address : '-'}</div>
        <hr>
        <div class="col-3 mt-3">營業時間</div>
        <div class="col-9 text-left mt-3">
        <table width="100%" class="text-center table table-striped table-bordered" style="font-size: .8rem;">
        <thead class="thead-dark">
        <tr>
        <th>營業時間</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>日</th>
        </tr>
        <tr>
        </thead>
        <th>上午</th>
        <td>${info.available.indexOf('星期一上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期二上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期三上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期四上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期五上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期六上午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期日上午看診') !== -1 ? 'o' : 'x'}</td>
        </tr>
        <th>下午</th>
        <td>${info.available.indexOf('星期一下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期二下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期三下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期四下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期五下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期六下午看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期日下午看診') !== -1 ? 'o' : 'x'}</td>
        </tr>
        <th>晚上</th>
        <td>${info.available.indexOf('星期一晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期二晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期三晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期四晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期五晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期六晚上看診') !== -1 ? 'o' : 'x'}</td>
        <td>${info.available.indexOf('星期日晚上看診') !== -1 ? 'o' : 'x'}</td>
        </tr>
        </table>
        </div>
        <hr>
        <div class="col-3 mt-3">備註</div>
        <div class="col-9 text-left mt-3">${info.note ? info.note : '無'}</div>
        <hr>
        </div>`,
        confirmButtonText: '關閉',
        showCancelButton: false,
        confirmButtonColor: '#000000',
        heightAuto: false,
      });
    },
    // 取得位置同意
    onReady (mapObject) {
      mapObject.locate();
    },
    // 設定目前位置
    onLocationFound(location) {
      let vm = this;
      let locationData = [
        location.latitude,
        location.longitude
      ];
      // 設定位置
      vm.$store.dispatch('setCenterLoction', locationData);
    },
    // sidebar 
    siderBarHandler(type){
      let vm = this;
      vm.$store.commit('setSideBar', type);
    },
  },
  computed:{
    ...mapState([
      'masksApiData',
      'storeList',
      'center',
      'isPhone',
      'sideBarHidden',
    ]),
  },
}