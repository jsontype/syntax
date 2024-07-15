<template>
  <!-- Only on streamit start -->
  <SectionSlider :title="$t(title)" :list="geners" :slides-per-view="6" card-style-slider="cardStyleSlider" class="streamit-block" :margin-padding="paddingTop ? 'px-md-3 px-1 my-4' : 'px-3 my-4'">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.all-geners' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('ott_home.view_all') }}</router-link>
    </template>
    <template #default="{ data }">
      <geners-card :image="data.thumbnail" :title="$t(data.title)"></geners-card>
    </template>
  </SectionSlider>
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from 'vue';
import { geners } from '../../StaticData/data';
import GenersCard from '../cards/GenersCard.vue';
import SectionSlider from '../slider/SectionSlider.vue';
defineProps({
  paddingTop: { type: String, default: '' },
});

const title = ref('ott_home.movie_geners');
</script>
