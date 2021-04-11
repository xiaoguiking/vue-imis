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
});

// export default service;

export default service;
