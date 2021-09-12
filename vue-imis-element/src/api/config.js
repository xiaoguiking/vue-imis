/**
 *  封装全局请求
 */
import axios from "axios";
import router from "@/router";

import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  // 请求超时时间
  timeout: 5000
});

// const data = JSON.parse(window.localStorage.getItem("user"));
// console.log(data.token);

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 任何请求都会经过的配置的信息对象
  config.headers = {
    Accept: "*/*"
    // "Authorization": "Bearer " + data.token
  };
  // config.headers.common['token'] = data.token;
  return config;
});
err => {
  console.log(err);
};

//  响应拦截器
service.interceptors.response.use(
  response => {
    // 所有状态码为2xx的进入
    let res = {};
    // 判断状态码
    // if (res.status) { }

    res.status = response.status;
    res.data = response.data;
    return res;
  },
  // 超出2xx的状态码进入这里
  err => {
    console.log("状态异常");
    const { status } = err.response;
    if (err.response && status === 401) {
      // 跳转到登录页
      router.push("/login");
      Message("登录状态无效，请重新登录");
    } else if (status === 403) {
      // 没有操作权限 token 未携带
      Message("没有操作权限");
    } else if (status === 400) {
      Message("请求参数错误，请检查");
    } else if (status >= 500) {
      // 服务器错误
      Message("");
    }

    return Promise.reject(err);
  }
);

// export default service;

export default service;
