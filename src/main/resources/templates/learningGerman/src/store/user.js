import firebase from "firebase";

export default ({
        state: {
            user: {
                isAuthenticated: false,
                uid: null
            }
        },
        mutations: {
            set_user(state, payload){
                state.user.isAuthenticated = true
                state.user.uid = payload
            },
            unset_user(state){
                state.user = {
                    isAuthenticated: false,
                    uid: null
                }
            },
        },
        actions: {
            signup({commit}, payload){
                commit('set_processing', true)
                commit('clear_error')
                firebase.auth().createUserWithEmailAndPassword(
                    payload.email, payload.password)
                    .then(() => {
                        commit('set_processing', false)
                    })
                    .catch(function (error) {
                        commit('set_processing', false)
                        commit('set_error', error.message)
                    });
            },
            signin({commit}, payload){
                commit('set_processing', true)
                commit('clear_error')
                firebase.auth().signInWithEmailAndPassword(
                    payload.email, payload.password)
                    .then(() => {
                        commit('set_processing', false)
                    })
                    .catch(function (error) {
                        commit('set_processing', false)
                        commit('set_error', error.message)
                    });
            },
            signout(){
                firebase.auth().signOut()
            },
            state_change({commit}, payload){
                if (payload) {
                    commit('set_user', payload.uid)
                    commit('load_user_data',  payload.uid)
                } else {
                    commit('unset_user')
                }
            }
        },
        getters: {
            userId:(state) => state.user.uid,
            isUserAuthenticated: (state) => state.user.isAuthenticated
        }
    }
)