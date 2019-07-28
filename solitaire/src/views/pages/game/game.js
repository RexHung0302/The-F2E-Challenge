export default {
    name: 'game',
    data() {
        return {
            isLoading: null, // 讀取畫面
            isRunLoading: false, // 判斷是不是要加入跑讀取的 CSS
            isJumping: true, // 判斷是不是要讓兔子跳
            startBtn: false, // 讀取結束後替換 Loading 字的按鈕
            cardArr: [], // 放牌的陣列
            leftTopArr: [
                1,
                2,
                3,
                4,
            ], // 左上四個放牌的地方
            rightTopArr: [
                5,
                6,
                7,
                8,
            ], // 右上四個放排的地方
            deckArr: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ] // 中間八個放排的地方
        }
    },
    mounted() {
        // 跑讀取
        this.runLoading();

        // 隨機發牌
        this.dealing();
    },
    methods: {
        // 跑讀取
        runLoading: function() {

            var vm = this;

            // 顯示讀取畫面
            this.isLoading = true;
            // 開始跑 progressBar
            this.isRunLoading = true;
            // 目前時間條寫死 所以按鈕出現時間自己看 CSS 抓
            setTimeout(function() {
                vm.startBtn = true;
                // 取消兔子跳
                vm.isJumping = false;
            }, 2000)
        },
        // 按下讀取畫面結束後的開始按鈕
        startGame: function() {
            // 隱藏讀取畫面
            this.isLoading = false;
            // 取消 progressBar 的動畫
            this.isRunLoading = false;
        },
        dealing: function() {

            var vm = this;

            console.log('發牌啦');

            // 塞牌進陣列
            for (var i = 1; i < 53; i++) {
                vm.cardArr.push(i);
            }
            // 打散牌
            this.shuffle(this.cardArr);

            // 發到牌桌
            for (var j = 0; j < this.cardArr.length; j++) {

                // 判斷花色種類
                var cardType = vm.judgeCardType(vm.cardArr[j]);

                // 處理超過 13 的牌
                var cardNum = vm.cardArr[j];

                if (vm.cardArr[j] > 13) {
                    cardNum = vm.cardArr[j] % 13 + 1
                    if (cardNum < 10) {
                        cardNum = `0${cardNum.toString()}`
                    } else {
                        cardNum = cardNum.toString();
                    }
                } else {
                    if (cardNum < 10) {
                        cardNum = `0${cardNum.toString()}`
                    } else {
                        cardNum = cardNum.toString();
                    }
                }

                // 發牌到牌桌
                vm.deckArr[vm.sendToDeck()].push({ 'cardNum': cardNum, 'cardType': cardType })

            }
        },
        // 用來打亂牌組順序
        shuffle: function(array) {
            let counter = array.length;

            while (counter > 0) {

                let index = Math.floor(Math.random() * counter);

                counter--;

                // 打亂牌組順序
                let temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        },
        // 判斷種類
        judgeCardType: function(cardNumber) {
            // Spade
            if (cardNumber <= 13) return 's';
            // Heart
            if (cardNumber > 13 && cardNumber <= 26) return 'h';
            // Diamond 
            if (cardNumber > 26 && cardNumber <= 40) return 'd';
            // Clover
            if (cardNumber > 40 && cardNumber <= 54) return 'c';
        },
        // 發牌到牌桌
        sendToDeck: function() {

            var vm = this;

            // 取得牌桌需要放牌區塊的隨機亂數
            const randomNum = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
            //  判斷左邊四個右邊三個有沒有超過預訂數量
            if (randomNum <= 3) {
                if (vm.deckArr[randomNum].length >= 7) {
                    return vm.sendToDeck();
                }
            } else {
                if (vm.deckArr[randomNum].length >= 6) {
                    return vm.sendToDeck();
                }
            }
            return randomNum;
        },
        // 抓取撲克牌
        drag: function(e) {
            console.log('抓起來啦:', e)


        },
        // 經過要放置的區域
        dragover: function(e) {
            e.preventDefault()

        }

    }
}