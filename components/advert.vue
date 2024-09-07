<template>
    <div id="app">
<div class="slider">
<div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
<div class="slide" v-for="(image, index) in images" :key="index">
<img :src="image" :alt="'Slide ' + (index + 1)">
</div>
</div>
<button @click="prevSlide" class="prev">B</button>
<button @click="nextSlide" class="next">N</button>
</div>
</div>
</template>

<style>
.app {
 font-family: Arial, sans-serif;
 margin: 0;
 padding: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 400px;
 width: 1000px;
 background-color: #f0f0f0;
}
.slider {
 position: relative;
 width: 600px;
 height: 400px;
 overflow: hidden;
 border-radius: 10px;
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.slides {
 display: flex;
 transition: transform 0.5s ease-in-out;
}
.slide {
 min-width: 100%;
 box-sizing: border-box;
}
.slide img {
 width: 100%;
 height: 100%;
 object-fit: cover;
}
.prev, .next {
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 background-color: rgba(0, 0, 0, 0.5);
 color: white;
 border: none;
 padding: 10px;
 cursor: pointer;
 border-radius: 50%;
}
.prev {
 left: 10px;
 
}
.next {
 right: 10px;
}
.prev:hover, .next:hover {
 background-color: rgba(0, 0, 0, 0.8);
}
</style>


