/**
 * 1.ip定位
 */

// https://lbs.amap.com/api/webservice/guide/api/ipconfig 高德

// 2.0 -----   https://restapi.amap.com/v5/ip

import request from "@/api/config";

// 获取ip
export const getIpInfo = params => {
  return request({
    method: "get",
    url: "https://restapi.amap.com/v3/ip",
    params
  });
};

// 获取天气
export const getWeather = params => {
  return request({
    method: "get",
    url: "https://restapi.amap.com/v3/weather/weatherInfo",
    params
  });
};
