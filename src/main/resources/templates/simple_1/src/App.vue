<template>
  <div>
    <app-header>
      <h2 class="my-3">Home page</h2>
    </app-header>
    <div class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header.vue";

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
