# vue-imis-element

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

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
- 封装axios
  https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js