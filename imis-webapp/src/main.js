import Vant from 'vant'
import Vue from 'vue'
import Vconsole from 'vconsole'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
// 引入vant
// vant: https://vant-contrib.gitee.io/vant/#/zh-CN/button
import 'vant/lib/index.css'
// 适配webapp 设置rem基准值
import 'amfe-flexible'

import './styles/index.less'
// import
Vue.use(Vant) // 全局样式
const vConsole = new Vconsole()
Vue.use(vConsole)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
