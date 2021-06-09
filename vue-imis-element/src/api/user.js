/**
 * 用户请求模块
 */
import request from "@/api/config";

// 用户登录
export const login = data => {
  return request({
    method: "POST",
    url: "/api/permission/getMenu",
    // data 用来设置post请求体
    data
  });
};

// 获取用户信息
export const getUserInfo = () => {
  const {
    data: { token }
  } = JSON.parse(window.localStorage.getItem("user"));

  console.log(token, "===========>token");
  return request({
    method: "GET",
    url: "/api/permission/profile",
    // 后端要求把需要授权用户的身份放到请求头
    // axios可以通过headers放到请求头
    // 属性值 Bereara token
    headers: {
      Authorization: "Bereara" + token
    }
  });
};

// 更改用户信息
export const updateUserInfo = () => {
  return;
};
