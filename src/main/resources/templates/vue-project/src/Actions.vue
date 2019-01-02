<template>
  <div>
    <button class="btn btn-info" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>
<script>
  export default{
    methods: {
      updateCounter(value){
//        this.$store.state.counter += value
//        this.$store.commit('changeCounter',value)
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: value,
          timeoutDelay: 1222
        })
      }
    }
  }
</script>
<style>
</style>
