<template>
  <div class="car">
    <h3>Name: {{carName}} -> {{reversName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">change name</button>
    <button @click="changeNameToAuto">change name from parent</button>
    <button @click="updateCounter">update counter</button>
  </div>
</template>
<script>
  export default{
    props: {
      carName: {
        type: String,
        required: false,
        default: 'zxc'
      },
      carYear: Number,
      changeNameToAuto: Function,
      counter: Number
    },
    computed: {
      reversName(){
        return this.carName.split('').reverse().join('')
      }
    },
    methods: {
      changeName(){
        this.carName = 'vaz'
        this.$emit('namedChanged', this.carName)
      },
      updateCounter(){
        this.$emit('counterUpdated', this.counter + 1)
      }
    }
  }
</script>
<style>
  .car {
    background: navajowhite;
  }
</style>
