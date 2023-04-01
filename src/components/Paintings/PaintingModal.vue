<template>
  <transition>
    <div
      class="modal-backdrop"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <div
        @click.stop=""
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <div class="modal-header__content">
            <div class="modal__navigation-buttons"></div>
            <button
              type="button"
              class="button_cross"
              @click="close()"
              aria-label="Close modal"
            >
              x
            </button>
          </div>
        </header>

        <section class="modal-body" id="modalDescription"></section>

        <footer class="modal-footer">
          <div class="modal-footer__content">
            <button
              type="button"
              class="button"
              @click="close()"
              aria-label="Close modal"
            >
              Закрыть
            </button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PaintingModal",
  props: ["painting"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.modal {
  background: #ffffff;
  font-size: 1.8rem;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.modal-header,
.modal-footer {
  display: flex;
  height: 15%;
}
.modal-header {
  padding: 15px;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-header__content {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.modal-footer {
  padding: 15px 0;
  border-top: 1px solid #eeeeee;
}
.modal-footer__content {
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
}

.button_cross {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.button_cross:hover {
  color: #6f6f6f;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.05s ease-out;
}
</style>
