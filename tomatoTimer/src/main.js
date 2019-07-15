import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'

// BootstrapVue CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// FontAwesomeIcon Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
// FontAwesomeIcon
import { faUserSecret, faPlus, faPlayCircle, faListUl, faChartBar, faMusic, faTimes, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPlus, faPlayCircle, faListUl, faChartBar, faMusic, faTimes, faCaretDown, faCaretUp)

dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')