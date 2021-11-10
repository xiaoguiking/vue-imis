[TOC]

# vue-imis-element 后台管理系统
# node-chatroom 服务端聊天室
# imis-webapp  webapp 移动端

## Git 贡献提交规范

参考 vue 规范 (Angular)

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中

## vue-imis-element 规范备忘录

```
 - 文件里面 name 统一形式为： CssCluster， Login

 - views  命名： 单文件夹 login   复杂文件夹： css-cluster

 - components 组件文件夹命名： CommonHeader
```

## 服务端 node + express + mongoose + mongodb

## 2021-7-14 main merge dev

/\*\*

- Eslint 代码校验文件配置
  \*/
  .eslintrc.js
  module.exports = {
  root: true,
  env: {
  node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  // 自定义代码校验规范
  rules: {

      }

  }
  图片裁切
  https://www.cnblogs.com/linxiyue/archive/2019/01/18/10288490.html

# linux 操作

服务器文件下载： wget https://www.baidu.com.xz

压缩文件(gz) 解压 tar -xzvf name.gz





# imis-webapp

##  功能介绍

- 基于token验证用户的登录
- 移动端验证方案交互提示
- 短信码发送验证
- 用户中心资料展示
- 对文章内容收藏点赞分享
- 编辑用户资料， 信息修改以及头像裁剪上传
- 列表类页面加载缓存以及优化
- 列表类页面上拉加载，下拉加载更多
- 资讯类文章详情展示和文章评论
- 搜索： 输入联想建议，搜索关键词高亮， 搜索历史记录  搜索结果列表
- 即时通信 websocket 


### 项目初始化
