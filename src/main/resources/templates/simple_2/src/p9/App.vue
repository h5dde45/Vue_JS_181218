<template>
  <div>
    <new-header></new-header>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <products></products>
        </div>
        <div class="col-md-6">
          <span class="btn btn-success m-3"
                @click="mode=='view'? mode='details':mode='view'">{{mode}}</span>
          <keep-alive>
            <component :is="componentName"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NewHeader from './header.vue'
  import ProductList from './ProductList.vue'
  import ProductDetails from './ProductDetails.vue'
  import ProductAdd from './ProductAdd.vue'
  export default {
    components: {
      NewHeader,
      'products': ProductList,
      ProductDetails,
      ProductAdd
    },
    data(){
      return {
        mode: 'view'
      }
    },
    computed: {
      componentName(){
        return this.mode === 'view' ? 'ProductAdd' : 'ProductDetails'
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
