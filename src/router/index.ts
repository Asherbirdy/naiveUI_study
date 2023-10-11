
import { createRouter, createWebHistory, START_LOCATION } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("/src/views/dashboard.vue"),

  },

];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
