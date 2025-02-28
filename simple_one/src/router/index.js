import { createRouter, createWebHashHistory } from 'vue-router'; // ✅ 改用 Hash 模式

import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHashHistory(), // ✅ 確保 GitHub Pages 能夠正確運行
  routes
});

export default router;
