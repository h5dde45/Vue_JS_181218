<template>
  <div>
    <h2>
      Car id {{id}}
    </h2>
    <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
    <hr>
    <router-link class="btn btn-success "
                 tag="button"
                 :to="{name: 'carFull', params: {id:id},
                  query:{name:'asd', year: 2222}, hash: '#scroll'} ">
      Full info
    </router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {id: this.$router.currentRoute.params['id']}
    },
    methods: {
      goBackToCars(){
        this.$router.push('/cars')
      }
    },
    watch: {
      $route(toR, fromR)
      {
        this.id = toR.params['id']
      }
    },
    beforeRouteLeave(to, fromR, next){
      console.log('sssddd')
      if(window.confirm("ddd?")){
          next(true)
      }else {
          next(false)
      }
    }
  }
</script>

<style>
</style>
