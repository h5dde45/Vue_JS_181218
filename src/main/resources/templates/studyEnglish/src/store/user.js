import firebase from "firebase";

export default ({
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
            name: null,
            email: null,
        }
    },
    getters: {
        userId: (state) => state.user.uid,
        userName: (state) => state.user.name,
        userEmail: (state) => state.user.email,
        isUserAuthenticated: (state) => state.user.isAuthenticated
    },
    mutations: {
        set_user(state, payload){
            state.user.isAuthenticated = true
            state.user.uid = payload.uid
            state.user.email = payload.email
        },
        unset_user(state){
            state.user = {
                isAuthenticated: false,
                uid: null
            }
        },
        set_user_name(state, payload){
            state.user.name = payload
        },
        set_user_email(state, payload){
            state.user.email = payload
        },
    },
    actions: {
        signup({commit}, payload){
            commit('set_processing', true)
            commit('clear_error')

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    firebase.auth().currentUser.updateProfile({displayName: payload.name})
                        .then(() => {
                            commit('set_user_name', payload.name)
                        })
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
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('set_processing', false)
                })
                .catch(function (error) {
                    commit('set_processing', false)
                    commit('set_error', error.message)
                });

        },
        state_changed({commit, dispatch}, payload){
            if (payload) {
                commit('set_user', {uid: payload.uid, email: payload.email})
                commit('set_user_name', payload.displayName)
                dispatch('load_user_data', payload.uid)
            } else {
                commit('unset_user')
            }
        },
        signout({commit}){
            firebase.auth().signOut()
        },
        change_user_profile_data({commit}, payload){
            let user = firebase.auth().currentUser
            let credential = firebase.auth.EmailAuthProvider.credential(
                payload.email,
                payload.password
            )

            commit('set_processing', true)
            commit('clear_error')

            user.reauthenticateAndRetrieveDataWithCredential(credential)
                .then(function () {
                    let currentUser = firebase.auth().currentUser;
                    if (payload.changeType == 'name') {
                        currentUser.updateProfile({displayName: payload.newName})
                            .then(() => {
                                commit('set_user_name', payload.newName)
                                commit('set_processing', false)
                            }).catch((error) => {
                            commit('set_processing', false)
                            commit('set_error', error.message)
                        })
                    }
                    if (payload.changeType == 'email') {
                        currentUser.updateEmail( payload.newEmail)
                            .then(() => {
                                commit('set_user_email', payload.newEmail)
                                commit('set_processing', false)
                            }).catch((error) => {
                            commit('set_processing', false)
                            commit('set_error', error.message)
                        })
                    }
                    if (payload.changeType == 'password') {
                        currentUser.updatePassword( payload.newPassword)
                            .then(() => {
                                commit('set_processing', false)
                            }).catch((error) => {
                            commit('set_processing', false)
                            commit('set_error', error.message)
                        })
                    }
                })
                .catch((error) => {
                    commit('set_processing', false)
                    commit('set_error', error.message)
                })
        }

    }
})