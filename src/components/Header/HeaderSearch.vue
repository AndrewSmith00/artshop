<template>
    <form class="header__search" @submit="search" @submit.prevent="">
      <input
        type="text"
        class="search__input"
        placeholder="Поиск по названию картины"
        v-model="searchQuery"
        onclick="this.placeholder=''"
        onblur="this.placeholder='Поиск по названию картины'"
      />
      <button type="submit" class="button search__button">Найти</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "HeaderSearch",
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    ...mapMutations(['SET_SEARCH_QUERY']),
    search() {
      this.$store.commit('SET_SEARCH_QUERY', this.searchQuery)
    }
  }
};
</script>

<style lang="scss">
.header__search {
    display: flex;
}

.search__input,
.search__button {
  border-radius: 0;
}

.search__input {
  height: 48px;
  width: 15vw;
  padding: 14px 16px;
  border: 1px solid #e1e1e1;
}

@media screen and (max-width: 930px) {
  .search__input {
    width: 25vw;
  }
  .search__button {
    width: 10vw;
  }
}
</style>
