# imis-webapp

# 分支 webapp-imis

## 功能介绍

- 基于 token 验证用户的登录
- 移动端验证方案交互提示
- 短信码发送验证
- 用户中心资料展示
- 对文章内容收藏点赞分享
- 编辑用户资料， 信息修改以及头像裁剪上传
- 列表类页面加载缓存以及优化
- 列表类页面上拉加载，下拉加载更多
- 资讯类文章详情展示和文章评论
- 搜索： 输入联想建议，搜索关键词高亮， 搜索历史记录 搜索结果列表
- 即时通信 websocket

### 项目初始化

- 移动端适配问题javascript
  ```
  rem + amfe-flexible + postcss-pxtorem  
   rem:
  amfe-flexible: yarn add amfe-flexible
  postcss-pxtorem: px--------> rem yarn add postcss-pxtorem@5.1.1
  根目录建立文件： imis-app/postcss.config.js
  module.exports = {
  plugins: {
  autoprefixer: {
  browsers: ['Android >= 4.0', 'iOS >= 8']
  },

      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      }

  }
  }

      ```




- 字体图标 icon-font
  ```
  
  ```