<template>
  <div class="col-sm-4">
    <div class="card m-1 p-3 bg-info">
      <form>
        <div class="form-group">
          <label for="title">Title {{$route.query.text}}</label>
          <input type="text" class="form-control"
                 placeholder="Enter title" v-model="product.title"
                 id="title">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" class="form-control"
                 placeholder="Enter price" v-model="product.price"
                 id="price">
        </div>
        <div class="form-group">
          <label for="qt">Qt</label>
          <input type="text" class="form-control"
                 placeholder="Enter quantity" v-model="product.qt"
                 id="qt">
        </div>
        <button class="btn btn-secondary mt-3"
                @click.prevent="addProduct">Add
        </button>
      </form>
    </div>
  </div>
</template>
<script>
  import ProductService from './productService'
  export default{
    data(){
      return {
        product: {}
      }
    },
    methods: {
      addProduct(){
        ProductService.addProduct(this.product.title, this.product.price, this.product.qt)
        this.$router.push('/')
      }
    }
  }
</script>
<style>
</style>
