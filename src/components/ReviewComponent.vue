<template>
  <div class="results-container">
    <h1>РЕЗУЛЬТАТИ УЧАСНИКІВ</h1>
    <div class="carousel-wrapper">
      <Carousel v-bind="carouselConfig" ref="carouselRef">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="slide-container">
            <img :src="image" alt="Slide Image" class="slide-image" />
          </div>
        </Slide>
      </Carousel>
      <div class="pagination-buttons">
        <button @click="prevSlide">
          <img src="@/assets/img/leftArrow.png" alt="Previous" />
        </button>
        <button @click="nextSlide">
          <img src="@/assets/img/rightArrow.png" alt="Next" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import img1 from '@/assets/img/14.png'
import img2 from '@/assets/img/15.png'
import img3 from '@/assets/img/16.png'

const images = [img1, img2, img3]
const carouselRef = ref(null)

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
}

const prevSlide = () => {
  carouselRef.value?.prev()
}

const nextSlide = () => {
  carouselRef.value?.next()
}
</script>

<style scoped lang="scss">
.results-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 0 20px;
  text-align: center;
}

h1 {
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  font-size: clamp(20px, 4vw, 50px);
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.slide-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
}

.pagination-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.pagination-buttons button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.pagination-buttons img {
  width: clamp(40px, 8vw, 100px);
}

@media (max-width: 768px) {
  .slide-image {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .slide-image {
    max-width: 100%;
  }
  .pagination-buttons img {
    width: 30px;
    height: 30px;
  }
}
</style>
