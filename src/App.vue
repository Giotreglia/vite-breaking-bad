<script>
import axios from 'axios';
import { store } from './store'

export default {
  components: {

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
        })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template></template>

<style scoped lang="scss"></style>
