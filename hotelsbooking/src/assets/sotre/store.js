import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
const token = 'V0QiN5pW8U8HvsXYjEO4XEtYCCgEq10iOZzxN8hKg6RuhEQN5Ao6DQbxvpVW';
const allRoomURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allRoom: [],
    },
    mutations: {
        setApi(state, data) {
            // 獲取所有房間
            this.state.allRoom = data.items;
        }
    },
    actions: {}
})