import Vue from 'vue'
import Router from 'vue-router'
import hotelsbooking from '@/views/pages/hotelsbooking/hotelsbooking.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/hotelsbooking/index'
    }, {
        path: '/hotelsbooking',
        redirect: '/hotelsbooking/index',
        component: hotelsbooking,
        children: [{
            path: '/hotelsbooking/index',
            component: () =>
                import ( /* webpackChunkName: "index" */ '@/views/pages/index/index.vue'),
        }]
    }]
})