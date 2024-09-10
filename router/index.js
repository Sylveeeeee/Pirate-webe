import { createRouter, createWebHashHistory } from 'vue-router'
import list_product from '../pages/index.vue'
import productdetail from '../pages/productdetail.vue'

const routes = [
    {
        path: '/',
        name: 'list_product',
        component: list_product
    },
    {
        path: '/productdetail/:id',
        name: 'productdetail',
        component: productdetail
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
