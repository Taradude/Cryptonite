<template>
  <div class="promo-container">
    <div class="top-banner">
      <p>Старт {{ nextDate }}</p>
    </div>
    <div class="header-wrap">
      <h2 class="main-title">7-ДЕННИЙ МІНІКУРС</h2>
      <h2 class="sub-title">
        СИСТЕМА ЗАРОБІТКУ<br />
        НА КРИПТОРИНКУ
      </h2>
      <h1 class="sub-title highlighted-text">"БЕЗ ЗУСИЛЬ”</h1>
      <h2 class="profit-text">
        Яка допомогла мені заробити <span class="highlight-profit">$400 000</span> <br />за 1.5 роки
      </h2>
    </div>
    <div class="content">
      <div class="left">
        <div class="text-box">
          <p>
            Дізнайся, як тобі перетворити свою зацікавленість у крипті в робочу систему і генерувати
            стабільний прибуток з року в рік з мінімальними витратами часу та зусиль.
          </p>
        </div>
        <div class="left-bottom">
          <p class="old-price">6780 грн</p>
          <p class="current-price">680 грн</p>
        </div>
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
  left: 0;
  bottom: 5%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: clamp(32px, 5vw, 75px);
  padding: 20px 50px;
  border: none;
  color: $black;
  white-space: nowrap;
  font-family: 'Gilroy-EBold';
  background: $text-grey;
  border-radius: 50px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Статичне світіння */
  cursor: pointer;
  animation: heartbeat-shadow 2s ease-in-out infinite; /* Анімація пульсації */
}

@keyframes heartbeat-shadow {
  0% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(169, 169, 169, 0.2),
      0 0 35px rgba(255, 255, 255, 0.1);
  }
  // 25% {
  //   box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(169, 169, 169, 0.3),
  //     0 0 45px rgba(255, 255, 255, 0.2);
  // }
  50% {
    box-shadow: 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(169, 169, 169, 0.4),
      0 0 55px rgba(255, 255, 255, 0.3);
  }
  // 75% {
  //   box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(169, 169, 169, 0.3),
  //     0 0 45px rgba(255, 255, 255, 0.2);
  // }
  100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(169, 169, 169, 0.2),
      0 0 35px rgba(255, 255, 255, 0.1);
  }
}

.floating-div {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  font-size: clamp(24px, 5vw, 75px);
  padding: clamp(12px, 3vw, 16px);
  border: none;
  white-space: nowrap;
  font-family: 'Gilroy-Bold';
  color: $bg-component;
  background-color: $text-grey;
  font-size: clamp(28px, 4vw, 60px);
  font-weight: bold;
  border-radius: 50px;
  padding: 25px 40px;
  cursor: pointer;
  box-shadow: 0 0 25px rgba(216, 216, 216, 0.6); /* Статичне світіння */
  animation: glowing-shadow 2s ease-in-out infinite; /* Анімація для світіння */
}

@keyframes glowing-shadow {
  0% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(169, 169, 169, 0.2),
      0 0 35px rgba(255, 255, 255, 0.1);
  }

  50% {
    box-shadow: 0 0 35px rgba(255, 255, 255, 0.8), 0 0 45px rgba(169, 169, 169, 0.4),
      0 0 55px rgba(255, 255, 255, 0.3);
  }

  100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(169, 169, 169, 0.2),
      0 0 35px rgba(255, 255, 255, 0.1);
  }
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
  min-width: 220px;
  max-width: 380px;
  background: #ffcc00;
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
  align-items: flex-start;

  // margin-top: 60px;
  height: 100dvh;
  overflow: hidden;
}

.left {
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  margin-top: 20px;
  // justify-content: center;]
  height: 100%;
}

.text-box {
  background: $bg-component;
  padding: 24px;
  margin-top: 15%;
  border-radius: 24px;
  text-align: left;
  margin-bottom: 15px;
  min-width: 200px;
  p {
    font-family: 'Gilroy-UltraLight';
    color: $text-grey;
    font-size: clamp(13px, 1.8vw, 28px);
  }
}

.old-price {
  text-decoration: line-through;
  text-decoration-color: $yellow; /* Окремо задаємо колір */
  text-decoration-thickness: 2px;
  font-family: 'Gilroy-reg';
  font-size: clamp(24px, 3vw, 50px);
  color: white;
  text-align: right;
}
.current-price {
  // position: absolute;
  // left: 40%;
  // transform: translateY(-40%);
  // bottom: 25%;
  // transform: translateX(-40%);
  white-space: nowrap;
  z-index: 10;
}
// .old-price {
//   white-space: nowrap;
//   position: absolute;
//   left: 40%;
//   transform: translateY(-40%);
//   bottom: 40%;
//   transform: translateX(-40%);
//   z-index: 10;
// }
.current-price {
  font-size: clamp(36px, 6vw, 110px);
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
  font-size: clamp(32px, 4vw, 77px);
  // line-height: normal;
  letter-spacing: 1px;
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
  border-radius: 15px;
  padding: 0 15px;
  line-height: normal;
  color: $black;
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  // .content {
  //   flex-direction: column;
  //   text-align: center;
  // }
  .main-btn {
    transform: translateX(-60%);
  }
  .content {
    height: auto;
    overflow: hidden;
    img {
      min-width: 300px;
      position: relative;
      left: -20%;
    }
  }
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
    padding: 3px; /* Зменшення паддінгу */
  }
  .text-box {
    min-width: 220px;
  }
}
@media (max-width: 420px) {
  // .right img {
  //   min-width: 270px;
  // }
  // .old-price,
  // .current-price {
  //   left: 35%;
  // }
}
@media (max-width: 1000px) {
  .promo-container {
    // max-width: 95%;
    max-width: 100%;
    overflow: hidden;
  }
  .highlighted-text {
    border-radius: 6px;
    padding: 0 5px;
  }
  // .header-wrap {
  //   padding: 12px;
  // }
  .left {
    padding-left: 10px;
  }
}
@media (max-width: 768px) {
  .sub-title {
    margin-bottom: 5px;
  }
  // .main-btn {
  //   left: 40%;
  // }
  // .content {
  //   flex-direction: column;
  //   align-items: center;
  //   height: auto;
  // }
  .text-box {
    order: -1;
    margin-top: 0;
    padding: 12px;
  }
  .main-btn {
    bottom: 8%;
  }
  .left {
    align-items: center;
  }
  // .old-price,
  // .current-price {
  //   text-align: center;
  // }
}
</style>
