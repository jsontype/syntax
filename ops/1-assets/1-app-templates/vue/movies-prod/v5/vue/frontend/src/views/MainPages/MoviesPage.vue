<template>
  <MovieHeroSlider></MovieHeroSlider>

  <PopularMovies></PopularMovies>

  <SpecialsLatestMovies></SpecialsLatestMovies>
  <section class="recommended-block">
    <MoviesRecommendedForYou :view="true ? $t('ott_home.view_all') : null" :slides-per-view="6"></MoviesRecommendedForYou>
  </section>
</template>
<script setup>
// Hero Slider
import MovieHeroSlider from '../../components/slider/MovieHeroSlider.vue';

// Sections
import PopularMovies from '../../components/sections/PopularMovies.vue';
import SpecialsLatestMovies from '../../components/sections/Specials&LatestMovies.vue';
import MoviesRecommendedForYou from '../../components/sections/MoviesRecommendedForYou.vue';
</script>
