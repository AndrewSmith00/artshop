<template>
  <section class="gallery">
    <img
      v-for="(image, index) in sortedImages"
      v-bind:key="index"
      :src="require(`@/assets/img/${image.src}.png`)"
      alt=""
      class="gallery__image"
      :class="{image_active: image.isActive}"
      @click="setAsActive(image.id)"
    />
  </section>
</template>

<script>
export default {
  name: "ImagesGallery",
  props: ["images"],
  computed: {
    sortedImages() {
        let sortedImages = [];
        sortedImages.push(this.mutableImages.find(image => image.isActive == true));
        for (let index = 0; index < this.mutableImages.length; index++) {
            if (this.mutableImages[index].isActive == false) {
                sortedImages.push(this.mutableImages[index]);
            }
        }
        return sortedImages;
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
    setAsActive(imageId) {
        for (let image of this.mutableImages) {
            image.isActive = false;
        }
        this.mutableImages.find(image => image.id == imageId).isActive = true;
    }
  },
};
</script>

<style lang="scss">
.gallery__image {
    width: 80px;
    cursor: pointer;
}

.image_active {
    width: 300px;
}
</style>