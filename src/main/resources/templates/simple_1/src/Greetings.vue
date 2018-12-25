<template>
  <div>
    <h3>hi, {{name}}</h3>
    <button @click="changeName">You {{name}}?</button>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        name: 'asd'
      }
    },
    methods: {
      changeName(){
        this.name = this.name == 'asd' ? 'zxc' : 'asd'
      }
    },
  }
</script>
<style>

</style>
