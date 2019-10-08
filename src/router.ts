import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Play from "./pages/Play.vue";
import List from "./pages/List.vue";
import Login from "./pages/Login.vue";
import LGD from "./pages/Lgd.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/play",
      name: "Play",
      component: Play
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/lgd",
      name: "LGD",
      component: LGD
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
