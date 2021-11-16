/**
 * mockjs
 * 请求拦截替换
 */

import Mock from "mockjs";
import homeApi from "./home.js";
import userApi from "./user";
// import permissionApi from "./permission";
// import articlesApi from "./articles";

// 设置200 -2000 延时

Mock.setup({
  timeout: "200-1000",
});

// 首页相关  拦截/home/getData
Mock.mock(/\/home\/getData/, "get", homeApi.getHomeData);
// // 用户相关
// // Mock.mock(/\/user\/getUser/, "get", permissionApi.getUserInfo);
// Mock.mock(/\/user\/getUser/, "get", permissionApi.getUserInfo);

Mock.mock(/\/user\/del/, "get", userApi.deleteUser);

Mock.mock(/\/user\/batchremove/, "get", userApi.batchremove);

// Mock.mock(/\/user\/add/, "post", userApi.createUser);

// Mock.mock(/\/user\/edit/, "post", userApi.updateUser);
// Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)

// 权限相关
// Mock.mock(/\/permission\/getMenu/, "post", permissionApi.getMenu);
// 用户相关
// Mock.mock(/\/user\/getUser/, "get", permissionApi.getUserInfo);
// Mock.mock(/\/permission\/profile/, "get", permissionApi.getUserInfo);

// 文章内容相关模块
// Mock.mock(/\/articles\/list/, "get", articlesApi.getArticles);
