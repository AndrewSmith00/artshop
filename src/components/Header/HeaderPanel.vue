<template>
  <div class="header">
    <div class="header__content">
      <header-nav></header-nav>
      <header-search></header-search>
    </div>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import HeaderSearch from './HeaderSearch.vue';

export default {
  name: "HeaderPanel",
  components: {HeaderSearch, HeaderNav},
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
