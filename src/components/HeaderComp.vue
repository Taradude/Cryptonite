<template>
  <div class="promo-container">
    <div class="top-banner">
      <p>Старт {{ nextDate }}</p>
    </div>
    <div class="header-wrap">
      <h2 class="main-title">7-ДЕННИЙ МІНІКУРС</h2>
      <h2 class="sub-title">СИСТЕМА ЗАРОБІТКУ НА <br />КРИПТОВАЛЮТНОМУ РИНКУ</h2>
      <h1 class="sub-title highlighted-text">"БЕЗ ЗУСИЛЬ”</h1>
      <h2 class="profit-text">
        Яка допомогла мені заробити <span class="highlight-profit">$400 000</span> за 1.5 роки
      </h2>
    </div>
    <div class="content">
      <div class="left">
        <div class="text-box">
          <p>
            Дізнайся, як тобі перетворити свою зацікавленість у крипті в робочу систему і генерувати
            стабільний прибуток щомісяця з мінімальними витратами часу та зусиль.
          </p>
        </div>
        <p class="old-price">6780 грн</p>
        <p class="current-price">680 грн</p>
      </div>
      <div class="right">
        <img ref="headImg" src="@/assets/img/header.png" alt="Фото" />
        <button ref="mainButton" class="main-btn">КУПИТИ ЗАРАЗ</button>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showFloatingButton" class="floating-div" @click="scrollToMainButton">
        <p>Приєднатися</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextDate: '',
      showFloatingButton: false,
      isMobile: window.innerWidth <= 768,
    }
  },
  mounted() {
    this.updateDate()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    updateDate() {
      const today = new Date()
      today.setDate(today.getDate() + 1)
      const months = [
        'січня',
        'лютого',
        'березня',
        'квітня',
        'травня',
        'червня',
        'липня',
        'серпня',
        'вересня',
        'жовтня',
        'листопада',
        'грудня',
      ]
      this.nextDate = `${today.getDate()} ${months[today.getMonth()]}`
    },
    handleScroll() {
      const mainButton = this.$refs.mainButton
      const rect = mainButton.getBoundingClientRect()
      this.showFloatingButton = rect.bottom < 0 // Кнопка зникла з екрану
    },
    scrollToMainButton() {
      this.$refs.headImg.scrollIntoView({ behavior: 'smooth' })
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
  },
}
</script>

<style scoped lang="scss">
.promo-container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.main-btn {
  position: absolute;
  left: 20%;
  bottom: 15%;
  transform: translateX(-40%);
  z-index: 10;
  font-size: clamp(30px, 5vw, 75px);
  padding: 25px 50px;
  border: none;
  white-space: nowrap;
  font-family: 'Gilroy-Bold';
  border: none;
  border-radius: 50px;
  color: $bg-component;
  background: linear-gradient(90deg, #fafafa, #918c87);
  box-shadow: 0 0 10px $yellow;
  animation: glow 1s infinite alternate;
  cursor: pointer;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px $yellow;
  }
  100% {
    box-shadow: 0 0 20px $yellow;
  }
}

.floating-div {
  position: fixed; // Важливо: position: fixed має бути тут
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  font-size: clamp(25px, 3vw, 44px);
  padding: 15px 40px;
  border: none;
  white-space: nowrap;
  font-family: 'Gilroy-Bold';
  border-radius: 50px;
  color: $bg-component;
  background: linear-gradient(90deg, #fafafa, #918c87);
  box-shadow: 0 0 10px $yellow;
  animation: glow 1s infinite alternate;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

// Анімація для transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.top-banner {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  min-width: 160px;
  max-width: 380px;
  background: #ffcc00;
  padding: 15px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  box-sizing: border-box;
}

.top-banner p {
  margin: 0;
  font-size: 1rem;
  color: $black;
  font-family: 'Gilroy-Bold';
  font-size: clamp(16px, 1.8vw, 24px);
  line-height: normal;
}

.title {
  margin-top: clamp(40px, 5vh, 120px);
  font-size: 32px;
  font-weight: bold;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  height: 100vh;
}

.left {
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  // justify-content: flex-start;
  height: 100%;
}

.text-box {
  background: $bg-component;
  padding: 24px;
  margin-top: 15%;
  border-radius: 24px;
  text-align: left;
  margin-bottom: 15px;
  p {
    font-family: 'Gilroy-UltraLight';
    color: $text-grey;
    font-size: clamp(18px, 1.8vw, 28px);
  }
}

.old-price {
  text-decoration: line-through $yellow 2px;
  font-family: 'Gilroy-reg';
  font-size: clamp(24px, 3vw, 50px);
  color: white;
  text-align: right;
}

.current-price {
  font-size: clamp(45px, 6vw, 110px);
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  text-align: right;
}
.right {
  position: relative;
}
.right img {
  max-width: 100%;
  height: auto;
}
.header-wrap {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sub-title {
  font-family: 'Gilroy-H';
  color: white;
  font-size: clamp(29px, 7vw, 77px);
  line-height: normal;
}
.main-title,
.profit-text {
  font-size: clamp(18px, 4vw, 42px);
  color: white;
  font-family: 'Gilroy-UltraLight';
}
.highlight-profit {
  color: $yellow;
  font-family: 'Gilroy-Bold';
}
h1,
h2,
p {
  line-height: normal;
}
.highlighted-text {
  background-color: #ffcc00;
  border-radius: 25px;
  padding: 0 45px;
  line-height: normal;
  color: $black;
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  // .content {
  //   flex-direction: column;
  //   text-align: center;
  // }
  .header-wrap {
    margin-top: 60px;
  }
  .left,
  .right img {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .top-banner {
    padding: 4px; /* Зменшення паддінгу */
  }
}
@media (max-width: 1000px) {
  .promo-container {
    max-width: 90%;
  }
}
@media (max-width: 768px) {
  .main-btn {
    left: 40%;
  }
  .content {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  .text-box {
    order: -1;
    margin-top: 0;
  }
  .left {
    align-items: center;
  }
  .old-price,
  .current-price {
    text-align: center;
  }
}
</style>
