<template>
    <v-container grid-list-md >
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 >
                <v-tabs v-model="tabMode" color="info" dark fixed-tabs
                        slider-color="red">
                    <v-tab :key="'data'" ripple>
                        Личные данные
                    </v-tab>
                    <v-tab :key="'books'" ripple>
                        Книги
                    </v-tab>
                    <v-tab :key="'words'" ripple>
                        Слова
                    </v-tab>
                    <v-tab-item :key="'data'">
                        <user-profile-data></user-profile-data>
                    </v-tab-item>
                    <v-tab-item :key="'books'"></v-tab-item>
                    <v-tab-item :key="'words'"></v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import UserProfileData from '../components/UserProfileData.vue'
    export default {
        data(){
            return {
                tabMode: 'data'
            }
        },
        components:{
            UserProfileData
        }
    }
</script>
<style scoped>

</style>