<script>
import { store } from '../store.js'
import Card from './Card.vue'

export default {
    name: 'cardList',
    data() {
        return {
            store
        }
    },
    components: {
        Card
    }
}
</script>

<template>
    <div class="cards-container">
        <div class="card-wrapper" v-for="(card, index) in store.cardList" :key="index">
            <Card :name="card.name" :image="card.card_images[0].image_url" :type="card.type" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';

.cards-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1170px;
    height: 100%;
    margin: auto;
    background-color: white;
    padding: 20px;
    overflow-y: auto;
}

.card-wrapper {
    width: calc(100% / 2 - 20px);
    height: 350px;
    text-align: center;
    background-color: rgb(212, 143, 56);
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
}

@media all and (min-width: 576px) {
    .card-wrapper {
        width: calc(100% / 3 - 20px);
    }
}

@media all and (min-width: 768px) {
    .card-wrapper {
        width: calc(100% / 4 - 20px);
    }
}

@media all and (min-width: 992px) {
    .card-wrapper {
        width: calc(100% / 5 - 20px);
    }
}
</style>