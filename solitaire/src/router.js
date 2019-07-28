import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: 'index'
    }, {
        path: '/index',
        name: 'index',
        component: () =>
            import ( /* webpackChunkName: "index" */ './views/pages/index/index.vue')
    }, {
        path: '/game',
        name: 'game',
        component: () =>
            import ( /* webpackChunkName: "game" */ '@/views/pages/game/game.vue')
    }]
})