<template>
  <div>
    <h2>{{title}}</h2>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name in filteredNames">
        {{name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: 'asSd qwe',
        names: ['qwe', 'asQd', 'zxc'],
        searchName: ''
      }
    },
    filters: {
      lowerCase(v){
        return v.toLowerCase()
      },
    },
    computed:{
        filteredNames(){
            return this.names.filter(name => name.toUpperCase().
            indexOf(this.searchName.toUpperCase()) !== -1)
        }
    }
  }
</script>

<style>
  body {
    background: darkgrey;
  }
</style>
