/**
 *  文字请求相关模块
 */

/**
 *  传参方式总结
 *
 * 1.Body 参数使用data 设置
 * 2.Query 参数使用params 设置
 * 3.Headers 参数使用headers设置
 *
 *
 */
import request from "@/api/config";

// 获取文章列表
export const getArticlesList = data => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    // url: "/api/articles/list",
    url: "/api/book/getInfoByPage",
    data
  });
};

// 增加文章 发布文章
export const addArticleList = (data) => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    url: "api/book/add",
    data
  });
};

// 删除文章
export const deleteArticleList = data => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post",
    url: "api/book/delete",
    data
  });
};

// 获取文章频道
export const getChannels = () => {
  return request({
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // },
    method: "get",
    // url: "/api/articles/list",
    url: "/api/book/getChannels"
  });
};
