import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import FirebaseConfig from "./config/firebase";
import firebase from "firebase";
import VuetifyConfirm from 'vuetify-confirm'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
firebase.initializeApp(FirebaseConfig)

Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',
    width: 400,
})

new Vue({
    router,
    store,
    render: h => h(App),
    created(){
        let vm = this
        firebase.auth().onAuthStateChanged(function (user) {
            vm.$store.dispatch('state_change', user)
        });
    }
}).$mount('#app')
