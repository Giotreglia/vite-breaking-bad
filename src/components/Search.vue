<script>
import { store } from '../store.js'

export default {
    name: 'Search',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <nav>
        <select name="type" id="type-select" @change="$emit('doFilter')" v-model="store.optionSelected">
            <option :value="type" v-for="(type, i) in store.searchOptions" :key="i">{{ type }}</option>
        </select>
    </nav>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';

nav {
    height: 100px;
    max-width: 1170px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 20px;

    select {
        padding: 10px 20px;
        width: 200px;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
    }
}
</style>