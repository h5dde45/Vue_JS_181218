<template>
  <div>
    <h1>Second Counter: {{counter}}</h1>
  </div>
</template>
<script>
  export default{
    computed:{
        counter(){
            return this.$store.getters.computedCounter
        }
    }
  }
</script>
<style>
</style>
