// 引入 sweetAlert2
const Swal = require('sweetalert2');

export default {
    name: 'steptwo',
    data() {
        return {
            // 取得商品
            goods: this.$store.state.goods,
            // 運送方式
            shippingModeOption: this.$route.params.shippingModeOption,
            // 運費
            shippingFree: this.$route.params.shippingFree,
            // 總費用
            totalPrice: this.$route.params.totalPrice,
            // 選擇的付款方式
            payment: null,
            // 卡號
            cardNumOne: null,
            cardNumTwo: null,
            cardNumThree: null,
            cardNumFour: null,
            isCardNumOneError: false,
            isCardNumTwoError: false,
            isCardNumThreeError: false,
            isCardNumFourError: false,
            // 卡片持有者
            cardOwner: null,
            isCardOwnerError: false,
            // 卡片有效期
            cardExpiryDateMonth: null,
            cardExpiryDateDate: null,
            isCardExpiryMonthError: false,
            isCardExpiryDateError: false,
            //安全碼
            cardSafeNum: null,
            isSafeNumError: false,
            // 用來判斷是不是可以直接去下一頁
            isFinish: false,
        }
    },
    created() {
        this.$store.commit('changeNowStep', 2)
    },
    methods: {
        // 選擇付款方式
        chosePayment: function(type) {
            // 選擇的種類
            this.payment = type;
        },
        // 驗證卡號
        checkCard: function(num) {
            return /^\d{4}$/.test(num);
        },
        // 驗證卡片持有者姓名
        checkName: function(name) {
            return /^[A-Z]+$/.test(name);
        },
        // 驗證卡片有效期
        checkExpiryDateNum: function(num) {
            return /^\d{2}$/.test(num);
        },
        // 驗證卡片安全碼
        checkSafeNum: function(num) {
            return /^\d{3}$/.test(num);
        },
        // 進入最後頁面
        finishBtn: function() {
            if (this.payment === null || this.cardNumOne === null || this.cardNumTwo === null || this.cardNumThree === null || this.cardNumFour === null || this.cardOwner === null || this.cardExpiryDateMonth === null || this.cardExpiryDateDate === null || this.cardSafeNum === null) {
                Swal.fire(
                    '必填欄位未填寫完成',
                    '請再次確認欄位皆有填寫！',
                    'error'
                )
                return;
            } else {

                this.isFinish = true;

                this.$router.push({
                    name: "stepthree",
                    // 寫入該傳的值
                    params: { cardOwner: this.cardOwner, goods: this.goods, totalPrice: this.totalPrice, payment: this.payment, shippingModeOption: this.shippingModeOption, cardNumOne: this.cardNumOne, cardNumThree: this.cardNumThree }
                });

            }
        }
    },
    watch: {
        // 卡號驗證(第一欄)
        cardNumOne: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardNumOneError = false;
                return;
            }

            // 驗證是不是都是大寫英文
            if (this.checkCard(value)) {
                // 是的話就不顯示錯誤
                this.isCardNumOneError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardNumOneError = true;
            }
        },
        // 卡號驗證(第二欄)
        cardNumTwo: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardNumTwoError = false;
                return;
            }

            // 驗證是不是都是大寫英文
            if (this.checkCard(value)) {
                // 是的話就不顯示錯誤
                this.isCardNumTwoError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardNumTwoError = true;
            }
        },
        // 卡號驗證(第三欄)
        cardNumThree: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardNumThreeError = false;
                return;
            }

            // 驗證是不是都是大寫英文
            if (this.checkCard(value)) {
                // 是的話就不顯示錯誤
                this.isCardNumThreeError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardNumThreeError = true;
            }
        },
        // 卡號驗證(第四欄)
        cardNumFour: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardNumFourError = false;
                return;
            }

            // 驗證是不是都是大寫英文
            if (this.checkCard(value)) {
                // 是的話就不顯示錯誤
                this.isCardNumFourError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardNumFourError = true;
            }
        },
        // 卡片持有者姓名驗證
        cardOwner: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardOwnerError = false;
                return;
            }

            // 驗證是不是都是大寫英文
            if (this.checkName(value)) {
                // 是的話就不顯示錯誤
                this.isCardOwnerError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardOwnerError = true;
            }
        },
        // 卡片有效期驗證(月)
        cardExpiryDateMonth: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardExpiryMonthError = false;
                return;
            }

            // 驗證是不是都是數字
            if (this.checkExpiryDateNum(value)) {
                // 是的話就不顯示錯誤
                this.isCardExpiryMonthError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardExpiryMonthError = true;
            }
        },
        // 卡片有效期驗證(日)
        cardExpiryDateDate: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isCardExpiryDateError = false;
                return;
            }

            // 驗證是不是都是數字
            if (this.checkExpiryDateNum(value)) {
                // 是的話就不顯示錯誤
                this.isCardExpiryDateError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isCardExpiryDateError = true;
            }
        },
        // 安全碼的驗證
        cardSafeNum: function(value) {

            // 先查看是不是沒有輸入值
            if (value === '' || value === null) {
                // 是的話就不顯示錯誤
                this.isSafeNumError = false;
                return;
            }

            // 驗證是不是都是數字
            if (this.checkSafeNum(value)) {
                // 是的話就不顯示錯誤
                this.isSafeNumError = false;
            } else {
                // 不是的話就顯示錯誤
                this.isSafeNumError = true;
            }
        },
    },
    beforeRouteLeave(to, from, next) {

        if (this.isFinish === true) {
            next()
            return;
        } else {
            Swal.fire({
                title: '確定離開嗎？',
                text: '資料將會喪失！',
                type: 'question',
                showCancelButton: true,
                showCloseButton: true,
                confirmButtonText: '確定',
                cancelButtonText: '取消'
            }).then((res) => {
                if (res.value) {
                    next()
                } else {
                    next(false)
                }
            })
        }


    }
}