const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/styles/fonts.scss";
          @import "@/styles/colors.scss";
          @import "@/styles/text.scss";
        `,
      },
    },
  },
})
