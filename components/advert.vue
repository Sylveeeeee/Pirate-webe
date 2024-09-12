<template>
  <div class="slider">
    <div class="slider-images">
      <img :src="images[currentIndex]" alt="Slider Image" />
    </div>
    <button @click="prevImage">PREV</button>
    <button @click="nextImage">NEXT</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/forza.jpg',
        'https://via.placeholder.com/600x300?text=Image+2',
        'https://via.placeholder.com/600x300?text=Image+3'
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
    setInterval(this.nextImage, 3000); // Change image every 3 seconds
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
}

button:nth-of-type(1) {
  left: 0;
}

button:nth-of-type(2) {
  right: 0;
}
</style>
