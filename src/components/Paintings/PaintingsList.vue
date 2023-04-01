<template>
  <main class="paintings">
    <h1 class="paintings__header">Картины эпохи возрождения</h1>
    <article class="paintings__list">
      <painting-card
        v-for="(painting, index) in paintings"
        v-bind:key="index"
        :painting="painting"
      ></painting-card>
    </article>
  </main>
</template>

<script>
import PaintingCard from "./PaintingCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "PaintingsList",
  components: { PaintingCard },
  computed: {
    ...mapGetters(["GET_FILTERED_PAINTINGS"]),
    paintings() {
      return this.GET_FILTERED_PAINTINGS;
    },
  },
  data() {
    return {
      isModalOpen: false,
      openedPaintingId: null,
    };
  },
  created() {
    // this.$store.commit('REINIT_PAINTINGS_LIST')
    this.$store.commit('SET_SEARCH_QUERY', '');
  }
};
</script>

<style lang="scss">
.paintings {
  width: 80%;
  margin: 0 auto 100px auto;
}

.paintings__header {
  margin: 45px 0 39px 0;
}

.paintings__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

@media screen and (max-width: 1400px) {
  .paintings__list {
    grid-template-columns: 1fr 1fr;
  }
  .paintings {
    margin-bottom: 350px;
  }
}

@media screen and (max-width: 768px) {
    .paintings__list {
        grid-template-columns: 1fr;
    }
}
</style>
