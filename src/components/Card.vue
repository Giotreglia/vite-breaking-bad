<script>
export default {
    name: 'Card',
    props: {
        name: String,
        image: String,
        type: String
    }
}
</script>
<template>
    <div class="image-wrapper">
        <img :src="image" :alt="name">
    </div>
    <h5 class="card-name">{{ name }}</h5>
    <h5>{{ type }}</h5>
</template>
<style scoped lang="scss">
@use '../styles/general.scss';

.image-wrapper {
    width: 100%;
    height: 80%;

    img {
        width: 100%;
        height: 100%;
    }

}

.card-name {
    display: inline-block;
    color: white;
    font-weight: bold;
    margin: 10px;
    text-transform: uppercase;
}
</style>