import Vue from "vue";
import App from "./App.vue";
import router from "./myRouter";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as filters from './filter'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Object.keys(filters).forEach(k => Vue.filter(k, (filters as any)[k]))
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
