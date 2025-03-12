<template>
  <div class="course-section">
    <h1>ЯК БУДЕ ПРОХОДИТИ НАВЧАННЯ?</h1>
    <div class="boxes-container">
      <div class="box" v-for="(item, index) in boxes" :key="index">
        <div class="yellow-box">{{ item.title }}</div>
        <p class="box-text">{{ item.text }}</p>
      </div>
    </div>

    <h2>100% ПОВЕРНЕННЯ</h2>
    <div class="final-box">
      <p class="final-text">Я впевнений в якості мого навчання та системі “Без Зусиль”</p>
      <!-- <br /><br /> -->
      <p class="centered-word">АЛЕ</p>
      <!-- <br /><br /> -->
      <p>
        Якщо після проходження мінікурсу у тебе залишаться сумніви щодо його користі для тебе, я поверну тобі
        <span class="yellow">повну вартість навчання</span>
      </p>
      <img src="@/assets/img/label.png" alt="Final Image" class="final-image" />
    </div>
  </div>
</template>

<script setup>
const boxes = [
  {
    title: 'КРОК 1',
    text: 'Одразу після оплати ти отримаєш доступ до чат-боту в Телеграм.',
  },
  {
    title: 'КРОК 2',
    text: 'В ньому тобі щодня будуть відкриватися нові уроки по 15-25 хв.',
  },
  {
    title: 'КРОК 3',
    text: 'Додатково до уроків ти будеш отримувати бонусні матеріали, інструкції, торгових помічників і таке інше.',
  },
  {
    title: 'КРОК 4',
    text: 'По закінченню навчання ти матимеш доступ до всіх матеріалів ще 3 місяці.',
  },
]
</script>

<style scoped lang="scss">
.course-section {
  text-align: center;
  max-width: 88%;
}

h1,
h2 {
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  font-size: clamp(28px, 4vw, 50px);
  margin: 35px 0px;
}

.boxes-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  max-width: 900px;
  gap: 36px;
}

.box {
  background: $bg-component;
  padding: 40px;
  border-radius: 30px;
  text-align: left;
}

.box-text {
  font-family: 'Gilroy-reg';
  color: white;
  font-size: clamp(16px, 2vw, 24px);
  line-height: 1.08;
}
.yellow {
  font-family: 'Gilroy-Bold';
  color: $yellow;
}
.yellow-box {
  background-color: $yellow;
  padding: 6px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-width: 80px;
  height: 60px;
  font-family: 'Gilroy-EBold';
  color: $black;
  font-size: clamp(16px, 3vw, 32px);
}

.final-box {
  background: $bg-component;
  padding: 40px;
  border-radius: 30px;
  position: relative;
  text-align: left;
  margin: 0 auto;
  max-width: 900px;
  font-family: 'Gilroy-reg';
  color: white;
  p {
    max-width: 90%;
    font-size: clamp(16px, 2vw, 24px);
    line-height: 1.2;
  }
}

.final-box .centered-word {
  text-align: center;
  font-size: clamp(26px, 3vw, 36px);
  font-family: 'Gilroy-Bold';
  color: white;
  margin: 15px 0;
}

.final-image {
  position: absolute;
  right: -12%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 20%;
}
@media (max-width: 1000px) {
  .container {
    width: 90%;
    padding: 12px;
    margin-bottom: 20px;
    gap: 0;
  }
  .box {
    border-radius: 12px;
  }
  .box,
  .final-box {
    padding: 16px;
    border-radius: 10px;
  }
  .yellow-box {
    height: 30px;
    border-radius: 4px;
  }

  .final-box img {
    right: -5.5%;
  }
  .boxes-container {
    gap: 24px;
  }
}
</style>
