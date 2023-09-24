module.exports = {
  lintOnSave: false,
  devServer: {
    /* open: true,
    port,
    public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':'+ port // 设置访问ip端
 */
    public: "192.168.1.104:8080",
    hot: true,
    disableHostCheck: true,
    proxy: {
      "/gameApi1": {
        target: "https://ssl.kohsocialapp.qq.com:10001", // 这里就是你的请求接口地址
        changeOrigin: true,
        pathRewrite: {
          "^/gameApi1": "",
        },
        headers: {},
      },
      "/gameApi2": {
        target: "https://w.gamecenter.qq.com", // 这里就是你的请求接口地址
        changeOrigin: true,
        pathRewrite: {
          "^/gameApi2": "",
        },
        headers: {
          Host: "w.gamecenter.qq.com",
          "content-length": "386",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 10; PCT-AL10 Build/HUAWEIPCT-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.102 MQQBrowser/6.2 TBS/046503 Mobile Safari/537.36 V1_AND_SQ_8.9.33_3772_YYB_D QQ/8.9.33.10335 NetType/WIFI WebP/0.3.0 AppId/537151702 Pixel/1080 StatusBarHeight/102 SimpleUISwitch/1 QQTheme/2971 StudyMode/0 CurrentMode/1 CurrentFontScale/1.0 GlobalDensityScale/0.90000004 AllowLandscape/false InMagicWin/0",
          accept: "*/*",
          origin: "https://speed.gamecenter.qq.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://speed.gamecenter.qq.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language":
            "zh-CN,zh;q=0.9,en-CN;q=0.8,en-MM;q=0.7,en-US;q=0.6,en;q=0.5",
          cookie:
            "p_uin=o1464824393,uin=o1464824393,skey=MYJuRjvUyE,p_skey=ri-pF7wovGO4JKsrQX50dVFpeTdE2EXs-DQfpmm8hKc_,pt4_token=SAKJReR50yONAbGTive2hB5Le0sLf4vwi5F3Ro6ZWFk_",
        },
        https: true,
      },
      "/gameApi3": {
        target: "https://w.gamecenter.qq.com", // 这里就是你的请求接口地址
        changeOrigin: true,
        pathRewrite: {
          "^/gameApi3": "",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Host: "w.gamecenter.qq.com",
          cookie:
            "p_uin=o1464824393;p_skey=w7z7qbbDLFYWj1NUHe855G1GEREilnpBx6Tk1Aegvg8_;uin=o1464824393;skey=MWtfA2p6KL;o_cookie=1464824393",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 10; VOG-AL10 Build/HUAWEIVOG-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045114 Mobile Safari/537.36 V1_AND_SQ_8.3.6_1320_YYB_D gamecenter QQ/8.9.33 NetType/WIFI WebP/0.3.0 Pixel/1080 StatusBarHeight/75 SimpleUISwitch/0",
          "content-type": "application/x-www-form-urlencoded",
          "accept-encoding": "gzip",
          "content-length": "236",
        },
        https: true,
      },
    },
  },
};
