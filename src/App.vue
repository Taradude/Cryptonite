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
}

body {
  background-color: $bg-color;
  // max-width: 1100px;
}
</style>
