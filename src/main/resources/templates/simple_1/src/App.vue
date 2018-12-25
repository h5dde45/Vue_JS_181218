<template>
  <div>
    <app-header></app-header>
    <new-greetings></new-greetings>
    <hr>
    <new-greetings></new-greetings>
  </div>
</template>

<script>
  import Greetings from "./Greetings.vue";
  import Header from "./Header.vue";

  export default {
    components: {
      newGreetings: Greetings,
      appHeader: Header
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
