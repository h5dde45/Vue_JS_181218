<template>
  <div class="container pt-5 text-center">
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions @counterUpdate="counter += $event"></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import SecondCounter from './SecondCounter.vue'
  import Actions from './Actions.vue'

  export default {
    data(){
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
