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
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
      {
        path: '',
        name: 'home',
        component: () =>
          import('../views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () =>
          import('../views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () =>
          import('../views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () =>
          import('../views/my')
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
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () =>
      //     import('../views/test')
      // },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
