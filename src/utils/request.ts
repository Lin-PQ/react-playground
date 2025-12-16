import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";

// 1. 创建 axios 实例
const service = axios.create({
  // 这里的环境变量需要在 .env 文件里配置
  // 开发环境可能是 '/api' (走代理) 或者 'http://localhost:3000'
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 10000,
});

// 2. 请求拦截器 (Request Interceptor)
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 假装从 localStorage 获取 token
    const token = localStorage.getItem("token");
    if (token) {
      // 以后你写 Nest.js 的 Guard 时，就需要这个 Authorization 头
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 3. 响应拦截器 (Response Interceptor)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 这里通常会根据后端返回的状态码做判断
    // 假设 Nest.js 返回格式: { code: 200, data: ..., msg: 'success' }
    const res = response.data;

    // 如果是二进制数据（比如下载文件），直接返回
    if (response.config.responseType === "blob") {
      return res;
    }

    // 这里的 code 逻辑根据你自己的 Nest.js 约定来
    // 如果没有 code 字段，说明可能是直接返回的数据
    return res;
  },
  error => {
    // 统一处理 HTTP 错误状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        message.error("未登录或登录过期");
        // 这里可以跳转到登录页
        break;
      case 403:
        message.error("没有权限");
        break;
      case 500:
        message.error("服务器错误");
        break;
      default:
        message.error(error.message || "请求失败");
    }
    return Promise.reject(error);
  }
);

export default service;
