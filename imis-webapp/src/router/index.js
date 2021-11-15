import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    component: () => import('../views/layout'),
    children: [
      {
        path: '/test',
        name: 'test',
        component: () =>
          import('../views/test')
      },
      {
        path: '/details',
        name: 'test',
        component: () =>
          import('../views/details')
      },
      {
        path: '/store-name',
        name: 'store-name',
        component: () =>
          import('../views/store-name')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
