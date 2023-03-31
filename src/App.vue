<template>
  <div id="app">
    <header-panel></header-panel>
    <paintings-list></paintings-list>
  </div>
</template>

<script>
import HeaderPanel from './components/Header/HeaderPanel.vue';
import PaintingsList from './components/Paintings/PaintingsList.vue';
export default {
  name: "App",
  components: {HeaderPanel, PaintingsList}
};
</script>

<style lang="scss">
@import './assets/style/style.scss'
</style>
