<template>
  <div class="home">
    <CourseComponentCard
      topText="УРОК 1"
      bottomText="Система Без Зусиль: що це і як вона допоможе тобі
досягти успіху на крипторинку. Вступний урок."
      :leftImage="require('@/assets/img/l_main.png')"
      :rightImage="require('@/assets/img/l1.png')"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CourseComponentCard from '@/components/CourseComponentCard.vue'

@Options({
  components: {
    CourseComponentCard,
  },
})
export default class HomeView extends Vue {}
</script>
