<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/cars">Cars</router-link>
        </div>
      </div>
    </nav>
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name: '1',
      }
    }
  }
</script>

<style scoped>
  body {
    background: darkgrey;
  }

  .container {
    font-size: 36px;
  }
</style>
