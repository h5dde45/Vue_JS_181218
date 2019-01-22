<template>
  <div>
    <product-item v-for="(product,i) in products"
                  :key="product.id"
                  :product="product"
                  :index="i+1"
                  @viewDetails="viewDetails"></product-item>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  import _ from 'lodash'
  export default {
    data(){
      return {
        products: [{
          id: 1,
          title: 't1',
          price: 11,
          qt: 111
        },
          {
            id: 2,
            title: 't2',
            price: 22,
            qt: 222
          },
          {
            id: 3,
            title: 't3',
            price: 33,
            qt: 333
          }
        ]
      }
    },
    components: {
      ProductItem
    },
    methods: {
      viewDetails(id){
        let productToView = _.find(this.products, {id: id})
        this.$emit("viewDetails", productToView)
      }
    }
  }
</script>

<style>

</style>
