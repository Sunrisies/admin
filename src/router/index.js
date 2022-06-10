import { createRouter,createWebHashHistory } from "vue-router";

import Index from '~/pages/index.vue';
import NotFound from '~/pages/404.vue'

const routes = [
    {
        path:'/',
        name:'index',
        component:Index
    },
    { 
        path: '/login', 
        name: 'login', 
        component: () => import('~/pages/login/index.vue'), 
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound 
    },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
}) 

export default router;