// 引入 sweetAlert2
const Swal = require('sweetalert2');

export default {
    name: 'stepone',
    data() {
        return {
            // 運送方式
            shippingMode: this.$store.state.shippingMode,
            // 取得商品
            goods: this.$store.state.goods,
            shippingModeOption: null,
            shippingFree: 0,
        }
    },
    created() {
        // 更正頁數
        this.$store.commit('changeNowStep', 1);

    },
    methods: {
        // 重新整理訂單
        reloadGoods: function() {
            this.$store.commit('updateGoodsCart');
            this.goods = this.$store.state.goods;
            this.shippingModeOption = null;
            this.shippingFree = 0;
        },
        // 刪除商品
        deleteGood: function(index) {
            if (this.$store.state.goods.length === 1) {
                Swal.fire(
                    '手下留情啊！',
                    '至少留下一項商品嘛TAT！',
                    'warning'
                )
                return;
            }
            this.$store.commit('deleteGood', index);
        },
        // 選擇運送方式
        selectedMode: function() {
            // 跑迴圈去找現在選中的方式然後找到費用
            for (let val of this.shippingMode) {
                // 如果名字一樣就回傳那個價格
                if (this.shippingModeOption === val.mode) {
                    this.shippingFree = val.free
                    return;
                }
            }
        },
        // 下一頁
        nextPage: function() {
            if (this.shippingModeOption === null) {
                Swal.fire(
                    '請完成所有步驟',
                    '尚未選擇運送方式',
                    'error'
                )
                return;
            } else {
                let vm = this;
                let rondomTnN = this.makerandomletter(6) + this.randomusefloor(1, 100);

                this.$router.push({
                    name: "steptwo",
                    // 寫入亂數 才不會讓使用者直接輸入網址跳轉
                    // 另外再傳入 運送方式 及 運費
                    params: { rondomTnN: rondomTnN, shippingModeOption: vm.shippingModeOption, shippingFree: vm.shippingFree, totalPrice: vm.totalPrice }
                });
            }
        },
        // 亂數數字
        randomusefloor: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        // 亂數英文字
        makerandomletter: function(max) {
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < max; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        },
    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let val of this.goods) {
                total = total + (val.price * val.order);
            }
            total = total + this.shippingFree;
            this.$store.commit('countTotalFree', total);
            return this.$store.state.totalFree;
        }
    }

}