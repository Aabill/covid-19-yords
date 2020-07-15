<template>
    <div class="container">
        <div class="tabs">
            <div v-bind:class="{active: currentTab == 1}" @click="tabClicked(1)">
                <f-a-i :icon="['fal','viruses']" />
            </div>
            <div class="viruses-shadow">
                <div></div>
                <div></div>
            </div>
            <div v-bind:class="{active: currentTab == 2}" @click="tabClicked(2)">
                <f-a-i :icon="['fal','sun']"/>
            </div>
            <div class="sun-shadow">
                <div></div>
            </div>
            <div v-bind:class="{active: currentTab == 3}" @click="tabClicked(3)">
                <f-a-i :icon="['fal','chart-pie'] "/>
            </div>
            <div class="pie-shadow">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <span class="country" ref="country">
                {{country}}
            </span>

        </div>
    <viruses v-if="currentTab==1"
        :tests="tests"
        :cases="cases"
        :deaths="deaths"
        :recovered="recovered"
        :active="active"
        :critical="critical"
    />
    <today v-if="currentTab==2" 
        :todayCases="todayCases"
        :todayDeaths="todayDeaths"
        :todayRecovered="todayRecovered"
    />
    <div v-if="currentTab==3"  class="pie">
    <pie :style="pieStyles"
        :chartData="{
            datasets: [
            {
                data: [critical,deaths,active,recovered],
                label: 'Country Info',
                backgroundColor: [
                    getRandomColor(),           
                    getRandomColor(),           
                    getRandomColor(),           
                    getRandomColor(),                         
                ],
                borderWidth: 0,
                hoverBorderWidth: 3,
                hoverBorderColor: getRandomColor(),
                borderAlign: 'inner',
                weight: 2
            },
            ],
            labels: [
                'Critical',
                'Deaths',
                'Active',
                'Recovered',
            ]
        }"  :options="{
            responsiveAnimationDuration: 500,
            label : {
                padding: 10
            }
        }"
    />
    </div>
    </div>
</template>

<script>
import viruses from '@/components/info/viruses.vue'
import today from '@/components/info/today.vue'
import pie from '@/components/info/pie.vue'
export default {
    name: 'tabs',
    components: {
        viruses,
        today,
        pie
    },
    props: {
        country: String,
        tests: Number,
        cases: Number,
        deaths: Number,
        recovered: Number,
        active: Number,
        critical: Number,
        todayCases: Number,
        todayDeaths: Number,
        todayRecovered: Number,
        population: Number,
    },
    data () {
        return {
            currentTab: 1,
            height: 100,
            width: 70
        }
    },
    computed: {
        pieStyles() {
            return {
                height: `${this.height}%`,
                position: 'relative',
                width: `${this.width}%`
            }
        }
    },
    methods: {
        tabClicked(data) {
            this.currentTab = data;
        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
            return color;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.container {
    z-index: 0;
    box-shadow: 0px .5px 5px 2px $light_container;
    width: 100%;
}
.tabs {
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0.5px 5px 1px $light_container;
    position: relative;
    z-index: 0;
    height: 40px;
}
.tabs > div:nth-child(odd) {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    color: $light_label;
    cursor: pointer;
}
.tabs > div:nth-child(even) {
    position: relative;
    opacity: 0;
}
.viruses-shadow > div, .sun-shadow > div, .pie-shadow > div{
    position:absolute;
    height: 3px;
    width: 8px;
    background: radial-gradient($light_container, $dark);
    border-radius: 50%;
    z-index: -1;
}
.viruses-shadow > div:nth-child(1){
    left: -35px;
    bottom: 10px;
}
.viruses-shadow > div:nth-child(2){
    bottom: 5px;
    left: -21px;
    width: 5px;
    height: 2px;
}

.sun-shadow > div {
    bottom: 5px;
    left: -30px;
    width: 10px;
}

.pie-shadow > div:nth-child(1) {
    left: -35px;
    bottom: 5px;
    transform: rotate(15deg);
}
.pie-shadow > div:nth-child(2) {
    left: -23px;
    bottom: 9px;
    width: 5px;
    height: 2px;
}
.pie-shadow > div:nth-child(3) {
    left: -15px;
    bottom: 6px;
    left: -22px;
    width: 3px;
    height: 1px;
    transform: rotate(25deg);
}

.tabs > div.active:nth-child(odd) + div {
    animation: tabShadow 1s infinite;
}
.tabs > div.active {
    animation: tabActive 1s infinite;
}

.tabs > div > svg {
    width: 100%;
    height: 100%;
}

.country {
    margin: 0 10px 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pie {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}
@keyframes tabActive {
    0% {
        color: $light_label;
        transform: translateY(0);
        
    }
    50% {
        color: $dark;
        transform:translateY(-5px);
        
    }
    100% {
        color: $light_label;
        transform: translateY(0);
    }
}
@keyframes tabShadow {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>