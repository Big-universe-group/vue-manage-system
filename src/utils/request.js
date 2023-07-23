import axios from "axios";

// 创建一个 Axios 实例，可以在这里配置默认的请求头、请求拦截器、响应拦截器等
const service = axios.create({
  // baseURL: "http://127.0.0.1:8090", // 设置基础URL，根据实际情况进行更改
  timeout: 5000, // 设置请求超时时间，单位为毫秒
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config; // 在发送请求之前做些什么，例如添加认证信息、设置请求头等
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data; // 对响应数据做些什么，例如处理错误状态码、数据转换等
    } else {
      Promise.reject();
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  },
);

export default service;
