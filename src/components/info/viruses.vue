<template>
    <div class="viruses" >
        <Pill class="country-tests" :fa="['thermometer']" :val="tests"/>
        <Pill class="country-cases" :fa="['briefcase']" :val="cases"/>
        <Pill class="country-deaths" :fa="['coffin-cross']" :val="deaths"/>
        <Pill class="country-recovered" :fa="['head-side-medical']" :val="recovered"/>
        <Pill class="country-active" :fa="['head-side-virus']" :val="active"/>
        <Pill class="country-critical" :fa="['head-side-virus','temperature-up']" :val="critical"/>
    </div>
</template>


<script>
import Pill from '@/components/Pill.vue'
export default {
    name: 'viruses',
    props: {
        tests: Number,
        cases: Number,
        deaths: Number,
        recovered: Number,
        active: Number,
        critical: Number
    },
    components: {
        Pill
    }
}
</script>

<style>
.viruses {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
}
</style>