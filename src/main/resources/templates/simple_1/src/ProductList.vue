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
  import {mapGetters, mapActions, mapMutations, mapState} from 'Vuex'

  export default{
    data() {
      return {}
    },
    computed: {
//      ...mapGetters({
//        products: 'getProducts'
//      })
      ...mapState(['products'])
    },
    methods:{
      ...mapActions(['loadProducts'])
    },
    //    computed:{
    //      products(){
    //          return this.$store.state.products
    //        return this.$store.getters.getProducts
    //      }
    //    },
    components: {
      ProductItem
    }
    ,
    created()
    {
//      this.products = ProductService.products
//      this.$store.commit('loadProducts', ProductService.products)
//      this.$store.dispatch('loadProducts', ProductService.products)
      this.loadProducts(ProductService.products)
    }
  }
</script>
<style>

</style>
