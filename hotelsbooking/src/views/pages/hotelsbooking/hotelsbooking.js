import headerPart from '@/components/partial/headerPart.vue';
import footerPart from '@/components/partial/footerPart.vue';

export default {
    name: 'hotelsbooking',
    components: {
        headerPart,
        footerPart
    },
    data() {
        return {}
    },
    created() {
        // 打 API
        // this.$store.dispatch('getRoom');
    }
}