import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
     component: () => import('../views/Home-View.vue')
  },
  
  {
    path: '/login',
    name: 'login',
     component: () => import('../views/Login-View.vue')
  },
  {
    path: '/register',
    name: 'register',
     component: () => import('../views/Register-View.vue')
  },
  {
    path: '/products',
    name: 'products',
     component: () => import('../views/Products-View.vue')
  },
  {
    path: '/register-product',
    name: 'registerProduct',
     component: () => import('../views/Register-Product-View.vue')
  },
  {
    path: '/modify-product',
    name: 'modifyProduct',
     component: () => import('../views/Modify-Product-View.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
     component: () => import('../views/Detail-View.vue')
  },  
  {
    path: '/bag',
    name: 'bag',
     component: () => import('../views/Bag-View.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404-View.vue')
  
  }
]

const router = new VueRouter({
  routes
})

export default router
