<template>
  <div class="container">
    <div class="image-container">
      <img :src="image" alt="Image" />
    </div>
    <div class="text-container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 130px;
  padding: 10px;
  gap: 15px;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.image-container {
  flex: 0 0 30%; /* Картинка займає 30% ширини контейнера */
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

p {
  margin: 0;
  font-size: 1rem;
  color: #777;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }

  .image-container {
    flex: 0 0 50%; /* Картинка займає 50% ширини контейнера на маленьких екранах */
    height: 200px; /* фіксована висота картинки */
  }

  .text-container {
    flex: 1;
    text-align: center;
  }

  h2 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 5px;
  }

  .image-container {
    flex: 0 0 100%; /* Картинка займає всю ширину контейнера */
    height: 180px;
  }

  .text-container {
    flex: 1;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
