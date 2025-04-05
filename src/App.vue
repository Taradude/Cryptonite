<template>
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Мінікурс Без Зусиль | Cryptonite';

  function getUTMParams() {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    const utmValues = [];

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0].startsWith('utm_')) {
        utmValues.push(decodeURIComponent(pair[1]));
      }
    }

    return utmValues.length ? utmValues.join(', ') : "Нема UTM";
  }

  const fetchServer = async () => {
    const ip = await (await fetch('https://api.ipify.org')).text();
    const response = await fetch('https://cryptonite.com.ua/api/post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        UTM: getUTMParams(),
        IP: ip
      })
    });
    const data = await response.json();
    return data;
  }

  fetchServer();
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