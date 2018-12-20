<template>
  <div>
    <h1>asd - {{msg}}</h1>
    <app-car></app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'
  export default {
    data () {
      return {
        msg: 'zxc'
      }
    },
    components:{
        appCar: Car
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
