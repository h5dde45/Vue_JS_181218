<template>
  <div class="col-sm-6">
    <product-item v-for="(product,i) in products"
                  :key="product.id"
                  :product="product"
                  :index="i+1"
                  @viewDetails="viewDetailsList"></product-item>
  </div>
</template>
<script>
  import ProductItem from './ProductItem.vue'
  import _ from 'lodash'

  export default{
    data(){
      return {
        products: [
          {
            id: 1,
            title: 'p1',
            price: 11,
            qt: 111
          },
          {
            id: 2,
            title: 'p2',
            price: 22,
            qt: 222
          },
          {
            id: 3,
            title: 'p3',
            price: 33,
            qt: 333
          },
        ]
      }
    },
    components: {
      ProductItem
    },
    methods: {
      viewDetailsList(id){
        var productToView = _.find(this.products, {id: id});
        this.$emit("viewDetails", productToView)
      }
    }
  }
</script>
<style>

</style>
