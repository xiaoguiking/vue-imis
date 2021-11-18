import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/store-name',
    name: 'store-name',
    component: () => import('../views/store-name')
  },
  {
    path: '/my-address',
    name: 'my-address',
    component: () => import('../views/my-address')
  },
  {
    path: '/order-details',
    name: 'order-details',
    component: () => import('../views/order-details')
  },
  {
    path: '/',
    component: () => import('../views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      },
      {
        path: '/details',
        name: 'test',
        component: () => import('../views/details')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
