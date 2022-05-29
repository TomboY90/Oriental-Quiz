import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/start",
  },
  {
    path: "/start",
    name: "start",
    component: () => import("@/views/Start.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    component: () => import("@/views/Quiz.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () => import("@/views/Result.vue"),
    props: true,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
