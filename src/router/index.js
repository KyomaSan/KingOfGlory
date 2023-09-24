import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import otherRoute from "./modules/other"; // 其他模块的路由
const routes = [
  otherRoute,
  // 首页
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index/index.vue"),
  },
  //测试页面
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/index/demo.vue"),
  },
  //重定向默认首页
  {
    //重定向默认首页
    name: "/",
    path: "/",
    redirect: "/index",
  },
  //关于页面
  {
    //关于页面
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  //无效页面
  {
    //无效页面
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  //定义无效页面跳转404
  {
    //定义无效页面跳转
    path: "/:path(.*)+",
    name: ":path(.*)+",
    redirect: "404",
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
