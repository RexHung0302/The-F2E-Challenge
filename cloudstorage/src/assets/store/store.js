import Vue from 'vue'
import Vuex from 'vuex'
import userPofileImg from '@/assets/images/profile/userImg.png'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 大頭貼
        userPofileImg: userPofileImg,
    },
    mutations: {

    },
    actions: {

    }
})