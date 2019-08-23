const axios = require('axios');
const token = 'V0QiN5pW8U8HvsXYjEO4XEtYCCgEq10iOZzxN8hKg6RuhEQN5Ao6DQbxvpVW';
const allRoomURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';

export default {
    name: "index",
    data() {
        return {
            allRoomImg: [],
            nowImgActive: 0,
        }
    },
    mounted() {
        let vm = this;
        // 打Api
        axios({ method: 'get', url: `${allRoomURL}`, headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            if (res) {
                console.log(res.data);
                // 將所有房源丟到 state
                vm.$store.commit('setApi', res.data);

                // 取得房間照片
                vm.allRoom.map((val, key) => {
                    vm.allRoomImg.push(val.imageUrl);
                });

                // 打亂照片
                vm.shuffle(vm.allRoomImg);
            }
        }).catch((err) => {
            console.log(err)
        });
    },
    methods: {
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
        // 幻燈片換頁
        changePage: function(index) {
            this.nowImgActive = (index + this.allRoomImg.length) % this.allRoomImg.length;
        }
    },
    computed: {
        // 取得所有房源
        allRoom: function() {
            return this.$store.state.allRoom;
        },
    }
}