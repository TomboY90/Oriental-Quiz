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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
