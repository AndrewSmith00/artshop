<template>
  <footer class="footer">
    <section class="footer__content">
      <footer-nav></footer-nav>
      <footer-contacts></footer-contacts>
    </section>
  </footer>
</template>

<script>
import FooterNav from "./FooterNav.vue";
import FooterContacts from "./FooterContacts.vue";

export default {
  name: "FooterPanel",
  components: { FooterNav, FooterContacts },
};
</script>

<style lang="scss">
.footer {
  background-color: #eceaea;
  color: #555555;
  display: flex;
  margin-top: 0;
  padding: 38px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer__content {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1400px) {
    .footer__content {
        flex-direction: column;
        font-size: 18px;
    }
}
</style>
