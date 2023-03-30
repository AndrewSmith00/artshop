<template>
  <div id="app">
    <header-panel></header-panel>
  </div>
</template>

<script>
import HeaderPanel from './components/Header/HeaderPanel.vue';
export default {
  name: "App",
  components: {HeaderPanel}
};
</script>

<style lang="scss">
@import './assets/style.scss'
</style>
