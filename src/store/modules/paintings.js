const state = {
    paintings: [
        {
            id: 0,
            name: 'Рождение Венеры',
            author: 'Сандро Боттичелли',
            description: 'Картина итальянского художника тосканской школы Сандро Боттичелли.',
            previousPrice: '2 000 000 $',
            currentPrice: '1 000 000 $',
            isInBasket: false,
            isBought: false,
            images: [
                {
                    id: 0,
                    src: 'BirthOfVenus',
                },
                {
                    id: 1,
                    src: 'venus2',
                },
                {
                    id: 2,
                    src: 'venus3',
                },
                {
                    id: 3,
                    src: 'venus4',
                },
            ],
        },
        {
            id: 1,
            name: 'Тайная вечеря',
            author: 'Леонардо Да Винчи',
            description: 'Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками.',
            previousPrice: null,
            currentPrice: '3 000 000 $',
            isInBasket: false,
            isBought: false,
            images: [
                {
                    id: 0,
                    src: 'LastSupper',
                },
                {
                    id: 1,
                    src: 'supper2',
                },
                {
                    id: 2,
                    src: 'supper3',
                },
                {
                    id: 3,
                    src: 'supper4',
                },
            ],
        },
        {
            id: 2,
            name: 'Сотворение Адама',
            author: 'Микеланджело',
            description: 'Фреска Микеланджело, написанная около 1511 года/',
            previousPrice: '6 000 000 $',
            currentPrice: '5 000 000 $',
            isInBasket: false,
            isBought: false,
            images: [
                {
                    id: 0,
                    src: 'CreationOfAdam',
                },
                {
                    id: 1,
                    src: 'adam2',
                },
                {
                    id: 2,
                    src: 'adam3',
                },
                {
                    id: 3,
                    src: 'adam4',
                },
            ],
        },
        {
            id: 3,
            name: 'Урок анатомии',
            author: 'Рембрандт',
            description: 'Картина Рембрандта, написанная в 1632 году.',
            previousPrice: null,
            currentPrice: null,
            isInBasket: false,
            isBought: true,
            images: [
                {
                    id: 0,
                    src: 'AnatomyLesson',
                },
                {
                    id: 1,
                    src: 'anatomy2',
                },
                {
                    id: 2,
                    src: 'anatomy3',
                },
                {
                    id: 3,
                    src: 'anatomy4',
                },
            ],
        },
    ],
    searchQuery: '',
};

const getters = {
    GET_FILTERED_PAINTINGS: (state) => {
        return state.paintings.filter(painting =>
            painting.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || painting.author.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
};

const mutations = {
    TOGGLE_IN_BASKET_STATE(state, paintingId) {
        let painting = state.paintings.find(painting => painting.id == paintingId)
        painting.isInBasket = !painting.isInBasket;
    },
    SET_SEARCH_QUERY(state, searchQuery) {
        state.searchQuery = searchQuery;
    },
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
}

