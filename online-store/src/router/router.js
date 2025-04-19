import Main from "@/features/main/pages/Main.vue";
import { createRouter, createWebHistory } from "vue-router";
import Product from "@/features/main/pages/products/Product.vue";
import Basket from "@/features/main/pages/basket/Basket.vue";
import Login from "@/features/main/pages/auth/Login.vue";
import Register from "@/features/main/pages/auth/Register.vue";
import {useStore} from "vuex";
import {watch} from "vue";
import AdminPanel from "@/features/main/pages/admin/AdminPanel.vue";
import CreateProduct from "@/features/main/pages/admin/productsListen/CreateProduct.vue";
import DeleteProduct from "@/features/main/pages/admin/productsListen/DeleteProduct.vue";
import Analytics from "@/features/main/pages/admin/productsListen/Analytics.vue";




const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/product',
        name: 'Main',
        children: [

            {
                path: 'product',
                name: 'product',
                component: Product,
                meta: { requiresAuth: true },
            },
            {
                path: 'basket',
                name: 'basket',
                component: Basket,
                meta: { requiresAuth: true },
            },
            {
                path: '/admin',
                name: 'admin',
                component: AdminPanel,
                meta: { requiresAuth: true },
                children: [

                ],
            },
            {
                path: 'admin/create',
                name: 'createProducts',
                component: CreateProduct,
                meta: { requiresAuth: true },
            },
            {
                path: 'admin/delete',
                name: 'deleteProducts',
                component: DeleteProduct,
                meta: { requiresAuth: true },
            },
            {
                path: 'admin/analytics',
                name: 'Analytics',
                component: Analytics,
                meta: { requiresAuth: true },
            },
        ],
    },


    {
        path: '/auth',
        redirect: '/auth/login',
        name: 'Login',
        children: [
            {
                path: 'login',
                meta: {requiresAuth: false},
                component: Login,
            },
            {
                path: 'register',
                meta: {requiresAuth: false},
                component: Register,
            },
        ],
    },
];



const router = createRouter({
    routes,
    history: createWebHistory(),
});


router.beforeEach((to, from, next) => {

    const isAuthenticated = localStorage.getItem('authToken');
    console.log(isAuthenticated)

    if (to.meta.requiresAuth && !isAuthenticated) {

        next({ path: '/auth' });
    } else {
        next();
    }
});

export default router;
