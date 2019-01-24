<template>
  <div class="card p-3">
    <h3>Product Details</h3>
    <h5><b>title: </b>Product {{product.id}}</h5>
    <h5><b>Price: </b> {{product.price}}$</h5>
    <h5><b>Quantity: </b>Product {{product.qt}}</h5>
    <router-link class="btn btn-info" :to='{name:"home"}'>Back to list</router-link>
  </div>
</template>

<script>
  import  ProductService from './ProductService'

  export default {
    props: ['staticText'],
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on('viewDetails', (v) => this.product = v)
    },
    mounted(){
      ProductService.viewDetails(this.$route.params.id)
    },
    watch: {
      '$route.params.id'(id){
        ProductService.viewDetails(this.$route.params.id)
      }
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
