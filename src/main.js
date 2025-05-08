import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: () => import('./components/Home.vue') },
      { path: '/men', component: () => import('./components/Men.vue') },
      { path: '/women', component: () => import('./components/Women.vue') },
      { path: '/about', component: () => import('./components/About.vue') },
      { path: '/contact', component: () => import('./components/Contact.vue') },
      { path: '/login', component: () => import('./components/Loing.vue') },
      { path: '/singup', component: () => import('./components/Singup.vue') },
    ],
  });

const app = createApp(App);
app.use(router);
app.mount('#app');