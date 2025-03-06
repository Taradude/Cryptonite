<template>
  <div class="component-container">
    <h1>
      ЯК ТИ ПОЧНЕШ ЗАРОБЛЯТИ НА <br />
      КРИПТОРИНКУ ЗАВДЯКИ СИСТЕМІ <br />"БЕЗ ЗУСИЛЬ"
    </h1>
    <img src="@/assets/img/sliderArrow.png" alt="" />
    <div class="content-wrap">
      <div class="content-block">
        <div class="block-content">
          <p>
            <span class="b">1️⃣ Зрозумієш систему 📌</span><br /><br />Дізнаєшся, як працює алгоритм та чому
            він ефективний
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down" />
      </div>
      <div class="content-block white">
        <div class="block-content">
          <p class="gray-text">
            <span class="b">2️⃣ Вивчиш, як працює ринок 📊</span><br /><br />Розберешся у циклах ринку,
            ключових закономірностях та механізмах руху ціни.
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down flip" />
      </div>
      <div class="content-block">
        <div class="block-content">
          <p>
            <span class="b">3️⃣ Навчишся керувати ризиками ⚖️</span><br /><br />Освоїш методи контролю ризиків,
            які допоможуть уникати великих втрат.
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down" />
      </div>
      <div class="content-block white">
        <div class="block-content">
          <p class="gray-text">
            <span class="b">4️⃣ Отримаєш працюючі інструменти 🛠️</span><br /><br />Використаєш готові
            індикатори, алгоритми та стратегії, що допоможуть ухвалювати рішення.
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down flip" />
      </div>
      <div class="content-block">
        <div class="block-content">
          <p>
            <span class="b">5️⃣ Налаштуєш свою торгову систему 🚀</span><br /><br />Почнеш працювати за
            алгоритмом, відпрацьовуватимеш навички та адаптуватимеш стратегію під себе.
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down" />
      </div>
      <div class="content-block white">
        <div class="block-content">
          <p class="gray-text">
            <span class="b">6️⃣ Оптимізуєш процес та прибереш зайві дії ⚡</span><br /><br />Використаєш
            автоматизовані рішення, щоб зменшити час на аналіз та зробити торгівлю комфортною.
          </p>
        </div>
        <img src="@/assets/img/arrowDownRot.png" alt="Arrow" class="arrow-down flip" />
      </div>
      <div class="content-block">
        <div class="block-content">
          <p>
            <span class="b">7️⃣ Отримаєш прогнозовані результати 💰</span><br /><br />Перестанеш робити
            хаотичні угоди та почнеш заробляти усвідомлено, дотримуючись стратегії.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.component-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  // gap: 24px;
  align-items: center;
  .b {
    font-family: 'Gilroy-Bold';
  }
  @media (max-width: 600px) {
    padding: 12px;
  }

  h1 {
    text-align: center;
    font-family: 'Gilroy-Bold';
    color: $text-grey;
    font-size: clamp(22px, 4vw, 50px);
  }
  img {
    width: 25%;
  }

  .content-wrap {
    position: relative; /* для позиціонування стрілочок відносно цього контейнера */
  }

  .content-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
    margin: 50px 0;
    background-color: $bg-component;
    position: relative; /* для абсолютного позиціювання стрілочки */

    &.white {
      background-color: white;

      .block-content p {
        color: $bg-component;
        background-color: white;
      }

      .arrow-down.flip {
        transform: scaleX(-1);
      }
    }

    .block-content p {
      margin: 0;
      color: white;
      font-family: 'Gilroy-reg';
      font-size: clamp(14px, 2.2vw, 28px);
      line-height: 1.08;
    }

    .arrow-down {
      position: absolute;
      top: 70%; /* Центрування по вертикалі */
      width: 6%;
      object-fit: contain;

      &.flip {
        right: 102%; /* Встановлюємо праворуч від елемента */
        margin-left: 16px; /* Відступ від правого краю */
        // transform: rotate(-45deg); /* Поворот для перевернутого елемента */
      }

      &:not(.flip) {
        left: 102%; /* Встановлюємо ліворуч від елемента */
        margin-right: 16px; /* Відступ від лівого краю */
        // transform: rotate(45deg); /* Поворот для звичайного елемента */
      }
    }
  }

  @media (max-width: 1000px) {
    .content-wrap {
      width: 90%;
      padding: 4px;
      margin-bottom: 20px;
      gap: 0;
    }
    .content-block {
      padding: 10px;
      margin: 30px 0;
      border-radius: 10px;
    }
  }
}
</style>
