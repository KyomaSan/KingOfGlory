module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      //配置代理跨域
      "/gameApi1": {
        target: "https://w.gamecenter.qq.com", // 这里就是你的请求接口地址
        changeOrigin: true,
        pathRewrite: {
          "^/gameApi1": "",
        },
        headers: {
          //重点在这里，添加配置项 headers 就可以了
          // Host: "ssl.kohsocialapp.qq.com:10001",
          // "content-length": "804",
          // "accept-encoding": "gzip",
          // "user-agent": "okhttp/4.9.1",
        },
        https: true,
      },
    },
  },
};
