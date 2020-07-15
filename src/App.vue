<template>
  <div id="app" v-bind:class="{dark: theme}" ref="app">
    <!-- <div id="nav">
      <router-link to="/">Test</router-link> |
      <router-link to="/about">WEWS</router-link>
    </div>
    <router-view/> -->
    <nav @mouseleave="nav=false">
      <div class="logo" @click="nav=false">
        <router-link to="/"> Covid19~Yords </router-link>
      </div>
      <div class="right">
        <div class="theme" @click="changeTheme()">
          <h3><f-a-i :icon="['fal', lightbulb]"/></h3>
        </div>
        <div class="burger" v-bind:class="{active: nav}"        
         @click="burgerClick()" id="burger"  ref="burger">
          <div id="bgr-ex"></div>
        </div>
        <div class="nav-expand">
          <div><router-link to="/about"> About </router-link></div>
          <div><router-link to="/resources"> Resources </router-link></div>
        </div>
      </div>
    </nav>
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import axios from 'axios'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data() {
    return {
      nav: false,
      theme: false,
      lightbulb: 'lightbulb-on'
    }
  },
  methods: {
    setStore(data){
      this.$store.state.covid = data;
      let ic = this.$store.state.covid.filter((e)=> {
        return e.country == 'Philippines'
      })
      this.$store.state.selectedFlags.push(ic.shift());
      // console.log(this.$store.state.selectedFlags);
    },
    burgerClick() {
      if(this.$refs.burger.className == 'burger active'){
        this.nav = false;
      }else {
        this.nav = true;
      }
    },
    changeTheme() {
      if (this.$refs.app.className=="dark"){
        this.theme = false;
        this.lightbulb = 'lightbulb-on';
      }else {
        this.theme = true;
        this.lightbulb = 'lightbulb-slash';
      }
    }
  },
  mounted() {
  axios
    .get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(response => (this.setStore(response.data)))
    .catch(error => console.log(error))
    // .finally(() => console.log('Fetch API Success'))
}
}
</script>
<style lang="scss">
@import "./assets/scss/_variables.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}
nav {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  box-shadow: 0px 1px 1px 0px $dark;
  // background-color: $nav_light;
}

.right {
  margin: 0 5px 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  height: 100%;
  @media only screen and(min-width: 1260px){
    margin-right: 5%;
  }
}
.theme {
  margin-right: 20px;
  cursor: pointer;
  @media only screen and(min-width: 1260px){
    margin-right: 50px;
  }
}
.logo {
  margin-left: 10px;
  height: 100%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media only screen and(min-width: 1260px){
    margin-left: 5%;
  }
}

.burger {
  // background-color: #333;
  position: relative;
  height: 20px;
  width: 40px;
  cursor: pointer;
  // margin: 0 5px 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration-color: none;
  z-index: 5;
  @media only screen and ( min-width: 1260px ){
    display: none;
  }
}

#bgr-ex, .burger::before, .burger::after {
  position: absolute;
  height: 4px;
  width: 30px;
  background-color: $dark;
  border-radius: 3px;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.burger::before, .burger::after {
  content: "";
}
.burger::before {
  top: 0;
}
.burger::after {
  bottom: 0;
}

.burger.active::after {
  bottom: 40%;
  transform: rotate(-45deg);
}

.burger.active::before {
  top: 40%;
  transform: rotate(45deg);
}

.burger.active > #bgr-ex {
  transform: translateX(-30px);
  opacity: 0;
  width:0;
}

.nav-expand {
  // display:none;
  transition: all 0.3s ease-in-out;
  position: absolute;
  padding-top:50px;
  // background-color: transparent;
  width:0;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: -1;
  // box-shadow: 2px 0 5px 3px $light_container;
  overflow: hidden;
  opacity: 0;
  // text-rendering: ;
  div {
    margin: 20px 0;
  }
  div > a {
    width: 100%;
    text-align: center;
    position: relative;
    &.router-link-exact-active::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translate(-20%,-50%);
      width: 10px;
      height: 50%;
      border-radius: 50%;
      // background-color: $light_container;
      box-shadow: 0 0.5px 3px 1px $light_container;
    }
  }
  @media only screen and (min-width: 1260px) {
    // background-color: transparent;
    position: relative;
    height: 100%;
    z-index: 0;
    opacity: 1;
    width: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 100%;
      margin: 0 10px;
      outline: none;
    }
    div > a {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-emphasis: none;
      &.router-link-exact-active {
        border-left: none;
      }
      &.router-link-exact-active::after {
        content: "";
        position:absolute;
        height: 5px;
        width: 100%;
        bottom: 0;
        background-color: $light_container;
        z-index: 0;
        cursor: default;
        border-radius: 2px;
      }
      &.router-link-exact-active::before {
        display: none;
      }
    }
  }
  // transition: all 0.2s ease-in-out;
}

.burger.active ~ .nav-expand {
  top:0;
  width: 60%;
  overflow: hidden;
  overflow-y: scroll;
  // transition: all 0.3s ease;
  box-shadow: -1px 0 1px 0px $light_container;
  opacity:1;
  z-index:2;
}

.nav-expand > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app.dark {
  background: $dark;
  color: $light;
  & *, & label{
    // background: $dark;
  color: $light;
  }
  & .dropdown, & .burger.active ~ .nav-expand{
    background-color: $dark;
  }
  & #bgr-ex, & .burger::before, 
  & .burger::after  {
    background-color: $light;
  }
  .footer {
    box-shadow: 0px -1px 1px 0px $light;
  }
  nav {
     box-shadow: 0px 1px 1px 0px $light;
  }
  .pill::before {
    background-color: $dark;
  }
  // $light_container: #000
  
  
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  background-color: transparent;
  color: $dark;
  transition: all 0.2s ease-in-out;
  .burger.active ~ .nav-expand {
    background-color: #fff;
  }
  // overflow-x: hidden;
  // height: 100vh;
}

a {
  text-decoration: none;
  color: #2c3e50;
  text-shadow: 0 2px 3px $light_label;
  outline-width: 0;
  background-color: transparent;
  &.router-link-exact-active {
    color: $dark;
  }
}
.logo > a {
  text-decoration: none;
  color: #2c3e50;
  &.router-link-exact-active {
    color: $dark;
  }
}
  
// }
</style>
