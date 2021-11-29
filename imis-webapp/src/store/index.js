import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'store'

Vue.use(Vuex)

const user = Storage.get('userInfo')
console.log(user, 'user')
export default new Vuex.Store({
  state: {
    userInfo: Storage.get('userInfo') || {}
  },
  mutations: {
    saveUserInfo(state, data) {
      state.userInfo = data
      // 防止刷新数据丢失，本地化存储
      Storage.set('userInfo', data)
    },
    removeUserInfo(state) {
      console.log(state, 'state')
      Storage.remove('userInfo')
    }
  },
  getters: {
    getStore(state) {
      return state
    }
  },
  actions: {},
  modules: {}
})
