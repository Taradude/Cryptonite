<template>
  <div class="wrapper">
    <h1>СИСТЕМА "БЕЗ ЗУСИЛЬ"</h1>
    <div class="center-image">
      <img src="@/assets/img/sliderArrow.png" alt="Main Image" />
    </div>
    <h2>
      Я чітко знаю, коли і чому я купую <br />
      та коли і чому я продаю
    </h2>
    <div class="sections">
      <div class="left">
        <img src="@/assets/img/arrowDownYellow.png" alt="Left Image" />
        <div class="blue-box">Знання</div>
        <ul>
          <li>Як тут все влаштовано</li>
          <li>Основні помилки</li>
          <li>Цикли ринку</li>
          <li>Складний відсоток</li>
          <li>Як формувати портфель</li>
        </ul>
      </div>
      <div class="right">
        <img src="@/assets/img/arrowDownYellow.png" alt="Right Image" />
        <div class="blue-box">Інструменти</div>

        <ul>
          <li>
            Індикатори - помічники, які допомагають зрозуміти, коли краще купувати-продавати криптовалюту
          </li>
          <li>Як користуватися індикаторами</li>
        </ul>
      </div>
    </div>
    <div class="center-bottom">
      <img src="@/assets/img/sliderArrow.png" alt="Main Image" />
    </div>
    <div class="text-box">
      <ul>
        <li>
          <p>Чіткий підхід, що дозволяє заробляти на крипторинку без хаосу та постійного моніторингу.</p>
        </li>
        <li>
          <p>
            Знання дають мені перевагу: я завжди розумію, що робити в будь-якій ситуації на ринку та купую або
            продаю тільки тоді, коли ризики мінімальні, а потенціал прибутку максимальний.
          </p>
        </li>
        <li>
          <p>
            А завдяки готовим інструментам та системам ти позбуваєшся емоційних рішень і страху “А що, якщо я
            помилюся?”
          </p>
        </li>
      </ul>
    </div>
    <p class="bottom">
      Саме за такою <span class="yellow">системою</span> за 1.5 роки я заробив собі та клієнтам<span
        class="yellow"
      >
        400 000$</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'AdaptiveComponent',
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.wrapper {
  text-align: center;
  max-width: 1000px;
}

h1 {
  background-color: #ffcc00;
  border-radius: 6px;
  padding: 20px 45px;
  line-height: normal;
  color: $black;
  margin-bottom: 25px;
  margin-top: 50px;
  font-size: clamp(24px, 5vw, 66px);
  line-height: normal;
  font-family: 'Gilroy-Black';
  display: inline-block;
}
h2 {
  color: white;
  font-size: clamp(20px, 4vw, 36px);
  font-family: 'Gilroy-Thin';
  line-height: normal;
  word-spacing: -0.2ch;
}
.center-image img,
.center-bottom img {
  max-width: 100px;
  width: clamp(60px, 10vw, 100px);
  display: block;
  margin: 0 auto 20px;
}

p {
  font-size: clamp(20px, 5vw, 48px);
  margin-bottom: 15px;
  color: $text-grey;
}
.bottom {
  margin-top: 30px;
  font-size: clamp(20px, 5vw, 32px);
  font-family: 'Gilroy-Reg';
  line-height: 1.08;
  .yellow {
    font-family: 'Gilroy-Bold';
    color: $yellow;
  }
}
// .left .blue-box {
//   align-self: normal;
//   margin-left: 0;
// }

.sections {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px; // Збільшений проміжок між секціями для кращого вигляду
  text-align: center;
}

.left,
.right {
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.left img,
.center-image img {
  transform: scaleX(-1);
}
.left img,
.right img {
  max-width: 90px;
  width: clamp(60px, 8vw, 90px);
  margin-bottom: 10px; // Відступ перед blue-box
}

.blue-box {
  font-size: clamp(16px, 4vw, 32px);
  background-color: rgb(11, 68, 255);
  font-family: 'Gilroy-Bold';
  border-radius: 5px;
  padding: 15px 35px;
  color: white;
  max-width: 80%; // Обмеження ширини, щоб виглядало компактніше
  text-align: center;
  margin-bottom: 15px;
}

ul {
  padding: 0;
  margin: 0 auto;
  max-width: 80%; // Щоб список не розтягувався занадто широко
  text-align: left;
}

li {
  font-family: 'Gilroy-Reg';
  color: $text-grey;
  font-size: clamp(15px, 3vw, 24px);
  // margin-bottom: 8px;
  line-height: 1.4;
}

.text-box {
  background-color: $bg-component;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
  li {
    list-style: none;
    color: white;
  }
}

.text-box ul {
  padding: 0;
}

.text-box li p {
  font-size: clamp(16px, 3vw, 32px);
  margin: 25px 0;
  line-height: normal;
}

@media (max-width: 1000px) {
  .wrapper {
    max-width: 92%;
  }
  .sections {
    gap: 0;
  }
  h1 {
    padding: 6px 12px;
  }

  .center-bottom {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .text-box {
    padding: 6px;
    ul {
      max-width: 95%;
      p {
        margin: 15px 0;
      }
    }
  }
  @media (max-width: 500px) {
    .left .blue-box {
      padding: 5px 40px;
      position: relative;
      left: -5px;
    }
    .right .blue-box {
      padding: 5px 20px;
    }
  }
}
</style>
