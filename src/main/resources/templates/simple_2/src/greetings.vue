<template>
  <div>
    <h1>hi, {{name}} </h1>
    <button @click="changeName">Not {{name}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'asd'
      }
    },
    methods: {
      changeName(){
        this.name = this.name === 'asd' ? 'zxc' : 'asd'
      }
    }
  }
</script>

<style>

</style>
