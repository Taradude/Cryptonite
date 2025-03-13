<template>
  <div class="text-top">
    <h1>
      ПРИЄДНАЙСЯ ПРОТЯГОМ 24 ГОДИН <br />
      ТА ОТРИМАЙ <span class="yellow">ГАРАНТОВАНИЙ БОНУС</span> <br />
      ДОСТУП ДО 3Х ІНДИКАТОРІВ
    </h1>
    <div class="arrow">
      <img src="@/assets/img/sliderArrow.png" alt="" />
    </div>
    <div class="paragraph">
      <p>
        Індикатори - інструменти (помічники), які допомагають
        <span class="hide"><br /></span>трейдеру-інвестору зрозуміти, коли краще купувати чи
        <span class="hide"><br /></span>продавати криптовалюту
      </p>
    </div>
  </div>
  <div class="carousel-wrapper">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(image, index) in images" :key="index">
        <div class="slide-container">
          <img :src="image" alt="Slide Image" class="slide-image" />
        </div>
      </Slide>
    </Carousel>

    <div class="button-wrap">
      <img src="@/assets/img/arrowDownW.png" alt="" />
      <div class="timer">
        <h1>{{ formattedTime }}</h1>
      </div>
      <button class="glow-button">ЗАБРАТИ БОНУС</button>
      <div class="access-count">
        <p>Залишилося {{ accessesLeft }}/100 доступів</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import sll from '@/assets/img/sll.png'
import slc from '@/assets/img/slc.png'
import slr from '@/assets/img/slr.png'

const images = [sll, slc, slr]
const carouselConfig = {
  itemsToShow: 1.3,
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
}

const accessesLeft = ref(35)
const countdown = ref(0)
const formattedTime = ref('')

// Завантаження збережених даних
const loadData = () => {
  const savedAccesses = localStorage.getItem('accessesLeft')
  accessesLeft.value = savedAccesses ? parseInt(savedAccesses, 10) : 35

  const lastReset = localStorage.getItem('bonusResetTime')
  const now = Date.now()

  if (!lastReset || now - lastReset >= 24 * 60 * 60 * 1000) {
    localStorage.setItem('bonusResetTime', now)
    countdown.value = 24 * 60 * 60
    accessesLeft.value = 35 // Скидаємо до початкового значення
    localStorage.setItem('accessesLeft', 35)
  } else {
    countdown.value = Math.floor((24 * 60 * 60 * 1000 - (now - lastReset)) / 1000)
    decreaseAccesses() // Одразу коригуємо кількість доступів при завантаженні
  }
}

// Оновлення таймера
const updateTimer = () => {
  const hours = String(Math.floor(countdown.value / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((countdown.value % 3600) / 60)).padStart(2, '0')
  const seconds = String(countdown.value % 60).padStart(2, '0')
  formattedTime.value = `${hours}:${minutes}:${seconds}`
}

// Зменшення доступів (не менше 2)
const decreaseAccesses = () => {
  if (accessesLeft.value > 2) {
    const elapsedHours = 24 - Math.floor(countdown.value / 3600)
    const newAccesses = Math.max(2, 35 - elapsedHours) // Логічне зменшення
    accessesLeft.value = newAccesses
    localStorage.setItem('accessesLeft', newAccesses)
  }
}

// Запуск таймера
const startTimer = () => {
  setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
      updateTimer()
    }
  }, 1000)
}

onMounted(() => {
  loadData()
  startTimer()
  updateTimer()
})
</script>

<style scoped lang="scss">
h1 {
  font-family: 'Gilroy-Black';
  color: $text-grey;
  font-size: clamp(18px, 4.5vw, 50px); /* Більше vw для гнучкості */
  text-align: center;
  line-height: 1.1; /* Зменшена висота рядка для щільного тексту */
  letter-spacing: 0.5px;
  white-space: nowrap; /* Заборона перенесення */

  max-width: 99%; /* Обмеження по ширині контейнера */
}

.yellow {
  color: $yellow;
}
.access-count {
  p {
    font-size: clamp(16px, 3vw, 32px);
    font-family: 'Gilroy-Reg';
    color: $text-grey;
  }
}
.paragraph p {
  font-size: clamp(16px, 2vw, 24px);
  font-family: 'Gilroy-Reg';
  color: $text-grey;
  text-align: center;
  line-height: 0.92;
}
.carousel-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.arrow {
  text-align: center;
  img {
    width: 15%;
  }
}
.timer {
  h1 {
    font-family: 'Gilroy-Ebold';
    font-size: clamp(28px, 4vw, 50px);
  }
}
.slide-container {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.button-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20%;
  }
}
.slide-image {
  width: 50vw; /* 40% ширини екрану */
  height: 55vh; /* 40% висоти екрану */
  object-fit: contain; /* Зберігає пропорції */
  border-radius: 10px;
}

.carousel__slide {
  opacity: 0.8;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}
.glow-button {
  text-align: center;
  // height: 70px;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: clamp(32px, 5vw, 75px);
  padding: 15px 30px;
  border: none;
  color: $black;
  white-space: nowrap;
  font-family: 'Gilroy-EBold';
  background: $text-grey;
  border-radius: 50px;
}

// .glow-button::before {
//   content: '';
//   border-radius: 50px;

//   background: linear-gradient(
//     45deg,
//     #ff0000,
//     #ff7300,
//     #fffb00,
//     #48ff00,
//     #00ffd5,
//     #002bff,
//     #7a00ff,
//     #ff00c8,
//     #ff0000
//   );
//   position: absolute;
//   top: -4px;
//   border-radius: 50px;

//   left: -4px;
//   width: calc(100% + 8px);
//   height: calc(100% + 8px);
//   background-size: 400%;
//   z-index: -1;
//   filter: blur(10px);
//   animation: glowing 15s linear infinite;
//   border-radius: 50px;
// }

// @keyframes glowing {
//   0% {
//     background-position: 0 0;
//   }
//   50% {
//     background-position: 400% 0;
//   }
//   100% {
//     background-position: 0 0;
//   }
// }

/* Адаптивність */
@media (max-width: 768px) {
  .text-top {
    max-width: 90%;
  }
  h1 {
    margin-top: 25px;
    // margin-bottom: 25px;
  }
  .hide {
    display: none;
  }
  .slide-container {
    max-width: 100%;
  }
  .slide-image {
    width: 70vw; /* Збільшуємо розмір фото на мобільних */
    height: 30vh;
  }
}

@media (max-width: 480px) {
  .slide-image {
    width: 90vw;
    // height: 25vh;
  }
}
</style>
