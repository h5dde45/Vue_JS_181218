<template>
  <div>
   <h4>Car name: {{$route.query.name}}</h4>
   <h4>Car year: {{year}}</h4>

    <div class="scroll"></div>
    <h6 id="scroll">from button</h6>
    <div class="scroll"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    computed:{
        year(){
            return this.$route.query.year
        }
    },
    beforeRouteEnter(to,fromR, next){
        next(true)
    }
  }
</script>

<style>
  .scroll{
    width: 100px;
    height: 1000px;
    background:gray;
  }

</style>
