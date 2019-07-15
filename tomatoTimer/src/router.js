import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index/index.vue'


Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/index',
            name: 'index',
            component: index,
        },
        {
            path: '*',
            redirect: '/index'
        },
    ]
})