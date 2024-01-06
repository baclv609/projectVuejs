// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import MyView from './View/MyView.vue';

const app = createApp(App);
app.component('my-view', MyView);

app.mount('#app');
