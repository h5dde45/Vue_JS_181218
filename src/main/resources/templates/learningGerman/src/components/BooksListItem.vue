<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <!--md-->
            <v-layout row class="hidden-sm-and-down">
                <v-flex xs4 md3>
                    <v-card-media height="100px"
                                  :src="book.imageUrl">
                    </v-card-media>
                    <div class="text-xs-center mt-2">
                        <v-btn flat color="white">
                            <v-icon left>visibility</v-icon>
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
                            <div>Уровень: {{getBookLevel(book.level)}}. Частей: {{book.parts.length}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <!--<v-rating v-model="book.rating" color="orange"-->
                                  <!--readonly dense half-increments></v-rating>-->
                        <!--<div class="ml-1">-->
                            <!--<span>{{book.rating}}</span>-->
                            <!--<span>({{book.ratingsCount}})</span>-->
                        <!--</div>-->
                        <v-spacer></v-spacer>
                        <v-btn class="success" flat
                               :to="{name:'book', params: {id:book.id}}"
                        >Открыть
                        </v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <!--sm-->
            <div class="hidden-md-and-up">
                <v-layout row>
                    <v-flex xs4 md3>
                        <v-card-media height="100px"
                                      :src="book.imageUrl">
                        </v-card-media>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                            <div>
                                <h3>{{book.title}}</h3>
                                <div class="text-xs-center mt-2">
                                    <v-btn flat color="white">
                                        <v-icon left>visibility</v-icon>
                                        yOutubE
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
                        <div>Уровень: {{getBookLevel(book.level)}}. Частей: {{book.parts.length}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <!--<v-rating v-model="book.rating" color="orange"-->
                                      <!--readonly dense half-increments></v-rating>-->
                            <!--<div class="ml-1">-->
                                <!--<span>{{book.rating}}</span>-->
                                <!--<span>({{book.ratingsCount}})</span>-->
                            <!--</div>-->
                            <v-spacer></v-spacer>
                            <v-btn class="success" flat
                                   :to="{name:'book', params: {id:book.id}}"
                            >Открыть
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>
<script>
    import * as bookHelper from '../helpers/book'
    export default{
        props: {
            'book': {
                type: Object,
                required: true
            }
        },
        methods: {
            getBookLevel: bookHelper.getBookLevel
        }
    }
</script>