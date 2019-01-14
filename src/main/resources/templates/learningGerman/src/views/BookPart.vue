<template>
    <v-container grid-list-md v-if="part">
        <v-layout raw wrap>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-words :words="part.words"></book-part-words>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Vue from 'vue'
    import BookPartContent from '../components/BookPartContent.vue'
    import BookPartWords from '../components/BookPartWords.vue'
    export default{
        data() {
            return {
                part: null
            }
        },
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
        created(){
            Vue.$db.collection('bookParts')
                .where('bookId', '==', this.bookId)
                .where('bookPartId', '==', this.partId)
                .get()
                .then(querySnapshot => {
                        querySnapshot.forEach(s => {
                            this.part = s.data()
                        })
                    }
                )
                .catch(error => console.log(error))

        },
        computed: {
//            part(){
//                let val = this.$store.getters.getParts.find(b => b.bookId == this.bookId
//                && b.bookPartId == this.partId)
//                return val
//            }
        }
        ,
        components: {
            BookPartContent,
            BookPartWords
        }
    }
</script>