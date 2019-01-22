<template>
  <div>
    <new-header></new-header>
    <div>
      <greetings></greetings>
      <greetings></greetings>
    </div>
  </div>
</template>

<script>
  import greetings from './greetings.vue'
  import NewHeader from './header.vue'
  export default {
    components: {
      greetings,
      NewHeader
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
