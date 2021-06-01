import Cookie from "js-cookie";

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
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
      console.log();
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      let menu = JSON.parse(Cookie.get("menu"));
      if (!menu) {
        return;
      }
      state.menu = menu;
      let currentMenu = [
        {
          path: "/",
          component: () => import(`@/views/Main`),
          children: []
        }
      ];
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          currentMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}`);
        }
      });
      console.log(currentMenu, "currentMenu");
      router.addRoutes(currentMenu);
      console.log(menu);
    },
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
