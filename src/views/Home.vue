<template>
<div class="home" v-if="this.$store.state.covid != null">
  <div class="head">
    <h3><f-a-i :icon="['fal', 'virus']" /> <f-a-i :icon="['fal', 'hand-point-right']" /> <f-a-i :icon="['fal', 'globe']" /></h3>
    <hr>
    <div>
      <Pill class="overall-tests" :fa="['thermometer']" :val="getTotal('tests')"/>
      <Pill class="overall-cases" :fa="['briefcase']" :val="getTotal('cases')"/>
      <Pill class="overall-deaths" :fa="['coffin-cross']" :val="getTotal('deaths')"/>
      <Pill class="overall-recovered" :fa="['head-side-medical']" :val="getTotal('recovered')"/>
      <Pill class="overall-active" :fa="['head-side-virus']" :val="getTotal('active')"/>
      <Pill class="overall-critical" :fa="['head-side-virus', 'temperature-up']" :val="getTotal('critical')"/>
    </div>
  </div> 
    
    <Search />
    <div class="info">
    <CountryInfo 
      v-for="item in this.$store.state.selectedFlags"
      v-bind:key="item.updated"
      :country="item.country"
      :tests="item.tests"
      :cases="item.cases"
      :deaths="item.deaths"
      :recovered="item.recovered"
      :active="item.active"
      :critical="item.critical"
      :flag="item.countryInfo.flag"
      :todayCases="item.todayCases"
      :todayDeaths="item.todayDeaths"
      :todayRecovered="item.todayCases"
      :population="item.population"
    />
    </div>
</div>
</template>

<script>
import Search from '@/components/Search.vue'
import Pill from '@/components/Pill.vue'
import CountryInfo from '@/components/info/country-info.vue'
export default {
  name: 'Home',
  components: {
    Pill,
    Search,
    CountryInfo
  },
  methods: {
    getTotal(data){
      let arr = this.$store.state.covid.map( (e) => {return e[data]})
      return arr.reduce((accumulative,currentValue) => accumulative + currentValue);
    },
  }
}
</script>

<style lang="scss" scoped>
 @import '@/assets/scss/_variables.scss';
  .head {
    height: auto;
    width: 95vw;
    margin: 20px auto;
    box-shadow: 0px 0.5px 5px 2px $light_container;
    // border-radius: 10px;
    // border-top: 1px solid $light_container;
    padding: 10px;
    
  }
  @media only screen and (min-width: 768px ){
    .home {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto auto;
      grid-template-areas: 
        "s t"
        "i i";
    }

    .head {
      width: calc(100% - 5%);
      height: auto;
      margin-top: 20px;
      grid-area: t;
    }
    .search {
      width: calc(100% - 5%);
      grid-area: s;
      margin-top: 20px;
      margin-bottom: auto;
    }
    .info {
      grid-area: i;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-gap: 10px;
      margin: 0 10px;
      z-index: 0;
    }
    .country-info {
      margin-top: 20px;
    }
    @media only screen and(min-width: 1260px ) {
      .home {
        grid-template-columns: repeat(3,1fr);
        grid-template-areas: 
          "s t ."
          "i i i";
      }
      .info {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media only screen and(min-width: 2130px ) {
      .home {
        grid-template-columns: repeat(4,1fr);
        grid-template-areas: 
          "s t . ."
          "i i i i";
      }
      .info {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    
  }
  .head > div {
    display: flex;
    flex-wrap: wrap;
    font-size: 12pt;
    justify-content: center;
    padding-top: 5px;
  }
  

</style>