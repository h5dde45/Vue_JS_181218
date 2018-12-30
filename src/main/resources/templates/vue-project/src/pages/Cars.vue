<template>
  <div>
    <h2>
      Cars page
    </h2>
    <ul>
      <router-link tag="li" v-for="car in 5"
                   :to="'/car/'+car"
                   :key="car">
        <a>Car {{car}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style>
</style>
