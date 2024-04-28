// index.js
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import { Button,Select,Container,Header,Menu,MenuItem,MenuItemGroup,Submenu } from "element-ui";
import { HDButton } from 'hundun-ui-library'
import './theme.scss'
import 'normalize.css/normalize.css'
Vue.use(Button);
Vue.component('h-d-button', HDButton); // 全局注册 HDButton 组件
Vue.use(Select);
Vue.use(Container);
Vue.use(Header);
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(VueRouter);

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
