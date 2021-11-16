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
export const getArticlesList = (data) => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "post",
    // url: "/api/articles/list",
    url: "/api/book/getInfoByPage",
    data,
  });
};

// 删除文章
export const deleteArticleList = (data) => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "post",
    url: "api/book/delete",
    data,
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
    url: "/api/book/getChannels",
  });
};

// 获取指定文章内容
export const getArticleById = (bookId) => {
  return request({
    method: "get",
    url: `/api/book/${bookId}`,
  });
};

// 增加文章 发布文章 (存取草稿)
export const addArticleList = (data, draft = false) => {
  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "post",
    url: "api/book/add",
    params: {
      draft, // 是否为草稿 draft =true 存为草稿
    },
    data,
  });
};
// 编辑文章
export const updateArticle = (bookId, data, draft = false) => {
  return request({
    method: "put",
    url: `/api/book/${bookId}`,
    params: {
      draft,
    },
    data,
  });
};
