<template>
  <section class="painting-card__wrapper" @click="openModal()">
    <div class="painting-card" :class="{ card_disabled: painting.isBought }">
      <img
        :src="require(`@/assets/img/${painting.imgSource}.png`)"
        :alt="painting.name"
        :title="painting.name"
      />
      <section class="painting-card__info">
        <h2 class="painting-card__header">
          «{{ painting.name }}» <br />
          {{ painting.author }}
        </h2>
        <section class="painting-card__price">
          <div class="price__prices">
            <p class="previous-price">
              {{ painting.previousPrice }}
            </p>
            <p>
              {{ painting.currentPrice }}
            </p>
          </div>
          <button
            v-if="!painting.isBought"
            type="button"
            class="button card__button"
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
        </section>
        <p v-if="painting.isBought">Продана на аукционе</p>
      </section>
    </div>
    <painting-modal v-show="isModalOpen" @close="isModalOpen = false" :painting="painting"></painting-modal>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PaintingCard",
  props: ["painting"],
  components: {
    PaintingModal: () => import("./PaintingModal.vue"),
  },
  data() {
    return {
      loading: false,
      isModalOpen: false,
    };
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
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style lang="scss">
.painting-card {
  width: 90%;
  height: 90%;
  & > img {
    width: 100%;
  }
  margin: auto;
  border: 1px solid #e1e1e1;
  margin-bottom: 40px;
  cursor: pointer;
}

.card_disabled {
  opacity: 50%;
}

.painting-card__info {
  padding: 12px 24px;
}

.painting-card__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  img {
    vertical-align: middle;
  }
}

.previous-price {
  text-decoration: line-through;
  color: #a0a0a0;
}

@media screen and (max-width: 768px) {
  .painting-card {
    width: 100%;
  }
}
</style>
