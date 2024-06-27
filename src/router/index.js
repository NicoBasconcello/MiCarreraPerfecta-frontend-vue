import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeSection.vue';
import Preferences from '../components/Preferences.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/university', component: Preferences }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
