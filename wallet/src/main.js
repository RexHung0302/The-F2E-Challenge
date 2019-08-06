import Vue from 'vue'
import App from './App.vue'
import store from './assets/store/store'
import router from './router'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCreditCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// 動畫
import animated from 'animate.css'
Vue.use(animated)

// SweetAlert2
import Swal from 'sweetalert2'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    Swal,
    render: h => h(App)
}).$mount('#app')