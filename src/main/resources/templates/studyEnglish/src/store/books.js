export default ({
    state: {
        books: [
            {
                id: 'qwe1',
                title: 'Book name.',
                description: "Part 1. Book 1",
                image: 'qwe',
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 111,
                youtube_playlist_id: 'zxc1'
            },
            {
                id: 'qwe2',
                title: 'Book name.',
                description: "Part 2. Book 1",
                image: 'asd2',
                parts: 7,
                level: ['B1', 'B2'],
                rating: 1.5,
                ratingsCount: 73,
                youtube_playlist_id: 'zxc2'
            },
            {
                id: 'qwe3',
                title: 'Book name.',
                description: "Part 3. Book 1",
                image: 'asd3',
                parts: 7,
                level: ['A2'],
                rating: 3,
                ratingsCount: 45,
                youtube_playlist_id: 'zxc3'
            },
        ]
    },
    getters: {
        getBooks: (state) => state.books
    },
    mutations: {
        set_books(state, payload){

        }
    },
    actions: {}
})