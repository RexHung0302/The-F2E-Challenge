import Vue from 'vue'
import Router from 'vue-router'
import hotelsbooking from '@/views/pages/hotelsbooking/hotelsbooking.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/hotelsbooking/404'
    }, {
        path: '/hotelsbooking',
        redirect: '/hotelsbooking/index',
        component: hotelsbooking,
        children: [{
                path: '/hotelsbooking/index',
                component: () =>
                    import ( /* webpackChunkName: "index" */ '@/views/pages/index/index.vue'),
            },
            {
                path: '/hotelsbooking/rooms',
                component: () =>
                    import ( /* webpackChunkName: "rooms" */ '@/views/pages/rooms/rooms.vue'),
            },
            {
                path: '/hotelsbooking/404',
                component: () =>
                    import ( /* webpackChunkName: "404" */ '@/views/pages/404/404.vue'),
            },
        ]
    }]
});