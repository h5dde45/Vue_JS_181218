<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <app-productList @viewDetails="viewDetails"></app-productList>
        <product-details :product="selectedProduct"></product-details>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import ProductList from "./ProductList.vue";
  import ProductDetails from "./ProductDetails.vue";

  export default {
    data(){
      return {
        selectedProduct: {}
      }
    },
    components: {
      appHeader: Header,
      appProductList: ProductList,
      ProductDetails
    },
    methods: {
      viewDetails(productToView){
        this.selectedProduct = productToView
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
