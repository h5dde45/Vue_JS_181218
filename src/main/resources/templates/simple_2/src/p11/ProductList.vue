<template>
  <div>
    <router-link to="/add?text=hi" class="btn btn-danger ml-3">Add product</router-link>
    <product-item v-for="(product,i) in products"
                  :key="product.id"
                  :product="product"
                  :index="i+1"></product-item>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  import ProductService from './ProductService'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        products: 'getProducts'
      }),
    },
    components: {
      ProductItem
    },
    methods: {
      ...mapActions(['loadProducts'])
    },
    created(){
//        this.$store.commit('loadProducts', ProductService.products)
//      this.$store.dispatch('loadProducts', ProductService.products)
      this.loadProducts(ProductService.products)
    }
  }
</script>

<style>

</style>
