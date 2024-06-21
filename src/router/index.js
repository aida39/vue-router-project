import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouterPractice from '../views/RouterPractice.vue'
import DynamicRouteMatching from '../views/DynamicRouteMatching.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/router-practice',
    name: 'RouterPractice',
    component: RouterPractice
  },
  {
    path: '/dynamic-route-matching',
    name: 'DynamicRouteMatching',
    component: DynamicRouteMatching
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
