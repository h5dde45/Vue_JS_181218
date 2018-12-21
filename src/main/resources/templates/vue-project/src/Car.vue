<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <h2>ddssf</h2>
    <hr>
    <slot name="text"></slot>
  </div>
</template>
<script>
  export default{
  }
</script>
<style scoped>
  div{
    border: 1px solid black;
  }
  h2{
    color: blue;
  }
</style>
