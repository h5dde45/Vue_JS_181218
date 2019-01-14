import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import FirebaseConfig from "./config/firebase";
import firebase from "firebase";
import "firebase/firestore";
import VuetifyConfirm from "vuetify-confirm";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',
    width: 400,
})

const firebaseApp = firebase.initializeApp(FirebaseConfig);
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
            vm.$store.dispatch('state_change', user)
        });

        this.$store.dispatch('load_books')
    }
}).$mount('#app')
