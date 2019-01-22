<template>
  <div>
    <new-header></new-header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <products @viewDetails="viewDetails"></products>
        </div>
        <div class="col-md-4">
          <product-details :product="selectedProduct"></product-details>
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
    data(){
      return {
        selectedProduct: {}
      }
    },
    components: {
      NewHeader,
      'products': ProductList,
      ProductDetails
    },
    methods: {
      viewDetails(product){
        this.selectedProduct = product
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
