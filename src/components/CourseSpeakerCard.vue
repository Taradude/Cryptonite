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
        { title: '$400K', text: 'ЗАРОБИВ ЗА 1.5 Р' },
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
  left: 15%;
  font-family: 'Gilroy-Bold';
  font-size: clamp(24px, 4vw, 48px);
  line-height: normal;
}

.highlight {
  color: $yellow;
}

.image-container {
  position: absolute;
  right: 5%;
  top: 0;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  img {
    // transform: rotate(3deg);
    height: 100%;
    min-height: 485px;
    width: auto;
    object-fit: cover;
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
  height: 100px;
  background: $bg-color;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid $bg-color;
  position: relative;
  min-width: 252px;
  margin-bottom: 5px;
}

.inner-box {
  width: calc(0.5 * min(666px, 40vw));
  height: 110%;
  background: $text-grey;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  margin-left: -3px;
}

h2 {
  color: $bg-color;
  font-size: clamp(28px, 3vw, 60px);
  font-family: 'Gilroy-H';
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
    height: 80px;
  }

  .inner-box {
    width: 40%;
    height: 120%;
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
  }
  .image-container {
    position: absolute;
    right: -45%;
    top: 20%;
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: flex-end;
  }
  .box {
    width: 100%;
    height: 70px;
  }

  .inner-box {
    width: 35%;
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
    right: -50%;
  }
}
@media (max-width: 480px) {
  .bottom-container {
    left: 10%;
  }

  .box {
    width: 95%;
    height: 60px;
  }

  .inner-box {
    width: 30%;
    height: 110%;
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
