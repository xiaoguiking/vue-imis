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

Vue.use(ElementUI);
Vue.config.productionTip = false;

// import http from "@/api/config";
// Vue.prototype.$axios = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
