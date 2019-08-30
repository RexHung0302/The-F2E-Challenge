// 引入 sweetAlert2
const Swal = require('sweetalert2');
// 引入 loading
import loading from '@/components/loading/loading.vue';
// 引入聊天頻道 component
import chartChannel from '@/components/chartChannel/chartChannel.vue';

export default {
    name: 'index',
    components: {
        loading,
        chartChannel,
    },
    data() {
        return {

        }
    },
    mounted() {
        // 檢查有沒有暱稱
        if (this.$store.state.nickNime === '' || this.$store.state.nickNime === null) {
            Swal.fire(
                '發生錯誤',
                '請填妥使用者暱稱或請勿重新整理！',
                'error'
            );
            this.$router.push({ name: 'login' });
        }
    },
    methods: {
        // 子原件發起的進入聊天室 emit 請求
        enterChannel: function(id) {
            this.$store.dispatch('enterChannel', id).then((res) => {
                if (res === true) {
                    this.$router.push({ name: 'openRoom', params: { nickNime: this.$route.params.nickName } });
                } else {
                    Swal.fire(
                        '該頻道尚未開放',
                        '敬請期待！',
                        'info'
                    );
                    return;
                };
            }).catch((err) => {
                Swal.fire(
                    '發生未知錯誤',
                    '請聯絡相關人員協助處理！',
                    'error'
                );
                return;
            });
        }
    },
    computed: {
        // 所有聊天室的數量
        chartChannelData: function() {
            return this.$store.state.chartChannels;
        },
        // 目前是否有 loading
        isLoading: function() {
            return this.$store.state.loading;
        },
        aaa: function() {
            return this.$store.state.nickNime;
        }
    },
    watch: {
        isLoading: function(value) {
            if (value) {
                console.log('loading');
            } else {
                console.log('notLoading');
            }
        }
    }
}