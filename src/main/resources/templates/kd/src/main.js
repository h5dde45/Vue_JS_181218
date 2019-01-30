import Vue from "vue";
import VueRouter from "vue-router";
import App from "./p05/App.vue";
import router from "./p05/routes";

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

