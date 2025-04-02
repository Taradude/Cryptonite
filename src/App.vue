<template>
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Мінікурс Без Зусиль | Cryptonite';

  function getUTMParams() {
    const utm = {};
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0].indexOf('utm_') === 0) {
        utm[pair[0]] = decodeURIComponent(pair[1]);
      }
    }
    return utm?.utm_source ?? "Нема UTM";
  };

  const pushDataToServer = async () => {
    const response = await fetch('https://cryptonite.com.ua/api/post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        UTM: getUTMParams(),
      })
    });
    const data = await response.json();
    return data;
  }

  document.addEventListener('DOMContentLoaded', () => {
    pushDataToServer();
  });

})

</script>

<style lang="scss">
@import '@/styles/fonts.scss';
p,
h1,
h2,
span {
  line-height: normal;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: $bg-color;
}
</style>;