import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Cars from "./pages/Cars.vue";

export default new VueRouter({
  routes: [
    {
      path: '', //http://localhost:8080/
      component: Home
    },
    {
      path: '/cars', //http://localhost:8080/cars
      component: Cars
    }
  ],
  mode: 'history'
})
