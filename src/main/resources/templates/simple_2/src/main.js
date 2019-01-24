import Vue from "vue";
import App from "./p11/App.vue";
import {router} from "./p11/router";
import store from "./p11/store/store";

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
