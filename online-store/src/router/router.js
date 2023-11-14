import Main from "@/features/main/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import Product from "@/features/main/pages/products/Product.vue";
import Basket from "@/features/main/pages/basket/Basket.vue";

const routes = [
    {
        path: '/',
        name: 'private',
        component: Main,
        children: [
            {
                path: '/',
                component: Product,
            },
            {
                path: '/basket',
                component: Basket,
            },
        ],
    },

]

const router = createRouter({
    routes, history: createWebHistory()
})

export default router