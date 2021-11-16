/**
 *  首页todo 采用数据请求方式
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

// 获取全部数据
export const getTodoList = () => {
  return request({
    method: "get",
    url: "api/todos",
  });
};

// 通过id查询数据
export const getTodoId = () => {
  return request({
    method: "get",
    url: "api/todos/:id",
  });
};

// 添加任务
export const addTodoList = (data) => {
  return request({
    method: "post",
    url: "api/todos/add",
    data,
  });
};

// 修改任务
export const patchTodoList = () => {
  return request({
    method: "patch",
    url: "api/todos/:id",
  });
};

// 删除
export const deleteTodoList = (params) => {
  return request({
    method: "delete",
    url: `api/todos/${params}`,
  });
};
