<template>
  <div class="example-container">
    <h1>ЧИ ПОТРІБЕН ВЕЛИКИЙ СТАРТОВИЙ КАПІТАЛ ЧИ РОКИ ДОСВІДУ?</h1>
    <p>🚀 Ні! Для старту не потрібно великих вкладень чи багаторічного досвіду.</p>
    <p>
      Я бачив сотні випадків, коли дуже розумні люди, які досягли великих успіхів у бізнесі чи інших сферах,
      спускали сотні тисяч доларів за лічені тижні, не маючи чіткої перевіреної системи.
    </p>
    <img src="@/assets/img/ex1.png" alt="Адаптивне зображення" />
    <p>
      І в той же час я бачив, як люди з системним підходом та з малим капіталом з часом почали заробляти
      десятки тисяч доларів.
    </p>
    <div class="img-box">
      <img src="@/assets/img/ex2.png" alt="Друге адаптивне зображення" />
      <img src="@/assets/img/ex3.png" alt="Друге адаптивне зображення" />
      <img src="@/assets/img/ex4.png" alt="Друге адаптивне зображення" />
    </div>
    <p>
      Система 'Без Зусиль' має саме такий підхід – дати можливість навчитися заробляти навіть із мінімальним
      стартовим капіталом, використовуючи перевірені стратегії та чіткі правила купівлі-продажу і вже після
      стабільно збільшувати свої прибутки.
    </p>
    <div class="inner-box">
      <p>
        <span class="b">ПЛАН ДІЙ ТАКИЙ:</span> <br />1️⃣ <span class="b">Почати</span> з невеликих сум,
        протестувати стратегію та зрозуміти принципи роботи ринку. <br />2️⃣
        <span class="b">Реінвестувати</span> прибуток, поступово збільшуючи капітал. <br />3️⃣
        <span class="b">Використовувати</span> готову систему, а не роками вчитися на власних помилках.
      </p>
    </div>
    <p>
      <span class="b">РЕАЛЬНІ ДАНІ:</span><br />
      Новачки починають із невеликих депозитів, виходячи в прибуток вже на перших угодах. Стабільні результати
      досягаються завдяки чіткому алгоритму та контролю ризиків. <br /><br />➡️ Головне не стартова сума, а
      правильний підхід.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.example-container {
  max-width: 1050px;
  height: auto;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  border-radius: 35px;
  background-color: $bg-component;
}
h1 {
  text-align: center;
  font-family: 'Gilroy-Bold';
  color: $text-grey;
  font-size: clamp(25px, 4vw, 50px);
  margin-bottom: 30px;
}
h1,
p {
  line-height: normal;
}
p {
  font-family: 'Gilroy-Reg';
  color: $text-grey;
  font-size: clamp(16px, 3vw, 27px);
}
img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}
.img-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    max-width: 90%;
  }
}
.inner-box {
  background-color: $yellow;
  padding: 40px 60px;
  border-radius: 20px;
  position: relative;
  left: -7.5%;
  width: 115%;
  margin: 30px 0;
  p {
    color: $black;
  }
}
.b {
  font-family: 'Gilroy-Bold';
}
@media (max-width: 1000px) {
  .example-container {
    width: 90%;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 12px;
    gap: 10px;
    .inner-box {
      padding: 12px;
      width: 110%;
      left: -5%;
    }
  }
}
</style>
