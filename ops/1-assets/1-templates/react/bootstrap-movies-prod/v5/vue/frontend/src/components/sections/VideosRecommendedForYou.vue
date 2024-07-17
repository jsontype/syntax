<template>
  <!-- Videos Recommended For You start -->
  <SectionSlider :title="$t(title)" :list="recommendedforYou" :slides-per-view="6" class="recommended-block streamit-block" margin-padding="px-3 my-4">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Videos Recommended For You end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { recommendedforYou } from '../../StaticData/data';
const title = ref('form.videos_recommended');
</script>
