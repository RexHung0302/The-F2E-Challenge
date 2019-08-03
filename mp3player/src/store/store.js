import Vue from 'vue'
import Vuex from 'vuex'
import profileImg from '@/assets/images/profileImg/profileImg01.png'
import titleLogo from '@/assets/images/logo/Logo_02.svg'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 左側大頭貼
        profileImg: profileImg,
        // 上方 LOGO
        titleLogo: titleLogo,
    },
    mutations: {

    },
    actions: {

    }
})