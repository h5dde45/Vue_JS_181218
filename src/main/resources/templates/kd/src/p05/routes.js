import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
// import Cars from "./pages/Cars.vue";
import Car from "./pages/Car.vue";
import CarFull from "./pages/CarFull.vue";
import ErrorCmp from "./pages/Error.vue";

const Cars=resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          name: 'carFull',
          component: CarFull,
          beforeEnter(to, fromR,next){
              next()
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savePosition){
    if (savePosition) {
      return savePosition
    }
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {
        x: 0,
        y: 677
      }
    }
  }
})
