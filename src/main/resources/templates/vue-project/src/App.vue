<template>
  <div>
    <h2>{{title}}</h2>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of names">{{name}}</li>
      <hr>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: "fDff",
        names: ['fdgh', 'eryhe', 'eryyhger','ertghertgw'],
        searchName: ''
      }
    },
    filters: {
      lowercase(value){
        return value.toLowerCase()
      }
    },
    computed:{
      filteredNames(){
          return this.names.filter(name =>{
              return name.indexOf(this.searchName) !== -1
          })
      }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }

</style>
