<template>
  <HomeHeroSlider></HomeHeroSlider>

  <section class="continue-watching-block">
    <ContinueWatching :slides-per-view="4"></ContinueWatching>
  </section>

  <UpcomingMovies :view="true ? $t('ott_home.view_all') : null" :slides-per-view="6"></UpcomingMovies>

  <LatestMovies :slider-data="latestMovie"></LatestMovies>

  <VerticalSectionSlider :slider-data="verticleLatestMovies" container-fluid="containerFluid"></VerticalSectionSlider>

  <SuggestedBlock></SuggestedBlock>

  <ParallexSection></ParallexSection>

  <TrendingSlider></TrendingSlider>

  <RecommendedTVShow></RecommendedTVShow>
</template>
<script setup>
// Hero Slider
import HomeHeroSlider from '../../components/slider/HomeHeroSlider.vue';

// Sections
import TrendingSlider from '../../components/sections/TrendingSection.vue';
import ContinueWatching from '../../components/sections/ContinueWatching.vue';
import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import LatestMovies from '../../components/sections/LatestMovies.vue';
import SuggestedBlock from '../../components/sections/SuggestedBlock.vue';
import RecommendedTVShow from '../../components/sections/RecommendedTVShow.vue';
import ParallexSection from '../../components/sections/ParallexSection.vue';
import VerticalSectionSlider from '../../components/slider/VerticalSectionSlider.vue';

import { verticleLatestMovies, latestMovie } from '../../StaticData/data';
</script>
