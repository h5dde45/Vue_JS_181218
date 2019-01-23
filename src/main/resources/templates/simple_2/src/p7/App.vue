<template>
  <div>
    <new-header></new-header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <products></products>
        </div>
        <div class="col-md-4">
          <product-details></product-details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NewHeader from './header.vue'
  import ProductList from './ProductList.vue'
  import ProductDetails from './ProductDetails.vue'
  export default {
    components: {
      NewHeader,
      'products': ProductList,
      ProductDetails
    },
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
