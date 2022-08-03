import { createRouter, createWebHistory } from "vue-router";
import DefaultAbout from "../views/DefaultAbout";
import DefaultHome from "@/views/DefaultHome";

const routes = [
  {
    path: "/about",
    name: "About",
    component: DefaultAbout,
  },
  {
    path: "/",
    name: "Home",
    component: DefaultHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
