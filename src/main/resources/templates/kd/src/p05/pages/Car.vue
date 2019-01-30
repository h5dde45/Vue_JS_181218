<template>
  <div>
    <h1>Car id {{id}}</h1>
    <button class="btn btn-success" @click="goBack">Back</button>
    <hr>
    <router-link class="btn btn-primary "
                 tag="button"
                 :to="{name:'carFull', params: {id:id},
                  query:{name:'f2', year: 2222 },
                  hash:'#scroll'}"
    >
      Info full
    </router-link>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data(){
      return {
//        id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    watch: {
      $route(toR, fromR){
        this.id = toR.params['id']
      }
    },
    methods: {
      goBack(){
        this.$router.push('/cars')
      }
    },
    beforeRouteLeave(to, fromR, next){
      if (window.confirm("Are you ->")) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style>

</style>
