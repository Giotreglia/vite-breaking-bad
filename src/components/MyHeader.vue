<script>
export default {
    name: 'MyHeader',
}
</script>

<template>
    <header>
        <img src="../assets/favicon.png" alt="logo yugioh">
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';

header {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    gap: 20px;

    img {
        height: 100%;
    }
}
</style>