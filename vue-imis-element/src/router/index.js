import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "@/views/login/index";

// 测试
import User from "@/views/test/User";
import Log from "@/views/test/Log";
import Res from "@/views/test/Res";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    redirect: "/login"
    // component: () => import('@/views/login/index'),
  },
  {
    path: "/login",
    name: "login",
    // component: () => import('@/views/login/index'),
    component: Login
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import('@/views/login/index'),
  //   component: Login
  // },
  {
    path: "/index",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test"),
    children: [
      {
        path: "log",
        name: "log",
        component: Log
      },
      {
        path: "res",
        name: "res",
        component: Res
      }
    ]
  },
  // 动态路径参数 以冒号开头
  // {
  //   path: "/test/:id",
  //   component: User
  // },

  {
    path: "/user",
    name: "user",
    component: User
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
