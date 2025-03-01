import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import SkillView from '../views/SkillView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/skill', component: SkillView },
  { path: '/contact', component: ContactView }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
