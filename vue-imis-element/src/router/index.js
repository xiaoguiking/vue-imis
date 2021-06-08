import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/index";
import NoFound from "@/views/error-page/404";

// 测试
import User from "@/views/test/User";
import Log from "@/views/test/Log";
import Res from "@/views/test/Res";

Vue.use(VueRouter);

/**
 *  Avoided redundant navigation to current location: "/"。先说一下是怎么触发这个报错的，就是博主用element ui写得侧边导航栏中用到了路由，然后重复点击这个路由就出现这个报错了
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    // 如果有默认的子路由，父级路由不能使用name
    // name: "main",
    component: () => import("@/views/Main"),
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("@/views/home-page/index"),
        meta: {
          needLogin: false
        }
      },
      {
        path: "/css",
        name: "csscluster",
        component: () => import("@/views/css-cluster/index"),
        meta: {
          needLogin: true
        }
      },
      {
        path: "/vue",
        name: "vuecom",
        component: () => import("@/views/vue-com/index")
      },
      {
        path: "/content",
        name: "content",
        component: () => import("@/views/content-page/index")
      },
      {
        path: "/source",
        name: "source",
        component: () => import("@/views/source-page/index")
      },
      {
        path: "/publish",
        name: "publish",
        component: () => import("@/views/publish-article/index")
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
      {
        path: "systemmanagement",
        name: "SystemManagement",
        component: () => import("@/views/system-management/index")
      },
      {
        path: "usermanagement",
        component: () => import("@/views/user-management/index"),
        name: "DynamicTable"
        // meta: { title: "Dynamic Table" }
      },
      {
        path: "logincopy",
        component: () => import("@/views/login-copy/index"),
        name: "loginCopy"
      },
      {
        path: "permission",
        // component: () => import("@/views/chatroom/index"),
        name: "permission"
      },
      {
        path: "chatroom",
        component: () => import("@/views/chatroom/index"),
        name: "chatroom"
      },
      {
        path: "drag-table",
        // component: () => import('@/views/table/drag-table'),
        name: "DragTable",
        meta: { title: "Drag Table" }
      },
      {
        path: "inline-edit-table",
        // component: () => import('@/views/table/inline-edit-table'),
        name: "InlineEditTable",
        meta: { title: "Inline Edit" }
      },
      {
        path: "complex-table",
        // component: () => import('@/views/table/complex-table'),
        name: "ComplexTable",
        meta: { title: "Complex Table" }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    // component: () => import('@/views/login/index'),
    component: Login
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
