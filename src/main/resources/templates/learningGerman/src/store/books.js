export default({
    state: {
        books: [
            {
                id: 'id1',
                title: "title1",
                description: 'Part I. Book 1',
                image: 'image1',
                parts: 7,
                level: ['B2','C1'],
                rating: 4,
                ratingsCount: 111,
                youtube_playlist_id: 'youtube_playlist_id1'
            },
            {
                id: 'id2',
                title: "title2",
                description: 'Part II. Book 1',
                image: 'image2',
                parts: 7,
                level: ['B1','B2'],
                rating: 3,
                ratingsCount: 21,
                youtube_playlist_id: 'youtube_playlist_id2'
            },
            {
                id: 'id3',
                title: "title2",
                description: 'Part III. Book 1',
                image: 'image3',
                parts: 7,
                level: ['A2'],
                rating: 1.5,
                ratingsCount: 67,
                youtube_playlist_id: 'youtube_playlist_id3'
            },
        ],
    },
    mutations: {
        set_books(state, payload){
            state.books = payload
        },
    },
    getters: {
        getBooks: (state) => state.books,
    }
})