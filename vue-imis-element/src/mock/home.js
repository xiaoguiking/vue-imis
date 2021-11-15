export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            title: '项目地址',
            content: 'vue-imis-element',
            link: 'https://github.com/xiaoguiking/vue-imis'
          },
          {
            title: 'element-ui',
            content: '快速使用文档',
            link: 'https://element.eleme.cn/#/zh-CN/component/installation'
          },
          {
            title: 'vue3',
            content: '学习文档',
            link: 'https://v3.cn.vuejs.org/'
          }
        ]
      }
    }
  }
}
