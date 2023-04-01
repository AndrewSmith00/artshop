<template>
  <transition>
    <div
      class="modal-backdrop"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
      @click="close()"
      @click.stop=""
    >
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop=""
      >
        <button
          type="button"
          class="button_cross"
          @click="close()"
          aria-label="Close modal"
        >
          x
        </button>
        <images-gellery :images="painting.images"></images-gellery>
      </div>
    </div>
  </transition>
</template>

<script>
import ImagesGellery from "./ImagesGellery.vue";
export default {
  name: "PaintingModal",
  props: ["painting"],
  components: { ImagesGellery },
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
  box-shadow: 2px 2px 20px 1px;
}

.button_cross {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  float: right;
  padding: 5px 8px;
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
