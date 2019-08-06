import Vue from 'vue'
import Router from 'vue-router'
import wallet from '@/views/pages/wallet/wallet.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/wallet/index/stepone'
    }, {
        path: '/wallet',
        redirect: '/wallet/index/stepone',
        component: wallet,
        children: [{
            path: '/wallet/index',
            redirect: '/wallet/index/stepone',
            component: () =>
                import ( /* webpackChunkName: "index" */ '@/views/pages/index/index.vue'),
            children: [{
                    path: '/wallet/index/stepone',
                    name: 'stepone',
                    component: () =>
                        import ( /* webpackChunkName: "stepone" */ '@/views/pages/step/stepone.vue')
                },
                {
                    // 這邊網址會有一個亂數 防止使用者直接輸入網址跳轉
                    path: '/wallet/index/steptwo/:rondomTnN',
                    name: 'steptwo',
                    component: () =>
                        import ( /* webpackChunkName: "stepone" */ '@/views/pages/step/steptwo.vue')

                },
                {
                    path: '/wallet/index/stepthree',
                    name: 'stepthree',
                    component: () =>
                        import ( /* webpackChunkName: "stepthree" */ '@/views/pages/step/stepthree.vue')

                }
            ]
        }]
    }]
})