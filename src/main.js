import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';



let echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/line');

require('echarts/lib/component/title');

//vue全局注入echarts
Vue.prototype.$echarts = echarts;

if ( process.env.NODE_ENV === 'development' ) {
  axios.defaults.baseURL="http://localhost:8888";
} else {
  axios.defaults.baseURL="";
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
