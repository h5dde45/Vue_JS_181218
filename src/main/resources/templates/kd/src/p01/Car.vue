<template>
  <div class="car">
    <h3>Name: {{carName}} \ {{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeNameTO()">Change name to</button>
    <button @click="updateCounter()">Update counter</button>
  </div>
</template>

<script>
  import {eventEmitter} from '../main'
  export default {
    props: {
      carName: {
        type: String,
//        required: false,
        default: '1111qw',
      },
      carYear: Number,
      changeNameTO: Function,
    },
    computed: {
      reverseName()
      {
        return this.carName.split('').reverse().join('')
      }
    },
    methods: {
      changeName(){
        this.carName = 'f2'
        this.$emit('changeNameP', this.carName)
      },
      updateCounter(){
//        this.$emit("counterUpdate", this.counter + 1)
        eventEmitter.$emit("counterUpdate", 4)
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
