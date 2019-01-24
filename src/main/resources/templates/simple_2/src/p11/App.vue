<template>
  <div>
    <new-header></new-header>
    <div class="container">
      <!--<div class="row">-->
      <!--<div class="col-md-6">-->
      <!--<products></products>-->
      <!--</div>-->
      <!--<div class="col-md-6">-->
      <!--<span class="btn btn-success m-3"-->
      <!--@click="mode=='view'? mode='details':mode='view'">{{mode}}</span>-->
      <!--<keep-alive>-->
      <!--<component :is="componentName"></component>-->
      <!--</keep-alive>-->
      <!--</div>-->
      <div class="row">
        <div class="col-md-6">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import NewHeader from './header.vue'

  export default {
    components: {
      NewHeader
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
