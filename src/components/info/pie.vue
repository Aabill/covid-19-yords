

<script>
import { Pie } from 'vue-chartjs'
export default {
    name: 'pie',
    extends: Pie,
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options);
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
// .pie {
//     padding: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: auto;
//     color: $light_container;
// }
</style>