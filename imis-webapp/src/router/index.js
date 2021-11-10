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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
