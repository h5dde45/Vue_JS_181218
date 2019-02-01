<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2
                    v-for="book in books" :key="book.id">
                <v-card color="info" class="white--text">
                    <v-container>
                        <v-layout row>
                            <v-flex xs4 md3>
                                <v-card-media height="100px"
                                        src="http://s1.1zoom.me/big3/332/369633-sepik.jpg"></v-card-media>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        computed: {
            books(){
                return this.$store.getters.getBooks
            }
        }
    }
</script>
<style scoped>

</style>