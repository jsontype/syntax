<template>
  <!-- Recommended TV Show start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" class="recommended-block streamit-block" margin-padding="px-3 my-4">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Recommended TV Show end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';

import { recommendedforYou } from '../../StaticData/data';
const title = ref('form.recommended_tv_show');
const topTen = ref(recommendedforYou);
</script>
