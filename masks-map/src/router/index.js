import Vue from 'vue'
import Router from 'vue-router'
import masksMap from '@/views/masks-map/masks-map.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/masksMap/index'
    }, {
        path: '/masksMap',
        redirect: '/masksMap/index',
        component: masksMap,
        children: [{
                path: '/masksMap/index',
                name: 'index',
                component: () =>
                    import ( /* webpackChunkName: "masksMap" */ '@/views/masks-map/index/index.vue'),
            },
        ]
    }]
});