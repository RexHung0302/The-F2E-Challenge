// 引入 loading
import loading from '@/components/loading/loading.vue';

const Swal = require('sweetalert2');

export default {
    name: 'login',
    components: {
        loading
    },
    data() {
        return {
            nickName: null,
        }
    },
    methods: {
        login: function(type) {

            let vm = this;

            // 判斷種類
            switch (type) {
                case 'visitor':
                    if (vm.nickName === null || vm.nickName === '') {
                        Swal.fire({
                            title: '請輸入聊天名稱',
                            text: '',
                            type: 'error',
                        })
                    } else {
                        vm.$store.dispatch('setNickName', vm.nickName).then((res) => {
                            if (res === false) {
                                this.$router.push({ name: 'index', params: { nickNime: this.nickName } });
                            } else {
                                Swal.fire(
                                    '已有相同暱稱',
                                    '請更換其他暱稱！',
                                    'error'
                                );
                            }
                            return;
                        }).catch((err) => {
                            Swal.fire(
                                '發生未知錯誤',
                                '請聯絡相關人員協助處理！',
                                'error'
                            );
                            return;
                        });
                    }
                    break;
                case 'facebook':
                    Swal.fire({
                        title: '功能尚未開放!',
                        text: '敬請期待',
                        type: 'error',
                    })
                    break;
            }
        }
    },
    computed: {
        // 目前是否有 loading
        isLoading: function() {
            return this.$store.state.loading;
        }
    }
}