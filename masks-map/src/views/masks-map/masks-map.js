import { mapState } from 'vuex';
const Swal = require('sweetalert2');

// 引入 sidePart
import sidePart from '@/components/partial/sidePart.vue';

export default {
  name: 'masksMap',
  components: {
    sidePart
  },
  created(){
    Swal.fire({
      title: '載入中',
      showCancelButton: false,
      showConfirmButton: false,
      heightAuto: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    })
    this.$store.dispatch('checkDevice');
    this.$store.dispatch('getMasksApi');
  },
  computed:{
    ...mapState([
      'sideBarHidden',
    ]),
  },
}