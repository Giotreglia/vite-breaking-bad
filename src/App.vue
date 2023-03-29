<script>
import axios from 'axios';
import { store } from './store'
import cardList from './components/cardList.vue';
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';

export default {
  components: {
    cardList,
    MyHeader,
    Search

  },

  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=Magician')
        .then(response => {
          console.log(response.data);
          this.store.cardList = response.data.data;
          console.log(this.store.cardList);
        })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <MyHeader />
  <main>
    <Search />
    <cardList />
  </main>
</template>

<style scoped lang="scss">
@use './styles/general.scss';

main {
  background-color: rgb(212, 143, 56);
}
</style>
