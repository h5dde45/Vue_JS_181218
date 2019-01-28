<template>
  <div class="car">
    <h3>Name: {{carName}} \ {{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      carName: {
        type: String,
//        required: false,
        default: '1111qw'
      },
      carYear: Number
    },
    computed: {
      reverseName()
      {
        return this.carName.split('').reverse().join('')
      }
    }
  }
</script>

<style scoped>
  .car {
    border: 1px solid red;
  }

  .car h3 {
    margin-bottom: 5px;
  }
</style>
