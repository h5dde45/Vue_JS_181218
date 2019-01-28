<template>
  <div >
    <h2>Parent: {{carName}}</h2>
    <app-car  :carYear="carYear"></app-car>
  </div>
</template>

<script>
  import appCar from './Car.vue'
  export default {
    data(){
      return {
        carName: 'Ford',
        carYear: 333,
      }
    },
    components:{
        appCar
    }
  }
</script>

<style >
  body {
    background: darkgrey;
  }
</style>
