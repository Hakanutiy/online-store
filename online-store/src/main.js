

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from '@/store'
import { VueQueryPlugin } from "vue-query";


const app = createApp(App)



app.use(router).use(VueQueryPlugin).use(store).mount('#app')