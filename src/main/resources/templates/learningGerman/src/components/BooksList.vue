<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="book in books"
                    :key="book.id"
                    xs12 sm10 md8 offset-sm-1 offset-md-2>
                <v-card color="info" class="white--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4 md3>
                                <v-card-media height="100px"
                                              src="https://wallbox.ru/resize/1920x1200/wallpapers/main/201125/2389b8b51fab468dbe17cc5d7e306eeb.jpg">

                                </v-card-media>
                                <div class="text-xs-center mt-2">
                                    <v-btn flat color="white">
                                        <v-icon left >visibility</v-icon>
                                        yOutubE
                                    </v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                    <div>
                                        <div class="headline">{{book.title}}</div>
                                        <div>{{book.description}}</div>
                                        <v-divider class="white"></v-divider>
                                        <div>Уровень: {{getBookLevel(book.level)}}. Частей: {{book.parts}} </div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-rating v-model="book.rating" color="orange"
                                              readonly dense half-increments></v-rating>
                                    <div class="ml-1">
                                        <span>{{book.rating}}</span>
                                        <span>({{book.ratingsCount}})</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn class="success" flat>Открыть</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default{
        computed: {
            books(){
                return this.$store.getters.getBooks
            }
        },
        methods: {
            getBookLevel(level){
                return level.join('/')
            }
        }
    }
</script>