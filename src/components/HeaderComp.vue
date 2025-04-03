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
        Яка допомогла мені заробити <span class="highlight-profit"><br />$400 000</span> за 1,5 роки
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
          <p class="old-price">2990 грн</p>
          <p class="current-price">680 грн</p>
        </div>
      </div>
      <div class="right">
        <img ref="headImg" src="@/assets/img/header1.png" alt="Фото" />
        <a href="https://secure.wayforpay.com/button/ba17bd76f2043"
          ><button ref="mainButton" class="main-btn">КУПИТИ ЗАРАЗ</button></a
        >
      </div>
    </div>
    <transition name="fade">
      <a href="https://secure.wayforpay.com/button/ba17bd76f2043">
        <div v-if="showFloatingButton" class="floating-div">
          <p>КУПИТИ ЗАРАЗ</p>
        </div>
      </a>
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
    // handleScroll() {
    //   const mainButton = this.$refs.mainButton
    //   const rect = mainButton.getBoundingClientRect()
    //   this.showFloatingButton = rect.bottom < 0 // Кнопка зникла з екрану
    // },
    handleScroll() {
      const mainButton = this.$refs.mainButton
      const faqQuestion = document.querySelector('#faq-question-7')

      if (!mainButton || !faqQuestion) return

      const rectButton = mainButton.getBoundingClientRect()
      const rectFaq = faqQuestion.getBoundingClientRect()

      const isMainButtonHidden = rectButton.bottom < 0
      const isFaqVisible = rectFaq.top < window.innerHeight && rectFaq.bottom > 0

      this.showFloatingButton = isMainButtonHidden && !isFaqVisible
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
  bottom: 10%;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Статичне світіння */
  cursor: pointer;
  animation: heartbeat-shadow 2s ease-in-out infinite; /* Анімація пульсації */
}

@keyframes heartbeat-shadow {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(169, 169, 169, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 25px rgba(169, 169, 169, 0.3),
      0 0 30px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(169, 169, 169, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1);
  }
}

.floating-div {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  font-size: clamp(32px, 5vw, 75px);
  padding: 20px 50px;
  border: none;
  color: $black;
  white-space: nowrap;
  font-family: 'Gilroy-EBold';
  background: $text-grey;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: heartbeat-shadow 2s ease-in-out infinite;
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
  height: 90dvh;
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
    font-family: 'Gilroy-Reg';
    color: $text-grey;
    font-size: clamp(13px, 1.8vw, 28px);
    line-height: 1.21;
  }
}

.old-price {
  text-decoration: line-through;
  text-decoration-color: $yellow; /* Окремо задаємо колір */
  text-decoration-thickness: 1.5px;
  font-family: 'M-R';
  font-size: clamp(22px, 3vw, 50px);
  color: white;
  text-align: right;
  position: relative;
  top: 15px;
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
  font-size: clamp(36px, 6vw, 92px);
  font-family: 'M-B';
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
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрує елементи по вертикалі */
  align-items: center; /* Центрує елементи по горизонталі */
  margin-top: 80px;
}
.profit-text {
  margin-top: 15px;
}

.sub-title {
  font-family: 'Gilroy-Black';
  color: white;
  font-size: clamp(32px, 4vw, 77px);
  line-height: normal;
  padding: 2px 0;
  // letter-spacing: 1px;
}
.main-title,
.profit-text {
  font-size: clamp(18px, 4vw, 42px);
  color: white;
  font-family: 'Gilroy-UltraLight';
  line-height: 1.08;
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
  // margin-bottom: 15px;
}
@media (max-width: 1600px) {
  .content {
    height: 95dvh;
  }
  .main-btn {
    left: 15%;
  }
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
    border-radius: 12px;
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
    padding: 0 12px;
    padding-top: 2px;
  }
  // .header-wrap {
  //   padding: 12px;
  // }
  .left {
    padding-left: 10px;
  }
}
@media (max-width: 1250px) {
  .main-btn {
    bottom: 15%;
  }
}
@media (max-width: 768px) {
  .profit-text {
    margin-top: 15px;
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
    left: 0;
  }
  .left {
    align-items: center;
  }
  .old-price {
    position: relative;
    top: 7px;
  }
}
</style>
