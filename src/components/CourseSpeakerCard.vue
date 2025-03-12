<template>
  <div class="hero-section">
    <h1>
      СПІКЕР МІНІКУРСУ <br />
      <span class="highlight">АЛЕКС</span>
    </h1>
    <div class="image-container">
      <img src="@/assets/img/speaker.png" alt="Спікер" />
    </div>
    <div class="bottom-container">
      <div class="box" v-for="(item, index) in items" :key="index">
        <div class="inner-box">
          <h2>{{ item.title }}</h2>
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveSection',
  data() {
    return {
      items: [
        { title: '630%', text: 'З ПОЧАТКУ 2023' },
        { title: '$2 млн', text: 'В УПРАВЛІННІ' },
        { title: '200+', text: "КОМ'ЮНІТІ" },
        { title: '$400K', text: 'ЗАРОБИВ ЗА 1,5 Р' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.hero-section {
  // margin-top: 50px;
  position: relative;
  width: 100%;
  height: 80dvh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  overflow: hidden;
}

h1 {
  color: $text-grey;
  position: absolute;
  top: 10%;
  left: 25%;
  font-family: 'Gilroy-Bold';
  font-size: clamp(24px, 4vw, 48px);
  line-height: 0.99;
}

.highlight {
  color: $yellow;
}

.image-container {
  position: absolute;
  right: 20%;
  top: 10%;
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: flex-end;

  img {
    // transform: rotate(3deg);
    height: 100%;
    min-height: 300px;
    max-height: 600px;
    width: auto;
    object-fit: cover;
    transform: rotate(4deg);
  }
}

.bottom-container {
  position: absolute;
  left: 25%;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.box {
  width: 666px;
  height: 80px;
  background: $bg-color;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid $bg-color;
  position: relative;
  min-width: 252px;
}

.inner-box {
  width: calc(0.5 * min(666px, 40vw));
  height: 110%;
  background: darken($text-grey, 5%);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  // margin-left: -3px;
  position: relative;
  padding: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background: rgb(216, 216, 216);

    border-radius: 20px; /* Трішки менший радіус, щоб створити ефект заглиблення */ /* Робимо колір на 12% темнішим */
  }

  > * {
    position: relative;
    z-index: 1;
  }
}

h2 {
  color: $bg-color;
  font-size: clamp(28px, 3vw, 60px);
  font-family: 'Gilroy-Black';
  white-space: nowrap; // Забороняє перенос тексту
}

p {
  color: $text-grey;
  margin-left: 20px;
  font-family: 'Gilroy-reg';
  font-size: clamp(16px, 1.8vw, 28px);
  white-space: nowrap; // Запобігає переносу тексту
}

/* АДАПТАЦІЯ */
@media (max-width: 1024px) {
  .box {
    width: 90%;
    height: 70px;
  }

  .inner-box {
    width: 40%;
    height: 110%;
  }

  p {
    margin-left: 15px;
    font-size: 20px;
  }

  .image-container {
    width: 25%;
  }
}

@media (max-width: 768px) {
  .hero-section {
    margin-top: 0;
    height: 50vh;
    min-height: 385px;
  }
  .image-container {
    position: absolute;
    right: -25%;
    top: 15%;
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: flex-end;
    img {
      height: 330px;
    }
  }
  .box {
    width: 100%;
    height: 60px;
  }

  .inner-box {
    width: 40%;
    height: 120%;
    border-radius: 15px;
  }

  p {
    margin-left: 10px;
    font-size: 18px;
  }

  .image-container {
    width: 20%;
  }
}
@media (max-width: 400px) {
  .image-container {
    img {
      height: 300px;
    }
  }
  .bottom-container {
    top: 57%;
  }
}
@media (max-width: 378px) {
  .bottom-container {
    top: 65%;
  }
}
@media (max-width: 480px) {
  h1 {
    left: 5%;
    top: 15%;
  }
  .bottom-container {
    width: 75%;
    left: 3%;
    gap: 5px;
  }

  .box {
    width: 95%;
    height: 44px;
  }

  .inner-box {
    width: 40%;
    height: 110%;
    &::before {
      border-radius: 15px;
    }
  }

  p {
    margin-left: 8px;
    font-size: 16px;
  }

  .image-container {
    width: 15%;
  }
}
</style>
