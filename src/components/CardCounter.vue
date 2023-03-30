<script>
export default {
    name: 'CardCounter',
    props: {
        cardCount: String
    }

}
</script>
<template>
    <div class="counter-container">
        <h3>La tua ricerca ha prodotto {{ cardCount }} risultati</h3>
    </div>
</template>
<style scoped lang="scss">
@use '../styles/general.scss';

.counter-container {
    max-width: 1170px;
    margin: auto;
    height: 80px;
    background-color: black;
    padding: 0 20px;
}

h3 {
    color: white;
    line-height: 80px;
}
</style>