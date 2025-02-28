import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; // 引入 Vue Router

const app = createApp(App);
app.use(router); // 使用 Vue Router
app.mount('#app');
