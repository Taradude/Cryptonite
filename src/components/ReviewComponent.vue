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

import img1 from '@/assets/img/r1.png'
import img2 from '@/assets/img/r2.png'
import img3 from '@/assets/img/r3.png'
import img4 from '@/assets/img/r4.png'
import img5 from '@/assets/img/r5.png'
import img6 from '@/assets/img/r6.png'
import img7 from '@/assets/img/r7.png'
import img8 from '@/assets/img/r8.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]
const carouselRef = ref(null)

const carouselConfig = {
  itemsToShow: 1.1, // Легке відображення сусідніх фото
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
  snapAlign: 'center',
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
  text-align: center;
}

h1 {
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  font-size: clamp(28px, 4vw, 50px);
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel__track {
  gap: 15px;
}

// .carousel__slide {
//   padding: 10px !important;
//   margin: 15px !important;
// }

.slide-container {
  display: flex;
  justify-content: center; /* Центрує по горизонталі */
  align-items: center; /* Центрує по вертикалі */
  height: 100%; /* Встановлює висоту на 100% */
  padding: 0; /* Прибираємо зайві відступи */
}

.slide-image {
  width: 60vw;
  max-width: 850px;
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
  width: clamp(50px, 8vw, 100px);
}

@media (max-width: 768px) {
  .slide-image {
    width: 75vw;
  }
}

@media (max-width: 480px) {
  .slide-image {
    width: 90vw;
  }
}
</style>
