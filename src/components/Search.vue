<template>
    <div class="search" @mouseleave="closeDropdown">
        <div class="selected" 
            v-if="this.$store.state.selectedFlags.length > 0"
        >
            <div class="icon"><f-a-i :icon="['fal', 'check']" /></div>
            <div class="flags" @click="dropdown=false">            
                <selectedFlag 
                v-for="item in this.$store.state.selectedFlags"
                v-bind:key="item.updated"
                :flag="item.countryInfo.flag"
                :country="item.country"
                />
                
            </div>
        </div>
        <div class="input" v-bind:class="{active: dropdown}">
            <input type="text" name="country" ref="str_search" v-model="inputSearch" @focus="dropdown=true" @keyup="searchCountry"/>
            <label for="country" v-bind:class="{activate: dropdown==true, active: inputSearch.length > 0}">Search Country <f-a-i :icon="['fal', 'flag']"/></label>
            <span><f-a-i :icon="['fal', 'search']"/></span>
            
            <div class="dropdown" v-bind:class="{active : dropdown}" ref="ls_search" @click="$refs.str_search.focus()">
                <Flag 
                    v-for="item in this.$store.state.covid" 
                    v-bind:key="item.id" 
                    :flag="item.countryInfo.flag" 
                    :country="item.country"
                />
            </div>
        </div>
    </div>
</template>

<script>
import selectedFlag from'@/components/flags/selected-flag.vue'
import Flag from'@/components/flags/flag.vue'
export default {
    name: 'Search',
    data () {
        return {
            dropdown: false,
            inputSearch: "",
        }
    },
    methods: {
        searchCountry() {
            this.dropdown = true;
            let str = this.$refs.str_search.value;
            let ls = this.$refs.ls_search;
            // console.log(ls);
            let selected_flags = this.$store.state.selectedFlags.map((e) => {
                return e.country
            })
            // console.log(selected_flags)
            ls.childNodes.forEach(Element => {
                
                // this.$store.state.selectedFlags
                if (!selected_flags.includes(Element.firstChild.attributes["data-country"].value)) {
                    if ( Element.firstChild.attributes["data-country"].value.toLowerCase().indexOf(str.toLowerCase()) > -1 ) {
                    Element.style.display = 'flex';
                    }else{
                    Element.style.display = 'none';
                    }
                }
                    
            });
        },
        closeDropdown() {
            this.dropdown = false;
            // this.$refs.str_search.value = "";
            this.$refs.str_search.blur();
            // console.log(this.$refs.str_search);
            // this.$refs.ls_search.childNodes.forEach(Element => {
            //     Element.style.display = 'flex'; 
            // })
        },
    },
    components: {
        selectedFlag,
        Flag
    },
    // mounted() {
    //     window.addEventListener('scroll', ()=>{
    //         this.closeDropdown();
    //     })
    // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
    .search {
        width: 95vw;
        height: auto;
        margin: 10px auto;
        box-shadow: 0px 0.5px 5px 2px $light_container;
        z-index: 1;
    }
    .selected {
        margin: 0 10px 0 10px;
        display:grid;
        grid-template-columns: 30px auto;
    }
    .selected > .icon {
        // margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 20px;
        box-shadow: 0 0.1px 1px 1px $light_container;
    }
    .selected > .flags {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
    }
    .input {
        display: inline-flex;
        margin: 10px;
        position: relative;
        box-shadow: 0px 0.5px 3px 0.5px $light_container;
        width: calc(100% - 7%);
        z-index:1;
        border-radius: 0 5px 5px 0;
        transition: all 0.2s ease-in-out;
        &.active, &.active > span {
            border-bottom-right-radius: 0;
        }
    }
    .input > input, .input > span > svg {
        margin-top: 5px;
        height: 30px;
        border: none;
    }
    .input > span > svg {
        border-bottom: none;
        
    }
    .input > span {
        width: 30px;
        box-shadow: 0px 0.25px 2px 1px $light_container;
        border-radius: 0 5px 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
    label {
        position: absolute;
        top: 12px;
        left: 5px;
        font-size: 11pt;
        transition: all 0.2s ease;
        cursor: text;
        color: $light_label;
        z-index: -1;
    }
    
    input {
        padding: 5px;   
        font-size: 10pt;
        width: 100%;
        background-color: transparent;
        // z-index: 0;
        outline: transparent;
    }
    
    label.active, label.activate{
        top: 0;
        font-size: 8pt;
        color: $dark;
        
    }
    .dropdown.active{
        top: 100%;
        visibility: visible;
        color: #000;
        height: auto;
        box-shadow: 0 1px 3px 1px $light_container;
        opacity: 1;
        background-color: $light;
        z-index: 1;
    }
   
   .dropdown {
       position: absolute;
       top: 100%;
       width: 100%;
       box-shadow: none;
       background-color: #fff;
       visibility: hidden;
       transition: all 0.2s ease-in-out;
       color: transparent;
       height: 0;
       padding: 10px;
       opacity: 0;
       display: grid;
       grid-template-columns: repeat(6, 1fr);
       grid-auto-rows: 30px;
       min-height: auto;
       max-height: 200px;
       overflow: hidden;
       overflow-y: scroll;
   }
   
</style>