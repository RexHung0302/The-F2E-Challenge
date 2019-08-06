// 引入 sweetAlert2
const Swal = require('sweetalert2');

export default {
    name: 'stepthree',
    data() {
        return {
            // 卡片持有人
            cardOwner: this.$route.params.cardOwner,
            // 商品
            goods: this.$route.params.goods,
            // 總價格
            totalPrice: this.$route.params.totalPrice,
            // 付款方式
            payment: this.$route.params.payment,
            // 運送方式
            shippingModeOption: this.$route.params.shippingModeOption,
            // 卡號(第一欄)
            cardNumOne: this.$route.params.cardNumOne,
            // 卡號(第二欄)
            cardNumThree: this.$route.params.cardNumThree,
        }
    },
    created() {
        this.$store.commit('changeNowStep', 3)
    },
    mounted() {
        // 更改付款方式為中文
        switch (this.payment) {
            case 'creditCard':
                this.payment = '信用卡付款';
                break;
            case 'atm':
                this.payment = 'ATM付款';
                break;
            case 'store':
                this.payment = '超商代碼付款';
                break;
        }
    },
    methods: {
        finish: function() {
            Swal.fire(
                '完成付款',
                '請耐心等候商品！',
                'success'
            )
        }
    }
}