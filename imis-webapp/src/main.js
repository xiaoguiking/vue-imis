import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 全局样式

import 'normalize.css'
// 引入vant
// vant: https://vant-contrib.gitee.io/vant/#/zh-CN/button
import Vant from 'vant'
import 'vant/lib/index.css'
// 适配webapp 设置rem基准值
import 'amfe-flexible'
// import
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
