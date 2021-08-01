/**
 *  封装全局请求
 */
import axios from "axios";

// 创建axios实例
const service = axios.create({
  // 请求超时时间
  timeout: 5000
});

const data = JSON.parse(window.localStorage.getItem("user"));
console.log(data.token)

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 任何请求都会经过的配置的信息对象
  config.headers = {
    Accept: "*/*",
    // "Authorization": "Bearer " + data.token
  };
  // config.headers.common['token'] = data.token;
  console.log(config.headers)
  console.log(config);
  return config;
});
err => {
  console.log(err);
};

//  响应拦截器
service.interceptors.response.use(response => {

  /**
    * code:200,接口正常返回;
    */
  let res = {};
  // 判断状态码
  // if (res.status) { }

  res.status = response.status;
  res.data = response.data;
  console.log(res, "res")
  return res;
});

// export default service;

export default service;
