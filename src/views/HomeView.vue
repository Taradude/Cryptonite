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
    <StageComponent />
    <ReviewComponent />
    <HowCourseComponent />
    <FaqComponent />
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
import StageComponent from '@/components/StageComponent.vue'
import ReviewComponent from '@/components/ReviewComponent.vue'
import HowCourseComponent from '@/components/HowCourseComponent.vue'
import FaqComponent from '@/components/FaqComponent.vue'

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
    StageComponent,
    ReviewComponent,
    HowCourseComponent,
    FaqComponent,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // max-width: 1000px;
}
</style>
