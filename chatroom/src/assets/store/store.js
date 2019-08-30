import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nickName: null, // 使用者名稱
        loading: false, // 判斷讀取畫面
        nowRoomName: null, // 目前聊天室的名稱
        chartChannels: [
            { 'id': 1, 'chartChannelIcon': require('@/assets/images/planet1.png'), 'chartChannelName': '宇宙聊天室', 'chartChannelDesc': '與所有在線上的星人聊天', 'isOpen': true },
            { 'id': 2, 'chartChannelIcon': require('@/assets/images/planet2.png'), 'chartChannelName': '尋找銀河系', 'chartChannelDesc': '只想聊自己喜歡的話題', 'isOpen': false },
            { 'id': 3, 'chartChannelIcon': require('@/assets/images/planet3.png'), 'chartChannelName': '尋覓星人', 'chartChannelDesc': '一對一講悄悄話', 'isOpen': false },
            { 'id': 4, 'chartChannelIcon': require('@/assets/images/death star.png'), 'chartChannelName': '死星 3.0 聊天室', 'chartChannelDesc': '尚未完工', 'isOpen': false },
        ], // 聊天室的數量
    },
    mutations: {
        // 更改 state 的使用者名稱
        setNickName(state, nickName) {
            state.nickName = nickName;
        },
        // load 畫面
        setLoading(state, boolean) {
            state.loading = boolean;
        },
        // 設定聊天室名稱
        setNowRoomName(state, roomName) {
            state.nowRoomName = roomName;
        }
    },
    actions: {
        setNickName(context, data) {
            // 模擬打 api 檢查有沒有一樣的名字
            context.commit('setLoading', true);
            // 如果沒有就去換名字
            return new Promise((resolve, reject) => {

                setTimeout(function() {

                    // 這邊應該要去打 api 看有沒有同樣的名稱 如果沒有就設定暱稱
                    context.commit('setNickName', data);
                    console.log(context.state.nickName)
                        // 加上 聊天室 名稱
                    context.commit('setNowRoomName', '宇宙大廳');
                    // 取消讀取畫面
                    context.commit('setLoading', false);

                    // 回傳結果 ( 判斷有無重複名稱目前設為無 )
                    resolve(false);
                    reject('error');
                }, 1000)
            });
        },
        // 進入聊天頻道
        enterChannel(context, data) {
            // 模擬打 api
            context.commit('setLoading', true);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(context.state.loading);
                    // 設一個變數來回傳聊天頻道是否有開啟
                    let isOpen = null;
                    // 設一個變數裝聊天室名稱
                    let channelName = null;
                    // 跑迴圈去找點擊的聊天室
                    context.state.chartChannels.map((val, key) => {
                        // 判斷聊天室有沒有開啟
                        if (val.id === data) {
                            // 有開啟就加上 true
                            isOpen = val.isOpen;
                            // 加上聊天室名稱
                            channelName = val.chartChannelName
                        }
                    });
                    // 取消 loading 畫面
                    context.commit('setLoading', false);
                    // 加上 聊天室 名稱
                    context.commit('setNowRoomName', channelName);
                    // 回傳結果
                    resolve(isOpen);
                    reject('error');
                }, 1000)
            });
        }
    }
})