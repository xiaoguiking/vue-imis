const sideMenu = [
  {
    title: '系统首页', //  菜单名称
    path: '/', //  对应path
    icon: 'platform-eleme' //  对应图标
  },
  {
    title: '菜单管理',
    path: '/admin/menu',
    icon: 'platform-eleme'
  },
  {
    title: '消息中心',
    path: '/admin/message_page',
    icon: 'platform-eleme'
  },
  {
    title: '渐变数字',
    path: '/admin/count_to_page',
    icon: 'present'
  },
  {
    title: '内容管理',
    path: '/content',
    icon: 'picture-outline-round'
  },
  {
    title: '素材管理',
    path: '/source',
    icon: 's-shop'
  },
  {
    title: '发布文章',
    path: '/publish',
    icon: 's-flag'
  },
  {
    title: '评论管理',
    path: '/comment',
    icon: 's-comment'
  },
  {
    title: '粉丝管理',
    path: '/fans',
    icon: 'present'
  },
  {
    title: '个人设置',
    path: '/person',
    icon: 'guide'
  },
  {
    title: 'vue组件化',
    path: '/vue',
    icon: 'warning'
  },
  {
    title: 'css集群',
    path: '/css',
    icon: 'picture'
  },
  {
    title: '测试路由',
    path: '/test',
    icon: 'warning'
  },
  {
    title: '系统管理',
    path: '/systemmanagement',
    icon: 'user'
  },
  {
    title: '用户管理',
    path: '/usermanagement',
    icon: 'user-solid'
  },
  {
    title: '登录聊天室',
    path: '/logincopy',
    icon: 's-promotion'
  },
  {
    title: '聊天室',
    path: '/chatroom',
    icon: 's-comment'
  },
  // {
  //   title: 'pc浏览端',
  //   path: '/file',
  //   icon: 'goods',
  //   children: [
  //     {
  //       title: '首页大图区',
  //       path: '/index/add/:id',
  //       icon: 'platform-eleme'
  //     },
  //     {
  //       title: '首页排行榜',
  //       path: '/index/list'
  //     }
  //   ]
  // },
  // {
  //   title: '掐尖库',
  //   path: '/charts',
  //   icon: 'video-camera',
  //   children: [
  //     // 子菜单列表
  //     {
  //       title: '视频审核',
  //       path: '/index/charts/line',
  //       icon: 'line-chart'
  //     },
  //     {
  //       title: '短视频特辑',
  //       path: '/index/charts/pie',
  //       icon: 'opportunity'
  //     },
  //     {
  //       title: '看点备注',
  //       path: '/index/charts/bar',
  //       icon: 'data'
  //     }
  //   ]
  // },
  // {
  //   title: '帖子管理',
  //   path: '/post',
  //   icon: 's-opportunity',
  //   children: [
  //     // 子菜单列表
  //     {
  //       title: '广告系统',
  //       path: '/post/list',
  //       icon: 'line-chart'
  //     },
  //     {
  //       title: '广告主资质审核',
  //       path: '/post/host',
  //       icon: 'opportunity'
  //     },
  //     {
  //       title: '广告物料审核',
  //       path: '/post/wuliao',
  //       icon: 'data'
  //     }
  //   ]
  // },
  // {
  //   title: '广告管理',
  //   path: '/admagment',
  //   icon: 's-order',
  //   children: [
  //     // 子菜单列表
  //     {
  //       title: '广告系统',
  //       path: '/admagment/list',
  //       icon: 'line-chart'
  //     },
  //     {
  //       title: '广告主资质审核',
  //       path: '/admagment/host',
  //       icon: 'opportunity'
  //     },
  //     {
  //       title: '广告物料审核',
  //       path: '/admagment/wuliao',
  //       icon: 'data'
  //     }
  //   ]
  // },
  {
    title: '错误处理',
    path: '/file',
    icon: 'goods',
    children: [
      {
        title: '权限测试',
        path: '/index/add/:id',
        icon: 'platform-eleme'
      },
      {
        title: '404页面',
        path: '/index/list'
      }
    ]
  }
]

export { sideMenu }
