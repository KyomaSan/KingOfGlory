"use strict";
import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? ""
    : "http://funadmin.zbxjiajiao.com/";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//处理是 开发环境(路径)还是上线环境(路径 )
let config = {
  // baseURL: process.env.NODE_ENV === "development" ? "本地测试的域名端口" : "甲方的官网域名端口",
  // 注意：baseURL建议等到上线的时候再配置，开发环境直接注释掉
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
