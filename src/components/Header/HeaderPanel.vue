<template>
  <header class="header">
    <div class="header__content">
      <hamburger-menu></hamburger-menu>
      <header-nav></header-nav>
      <header-search></header-search>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import HeaderSearch from './HeaderSearch.vue';
import HamburgerMenu from './HamburgerMenu.vue';

export default {
  name: "HeaderPanel",
  components: {HeaderSearch, HeaderNav, HamburgerMenu},
  methods: {
    search() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 96px;
  border-bottom: 1px solid #e1e1e1;
}

.header__content {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
