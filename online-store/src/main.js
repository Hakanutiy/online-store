

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from '@/store'
import { VueQueryPlugin } from "@tanstack/vue-query";
import VueApexCharts from 'vue3-apexcharts'



const app = createApp(App)
app.use(VueApexCharts)



app.use(router).use(VueQueryPlugin).use(store).mount('#app')