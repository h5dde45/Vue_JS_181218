<template>
  <div class="card m-1 bg-success">
    <div class="card-body">
      <h4 class="card-title">{{index}} {{product.title}}</h4>
      <p class="card-text">{{product.qt}} items for {{product.price}}$</p>
      <a href="#" class="btn btn-warning" @click="viewDetailsClicked">View details</a>
    </div>
  </div>
</template>
<script>
  import ProductService from './productService'

  export default{
    props: {
      product: Object,
      index: Number
    },
    data(){
      return {}
    },
    methods: {
      viewDetailsClicked(){
//        this.$emit("viewDetails", this.product.id)
//        this.viewDetails(this.product.id)
        ProductService.viewDetailsList(this.product.id)
      }
    }
  }
</script>
<style>
</style>
