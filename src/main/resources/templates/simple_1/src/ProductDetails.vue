<template>
  <div class="col-sm-4">
    <div class="card m-1 bg-danger">
      <div class="card-body">
        <h4 class="card-title">Product Detail</h4>
        <p class="card-text">Title {{product.title}}</p>
        <p class="card-text">Price {{product.price}}</p>
        <p class="card-text">Quantity {{product.qt}}</p>
      </div>
      <router-link class="btn btn-success m-2" :to="{name:'home'}">Home list</router-link>
    </div>
  </div>
</template>
<script>
  import ProductService from './productService'

  export default{
    props: ['staticText'],
    data(){
      return {
        product: {}
      }
    },
    created(){
      ProductService.$on('viewDetails', selectedProduct => this.product = selectedProduct)
    },
    mounted(){
      ProductService.viewDetailsList(this.$route.params.id)
    },
    watch: {
      '$route.params.id'(id){
        ProductService.viewDetailsList(this.$route.params.id)
      }
    }
  }
</script>
<style>
</style>
