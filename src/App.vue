<template>
  <div id="app">
    <header-panel></header-panel>
    <paintings-list></paintings-list>
    <footer-panel></footer-panel>
  </div>
</template>

<script>
import HeaderPanel from './components/Header/HeaderPanel.vue';
import PaintingsList from './components/Paintings/PaintingsList.vue';
import FooterPanel from './components/Footer/FooterPanel.vue';
export default {
  name: "App",
  components: {HeaderPanel, PaintingsList, FooterPanel}
};
</script>

<style lang="scss">
@import './assets/style/style.scss'
</style>
