// import request from '../utils/request'
import request from './config'

// 用户登录获取token
export const login = (data) => {
  return request({
    method: 'post',
    url: '/api/web/user/login',
    data
  })
}
