import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import Home from '../components/Home.vue';
import AppAccounts from '../components/AppAccounts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
