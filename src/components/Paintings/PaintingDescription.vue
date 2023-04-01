<template>
  <article class="painting-description">
    <h2 class="description__name">
      «{{ painting.name }}» <br />
      {{ painting.author }}
    </h2>
    <p class="description">{{ painting.description }}</p>
    <section class="description__prices">
      <p class="previous-price">
        {{ painting.previousPrice }}
      </p>
      <p>
        {{ painting.currentPrice }}
      </p>
      <button
        v-if="!painting.isBought"
        type="button"
        class="button card__button description__button"
        :class="{ button_inBasket: painting.isInBasket }"
        :disabled="this.loading"
        @click="addToBasket(painting.id)"
        @click.stop=""
      >
        <span v-if="!painting.isInBasket && !loading"> Купить </span>
        <span v-if="painting.isInBasket && !loading">
          <img src="@/assets/img/check.svg" alt="" width="15" />
          В корзине
        </span>
        <img
          v-if="loading"
          src="@/assets/img/spinner.gif"
          alt="Загрузка"
          height="40"
        />
      </button>
      <p v-if="painting.isBought">Продана на аукционе</p>
    </section>
  </article>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "PaintingDescription",
  props: ["painting"],
  data() {
    return {
        loading: false,
    }
  },
  methods: {
    ...mapMutations(["TOGGLE_IN_BASKET_STATE"]),
    addToBasket(paintingId) {
      this.loading = true;
      setTimeout(() => {
        this.TOGGLE_IN_BASKET_STATE(paintingId);
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.painting-description {
  margin: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description__prices {
  margin-top: 15px;
  text-align: right;
}

.description__button {
    margin-top: 15px;
    width: 60%;
}

.description {
    font-size: 14px;
    margin-top: 30px;
}

@media screen and (max-width: 576px) {
    .description__name {
        font-size: 16px;
    }
    .description {
        font-size: 14px;
    }
}
</style>
