[TOC]
# vue-imis-element 后台管理系统

# node-chatroom 服务端聊天室

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

/**
 *  Eslint 代码校验文件配置
 */
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