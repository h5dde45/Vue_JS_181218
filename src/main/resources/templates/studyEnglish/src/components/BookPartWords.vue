<template>
    <div>
        <v-container fluid grid-list-md>
            <div class="text-xs-center pb-3">
                <span class="display-1">Слова</span>
            </div>
            <v-data-iterator :items="words" :hide-actions="true"
                             content-tag="v-layout"
                             row wrap>
                <v-flex slot="item" slot-scope="props"
                        xs12 sm10 md8 lg6>
                    <v-card>
                        <v-card-title><h4>{{ props.item.origText }}</h4></v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>{{ props.item.transText }}</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn fab dark small color="red">
                                <v-icon dark>add</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-data-iterator>
        </v-container>
    </div>
</template>
<script>
    export default{
        props: {
            "data": {
                type: Object,
                default: null
            }
        },
        computed: {
            words(){
                if (!this.data) {
                    return []
                }
                let words = []

                for (let property in this.data) {
                    if (this.data.hasOwnProperty(property)) {
                        let word = this.data[property]
                        word.key = property
                        words.push(word)
                    }
                }
                return words
            }
        },
        data(){
            return {
                rowsPerPageItems: [4, 8, 12],
                pagination: {
                    rowsPerPage: 4
                },
            }
        }
    }
</script>