import Vue from 'vue'
import App from './App.vue'
import store from './assets/store/store'
import router from './router'

Vue.config.productionTip = false

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faBell, faCog, faPlus, faFolder, faClock, faStar, faTrash, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faBell, faCog, faPlus, faFolder, faClock, faStar, faTrash, faDatabase, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon);

// SweetAlert2
import Swal from 'sweetalert2';

// 動畫
import animated from 'animate.css'
Vue.use(animated)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')