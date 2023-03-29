<script>
import { store } from '../store.js';

export default {
    name: 'Loading',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="loading" v-if="store.loading">
        <img src="../assets/favicon.png" alt="logo yugioh">
        <h1>Loading, attendere</h1>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';

.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>