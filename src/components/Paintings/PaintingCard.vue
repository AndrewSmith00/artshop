<template>
  <section class="painting-card__wrapper">
    <div class="painting-card">
      <img :src="require(`@/assets/img/${painting.imgSource}.png`)" alt="" />
      <section class="painting-card__info">
        <h2 class="painting-card__header">
          «{{ painting.name }}» <br />
          {{ painting.author }}
        </h2>
        <section class="painting-card__price">
          {{ painting.currentPrice }}
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "PaintingCard",
  props: ["painting"],
};
</script>

<style lang="scss">
.painting-card {
  width: 90%;
  height: 90%;
  img {
    width: 100%;
  }
  margin: auto;
  border: 1px solid #e1e1e1;
  margin-bottom: 40px;
}

.painting-card__info {
  padding: 12px 24px;
}

@media screen and (max-width: 768px) {
  .painting-card {
    width: 100%;

  }
}
</style>
