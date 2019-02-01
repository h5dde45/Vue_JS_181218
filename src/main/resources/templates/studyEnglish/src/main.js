import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import firebase from "firebase";
import "vuetify/dist/vuetify.min.css";
import firebaseConfig from "./config/firebase";
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(Vuetify)
Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',
    width: 400,
})

firebase.initializeApp(firebaseConfig)

new Vue({
    router,
    store,
    render: h => h(App),
    created(){
        let vm = this
        firebase.auth().onAuthStateChanged(function (user) {
            vm.$store.dispatch('state_changed', user)
        });
    }
}).$mount('#app')
