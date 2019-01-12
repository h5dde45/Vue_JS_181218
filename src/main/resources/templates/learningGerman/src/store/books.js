export default({
    state: {
        books: [
            {
                id: 'id1',
                title: "title1",
                description: 'Part I. Book 1',
                image: 'image1',
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 111,
                youtube_playlist_id: 'youtube_playlist_id1',
                parts: [
                    {
                        id: 'partId1',
                        title: 'Kap1',
                        youtube_id: 'youtube_id1'
                    },
                    {
                        id: 'partId2',
                        title: 'Kap2',
                        youtube_id: 'youtube_id2'
                    },
                    {
                        id: 'partId3',
                        title: 'Kap3',
                        youtube_id: 'youtube_id3'
                    },
                    {
                        id: 'partId4',
                        title: 'Kap4',
                        youtube_id: 'youtube_id4'
                    }
                ]
            },
            {
                id: 'id2',
                title: "title2",
                description: 'Part II. Book 1',
                image: 'image2',
                level: ['B1', 'B2'],
                rating: 3,
                ratingsCount: 21,
                youtube_playlist_id: 'youtube_playlist_id2',
                parts: [
                    {
                        id: 'partId1',
                        title: 'Kap1',
                        youtube_id: 'youtube_id1'
                    },
                    {
                        id: 'partId2',
                        title: 'Kap2',
                        youtube_id: 'youtube_id2'
                    },
                    {
                        id: 'partId3',
                        title: 'Kap3',
                        youtube_id: 'youtube_id3'
                    },
                    {
                        id: 'partId4',
                        title: 'Kap4',
                        youtube_id: 'youtube_id4'
                    }
                ]
            },
            {
                id: 'id3',
                title: "title3",
                description: 'Part III. Book 1',
                image: 'image3',
                level: ['A2'],
                rating: 1.5,
                ratingsCount: 67,
                youtube_playlist_id: 'youtube_playlist_id3',
                parts: [
                    {
                        id: 'partId1',
                        title: 'Kap1',
                        youtube_id: 'youtube_id1'
                    },
                    {
                        id: 'partId2',
                        title: 'Kap2',
                        youtube_id: 'youtube_id2'
                    },
                    {
                        id: 'partId3',
                        title: 'Kap3',
                        youtube_id: 'youtube_id3'
                    },
                    {
                        id: 'partId4',
                        title: 'Kap4',
                        youtube_id: 'youtube_id4'
                    }
                ]
            },
        ],
        bookParts: [
            {
                bookId: 'id1',
                bookPartId: 'partId1',
                bookTitle: 'Part I. Book 1',
                partTile: 'Kap1',
                youtube_id: 'youtube_id1',
                content: [
                    {
                        sentences: [
                            {
                                origText: 'Once in the cold winter',
                                transText: 'Однажды в студеную зимнюю пору'
                            },
                            {
                                origText: 'The wolf ran to an izba and cried by a thick voice',
                                transText: 'Волк побежал к избушке и закричал толстым голосом'
                            },
                            {
                                origText: 'Dogs are angry, shepherd is awake',
                                transText: 'Собаки злы, пастух не спит'
                            },
                        ]
                    },
                    {
                        sentences: [
                            {
                                origText: 'Once in the cold winter2',
                                transText: 'Однажды в студеную зимнюю пору2'
                            },
                            {
                                origText: 'The wolf ran to an izba and cried by a thick voice2',
                                transText: 'Волк побежал к избушке и закричал толстым голосом2'
                            },
                            {
                                origText: 'Dogs are angry, shepherd is awake2',
                                transText: 'Собаки злы, пастух не спит2'
                            },
                        ]
                    },
                ],
                words:[
                    {
                        origWord:'Hello1',
                        transWord: 'Привет1'
                    },
                    {
                        origWord:'Hello2',
                        transWord: 'Привет2'
                    },
                    {
                        origWord:'Hello3',
                        transWord: 'Привет3'
                    },
                    {
                        origWord:'Hello4',
                        transWord: 'Привет4'
                    }
                ]
            }
        ]
    },
    mutations: {
        set_books(state, payload){
            state.books = payload
        },
    },
    getters: {
        getBooks: (state) => state.books,
        getParts: (state) => state.bookParts,
    }
})