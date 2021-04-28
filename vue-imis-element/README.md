# vue-imis-element

## project init

- yarn add axios
- yarn add element-ui

### 主页布局

### 杂项记录

- 修改端口号

```
根目录创建 touch vue.config.js

写入
module.exports = {
 devServer: {
   port: 8096,
 },
};

```

- 封装 axios
  https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js

### vue 技巧

```
<component msg="字符串"></component>  ---------->  对应字符串
<component :msg="value"></component> -----------> 指向变量

```

## 权限管理思路

- 什么是权限管理
  - 根据不同的用户，返回不同的菜单
  - 严格控制用户权限
  - 实现思路
    - 动态路由
    - 后端返回的数据格式要求
    - 触发时机
      - 登录成功触发判断权限
    - 实现思路

## 组件通信

- 父子通信

- 兄弟通信 eventbus

- attrs/ \$listeners

  ```
  $attr将父组件中不包含props的属性传入子组件，
  $listener 监听子组件中数据变化，传递给父组件
  ```

## vue -router

```
name ---------> params
path ---------> query
```
