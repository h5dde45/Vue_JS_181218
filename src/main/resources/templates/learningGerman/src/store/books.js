export default({
    state: {
        books: [
            {
                id: 'reyh45565trgtretgr',
                title: "Asd fegh",
                description: 'Part I. Book 1',
                image: 'dffhrtujmky7ittr',
                parts: 7,
                level: ['B2','C1'],
                rating: 4,
                ratingsCount: 111,
                youtube_playlist_id: 'rthntrhntfhnrt'
            },
            {
                id: 'reyh45565trgtrreetgr',
                title: "Qwe  rty",
                description: 'Part II. Book 1',
                image: 'dffhrretyhmky7ittr',
                parts: 7,
                level: ['B1','B2'],
                rating: 3,
                ratingsCount: 21,
                youtube_playlist_id: 'rejryerttryht'
            },
            {
                id: 'reyh45565reterrreetgr',
                title: "Zxc  rty",
                description: 'Part III. Book 1',
                image: 'dffhrretyhiol7ittr',
                parts: 7,
                level: ['A2'],
                rating: 1.5,
                ratingsCount: 67,
                youtube_playlist_id: 'rejryewrttetrtryht'
            },
        ],
    },
    mutations: {
        set_book(state, payload){
            state.books = payload
        },
    },
    getters: {
        getBooks: (state) => state.books,
    }
})