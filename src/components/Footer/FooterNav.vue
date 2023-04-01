<template>
  <nav class="footer__nav">
    <ul class="nav__items">
      <li class="nav__item">
        <a href="#">Каталог</a>
      </li>
      <li class="nav__item">
        <a href="#">Доставка</a>
      </li>
      <li class="nav__item">
        <a href="#">Оплата</a>
      </li>
      <li class="nav__item">
        <a href="#">Контакты</a>
      </li>
      <li class="nav__item">
        <a href="#">О компании</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1400px) {
    .nav__items {
        text-align: center;
    }
    .nav__item {
        display: block;
        margin-bottom: 15px;
    }
}
</style>
