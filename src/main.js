import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
});

app.mount('#app');

