const axios = require('axios');
const token = 'V0QiN5pW8U8HvsXYjEO4XEtYCCgEq10iOZzxN8hKg6RuhEQN5Ao6DQbxvpVW';
const allRoomURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
const roomInfoURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/'

export default {
    name: 'rooms',
    data() {
        return {
            // 取得所有房源
            allRoom: this.$store.state.allRoom,
            allRoomInfo: [],
        }
    },
    mounted() {
        let vm = this;
        let roomLength = 0;
        // 打Api
        axios({ method: 'get', url: `${allRoomURL}`, headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            if (res) {
                // 將所有房源丟到 state
                vm.$store.commit('setApi', res.data);

                roomLength = vm.$store.state.allRoom.length;

                // 打每一個房間的 api
                for (var i = 0; i < roomLength; i++) {

                    // 每一間房間的 id
                    let id = vm.$store.state.allRoom[i].id;

                    // 打Api 拿每一間的資訊
                    axios({ method: 'get', url: `${roomInfoURL}${id}`, headers: { Authorization: `Bearer ${token}` } }).then((res) => {
                        if (res) {
                            // 放資訊進變數裡
                            vm.allRoomInfo.push(res.data)
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
                }

            }
        }).catch((err) => {
            console.log(err)
        });


    },
    computed: {

    }
}