<template>
    <div class="country">
        <h1>Country {{ getCountry().shift().country }}</h1>
        <Status 
            v-bind:tests="getCountry().shift().tests"
            v-bind:cases="getCountry().shift().cases"
            v-bind:deaths="getCountry().shift().deaths"
            v-bind:recovered="getCountry().shift().recovered"
            v-bind:active="getCountry().shift().active"
            v-bind:critical="getCountry().shift().critical"
        />
        <Today 
            v-bind:todayCases="getCountry().shift().todayCases"
            v-bind:todayDeaths="getCountry().shift().todayDeaths"
            v-bind:todayRecovered="getCountry().shift().todayRecovered"
        />
        <PerMillion
            v-bind:testsPerOneMillion="getCountry().shift().testsPerOneMillion"
            v-bind:casesPerOneMillion="getCountry().shift().casesPerOneMillion"
            v-bind:deathsPerOneMillion="getCountry().shift().deathsPerOneMillion"
            v-bind:recoveredPerOneMillion="getCountry().shift().recoveredPerOneMillion"
            v-bind:activePerOneMillion="getCountry().shift().activePerOneMillion"
            v-bind:criticalPerOneMillion="getCountry().shift().criticalPerOneMillion"
        />
    </div>
</template>

<script>
import Status from '@/components/Status.vue'
import Today from '@/components/Today.vue'
import PerMillion from '@/components/PerMillion.vue'
export default {
    name: 'Country',
    components: {
        Status,
        Today,
        PerMillion
    },
    methods: {
        getCountry() {
            return this.$store.state.covid.filter((e)=>{
                return e.countryInfo.iso3 == this.$route.params.iso3;
            })
        }
    },
    // mounted() {
    //     console.log(this.$route.params.iso3);
    // }
}
</script>