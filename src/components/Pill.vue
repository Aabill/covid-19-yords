<template>
    <div class="pill">
        <div>
          <f-a-i 
            v-for="f in fa" 
            v-bind:key="f" 
            :icon="['fal', f]"/>
        </div>
        <span>{{addComma(val)}}</span>
    </div>
</template>

<script>
export default {
    name: 'Pill',
    props: {
        fa: Array,
        val: Number
    },
    methods: {
        addComma(val) {
            let data = val.toString().split('');
            for (let i = data.length -2; i > 1; i-=3){
                data.splice(i-1,0,', ');
            }
            return data.join('');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.pill {
    position: relative;
    display:grid;
    grid-template-columns: auto auto;
    margin: 5px 10px;
    cursor: pointer;
  }
.pill:hover::before, .pill:hover::after{
    visibility: visible;
    z-index: 1;
}

.pill:hover::after {
    z-index: 0;
}
.pill::before {
    visibility: hidden;
    z-index: -1;
    cursor: default;
    font-size: 10pt;
    position: absolute;
    display:flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 31px;
    border-radius: 5px;
    top: -110%;
    left: 50%;
    padding: 5px 10px;
    box-shadow: 0 0.5px 3px 1px $light_container;
    transform: translate(-50%,-50%);
    background-color: $light;
    // background-color: #000;
}
.pill::after {
    visibility: hidden;
    content: "";
    position: absolute;
    top: calc(-60% + 30%);
    left: calc(50% - 5px);
    z-index: 0;
    width: 10px;
    height: 5px;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    // box-shadow: 0 5px 3px 1px $dark;
    background-color: $shadow_gray;
    // border-radius: 0px 0px 100px 100px;
    transform: rotate(180deg);
    cursor: default;
}
.pill > div {
    display: flex;
    justify-content: center;
    align-items: center;
    // border-right: 1px solid #000;
    border-radius: 5px 0 0 5px;
    box-shadow: -1px 0.5px 3px 1px $light_label;
    padding: 5px;
  }
.pill > span {
    display: flex;
    align-items: center;
    margin-left: 3px;
    font-size: 10pt;
    box-shadow: 1px 0.5px 3px 1px $light_label;
    border-radius: 0 5px 5px 0;
    padding: 0 5px;
  }

.pill.overall-tests::before{
  content: "Overall Tests";
}
.pill.overall-cases::before{
  content: "Overall Cases";
}
.pill.overall-deaths::before{
  content: "Overall Deaths";
}
.pill.overall-recovered::before{
  content: "Overall Recovered";
}
.pill.overall-active::before{
  content: "Overall Active";
}
.pill.overall-critical::before{
  content: "Overall Critical";
}
.pill.country-tests::before{
  content: "Tests";
}
.pill.country-cases::before{
  content: "Cases";
}
.pill.country-deaths::before{
  content: "Deaths";
}
.pill.country-recovered::before{
  content: "Recovered";
}
.pill.country-active::before{
  content: "Active";
}
.pill.country-critical::before{
  content: "Critical";
}
.pill.today-cases::before{
  content: "Today Cases";
}
.pill.today-deaths::before{
  content: "Today Deaths";
}
.pill.today-recovered::before{
  content: "Today Recovered";
}
</style>