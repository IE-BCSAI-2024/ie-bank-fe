import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'; // Import the Home component
import Skull from '../components/Skull.vue';
import AppAccounts from '../components/AppAccounts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', // Route for the root URL
    name: 'Home',
    component: Home, // Render the Home component at '/'
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull,
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
