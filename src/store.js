import { reactive } from 'vue';

export const store = reactive(
    {
        cardList: [],
        search: '',
        loading: true
    }
);