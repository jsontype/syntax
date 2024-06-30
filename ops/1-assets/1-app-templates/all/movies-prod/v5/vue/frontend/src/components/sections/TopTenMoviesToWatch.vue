<template>
  <!-- Top 10 start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" card-style-slider="cardStyleSlider" classlist="top-ten-block" margin-padding="px-md-3 px-1 mb-4" swipper-class="iq-top-ten-block-slider swiper-watch-progress">
    <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <top-ten-card :image-path="data.image" :count-value="data.count" classlist="iq-top-ten-block" :link="{ path: '/movies-detail' }"></top-ten-card>
    </template>
  </SectionSlider>
  <!-- Top 10 end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import TopTenCard from '../../components/cards/TopTenCard.vue';
import { generateImgPath } from '../../StaticData/data';
const title = ref('ott_home.top_ten_movies');
const topTen = ref([
  {
    image: generateImgPath('/assets/images/top-ten-number/01.webp'),
    count: 1,
  },
  {
    image: generateImgPath('/assets/images/top-ten-number/02.webp'),
    count: 2,
  },
  {
    image: generateImgPath('/assets/images/top-ten-number/03.webp'),
    count: 3,
  },
  {
    image: generateImgPath('/assets/images/top-ten-number/04.webp'),
    count: 4,
  },
  {
    image: generateImgPath('/assets/images/top-ten-number/05.webp'),
    count: 5,
  },
  {
    image: generateImgPath('/assets/images/top-ten-number/06.webp'),
    count: 6,
  },
]);
</script>
