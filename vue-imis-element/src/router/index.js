import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/index";
import NoFound from "@/views/error-page/404";

// 测试
import User from "@/views/test/User";
import Log from "@/views/test/Log";
import Res from "@/views/test/Res";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/Home/index")
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
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    // component: () => import('@/views/login/index'),
    component: Login
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
  },
  // 匹配404page
  {
    // 会匹配所有路径
    path: "*",
    name: "404",
    component: NoFound
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
