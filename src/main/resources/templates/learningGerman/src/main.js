import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VuetifyConfirm from 'vuetify-confirm'
import firebase from "firebase";
import firebaseConfig from "./config/firebase";

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',
    width: 300,
})

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    render: h => h(App),
    created(){
        let vm = this
        firebase.auth().onAuthStateChanged(function (user) {
                vm.$store.dispatch('state_change',user)
        });
    }
}).$mount('#app')
