import { mapState } from 'vuex';
import Swal from 'sweetalert2';
var _ = require('lodash');

export default {
  name: 'sidePart',
  data() {
    return {
      // 附近有幾家藥局
      nearbyStoreNumber: null,
      // 搜尋關鍵字
      keywordText: null,
      // 口罩條件
      maskCondition: [],
    }
  },
  filters: {
    // 日期的 Filter
    filterDate: function(value = new Date()) {
      let vm = this;
      // 取得年月日, 並且判斷是否在前方加上 0
      let nowDay = value;
      let year = nowDay.getFullYear();
      let month = nowDay.getMonth() + 1 < 10 ? 0 + (nowDay.getMonth() + 1).toString() : nowDay.getMonth() + 1;
      let day = nowDay.getDate() < 10 ? 0 + nowDay.getDate().toString() : nowDay.getDate();
      return `${year} - ${month} - ${day}`;
    },
    // 星期幾的 Filter
    filterWeek: function(value = new Date()) {
      let vm = this;
      // 取得星期幾, 並且Switch判斷星期幾
      let nowDay = value;
      let week = value.getDay().toString();
      switch(week) {
        case '0':
          return '星期日';
          break;
        case '1':
          return '星期一';
          break;
        case '2':
          return '星期二';
          break;
        case '3':
          return '星期三';
          break;
        case '4':
          return '星期四';
          break;
        case '5':
          return '星期五';
          break;
        case '6':
          return '星期六';
          break;
        default:
          return '星期？';
          break;
      }
    },
    // 偶數基數的 Filter
    filterEvenOdd: function(value = new Date()) {
      let vm = this;
      // 取得星期幾, 並且Switch判斷星期幾偶數基數可購買
      let nowDay = value;
      let week = value.getDay().toString();
      switch(week) {
        case '1':
        case '3':
        case '5':
          return '基數';
          break;
        case '2':
        case '4':
        case '6':
          return '偶數';
          break;
        default:
          return '不限';
          break;
      }
    },
  },
  methods: {
    // 顯示藥局詳細資訊
    showInfo: function(info) {
      console.log(info);
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
    // 輸入關鍵字 或 點擊口罩條件
    searchHandle: function() {
      let vm = this;
      let input = {
        keywordText: vm.keywordText,
        maskCondition: vm.maskCondition,
      };

      vm.$store.dispatch('searchStore', input);
    },
    // 跳轉至目的地
    jumpToTarget: function(latLng) {
      let vm = this;
      // 設定目標位置
      vm.$store.dispatch('setCenterLoction', latLng);
    }
  },
  computed:{
    ...mapState([
      'masksApiData',
      'storeList',
    ]),
  },
}