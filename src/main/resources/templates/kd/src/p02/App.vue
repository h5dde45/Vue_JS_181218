<template>
    <div>
        <h2 v-colored:background.font="'red'">{{title}}</h2>
        <h2 v-colored:color="'yellow'">{{title}}</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'asd',
            }
        }
    }
</script>

<style>
    body {
        background: darkgrey;
    }
</style>
