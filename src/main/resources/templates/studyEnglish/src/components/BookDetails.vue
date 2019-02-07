<template>
    <v-card color="green" class="white--text">
        <v-container>
            <v-layout row class="hidden-sm-and-down">
                <v-flex xs4 md3>
                    <v-img height="150px"
                                  :src="book.imageUrl"></v-img>
                    <div class="text-xs-center  mt-2">
                        <v-btn flat color="white">
                            <v-icon left>play_circle_outline</v-icon>
                            youtube
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs8 md9>
                    <v-card-title>
                        <div>
                            <div class="headline">{{book.title}}</div>
                            <div>{{book.description}}</div>
                            <v-divider class="white"></v-divider>
                            <div>Уровень: {{getBookLevel(book.level)}}.
                                Частей: {{book.parts.length}}
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <!--<v-rating v-model="book.rating" color="yellow"-->
                        <!--readonly dense half-increments></v-rating>-->
                        <!--<div class="ml-1">-->
                        <!--<span>{{book.rating}}</span>-->
                        <!--<span>({{book.ratingsCount}})</span>-->
                        <!--</div>-->
                        <v-spacer></v-spacer>
                        <v-btn class="orange" flat v-if="cantLoadBook(book.id)"
                               @click="loadBook(book.id)">Загрузить
                        </v-btn>
                        <div v-if="getUserDataBook(book.id)">
                            <v-icon color="white" class="mr-2">account_balance</v-icon>
                            Книга добавлена {{getBookAddedDate(book.id) | formattedDate}}
                        </div>
                    </v-card-actions>
                </v-flex>
            </v-layout>

            <div class="hidden-md-and-up">
                <v-layout row>
                    <v-flex xs4 md3>
                        <v-img height="150px"
                                      :src="book.imageUrl"></v-img>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                            <div>
                                <h3>{{book.title}}</h3>
                                <div class="text-xs-center  mt-2">
                                    <v-btn flat color="white">
                                        <v-icon left>play_circle_outline</v-icon>
                                        youtube
                                    </v-btn>
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>{{book.description}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>Уровень: {{getBookLevel(book.level)}}ю
                            Частей: {{book.parts.length}}
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <!--<v-rating v-model="book.rating" color="yellow"-->
                            <!--readonly dense half-increments></v-rating>-->
                            <!--<div class="ml-1">-->
                            <!--<span>{{book.rating}}</span>-->
                            <!--<span>({{book.ratingsCount}})</span>-->
                            <!--</div>-->
                            <v-spacer></v-spacer>
                            <v-btn class="orange" flat>Загрузить</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>
<script>
    import {getBookLevel} from '../helpers/book'
    import {mapGetters} from 'vuex'
    export default{
        props: {
            'book': {
                type: Object,
                required: true
            }
        },
        data(){
            return {}
        },
        computed: {
            ...mapGetters(['isUserAuthenticated', 'userData', 'getProcessing'])
        },
        methods: {
            getBookLevel,
            cantLoadBook(bookId){
                let book = this.getUserDataBook(bookId);
                return this.isUserAuthenticated && !this.getProcessing && !book
            },
            getUserDataBook(bookId){
                return this.userData.books[bookId]
            },
            loadBook(bookId){
                this.$store.dispatch('add_user_book', bookId)
            },
            getBookAddedDate(bookId){
                let book = this.getUserDataBook(bookId);
                return book.addedDate
            }
        }
    }
</script>