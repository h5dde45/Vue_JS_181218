import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import firebase from "firebase";
import "vuetify/dist/vuetify.min.css";
import firebaseConfig from "./config/firebase";
import VuetifyConfirm from "vuetify-confirm";
import VueYouTubeEmbed from "vue-youtube-embed";
import "firebase/firestore";
import FormattedDate from './filters/formattedDate'

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',
    width: 400,
})

Vue.filter('formattedDate',FormattedDate)

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
db.settings({
    timestampsInSnapshots: true
})

Vue.$db = db

new Vue({
    router,
    store,
    render: h => h(App),
    created(){
        let vm = this
        firebase.auth().onAuthStateChanged(function (user) {
            vm.$store.dispatch('state_changed', user)
        });
        this.$store.dispatch('load_books')
    }
}).$mount('#app')
