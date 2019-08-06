import Vue from 'vue'
import Vuex from 'vuex'
// 防止 VueX 資料丟失
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    // 嚴格模式 發布後需要關閉 以免降低效能
    strict: process.env.NODE_ENV !== "production",
    state: {
        // 現在的頁面
        nowStep: 1,
        // 購物車商品
        goods: [
            { 'id': '1', 'name': '手持便攜風扇', 'price': 799, 'order': 1 },
            { 'id': '2', 'name': '手持不便冷氣', 'price': 1799, 'order': 2 },
            { 'id': '3', 'name': '手持不了冰箱', 'price': 11799, 'order': 5 }
        ],
        // 運送方式
        shippingMode: [
            { 'id': '1', 'mode': '超商取貨', 'free': 60 },
            { 'id': '2', 'mode': '宅配到府', 'free': 120 },
            { 'id': '3', 'mode': '自行取貨', 'free': 0 }
        ],
        totalFree: 0,
    },
    mutations: {
        // 更新購物車
        updateGoodsCart(state) {
            state.goods = [];
            state.goods = [
                { 'id': '1', 'name': '手持便攜風扇', 'price': 799, 'order': 1 },
                { 'id': '2', 'name': '手持不便冷氣', 'price': 1799, 'order': 2 },
                { 'id': '3', 'name': '手持不了冰箱', 'price': 11799, 'order': 5 }
            ]
        },
        // 換頁
        changeNowStep(state, page) {
            state.nowStep = page;
        },
        // 計算總費用
        countTotalFree(state, free) {
            state.totalFree = free;
        },
        // 刪除商品
        deleteGood(state, index) {
            state.goods.splice(index, 1);
        }
    },
    actions: {

    },
    plugins: [createPersistedState()],
})