import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; // 引入 Vue Router


import '../src/assets/css/style.css';

createApp(App)
  .use(router)
  .mount('#app');
