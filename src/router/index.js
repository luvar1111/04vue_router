import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import board from '../components/board.vue'
import product from '../components/product.vue'
import pPop from '../components/pPop.vue'
import detail from '../components/listdetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/pPop',
    name: 'pPop',
    component: pPop
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/board',
    name: 'board',
    component: board
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
