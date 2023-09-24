import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./plugins/element.js";
import "@/assets/style/reset.css"; // 重置浏览器默认样式

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
