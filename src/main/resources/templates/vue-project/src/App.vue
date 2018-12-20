<template>
  <div>
    <h1>parent: {{carName}}</h1>
    <app-counter :counter="counter"></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeNameToAuto="changeNameToAuto"
      @namedChanged="carName=$event"
      @counterUpdated="counter=$event"></app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'
  import Counter from './Counter.vue'
  export default {
    data () {
      return {
        carName: 'asd',
        carYear: 123,
        counter: 0
      }
    },
    components: {
      appCar: Car,
      appCounter: Counter,
    },
    methods: {
      changeNameToAuto(){
        this.carName = "aaaa"
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
