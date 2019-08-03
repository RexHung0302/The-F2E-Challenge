import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faFolder, faSearch, faMusic, faShare, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFolder, faSearch, faMusic, faYoutube, faFacebook, faGithub, faShare, faHamburger)

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