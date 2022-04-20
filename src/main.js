import { createApp } from 'vue';
import { store } from './store';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

const app = createApp(App);

app.use(store);


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});

app.use(router);

app.mount('#app');