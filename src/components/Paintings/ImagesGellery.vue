<template>
  <section class="gallery">
    <div class="image__wrapper">
      <span class="switch-left" @click="switchLeft()">&#60;</span>
      <img
        :src="require(`@/assets/img/${activeImage.src}.png`)"
        class="image_big"
        alt=""
      />
      <span class="switch-right" @click="switchRight()">&#62;</span>
    </div>

    <div class="gallery__unactive-images">
      <div v-for="(image, index) in mutableImages" v-bind:key="index">
        <img
          :src="require(`@/assets/img/${image.src}.png`)"
          alt=""
          class="image_small"
          :class="{ image_active: image.isActive }"
          @click="setAsActiveByClick(image.id)"
        />
        <span class="dot" :class="{dot_active: image.isActive}" @click="setAsActiveByClick(image.id)">&#183;</span>
      </div>
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
    switchRight() {
      let index = this.mutableImages.findIndex(
        (image) => image.isActive == true
      );
      if (index == this.mutableImages.length - 1) {
        this.mutableImages[0].isActive = true;
      } else {
        this.mutableImages[index + 1].isActive = true;
      }
      this.mutableImages[index].isActive = false;
    },
    switchLeft() {
      let index = this.mutableImages.findIndex(
        (image) => image.isActive == true
      );
      if (index == 0) {
        this.mutableImages[this.mutableImages.length - 1].isActive = true;
      } else {
        this.mutableImages[index - 1].isActive = true;
      }
      this.mutableImages[index].isActive = false;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  background-color: #efeeee;
  padding: 0 20px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.gallery__unactive-images {
  width: 100%;
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

.switch-left,
.switch-right {
  display: none;
  cursor: pointer;
  transition: color 0.2s linear;
  &:hover {
    color: #5a17cc;
  }
}

.switch-left {
  padding-right: 3px;
}

.switch-right {
  padding-left: 3px;
}

.dot {
  display: none;
  font-size: 50px;
  color: #989898;
  cursor: pointer;
}

.dot_active {
  color: #5a17cc;
}

@media screen and (max-width: 768px) {
  .image_big {
    width: 400px;
  }

  .gallery__content {
    height: 350px;
  }
}

@media screen and (max-width: 610px) {
  .gallery {
    height: 300px;
    align-items: center;
    justify-content: center;
    img {
      vertical-align: middle;
    }
  }
  .switch-left,
  .switch-right {
    display: inline;
  }
  .image_small {
    display: none;
  }
  .image_big {
    width: 330px;
  }
  .dot {
    display: inline;
  }
}

@media screen and (max-width: 420px) {
  .image_big {
    width: 270px;
  }
}

@media screen and (max-width: 370px) {
  .image_big {
    width: 235px;
  }
}
</style>
