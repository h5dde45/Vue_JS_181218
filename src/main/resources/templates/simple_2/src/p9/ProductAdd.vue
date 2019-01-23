<template>
  <div class="card p-3">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title"
             placeholder="Enter title" v-model="product.title">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="text" class="form-control" id="price"
             placeholder="Enter price" v-model="product.price">
    </div>
    <div class="form-group">
      <label for="qt">Qt</label>
      <input type="text" class="form-control" id="qt"
             placeholder="Enter qt" v-model="product.qt">
    </div>
    <button class="btn btn-info" @click="addProduct">Add product</button>
  </div>
</template>
<script>
  import  ProductService from './ProductService'
  export default{
    data(){
      return {
        product: {}
      }
    },
    methods: {
      addProduct(){
        ProductService.addProduct(this.product.title, this.product.price,
          this.product.qt)
      }
    }
  }
</script>

<style scoped>
  div.card {
    border: 1px solid green;
    border-radius: 11px;
    margin: 10px;
  }
</style>
