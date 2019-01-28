<template>
  <div>
    <h2>Parent: {{carName}}</h2>
    <app-counter ></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeNameTO="changeNameTO"
      @changeNameP="carName= $event"
      @counterUpdate="counter=$event"
    ></app-car>
  </div>
</template>

<script>
  import appCar from './Car.vue'
  import Counter from './Counter.vue'
  export default {
    data(){
      return {
        carName: 'Ford',
        carYear: 333,
      }
    },
    components: {
      appCar,
      appCounter: Counter
    },
    methods: {
      changeNameTO(){
        this.carName = 'au'
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
