import Vue from 'vue'
import App from './App'

import ryTitle from "./pages/index/ry-title.vue";
Vue.component("ryTitle", ryTitle);

// import mtUtils from "./common/mt-utils/index";
// Vue.prototype.$mt = new mtUtils();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
