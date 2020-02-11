import Vue from 'vue'
import App from './App.vue'
import store from './assets/store/store'
import router from './router/index'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
