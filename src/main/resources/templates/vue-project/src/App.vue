<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" to="/"
                       exact active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars"
                       exact active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/3"
                       exact active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/5"
                       exact active-class="active">
            <a class="nav-link">Car 5</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){

    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }


</style>
