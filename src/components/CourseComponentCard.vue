<template>
  <div class="container">
    <!-- Верхній блок з текстом -->
    <div class="top-section">
      <div class="yellow-box">
        <p class="text-content">{{ topText }}</p>
      </div>
      <p class="bottom-text">{{ bottomText }}</p>
    </div>

    <!-- Блок з двома фото -->
    <div class="image-section">
      <div class="left-image">
        <img :src="leftImage" alt="Left Image" />
      </div>
      <div class="right-image">
        <img :src="rightImage" alt="Right Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topText: String,
    bottomText: String,
    leftImage: String,
    rightImage: String,
  },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  background-color: $bg-component;
}

.top-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.yellow-box {
  background-color: $yellow;
  padding: 6px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 60px;
}

.text-content {
  font-family: 'Gilroy-H';
  font-weight: 800;
  margin: 0;
  color: $black;
}

.bottom-text {
  margin: 0;
  font-size: 1rem;
  color: white;
  font-weight: 100;
  font-family: 'Gilroy-reg';
  font-style: normal;
  font-size: $h2-size;
  line-height: normal;
}

.image-section {
  display: flex;
  width: 100%; /* Забезпечує, що зображення займають всю ширину */
  height: auto;
  max-height: 440px;
  overflow: hidden;
  align-items: stretch; /* Зображення заповнюють висоту */
}

.left-image,
.right-image {
  display: flex;
  justify-content: center; /* Вирівнювання по центру */
  align-items: center; /* Вирівнювання по центру */
}

.left-image {
  flex: 0 0 30%; /* Ліве зображення займає 30% ширини */
  padding: 0;
}

.right-image {
  flex: 0 0 70%; /* Праве зображення займає 70% ширини */
  padding: 0;
}

.left-image img,
.right-image img {
  width: 100%; /* Зображення займатимуть ширину відповідно до розміру батьківського елемента */
  height: 100%; /* Висота зображення також змінюється пропорційно */
  object-fit: cover; /* Заповнює контейнер без спотворення */
}

.left-image img {
  border-top-left-radius: 20px; /* Заокруглення лівого фото */
  border-bottom-left-radius: 20px; /* Заокруглення лівого фото */
}

.right-image img {
  border-top-right-radius: 20px; /* Заокруглення правого фото */
  border-bottom-right-radius: 20px; /* Заокруглення правого фото */
}
</style>
