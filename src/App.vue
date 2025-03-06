<template>
  <router-view />
</template>

<style lang="scss">
@import '@/styles/fonts.scss';
p,
h1,
h2,
span {
  line-height: normal;
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
  // max-width: 1100px;
}
</style>
