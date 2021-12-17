import Cookie from 'js-cookie'

export default {
  state: {
    token: '',
    // 未读信息个数
    unreadCount: 0,
    // 未读信息列表
    messageUnreadList: [],
    // 已读信息
    messageReadedList: [],
    // 回收站列表
    messageTrashList: [],
    messageContentStore: {}
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state) {
      state.token = Cookie.get('token')
    }
  },
  actions: {
    // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
    getUnreadMessageCount({ state, commit }) {
      console.log(state, commit)
    },
    // 获取消息列表，其中包含未读、已读、回收站三个列表
    getMessageList({ state, commit }) {
      console.log(state, commit)
    },
    // 根据当前点击的消息的id获取内容
    getContentByMsgId({ state, commit }) {
      console.log(state, commit)
    },
    // 把一个未读消息标记为已读
    hasRead({ state, commit }) {
      console.log(state, commit)
    },
    // 删除一个已读消息到回收站
    removeReaded({ state, commit }) {
      console.log(state, commit)
    },
    // 还原一个已删除消息到已读消息
    restoreTrash({ state, commit }) {
      console.log(state, commit)
    }
  },
  modules: {}
}
