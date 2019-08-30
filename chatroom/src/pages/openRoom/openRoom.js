// 引入 sweetAlert2
const Swal = require('sweetalert2');
// 引入 loading
import loading from '@/components/loading/loading.vue';

export default {
    name: 'openRoom',
    components: {
        loading,
    },
    data() {
        return {
            nickNime: this.$route.params.nickName,
        }
    },
    mounted() {
        // 預設取消 Loading
        this.$store.commit('setLoading', false);
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
}