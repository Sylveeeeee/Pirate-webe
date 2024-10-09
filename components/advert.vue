<template>
  <div class="slider">
    <div class="slider-images">
      <img :src="images[currentIndex]" alt="Slider Image" />
    </div>
    <button class="" @click="prevImage"> < </button>
    <button class="" @click="nextImage"> > </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/naraka2.jpg',
        '/wkk.jpg',
        '/apex.jpg'
      ]
    };
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  },
  mounted() {
    setInterval(this.nextImage, 4000); 
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 1100px;
  margin: 0 auto;
}

.slider-images img {
  width: 100%;
  display: block;
  height: 600px;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  color: aqua;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
  margin: 10px;
}

button:nth-of-type(1) {
  left: 0;
}

button:nth-of-type(2) {
  right: 0;
}
</style>
