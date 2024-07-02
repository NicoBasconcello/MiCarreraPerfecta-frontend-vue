import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeSection.vue';
import Carreras from '../views/Carreras.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/career', component: Carreras }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
