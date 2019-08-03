import Vue from 'vue'
import Router from 'vue-router'
import taiwansongking from '@/views/pages/home/taiwansongking.vue';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/taiwansongking/home'
    }, {
        path: '/taiwansongking',
        redirect: '/taiwansongking/home',
        component: taiwansongking,
        // 整頁的 home
        children: [{
            path: '/taiwansongking/home',
            component: () =>
                import ( /* webpackChunkName: "index" */ '@/views/pages/home/home.vue'),
            // home 右下方的區塊 會隨時更動    
            children: [{
                path: '/taiwansongking/home/search',
                name: 'search',
                component: () =>
                    import ( /* webpackChunkName: "game" */ '@/views/pages/search/search.vue')
            }]
        }]
    }]
})