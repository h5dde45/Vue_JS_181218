<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item,i) in menuItems"
                             flat :key="`navdrawer${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app class="success" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"
                                 class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'Study English'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item,i) in menuItems"
                       flat :key="`menuitem${i}`"
                       :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
                <v-btn flat @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-icon left>directions_run</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                drawer: false
            }
        },
        computed: {
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            },
            userId(){
                return this.$store.getters.userId
            },
            menuItems(){
                return this.isUserAuthenticated ? [
                        {
                            icon: 'visibility',
                            title: 'Читать',
                            route: '/books',
                        },
                        {
                            icon: 'account_box',
                            title: 'Кабинет',
                            route: '/profile',
                        },
                    ] :
                    [
                        {
                            icon: 'visibility',
                            title: 'Читать',
                            route: '/books',
                        },
                        {
                            icon: 'input',
                            title: 'Войти',
                            route: '/signin',
                        },
                        {
                            icon: 'lock_open',
                            title: 'Зарегистрироваться',
                            route: '/signup',
                        },
                    ]
            }
        },
        methods: {
            signout(){
                this.$confirm('Выход...').then(res => {
                    if (res) {
                        this.$store.dispatch('signout')
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>