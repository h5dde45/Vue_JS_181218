<template>
  <div class="col-sm-6">
    <div class="card m-1 bg-danger">
      <div class="card-body">
        <h4 class="card-title">Product Detail</h4>
        <p class="card-text">Title {{product.title}}</p>
        <p class="card-text">Price {{product.price}}</p>
        <p class="card-text">Quantity {{product.qt}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductService from './productService'

  export default{
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on('viewDetails', selectedProduct => this.product = selectedProduct)
    }
  }
</script>
<style>
</style>
