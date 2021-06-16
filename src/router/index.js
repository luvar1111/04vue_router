import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import company from '../components/company.vue'
import product from '../components/product.vue'
import detail from '../components/listdetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/company',
    name: 'company',
    component: company
  },
  {
    path: '/product',
    name: 'product',
    component: product
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
