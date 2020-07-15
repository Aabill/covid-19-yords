<template>
    <div class="today" >
        <Pill class="today-cases" :fa="['briefcase']" :val="todayCases"/>
        <Pill class="today-deaths" :fa="['coffin-cross']" :val="todayDeaths"/>
        <Pill class="today-recovered" :fa="['head-side-medical']" :val="todayRecovered"/>
    </div>
</template>


<script>
import Pill from '@/components/Pill.vue'
export default {
    name: 'today',
    props: {
        todayCases: Number,
        todayDeaths: Number,
        todayRecovered: Number,
    },
    components: {
        Pill
    }
}
</script>

<style>
.today {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
</style>