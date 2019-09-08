import Vue from 'vue'
import Router from 'vue-router'
import cloudstorage from '@/views/cloudstorage/cloudstorage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/cloudstorage/404'
    }, {
        path: '/cloudstorage',
        redirect: '/cloudstorage/index',
        component: cloudstorage,
        children: [{
                path: '/cloudstorage/index',
                name: 'index',
                component: () =>
                    import ( /* webpackChunkName: "index" */ '@/views/cloudstorage/index/index.vue'),
            },
            {
                path: '/cloudstorage/404',
                name: '404',
                component: () =>
                    import ( /* webpackChunkName: "404" */ '@/views/404/404.vue'),
            },
        ]
    }]
});