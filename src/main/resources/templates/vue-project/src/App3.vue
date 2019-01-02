<template>
  <div class="container text-center pt-5">
    <app-counter ></app-counter>
    <app-second-counter ></app-second-counter>
    <hr>
    <app-actions ></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import SecondCounter from './SecondCounter.vue'
  import Actions from './Actions.vue'

  export default {
    components: {
      appCounter: Counter,
      appSecondCounter: SecondCounter,
      appActions: Actions
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
