<template>
  <div class="card">
    <div class="card-body">
      <h4 class='card-title'>{{index}} {{product.title}}</h4>
      <p class='card-text'>{{product.qt}} items for {{product.price}}$</p>
      <a href="#" class="btn btn-info" @click="viewDetailsClicked">View Details</a>
    </div>
  </div>
</template>

<script>
  import  ProductService from './ProductService'

  export default {
    props: ['product', 'index'],
    data(){
      return {}
    },
    methods: {
      viewDetailsClicked(){
        ProductService.viewDetails(this.product.id)
      }
    }
  }
</script>

<style>
  div.card {
    /*width: 400px;*/
    border: 1px solid red;
    border-radius: 11px;
    margin: 10px;
  }
</style>
