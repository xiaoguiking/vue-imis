/**
 *  封装全局请求
 */
import axios from "axios";

// 创建axios实例
const service = axios.create({
  // 请求超时时间
  timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 任何请求都会经过的配置的信息对象
  config.headers = {
    Accept: "*/*"
  };
  console.log(config);
  // config.headers = {
  //   "Content-Type": "application/x-www-form-urlencoded"
  // };
  return config;
});
err => {
  console.log(err);
};
//  响应拦截器
service.interceptors.response.use(response => {
  let res = {};
  // 判断状态码
  // if (res.status) { }

  res.status = response.status;
  res.data = response.data;
  return res;
});

// export default service;

export default service;
