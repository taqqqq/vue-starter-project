import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import Lara from '@primeuix/themes/lara'

const app = createApp(App);

app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.make-me-dark'
        }
    }
});

app.mount('#app');

