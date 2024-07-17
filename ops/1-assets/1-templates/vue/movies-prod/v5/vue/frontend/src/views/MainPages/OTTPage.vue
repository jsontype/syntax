<template>
  <OttHeroSlider></OttHeroSlider>

  <section class="continue-watching-block section-padding-top">
    <ContinueWatching></ContinueWatching>
  </section>

  <TopTenMoviesToWatch></TopTenMoviesToWatch>

  <OnlyOnStreamit></OnlyOnStreamit>

  <VerticalSectionSlider :slider-data="ottVerticleLatestMovies"></VerticalSectionSlider>

  <YourFavouritePersonality></YourFavouritePersonality>

  <PopularMovies></PopularMovies>

  <TabSlider></TabSlider>

  <div class="movie-geners-block">
    <MovieGeners padding-top="paddingTop" class="pt-3 pt-lg-0"></MovieGeners>
  </div>

  <RecommendedForYou></RecommendedForYou>

  <TopPicsForYou></TopPicsForYou>
</template>
<script setup>
// Hero Slider
import OttHeroSlider from '../../components/slider/OttHeroSlider.vue';

// Sections
import ContinueWatching from '../../components/sections/ContinueWatching.vue';
import TopTenMoviesToWatch from '../../components/sections/TopTenMoviesToWatch.vue';
import RecommendedForYou from '../../components/sections/RecommendedForYou.vue';
import OnlyOnStreamit from '../../components/sections/OnlyOnStreamit.vue';
import PopularMovies from '../../components/sections/PopularMovies.vue';
import YourFavouritePersonality from '../../components/sections/YourFavouritePersonality.vue';
import TopPicsForYou from '../../components/sections/TopPicsForYou.vue';
import VerticalSectionSlider from '../../components/slider/VerticalSectionSlider.vue';
import TabSlider from '../../components/sections/TabSlider.vue';
import MovieGeners from '../../components/sections/MovieGeners.vue';

// StaticData
import { ottVerticleLatestMovies } from '../../StaticData/data';
</script>
