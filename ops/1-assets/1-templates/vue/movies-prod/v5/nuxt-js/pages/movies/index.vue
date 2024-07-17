<template>
  <MovieHeroSlider></MovieHeroSlider>

  <PopularMovies></PopularMovies>

  <SpecialsLatestMovies></SpecialsLatestMovies>

  <MoviesRecommendedForYou></MoviesRecommendedForYou>
</template>

<script setup>
// Hero Slider
import MovieHeroSlider from "../../components/slider/MovieHeroSlider.vue";

// Sections
import PopularMovies from "../../components/sections/PopularMovies.vue";
import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies.vue";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou.vue";
import { useEnterExit } from "~/utilities/usePage";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

useEnterExit();
</script>
