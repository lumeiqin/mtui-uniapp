import Vue from 'vue'
import App from './App'


import ryTitle from "./pages/index/ry-title.vue";
Vue.component("ryTitle", ryTitle);


import Utils from "common/mt-utils/index";
Vue.prototype.$mt = new Utils();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
