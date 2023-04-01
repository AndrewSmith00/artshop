<template>
  <section class="gallery">
    <img
      :src="require(`@/assets/img/${activeImage.src}.png`)"
      class="image_big"
      alt=""
    />
    <div class="gallery__unactive-images">
      <img
        v-for="(image, index) in mutableImages"
        v-bind:key="index"
        :src="require(`@/assets/img/${image.src}.png`)"
        alt=""
        class="image_small"
        :class="{ image_active: image.isActive }"
        @click="setAsActiveByClick(image.id)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ImagesGallery",
  props: ["images"],
  computed: {
    activeImage() {
      return this.mutableImages.find((image) => image.isActive == true);
    },
  },
  data() {
    return {
      mutableImages: this.mutateImages(),
    };
  },
  methods: {
    mutateImages() {
      let newImages = JSON.parse(JSON.stringify(this.images));
      newImages[0].isActive = true;
      for (let index = 1; index < newImages.length; index++) {
        newImages[index].isActive = false;
      }
      return newImages;
    },
    setAsActiveByClick(imageId) {
      for (let image of this.mutableImages) {
        image.isActive = false;
      }
      this.mutableImages.find((image) => image.id == imageId).isActive = true;
    },
    setAsActiveByRightArrow() {},
  },
};
</script>

<style lang="scss">
.gallery {
  background-color: #efeeee;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.gallery__unactive-images {
  display: flex;
  justify-content: space-evenly;
}

.image_small {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: 3px solid #beacac;
  border-radius: 10px;
  &:hover {
    opacity: 0.8;
  }
}

.image_active {
  border-color: rgb(92, 92, 219);
}

.image_big {
  width: 500px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .image_big {
    width: 300px;
  }
  .gallery__unactive-images {
    display: none;
  }
  .gallery__content {
    height: 350px;
  }
}

@media screen and (max-width: 610px) {
  .image_big {
    width: 200px;
  }
  .image_small {
    width: 40px;
    height: 40px;
  }
  .gallery__content {
    height: 300px;
  }
}
</style>
