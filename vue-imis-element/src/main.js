import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

import "./icons"; // icon  ------ svgicon
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import "@/styles/index.less"; // global css
import "element-ui/lib/theme-chalk/index.css";

// 全局挂载请求函数
// import axios from "axios";
import "./mock/index.js";

// 时间格式化
import dayjs from "dayjs";
Vue.prototype.dayjs = dayjs; //可以全局使用dayjs

Vue.use(ElementUI);
Vue.config.productionTip = false;

// import http from "@/api/config";
// Vue.prototype.$axios = http;

// 修改 title
router.beforeEach((to, from, next) => {
  // let hasLogin = false
  /* 路由发生变化修改页面title */
  store.commit("getToken");
  let token = store.state.user.token;
  let flag = window.localStorage.getItem("username");

  if (flag || token) {
    if (to.path === "/login") {
      console.log("登录");
      // 登录状态下，访问login.vue,会跳转到index.vue
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    // 如果没有local,访问如何页面都会跳转到index.vue
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }

  if (to.name) {
    document.title = to.name + "-Vue-imis-element";
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit("addMenu", router);
  }
}).$mount("#app");
