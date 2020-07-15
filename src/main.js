import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBriefcase } from '@fortawesome/fontawesome-pro-light'
import { 
  faBriefcase, faHeadSideMedical, faCoffinCross, faThermometer, faVirus, faHeadSideVirus, faHandPointRight, faGlobe, faTemperatureUp, faSearch,
  faFlag, faCheck, faViruses, faSun, faChartPie, faCopyright, faLightbulbOn, faLightbulbSlash 
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// End Fortawesome



library.add([
  faBriefcase, faHeadSideMedical, faCoffinCross, faThermometer, faVirus, faHeadSideVirus, faHandPointRight, faGlobe, faTemperatureUp, faSearch,
  faFlag, faCheck, faViruses, faSun, faChartPie, faCopyright, faLightbulbOn, faLightbulbSlash 
])

// Import scss Global
import './assets/scss/main.scss'
// End Import Css Global

Vue.component('f-a-i', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
