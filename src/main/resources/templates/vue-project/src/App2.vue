<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car name</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>
    <button class="btn btn-info" @click="createCar">Create car</button>
    <button class="btn btn-danger" @click="loadCar">Load cars</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="car of cars" :key="car.id">
        <strong>{{car.name}}</strong> - <i>{{car.year}}</i></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        carName: '',
        carYear: 2012,
        cars: [],
        resource: null
      }
    },
    methods: {
      createCar(){
        const car = {
          name: this.carName,
          year: this.carYear
        }
        this.resource.save({}, car)
      },
      loadCar(){
        this.resource.get()
          .then(response => {
            return response.json()
          })
          .then(cars => {
            this.cars = cars
          })
      }
    },
    created(){
      this.resource = this.$resource('cars')
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
