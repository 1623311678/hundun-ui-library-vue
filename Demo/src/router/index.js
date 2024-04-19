import Router from "vue-router";
import Home from "../page/Home";
import Login from "../page/Login";
import Demo from '../page/demo.vue'

const routes = [
  {
    path: "/",
    component: Home,
    name: "主页",
  },
  {
    path: "/demo",
    component: Demo,
    name: "demo",
  },
  {
    path: "/Login",
    component: Login,
    name: "登录页",
  },
];
export default new Router({
  // mode: 'history',
  routes,
});
