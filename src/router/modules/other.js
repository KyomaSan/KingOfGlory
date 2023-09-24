export default {
  path: "/other",
  name: "other",
  component: () => import("@/views/other/otherIndex.vue"),
  children: [
    // other模块的子路由1
    {
      path: "childA",
      name: "childA",
      component: () => import("@/views/other/childA/childAIndex.vue"),
    },
    // other模块的子路由1
    {
      path: "childB",
      name: "childB",
      component: () => import("@/views/other/childB/childBIndex.vue"),
    },
  ],
};
