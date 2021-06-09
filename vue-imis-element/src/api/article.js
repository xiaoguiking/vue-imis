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
export const getArticlesList = params => {
  return request({
    method: "GET",
    url: "/api/articles/list",
    params
  });
};

// 增加文章
export const addArticleList = () => {};

// 删除文章

export const deleteArticleList = () => {};
