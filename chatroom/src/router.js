import Vue from 'vue'
import Router from 'vue-router'
import chatroom from '@/pages/chatroom/chatroom.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/chatroom/404'
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/pages/login/login.vue'),
    }, {
        path: '/chatroom',
        redirect: '/chatroom/index',
        component: chatroom,
        children: [{
                path: '/chatroom/index',
                name: 'index',
                component: () =>
                    import ( /* webpackChunkName: "index" */ '@/pages/index/index.vue'),
            },
            {
                path: '/chatroom/openRoom',
                name: 'openRoom',
                component: () =>
                    import ( /* webpackChunkName: "openRoom" */ '@/pages/openRoom/openRoom.vue'),
            },
            {
                path: '/chatroom/message',
                name: 'message',
                component: () =>
                    import ( /* webpackChunkName: "message" */ '@/pages/message/message.vue'),
            },
            {
                path: '/chatroom/404',
                component: () =>
                    import ( /* webpackChunkName: "404" */ '@/pages/404/404.vue'),
            },
        ]
    }]
});