import Vue from "vue";
import store from "./store/index";
import App3 from "./App3.vue";

new Vue({
  store,
  el: '#app',
  render: h => h(App3),
})
