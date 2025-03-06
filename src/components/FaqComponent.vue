<template>
  <div class="course-section">
    <h1>ЧАСТІ ЗАПИТАННЯ</h1>
    <div class="boxes-container">
      <div class="box" v-for="(item, index) in boxes" :key="index">
        <div class="yellow-box">
          <span>{{ item.question }}</span>
        </div>
        <p class="box-text">{{ item.answer }}</p>
        <img class="box-image" src="@/assets/img/arrowDown.png" alt="icon" />
      </div>
    </div>
    <div class="contact">
      <p>Зв'язатися з командою</p>
      <div class="button">
        <img src="@/assets/img/tg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const boxes = [
  {
    question: '1. Чи підходить система, якщо я новачок?',
    answer:
      '✅ Так! Система створена так, щоб навіть без досвіду ти міг розібратися в основах, уникати типових помилок і поступово виходити на стабільний прибуток.',
  },
  {
    question: '2. Чи потрібен великий стартовий капітал?',
    answer:
      '❌ Ні! Система дозволяє стартувати навіть із малими сумами, поступово збільшуючи капітал завдяки перевіреним стратегіям та реінвестуванню прибутку.',
  },
  {
    question: '3. Чи потрібно сидіти за графіками весь день?',
    answer:
      '❌ Ні! Система дозволяє торгувати без постійного моніторингу ринку, використовуючи чіткі правила входу та виходу.',
  },
  {
    question: '4. Чи можу я втратити весь депозит?',
    answer:
      '⚠️ У будь-яких інвестиціях є ризики, але чіткий ризик-менеджмент мінімізує можливі втрати та захищає твій капітал.',
  },
  {
    question: '5. Як швидко я зможу заробити?',
    answer:
      '⏳ Все залежить від ринкових умов та дисципліни, але при дотриманні стратегії перші результати можуть з’явитися вже в перший місяць.',
  },
  {
    question: '6. Чи можу я поєднувати систему з іншими стратегіями?',
    answer:
      '✅ Так! Система може бути основою, але ти завжди можеш доповнити її іншими методами та тактиками.',
  },
  {
    question: '7. Чи потрібно мати технічні знання чи глибоке розуміння ринку?',
    answer:
      '❌ Ні! Система розроблена так, щоб навіть без складного технічного аналізу ти міг торгувати за чіткими правилами.',
  },
  {
    question: '8. Скільки часу потрібно приділяти трейдингу за цією системою?',
    answer:
      '⏳ В середньому 30 хвилин на тиждень достатньо, щоб перевірити сигнали, виконати угоди та керувати портфелем.',
  },
  {
    question: '9. Чи гарантований прибуток?',
    answer:
      '⚠️ Жодна система не дає 100% гарантій, але структурований підхід дозволяє мінімізувати ризики та збільшити шанси на стабільний дохід.',
  },
  {
    question: '10. Чи потрібно купувати дорогі програми чи додаткові інструменти?',
    answer:
      '✅ Ні! Всі необхідні інструменти, що використовуються в системі, доступні безкоштовно. За бажанням ви, звісно, можете оформити платні підписки на різні сервіси для більшої зручності та ефективності.',
  },
]
</script>

<style scoped lang="scss">
.course-section {
  text-align: center;
  max-width: 90%;
}

h1 {
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  font-size: clamp(28px, 5vw, 70px);
  margin: 10px 0;
  margin-top: 35px;
}
.contact {
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  p {
    font-family: 'Gilroy-reg';
    color: white;
    font-size: clamp(16px, 2vw, 24px);
  }
  img {
    width: 60%;
    max-width: 80px;
  }
}
.boxes-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin: 20px auto;
  max-width: 900px;
  gap: 36px;
}

.box {
  background: $bg-component;
  padding: 24px 32px;
  border-radius: 30px;
  text-align: left;
  display: flex;
  gap: 16px;
  flex-direction: column;
  // align-items: center;
  position: relative;
}

.box-text {
  font-family: 'Gilroy-reg';
  color: white;
  font-size: clamp(16px, 2vw, 24px);
  flex: 1;
  max-width: 95%;
}

.yellow-box {
  max-width: 95%;
  display: inline-block;
  background-color: $yellow;
  padding: 6px 12px;
  border-radius: 10px;
  font-family: 'Gilroy-EBold';
  color: $black;
  font-size: clamp(14px, 3vw, 32px);
  width: fit-content;
  line-height: 1.2; // Запобігає розриву через надмірний інтервал
}
p {
  line-height: normal;
}
.box-image {
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  right: 10px;
  top: 65%;
  transform: translateY(-50%);
}

@media (max-width: 1000px) {
  .box {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    border-radius: 12px;
    .yellow-box {
      border-radius: 6px;
    }
  }
  .box-text {
    max-width: 90%;
  }
  .boxes-container {
    gap: 24px;
  }
  // .box-image {
  //   position: static;
  //   transform: none;
  //   margin-top: 10px;
  // }
}
</style>
