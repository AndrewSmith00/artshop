<template>
    <nav class="header__nav">
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
  name: "HeaderNav",
};
</script>

<style lang="scss">
.nav__items {
  list-style-type: none;
}

.nav__item {
  display: inline-block;
  padding-right: 40px;
}

@media screen and (max-width: 1200px) {
  .nav__item {
    padding-right: 20px;
  }
}

@media screen and (max-width: 930px) {
  .header__nav {
    display: none;
  }
}
</style>
