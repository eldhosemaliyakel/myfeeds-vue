// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import LoginLayout from "./components/layouts/Login";
// import UserLayout from "./components/layouts/User";
const UserLayout = () => import("./components/layouts/User");
const Users = () => import("./components/pages/Users");
const UserDetails = () => import("./components/pages/UserDetails");

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginLayout },
    {
      path: "/user",
      component: UserLayout,
      children: [
          { path: "users", component: Users },
          { path: "users/:userId", component: UserDetails },
        ],
    },
  ],
});

export default router;
