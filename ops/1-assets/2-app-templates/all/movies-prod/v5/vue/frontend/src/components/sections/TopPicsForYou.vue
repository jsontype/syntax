<template>
  <!-- Top Pics For You start -->
  <SectionSlider :title="$t(title)" :list="topTen" :slides-per-view="6" class="top-pics-block streamit-block" margin-padding="px-md-3 px-1 my-4">
    <template #headerLink>
      <router-link to="/view-all" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" movie-time="data.movieTime" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Top Pics For You end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { topPics } from '../../StaticData/data';
const title = ref('ott_home.top_pics');
const topTen = ref(topPics);
</script>
