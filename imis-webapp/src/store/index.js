import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: Storage.get('userInfo') || {}
  },
  mutations: {
    saveUserInfo(state, data) {
      state.userInfo = data
      // 防止刷新数据丢失，本地化存储
      Storage.set('userInfo', data)
    }
  },
  actions: {},
  modules: {}
})
