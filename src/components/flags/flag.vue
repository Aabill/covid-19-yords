<template>
    <div class="flag" @click="selectFlag($event)">
        <img v-show="loadImg" :src="flag" width="100%" height="100%" :data-country="country" @load="loadingImg" ref="img">
    </div>
</template>

<script>
export default {
name: 'flag',
data () {
    return {
        loadImg: false,
    }
},
props: {
    flag: String,
    country: String,
},
methods: {
selectFlag(e) {
    
    e.target.parentElement.style.display = "none";
    let country = this.$store.state.covid.filter(Element=> {
    return Element.countryInfo.flag == e.target.attributes[1].value;
    })
    this.$store.state.selectedFlags.push(country.shift());    
},
loadingImg() {
    this.loadImg = true;
}
},
mounted() {
    this.$store.state.selectedFlags.forEach(Element=> {
        if (Element.country == this.$refs.img.attributes['data-country'].value) {
            this.$refs.img.parentElement.style.display = "none";
        } 
    })
}
}
</script>



<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
    .flag {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $light_container;
        cursor: pointer;
    }
    img {
        padding: 3px 5px;
    }
</style>