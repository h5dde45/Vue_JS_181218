<template>
<v-contaainer grid-list-md v-if="part">
    <v-layout raw wrap>
        <v-flex xs12 sm10 offset-sm1>
            <!--content-->
        </v-flex>
        <v-flex xs12 sm10 offset-sm1>
            <!--words-->
        </v-flex>
    </v-layout>
</v-contaainer>
</template>
<script>
    export default{
        props: {
            'bookId': {
                type: String,
                required: true
            },
            'partId': {
                type: String,
                required: true
            },
        },
        computed:{
            part(){
                let val= this.$store.getters.getParts.find(b => b.bookId == this.bookId
                && b.bookPartId == this.partId)
            }
        }
    }
</script>