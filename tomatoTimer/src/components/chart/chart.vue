<script>
import { Bar } from 'vue-chartjs';

export default {
    extends: Bar,
    props: ['chartData'],
    mounted() {
        this.renderChart(this.chartData)
    }
}
</script>

