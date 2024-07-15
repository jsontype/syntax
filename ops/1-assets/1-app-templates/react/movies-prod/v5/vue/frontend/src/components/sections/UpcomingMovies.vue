<template>
  <!-- Upcoming Movies start -->
  <SectionSlider :title="$t(props.title)" :list="topTen" :slides-per-view="5" class="upcomimg-block streamit-block" :margin-padding="paddingTop ? 'px-3 pt-2 my-4' : 'px-3 my-4'">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ props.view }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Upcoming Movies end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { upcommingMovie } from '../../StaticData/data';
const props = defineProps({
  title: { type: String, default: 'home.upcoming_movies' },
  view: { type: String, default: '' },
  paddingTop: { type: String, default: '' },
});

const topTen = ref(upcommingMovie);
</script>
