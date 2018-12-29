import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";

Vue.use(VueRouter)

new Vue({
  routes,
  el: '#app',
  render: h => h(App),
})
