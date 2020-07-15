<template>
    <div class="selected-flag" @click="deselectFlag($event)">
        <img :src="flag" width="100%" height="100%" :data-country="country">
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
    .selected-flag {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 20px;
        box-shadow: 0px 0.5px 1px 1px $light_container;
        cursor: pointer;
    }
    img {
        padding: 3px 5px;
    }
</style>

<script>
export default {
    name: 'selected-flag',
    props: {
        flag: String,
        country: String
    },
    methods: {
        deselectFlag(e) {
            let index = this.$store.state.selectedFlags.findIndex(Element =>{
                return Element.countryInfo.flag == e.target.attributes[1].value;
            })
            this.$store.state.selectedFlags.splice(index, 1);
            let el = document.querySelector(".dropdown");
            el.childNodes.forEach(Element => {
                if(Element.firstChild.attributes["src"].value == e.target.attributes[1].value) Element.style.display="flex";
            });
            // console.log(index);
            // console.log(this.$store.state.selectedFlags);
        }
    }
}
</script>