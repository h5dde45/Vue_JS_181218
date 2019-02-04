import Vue from "vue";

let defaultUserData = {
    books: {},
    words: {}
}

export default ({

        state: {
            userData: defaultUserData
        },
        mutations: {
            set_user_data(state, payload){
                state.userData = payload
            },
            add_user_book(state, payload){
                Vue.set(state.userData.books, payload.bookId, payload.book)
            }
        },
        actions: {
            load_user_data({commit}, payload){
                commit('set_processing', true)
                let userDataRef = Vue.$db.collection('userData').doc(payload)
                userDataRef.get()
                    .then(data => {
                        let userData = data.exists ? data.data() : defaultUserData
                        if (userData.books) {
                            userData.books = {}
                        }
                        commit('set_user_data', userData)
                        commit('set_processing', false)
                    }).catch(() => {
                    commit('set_processing', false)
                })
            },
            add_user_book({commit, getters}, payload){
                commit('set_processing', true)
                var userDataRef = Vue.$db.collection('userData').doc(getters.userId);
                let book = {
                    addedDate: new Date(),
                    parts: {}
                }
                userDataRef.set({
                    books: {
                        [payload]: book
                    }
                }, {merge: true})
                    .then(() => {
                        commit('add_user_book', {bookId: payload, book: book})
                    })
            }
        },
        getters: {
            userData: (state) => state.userData
        }

    }
)