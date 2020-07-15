<template>
    <div class="country-info">
        <div class="flag" @click="closeFlag($event)"> 
            <div>
                <img :src="flag"  width="100%" height="100%" >
            </div>
        </div>

        <tabs 
            :country="country"
            :tests="tests"
            :cases="cases"
            :deaths="deaths"
            :recovered="recovered"
            :active="active"
            :critical="critical"
            :todayCases="todayCases"
            :todayDeaths="todayDeaths"
            :todayRecovered="todayRecovered"
            :population="population"
        />
    </div>
</template>

<script>
import tabs from '@/components/info/tabs.vue'

export default {
    name: 'country-info',
    props: {
        country: String,
        tests: Number,
        cases: Number,
        deaths: Number,
        recovered: Number,
        active: Number,
        critical: Number,
        flag: String,
        todayCases: Number,
        todayDeaths: Number,
        todayRecovered: Number,
        population: Number,
    },
    components: {
        tabs,
    },
    methods: {
        closeFlag(e) {
            //Find index of the Country
            let index = this.$store.state.selectedFlags.findIndex(Element => {
                return Element.countryInfo.flag == e.target.src;
            });
            // console.log(index);
            // Splice the Country from Array to remove
            this.$store.state.selectedFlags.splice(index, 1);
            let el = document.querySelector('.dropdown');
            el.childNodes.forEach(Element => {
                if (Element.firstChild.src == e.target.src) Element.style.display = "flex";
            })
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
    .country-info {
        height: auto;
        width: 100%;
        // box-shadow: 0px .5px 5px 2px $light_container;
        margin-top: 35px;
        position: relative;
        z-index: 0;
    }
    .flag > div {
        height: 20px;
        width: 30px;
        position: absolute;
        right: 5px;
        top: -20px;
        box-shadow: 0px -1px 3px 0px $light_container;
        padding: 1px 2.5px;
        z-index: 2;
    }
    .flag {
        cursor: pointer;
    }
    

    

    
</style>