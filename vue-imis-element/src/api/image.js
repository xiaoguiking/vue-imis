/**
 *  素材请求相关模块
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
export const getImages = params => {
  return request({
    method: "get",
    url: "api/image/getImages",
    params
  });
};

// 收藏图片
export const collectImage = params => {
  return request({
    method: "get",
    url: "api/image/collectImage",
    params
  });
};

// 删除图片
export const deleteImage = imageId => {
  return request({
    method: "delete",
    url: `api/image/${imageId}`,
  });
};
