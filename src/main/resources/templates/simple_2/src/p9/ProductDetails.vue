<template>
  <div class="card p-3">
    <h3>Product Details</h3>
    <h5><b>title: </b>Product {{product.id}}</h5>
    <h5><b>Price: </b> {{product.price}}$</h5>
    <h5><b>Quantity: </b>Product {{product.qt}}</h5>
  </div>
</template>

<script>
  import  ProductService from './ProductService'

  export default {
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on('viewDetails', (v) => this.product = v)
    }
  }
</script>

<style scoped>
  div {
    /*width: 400px;*/
    border: 1px solid red;
    border-radius: 11px;
    margin: 10px;
  }
</style>
