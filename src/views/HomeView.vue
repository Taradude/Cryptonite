<template>
  <div class="home">
    <HeaderComp />
    <SliderComp />
    <EffortlessComp />
    <ForWhomCourse />
    <CourseSpeakerCard />
    <CourseComponentCard />
    <TabComponent />
    <ExampleComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CourseComponentCard from '@/components/CourseComponentCard.vue'
import TabComponent from '@/components/TabComponent.vue'
import ForWhomCourse from '@/components/ForWhomCourse.vue'
import CourseSpeakerCard from '@/components/CourseSpeakerCard.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import SliderComp from '@/components/SliderComp.vue'
import EffortlessComp from '@/components/EffortlessComp.vue'
import ExampleComponent from '@/components/ExampleComponent.vue'

@Options({
  components: {
    CourseComponentCard,
    TabComponent,
    ForWhomCourse,
    CourseSpeakerCard,
    HeaderComp,
    SliderComp,
    EffortlessComp,
    ExampleComponent,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
