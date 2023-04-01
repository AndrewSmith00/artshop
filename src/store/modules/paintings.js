const state = {
    paintings: [
        {
            id: 0,
            name: 'Рождение Венеры',
            author: 'Сандро Боттичелли',
            previousPrice: '2 000 000 $',
            currentPrice: '1 000 000 $',
            isInBasket: false,
            isBought: false,
            imgSource: 'BirthOfVenus',
        },
        {
            id: 1,
            name: 'Тайная вечеря',
            author: 'Леонардо Да Винчи',
            previousPrice: null,
            currentPrice: '3 000 000 $',
            isInBasket: false,
            isBought: false,
            imgSource: 'LastSupper',
        },
        {
            id: 2,
            name: 'Сотворение Адама',
            author: 'Микеланджело',
            previousPrice: '6 000 000 $',
            currentPrice: '5 000 000 $',
            isInBasket: false,
            isBought: false,
            imgSource: 'CreationOfAdam',
        },
        {
            id: 3,
            name: 'Урок анатомии',
            author: 'Рембрандт',
            previousPrice: null,
            currentPrice: null,
            isInBasket: false,
            isBought: true,
            imgSource: 'AnatomyLesson',
        },
    ],
    searchQuery: '',
};

const getters = {
    GET_FILTERED_PAINTINGS: (state) => {
        return state.paintings.filter(painting => 
            painting.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||  painting.author.toLowerCase().includes(state.searchQuery.toLowerCase()))
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
    REINIT_PAINTINGS_LIST(state) {
        state.paintings =      [
            {
                id: 0,
                name: 'Рождение Венеры',
                author: 'Сандро Боттичелли',
                previousPrice: '2 000 000 $',
                currentPrice: '1 000 000 $',
                isInBasket: false,
                isBought: false,
                imgSource: 'BirthOfVenus',
            },
            {
                id: 1,
                name: 'Тайная вечеря',
                author: 'Леонардо Да Винчи',
                previousPrice: null,
                currentPrice: '3 000 000 $',
                isInBasket: false,
                isBought: false,
                imgSource: 'LastSupper',
            },
            {
                id: 2,
                name: 'Сотворение Адама',
                author: 'Микеланджело',
                previousPrice: '6 000 000 $',
                currentPrice: '5 000 000 $',
                isInBasket: false,
                isBought: false,
                imgSource: 'CreationOfAdam',
            },
            {
                id: 3,
                name: 'Урок анатомии',
                author: 'Рембрандт',
                previousPrice: null,
                currentPrice: null,
                isInBasket: false,
                isBought: true,
                imgSource: 'AnatomyLesson',
            },
        ]
    }
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
}


