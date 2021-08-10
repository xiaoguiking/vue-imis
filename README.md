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



# JavaScript 异步编程

## 1.callback 回调函数
```javascript
需要在一个异步操作里面再执行一个异步操作
axios({
  method: "get",
  url: "请求1"
}).then((res) => {
    axios({
      method: "get",
      url: "请求2"
    }).then(res => {
    })
})
```
## 2. Promise 函数
封装Promise函数
```JavaScript
1.创建一个函数
function getData () {
2.直接返回一个new新的Promise对象
return new Promise((resolve, reject) => {
  getList().toBloc(file => {
    resolve(file)
  })
})
}

```

## 3.Generator 函数

```
Generator 函数的执行必须靠执行器，所以需要co模块
```
## 4.Async 函数

- 1.案例
  ```javascript
  async function getData() {
    const {data} = await axios({
      method: "get",
      url: "请求1"
      })
  }
  ```
- 2.使用await关键字必须把所属的函数标记为asnyc，包裹await的层级为async函数， await必须有async的条件下才能使用
  ```JavaScript
  const data = await fetch(url)  ------- 报错 (语法提案独立出来的await)
  ```


- 3.封装支持Promise的定时器
```javascript
 function sleep(time) {
   return new Promise((resolve, reject) =>{
     setTimeout(() => {
        console.log("时间到了")
        resolve("时间到了")
     }, time)
   })
 }
```


```javascript
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);
```

- 4.async 函数的返回值

```javascript
async函数始终返回一个Promise对象
如果返回值不是Promise对象，则包装为Promise对象
如果是，则不作任何处理

```

```javascript
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
```


- 5.async 如何捕获错误( try catch)
```javascript
async function demo () {
  try {
    const data = fetch (url)

  } catch (e) {
    console.log(e)
  }
}


// 第二种方式
async function demo () {
  await getDatList()
  .catch(err => {
    console.log(err)
  })
}
```
