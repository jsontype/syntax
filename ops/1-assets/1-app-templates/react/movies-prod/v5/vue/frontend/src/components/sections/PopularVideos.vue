<template>
  <!-- Popular Videos start -->
  <SectionSlider :title="$t(title)" :list="populerSlider" :slides-per-view="6" class="recommended-block section-top-spacing streamit-block" margin-padding="px-3 my-4">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime" :watchlist-link="{ path: '/' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Popular Videos end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { populerSlider } from '../../StaticData/data';
const title = ref('form.popular_videos');
</script>
