<template>
  <!-- Movies Recommended For You start -->
  <SectionSlider :title="$t(props.title)" :list="recommendedforYou" :slides-per-view="5"
    :margin-padding="paddingTop ? 'px-3 pt-2 my-4' : 'px-3 my-4'" :wrapper-class="true">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none">{{ props.view }}</router-link>
    </template>
    <template #default="{ data }">
      <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime"
        :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
    </template>
  </SectionSlider>
  <!-- Movies Recommended For You end -->
</template>

<script setup>
import SectionSlider from '../slider/SectionSlider.vue';
import CardStyle from '../cards/CardStyle.vue';
import { recommendedforYou } from '../../StaticData/data';

const props = defineProps({
  title: { type: String, default: 'form.movies_recommended' },
  view: { type: String, default: '' },
  marginPadding: { type: String, default: '' },
  paddingTop: { type: String, default: '' },
});
</script>
