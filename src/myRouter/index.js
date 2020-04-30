import Vue from "vue";
import VueRouter from "./router";
import HomePage from "../pages/HomePage.vue";
import Play from "../pages/Play.vue";
import List from "../pages/List.vue";
import Login from "../pages/Login.vue";
import LGD from "../pages/Lgd.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "HomePage",
   
 
    children: [{
      path: "lgd",
      name: "LGD",
      component: LGD
    }]
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
