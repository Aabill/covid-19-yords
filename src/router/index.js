import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Country from '../views/Country.vue'
import About from '../views/About.vue'
import Resources from '../views/Resources.vue'

Vue.use(VueRouter)



  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  // {
  //   path: '/B',
  //   name: 'B',
  //   component: Country
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/country/:iso3',
    name: 'Country',
    component: Country
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
