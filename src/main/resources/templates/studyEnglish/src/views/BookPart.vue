<template>
    <v-container grid-list-md v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 v-if="finishDate">
                <v-card>
                    <v-img src="https://firebasestorage.googleapis.com/v0/b/studyenglish-35fef.appspot.com/o/spend.png?alt=media&token=4684dd05-b1f4-46b6-8b55-c97767e8c031"
                           max-width="350px">
                    </v-img>

                    <v-card-title primary-title>
                        <div class="headline">Прочитано: {{finishDate | formattedDate}}</div>
                    </v-card-title>
                    <v-card-actions>
                        <span>Оценка</span>
                        <v-rating v-model="savedRating" color="success"
                                  readonly large></v-rating>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-words :words="part.words"></book-part-words>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 class="text-xs-center">
                <v-dialog v-model="finishDialog" persistent max-width="600px">
                    <v-btn v-if='!finishDate' slot="activator" color="info" dark
                           @click="finishDialog=true">
                        <v-icon>check</v-icon>
                        Завершено
                    </v-btn>
                    <v-card>
                        <v-responsive>
                            <v-img src="https://firebasestorage.googleapis.com/v0/b/studyenglish-35fef.appspot.com/o/spend.png?alt=media&token=4684dd05-b1f4-46b6-8b55-c97767e8c031"
                                   max-width="350px"></v-img>
                        </v-responsive>
                        <v-card-title primary-title>
                            <div class="headline">Прочитано...</div>
                        </v-card-title>
                        <v-card-text>
                            <span>Оценка</span>
                            <v-rating v-model="rating" color="success"
                                      half-increments large></v-rating>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color='primary' dark flat
                                   @click.native="finishDialog=false">
                                <v-icon>close</v-icon>
                                Закрыть
                            </v-btn>
                            <v-btn color='success' dark flat
                                   @click.native="finishWork">
                                <v-icon>check</v-icon>
                                Завершено
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Vue from 'vue'
    import BookPartContent from '../components/BookPartContent.vue'
    import BookPartWords from '../components/BookPartWords.vue'
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
        data(){
            return {
                part: null,
                finishDialog: false,
                rating: 0
            }
        },
        computed: {
            finishDate(){
                return this.$store.getters.userData.books[this.bookId]
                    .parts[this.partId].finishedDate
            },
            savedRating(){
                return this.$store.getters.userData.books[this.bookId]
                    .parts[this.partId].rating
            }
        },
        created(){
            Vue.$db.collection('bookParts')
                .where('bookId', '==', this.bookId)
                .where('bookPartId', '==', this.partId)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(s => {
                        this.part = s.data()
                    })
                })
                .then(() => {
                    this.$store.dispatch('update_user_book_part_stats',
                        {bookId: this.bookId, partId: this.partId})
                })
                .catch(error => console.log(error))
        },
        methods: {
            finishWork(){
                this.$store.dispatch('finish_user_book_part',
                    {bookId: this.bookId, partId: this.partId, rating: this.rating})
                this.finishDialog = false
            }
        },
        components: {
            BookPartContent,
            BookPartWords
        }
    }
</script>