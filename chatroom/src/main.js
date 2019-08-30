import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './assets/store/store'

Vue.config.productionTip = false

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faComment, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faComment, faPaperclip, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon);

// SweetAlert2
import Swal from 'sweetalert2';

// 動畫
import animated from 'animate.css'
Vue.use(animated)

new Vue({
    router,
    store,
    Swal,
    render: h => h(App)
}).$mount('#app')