import { reactive } from 'vue';

export const store = reactive(
    {
        cardList: [],
        loading: true,
        searchOptions: ['all',],
        optionSelected: 'all'
    }
);