import { createRouter, createWebHistory } from "vue-router";
import DefaultAbout from "../views/DefaultAbout";

const routes = [
  {
    path: "/about",
    name: "About",
    component: DefaultAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
