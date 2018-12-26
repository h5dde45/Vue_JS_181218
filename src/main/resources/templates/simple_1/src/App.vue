<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <app-productList></app-productList>
        <product-details></product-details>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import ProductList from "./ProductList.vue";
  import ProductDetails from "./ProductDetails.vue";

  export default {
    components: {
      appHeader: Header,
      appProductList: ProductList,
      ProductDetails
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
