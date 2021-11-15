/**
 * 用户请求模块
 */
import request from '@/api/config'

// 用户登录
export const login = (params) => {
  return request({
    method: 'get',
    // url: "/api/permission/getMenu",
    url: '/api/users/login',
    params
  })
}

// 获取用户信息
export const getUserInfo = () => {
  //  const data = JSON.parse(window.localStorage.getItem("user"));
  // console.log(data.token, "===========>token");
  // request.defaults.headers.common['Authorization'] = "Bearer " + data.token

  return request({
    method: 'get',
    // url: "/api/permission/profile",
    url: '/api/getUser'
    // 后端要求把需要授权用户的身份放到请求头
    // axios可以通过headers放到请求头
    // 属性值 Bereara token
  })
}

// 更改用户信息
export const updateUserInfo = () => {}

// 获取所有用户信息
export const getUsers = () => {
  return request({
    method: 'get',
    url: '/api/getUsers'
  })
}

// 写库
export const insertUsers = () => {
  return request({
    method: 'get',
    url: '/api/insertUsers'
  })
}
