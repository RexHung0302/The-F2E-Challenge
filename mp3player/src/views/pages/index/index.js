import headerPart from '@/components/partial/headerPart.vue';

export default {
    name: 'index',
    components: {
        headerPart,
    },
    data() {
        return {
            albumImg: null,
        }
    },
    mounted() {
        // 到 store 取得專輯的照片
        this.albumImg = this.$store.state.albumImg;
    },
}