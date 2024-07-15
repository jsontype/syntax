<template>
  <!-- Continue watching start -->
  <SectionSlider :title="$t(title)" :list="watching" margin-padding="px-2 px-md-3 mb-4" :wrapper-class="true">
    <template #default="{ data }">
      <continue-watch-card :image-path="data.image" :progress-value="data.value" :data-left-time="data.leftTime" :link="{ path: '/movies-detail' }"></continue-watch-card>
    </template>
  </SectionSlider>
  <!-- Continue watching end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import ContinueWatchCard from '../../components/cards/ContinueWatchCard.vue';
import { generateImgPath } from '../../StaticData/data';
const title = ref('ott_home.continue_watching');
const watching = ref([
  {
    image: generateImgPath('/assets/images/continue-watch/01.webp'),
    value: 50,
    leftTime: '70 of 230 m',
  },
  {
    image: generateImgPath('/assets/images/continue-watch/02.webp'),
    value: 90,
    leftTime: '120 of 130 m',
  },
  {
    image: generateImgPath('/assets/images/continue-watch/03.webp'),
    value: 60,
    leftTime: '60 of 134 m',
  },
  {
    image: generateImgPath('/assets/images/continue-watch/04.webp'),
    value: 30,
    leftTime: '60 of 134 m',
  },
  {
    image: generateImgPath('/assets/images/continue-watch/05.webp'),
    value: 95,
    leftTime: '40 of 157 m',
  },
  {
    image: generateImgPath('/assets/images/continue-watch/06.webp'),
    value: 75,
    leftTime: '70 of 230 m',
  },
]);

// const addSwiperClasses = () => {
//   const SwiperWrapper = document.querySelector('.swiper-wrapper');
//   if (SwiperWrapper) {
//     SwiperWrapper.classList.add('slider', 'm-0', 'p-0', 'home-slider');
//   }
// };

// onMounted(() => {
//   addSwiperClasses();
// });
// useWrapperClass()
</script>
