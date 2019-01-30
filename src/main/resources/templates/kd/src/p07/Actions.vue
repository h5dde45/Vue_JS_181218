<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>

  export default {
    data(){
      return {}
    },
    methods: {
      updateCounter(val){
//         this.$store.commit('changeCounter', val)
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: val,
          timeoutDelay: 200
        })
      }
    }
  }
</script>

<style>
</style>
