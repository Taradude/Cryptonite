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
    return utm;
  };

  function saveUTMs() {
    const utmParams = getUTMParams();
    if (Object.keys(utmParams).length) {
      localStorage.setItem('utm_data', JSON.stringify(utmParams.utm_source));
    } else {
      localStorage.setItem('utm_data', "Нема UTM");
    }
  };

  function initBtn() {
    const btns = document.querySelectorAll('a[href="https://secure.wayforpay.com/button/ba17bd76f2043"]');
    btns?.forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const baseUrl = this.getAttribute('href');
          
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = baseUrl;
          form.style.display = 'none';
          
          const inputMerchantData = document.createElement('input');
          inputMerchantData.type = 'hidden';
          inputMerchantData.name = 'merchantData';
          inputMerchantData.value = localStorage.getItem('utm_data') ?? "Нема UTM";
          form.appendChild(inputMerchantData);
          
          document.body.appendChild(form);
          form.submit();
        });
      }
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    saveUTMs();
    initBtn();
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