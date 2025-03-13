<template>
  <div class="for-whom">
    <h1>ДЛЯ КОГО ЦЕЙ МІНІКУРС?</h1>
    <div class="container">
      <div class="image-container">
        <img src="@/assets/img/1-for.png" alt="Image" />
      </div>
      <div class="text-container">
        <h2>ПОЧАТКІВЕЦЬ</h2>
        <p>Якщо ти хочеш почати заробляти на крипті, але не знаєш, з чого почати</p>
      </div>
    </div>
    <div class="container">
      <div class="image-container">
        <img src="@/assets/img/2-for.png" alt="Image" />
      </div>
      <div class="text-container">
        <h2>ТРЕЙДЕР</h2>
        <p>Який хоче систематизувати свій підхід та прибрати емоції з торгівлі</p>
      </div>
    </div>
    <div class="container">
      <div class="image-container">
        <img src="@/assets/img/3-for.png" alt="Image" />
      </div>
      <div class="text-container">
        <h2>ІНВЕСТОР</h2>
        <p>Який шукає перевірені методи для стабільного прибутку та мінімізації ризиків</p>
      </div>
    </div>
    <div class="container">
      <div class="image-container">
        <img src="@/assets/img/4-for.png" alt="Image" />
      </div>
      <div class="text-container">
        <h2>КОЖНОГО, ХТО НЕ ХОЧЕ СЛІДКУВАТИ ЗА РИНКОМ 24/7</h2>
        <p>Якщо тобі важливо отримувати прибуток без постійного моніторингу графіків</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';
.for-whom {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: $text-grey;
  font-family: 'Gilroy-Bold';
  text-align: center;
  margin: 35px 0px;
  font-size: clamp(26px, 4vw, 50px);
}
.container {
  display: flex;
  align-items: center;
  max-width: 950px;
  height: 160px;
  padding: 10px;
  margin-bottom: 20px;
  gap: 15px;
  border-radius: 30px;
  background-color: $yellow;
  width: 100%;
}

.image-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.image-container img {
  margin-left: 15px;
  margin-right: 15px;
  height: 80%;
  display: flex;
  align-items: center;
  object-fit: cover;
  border-radius: 10px;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 85%;
  justify-content: center;
}

h2 {
  margin: 0;
  color: $black;
  font-family: 'Gilroy-H';
  line-height: normal;
  font-size: clamp(18px, 2.2vw, 28px);
}

p {
  margin: 0;
  font-size: 1rem;
  color: $black;
  font-family: 'Gilroy-reg';
  font-size: clamp(16px, 2.2vw, 28px);
  line-height: 0.99;
}
@media (max-width: 1000px) {
  .container {
    width: 91%;
    height: 110px;
  }
  .for-whom {
    margin-bottom: 0;
  }
  // .container + .container + .container + .container {
  //   height: 130px !important;
  // }
}

@media (max-width: 768px) {
  .image-container img {
    margin: 0;
    height: 80%;
  }
  .container {
    border-radius: 12px;
  }
  .container {
    &:last-of-type {
      height: 120px;
    }
  }
  //   // .container {
  //   //   flex-direction: column;
  //   //   height: auto;
  //   //   gap: 10px;
  //   // }

  //   .image-container {
  //     flex: 0 0 50%; /* Картинка займає 50% ширини контейнера на маленьких екранах */
  //     height: 200px; /* фіксована висота картинки */
  //   }

  //   .text-container {
  //     flex: 1;
  //     text-align: center;
  //   }

  //   h2 {
  //     font-size: 1.1rem;
  //   }

  //   p {
  //     font-size: 0.9rem;
  //   }
  // }

  // @media (max-width: 480px) {
  //   .container {
  //     padding: 5px;
  //   }

  //   .image-container {
  //     flex: 0 0 100%; /* Картинка займає всю ширину контейнера */
  //     height: 180px;
  //   }

  //   .text-container {
  //     flex: 1;
  //     text-align: center;
  //   }

  //   h2 {
  //     font-size: 1rem;
  //   }

  //   p {
  //     font-size: 0.8rem;
  //   }
}
</style>
