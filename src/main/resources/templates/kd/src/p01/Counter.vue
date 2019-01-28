<template>
    <div class="car">
        <h1>Counter: {{counter}}</h1>
    </div>
</template>

<script>
    import {eventEmitter} from '../main'

    export default {
        data(){
            return {
                counter: 0
            }
        },
        created(){
            eventEmitter.$on('counterUpdate', (v) => {
                this.counter = v + this.counter
        })
        }
    }
</script>

<style scoped>

</style>
