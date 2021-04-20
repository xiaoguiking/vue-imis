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
    return request({
        method: "GET",
        url: "",
    })
};

// 更改用户信息
export const updateUserInfo = () => {
    return;
};
