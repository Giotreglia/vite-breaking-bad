<script>
import axios from 'axios';
import { store } from './store'
import cardList from './components/cardList.vue';
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';
import Loading from './components/Loading.vue';

export default {
  components: {
    cardList,
    MyHeader,
    Search,
    Loading

  },

  data() {
    return {
      store,
      isContained: false
    }
  },
  methods: {
    getCards() {

      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

      if (store.optionSelected != 'all') {
        urlApi += `?&archetype=${store.optionSelected}`
      }

      /* ?&archetype=${} */

      axios.get(urlApi)
        .then(response => {
          this.store.cardList = response.data.data;
          this.store.loading = false;
        })
    }
  },
  created() {
    this.getCards();

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then(response => {
        response.data.forEach(element => {
          if (store.searchOptions.includes(element.archetype_name)) {
            this.isContained = true;
          } else {
            store.searchOptions.push(element.archetype_name);
          }
        });
      });

  }
}
</script>

<template>
  <Loading />

  <MyHeader />
  <main>
    <Search @doFilter="getCards" />
    <cardList />
  </main>
</template>

<style scoped lang="scss">
@use './styles/general.scss';

main {
  background-color: rgb(212, 143, 56);
  height: 100vh;
}
</style>
