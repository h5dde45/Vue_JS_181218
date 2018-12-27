<template>
  <div class="col-sm-4">
    <router-link to="/add?text=hi" class="btn btn-info m-1">Add product</router-link>
    <product-item v-for="(product,i) in products"
                  :key="product.id"
                  :product="product"
                  :index="i+1"></product-item>
  </div>
</template>
<script>
  import ProductItem from './ProductItem.vue'
  import ProductService from './productService'

  export default{
    data() {
      return {
        products: []
      }
    },
    components: {
      ProductItem
    },
    created(){
      this.products = ProductService.products
    }
  }
</script>
<style>

</style>
