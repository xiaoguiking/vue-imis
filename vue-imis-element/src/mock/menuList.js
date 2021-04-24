const sideMenu = [
  {
    title: "系统首页", // 菜单名称
    path: "/", // 对应path
    icon: "platform-eleme" // 对应图标
    // icon: "iconelectronics" // 对应图标
  },
  {
    title: "css集群", // 菜单名称
    path: "/css", // 对应path
    icon: "picture" // 对应图标
  },
  {
    title: "vue组件化", // 菜单名称
    path: "/vue", // 对应path
    icon: "warning" // 对应图标
  },

  {
    title: "测试路由", // 菜单名称
    path: "/test", // 对应path
    icon: "warning" // 对应图标
  },
  {
    title: "系统管理",
    path: "/systemmanagement",
    icon: "user"
  },
  {
    title: "用户管理",
    path: "/usermanagement",
    icon: "user-solid"
  },
  {
    title: "登录聊天室",
    path: "/logincopy",
    icon: "s-promotion"
  },
  {
    title: "聊天室",
    path: "/chatroom",
    icon: "s-comment"
  },
  {
    title: "pc浏览端",
    path: "/file",
    icon: "goods",
    children: [
      {
        title: "首页大图区",
        path: "/index/add/:id",
        icon: "platform-eleme"
      },
      {
        title: "首页排行榜",
        path: "/index/list"
      }
    ]
  },
  {
    title: "掐尖库",
    path: "/charts",
    icon: "video-camera",
    children: [
      // 子菜单列表
      {
        title: "视频审核",
        path: "/index/charts/line",
        icon: "line-chart"
      },
      {
        title: "短视频特辑",
        path: "/index/charts/pie",
        icon: "opportunity"
      },
      {
        title: "看点备注",
        path: "/index/charts/bar",
        icon: "data"
      }
    ]
  },
  {
    title: "帖子管理",
    path: "/post",
    icon: "s-opportunity",
    children: [
      // 子菜单列表
      {
        title: "广告系统",
        path: "/post/list",
        icon: "line-chart"
      },
      {
        title: "广告主资质审核",
        path: "/post/host",
        icon: "opportunity"
      },
      {
        title: "广告物料审核",
        path: "/post/wuliao",
        icon: "data"
      }
    ]
  },
  {
    title: "广告管理",
    path: "/admagment",
    icon: "s-order",
    children: [
      // 子菜单列表
      {
        title: "广告系统",
        path: "/admagment/list",
        icon: "line-chart"
      },
      {
        title: "广告主资质审核",
        path: "/admagment/host",
        icon: "opportunity"
      },
      {
        title: "广告物料审核",
        path: "/admagment/wuliao",
        icon: "data"
      }
    ]
  }
];

// console.log(menuList1);
export { sideMenu };
