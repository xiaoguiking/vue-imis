# vue-imis-element

[TOC]

## project init

- yarn add axios
- yarn add element-ui

## 项目 bug 点

### 1.sidebar 导航使用

```
element Ui 原有组件中写入router-link 跳转，导致张开缩小时候存在问题

删除router-link
```

### 2.`Error: Redirected when going from “/login” to “/home” via a navigation guard.`

```

```

### 3. `Avoided redundant navigation to current location: "/"。先说一下是怎么触发这个报错的，就是博主用element ui写得侧边导航栏中用到了路由，然后重复点击这个路由就出现这个报错了`

```
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

```

### 创建页面和编辑页面用同一个 component，如何触发重新渲染？

```html
{path: 'create', component: PostCreate, name: '发表文章'} {path: 'edit/:id(\\d+)', component:
PostEdit, name: '编辑文章'} 默认情况下两个页面的切换不会触发vue created 和mounted 钩子，官方方法：
watch $route 监听路由实现 简单解决： <router-view :key="key"></router-view>
```

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

## 使用 vuex 实现切换 tab 功能

- 1.在 Main.vue 中引入 Commontab.vue 组件
- 2.在 vuex 定义存取标签的 tagList, 方便非父子间的数据传递
- 3.定义 vuex 中点击菜单加入到 taglist 中
- 4.vuex 点击标签删除对应的菜单标签

## 权限管理之路由守卫判断用户登录状态

- permission.js 返回 token
- 登录时保存 token
  - 保存在 vuex 里面
  - 保存在 cookie 里面
- 路由守卫判断 token 是否存在，判断用户页面跳转

```
router.beforeEach((to, from, next) => {
  <!-- 从cookie里面获取token，防止刷新后token丢失 -->
  store.commit("getToken")
  let token = store.state.user.token;
  if(!token || to.name !== "login") {
    next({name: login})
  } else {
    next()
  }
})
```

## dev 项目第一步

- eslint 
