export default {
  state: {
    menu: [],
    currentMenu: null,
    tabsList: [
      {
        title: "系统首页", // 菜单名称
        path: "/", // 对应path
        icon: "platform-eleme" // 对应图标
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      // val.path === "/" ? (state.currentMenu = null) : (state.currentMenu = val);
      if (val.path !== "/") {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.title === val.title);
        result === -1 ? state.tabsList.push(val) : "";
      } else {
        state.currentMenu = null;
      }
    },

    // 关闭标签tags
    closeTags(state, val) {
      let result = state.tabsList.findIndex(item => item.title === val.title);
      console.log(result, "=========>");
      state.tabsList.splice(result, 1);
    }
  },
  actions: {},
  modules: {}
};
