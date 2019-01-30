import Vue from "vue";
import App from "./p07/App.vue";
import store from "./p07/store/index";

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

