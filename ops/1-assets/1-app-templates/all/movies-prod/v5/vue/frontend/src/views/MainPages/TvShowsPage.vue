<template>
  <TvShowHeroSlider></TvShowHeroSlider>

  <TVPopularShows></TVPopularShows>

  <BestOfInternationalShows></BestOfInternationalShows>

  <ShowsWeRecommend></ShowsWeRecommend>
</template>
<script setup>
// Hero Slider
import TvShowHeroSlider from '../../components/slider/TvShowHeroSlider.vue';

// sections
import TVPopularShows from '../../components/sections/TVPopularShows.vue';
import BestOfInternationalShows from '../../components/sections/BestOfInternationalShows.vue';
import ShowsWeRecommend from '../../components/sections/ShowsWeRecommend.vue';
</script>
