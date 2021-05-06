export default {
  state: {
    menu: [],
    currentMenu: null
  },
  mutations: {
    selectMenu(state, val) {
      val.path === "/" ? (state.currentMenu = null) : (state.currentMenu = val);
    }
  },
  actions: {},
  modules: {}
};
