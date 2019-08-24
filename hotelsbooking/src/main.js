import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './assets/sotre/store'


// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFan, faFacebook, faInstagram, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// 動畫
import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')