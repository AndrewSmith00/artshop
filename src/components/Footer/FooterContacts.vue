<template>
  <section class="footer__contacts">
    <p class="footer__contact">
      <img src="@/assets/img/phone.svg" alt="" />
      <a href="tel:88125555555">+7 (812) 555-55-55</a>
    </p>
    <p class="footer__contact">
      <img src="@/assets/img/map.svg" alt="" />
      <a href="https://goo.gl/maps/f99aVi1xmmigTiKu5">г. Санкт-Петербург, ул. Ефимова, 3</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>

<style lang="scss">
.footer__contacts {
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    vertical-align: middle;
  }
}
@media screen and (max-width: 1400px) {
  .footer__contacts {
    flex-direction: column;
  }
  .footer__contact {
    padding-bottom: 15px;
    text-align: center;
  }
}
</style>
