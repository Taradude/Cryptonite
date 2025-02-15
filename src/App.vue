<template>
  <router-view />
</template>

<style lang="scss">
@import '@/styles/fonts.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  background-color: $bg-color;
  max-width: 1000px;
}
</style>
