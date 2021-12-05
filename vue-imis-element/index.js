const sideMenu = [
  {
    title: "系统首页", //  菜单名称
    path: "/", //  对应path
    icon: "platform-eleme", //  对应图标
    // icon: "iconelectronics" //  对应图标
  },
  {
    title: "vue组件化",
    path: "/vue",
    icon: "warning",
  },
  {
    title: "css-flex",
    path: "/css",
    icon: "picture",
  },
];

const list = sideMenu.map(({ path, title } = item) => {
  return {
    path,
    title,
  };
});

console.log(list);
