import Vue from "vue";

let defaultUserData = {
    books: {},
    words: {}
}

export default ({
    state: {
        userData: defaultUserData
    },
    getters: {
        userData: (state) => state.userData
    },
    mutations: {
        set_user_data(state, payload){
            state.userData = payload
        },
        add_user_book(state, payload){
            Vue.set(state.userData.books, payload.bookId, payload.book)
        },
        add_user_book_part(state, payload){
            Vue.set(state.userData.books[payload.bookId].parts,
                payload.partId, {addedDate: payload.timestamp})
        },
        add_user_book_part_last_open_date(state, payload){
            Vue.set(state.userData.books[payload.bookId].parts[payload.partId],
                'lastOpenDate', payload.timestamp)
        }
    },
    actions: {
        load_user_data({commit}, payload){
            commit('set_processing', true)
            let userDataRef = Vue.$db.collection('userData').doc(payload)
            userDataRef.get()
                .then((data) => {
                    let userData = data.exists ? data.data() : defaultUserData

                    if (!userData.books) {
                        userData.books = {}
                    }
                    for (let key in userData.books) {
                        if (userData.books.hasOwnProperty(key)) {
                            userData.books[key].addedDate = userData.books[key].addedDate.toDate()
                        }
                    }
                    commit('set_user_data', userData)
                    commit('set_processing', false)
                })
                .catch(() => {
                    commit('set_processing', false)
                })
        },
        add_user_book({commit, getters}, payload){
            commit('set_processing', true)
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let book = {
                addedDate: new Date,
                parts: {},
            }
            userDataRef.set(
                {
                    books: {
                        [payload]: book
                    }
                },
                {merge: true}
            )
                .then(() => {
                    commit('add_user_book', {bookId: payload, book: book})
                    commit('set_processing', false)
                })
                .catch(() => {
                    commit('set_processing', false)
                })
        },
        update_user_book_part_stats({commit, getters}, payload){
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let timestemp = new Date()
            if (!getters.userData.books[payload.bookId].parts[payload.partId]) {
                userDataRef.update({
                    [`books.${payload.bookId}.parts.${payload.partId}.addedDate`]: timestemp
                })
                    .then(() => commit('add_user_book_part'),
                        {bookId: payload.bookId, partId: payload.partId, tamestemp: timestemp})
            }

                userDataRef.update({
                    [`books.${payload.bookId}.parts.${payload.partId}.lastOpenDate`]: timestemp
                })
                    .then(() => commit('add_user_book_part_last_open_date'),
                        {bookId: payload.bookId, partId: payload.partId, tamestemp: timestemp})
        }
    }
})