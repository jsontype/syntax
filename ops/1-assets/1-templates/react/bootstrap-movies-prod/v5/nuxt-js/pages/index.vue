<template>
  <OttHeroSlider></OttHeroSlider>

  <ContinueWatching></ContinueWatching>

  <TopTenMoviesToWatch></TopTenMoviesToWatch>

  <OnlyOnStreamit></OnlyOnStreamit>

  <VerticalSectionSlider
    :slider-data="ottVerticleLatestMovies"
  ></VerticalSectionSlider>

  <YourFavouritePersonality></YourFavouritePersonality>

  <PopularMovies></PopularMovies>

  <TabSlider></TabSlider>

  <MovieGeners></MovieGeners>

  <RecommendedForYou></RecommendedForYou>

  <TopPicsForYou></TopPicsForYou>
</template>
<script setup>
// Hero Slider
import OttHeroSlider from "../../components/slider/OttHeroSlider.vue";

// Sections
import ContinueWatching from "../../components/sections/ContinueWatching.vue";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch.vue";
import RecommendedForYou from "../../components/sections/RecommendedForYou.vue";
import OnlyOnStreamit from "../../components/sections/OnlyOnStreamit.vue";
import PopularMovies from "../../components/sections/PopularMovies.vue";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality.vue";
import TopPicsForYou from "../../components/sections/TopPicsForYou.vue";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider.vue";
import TabSlider from "../../components/sections/TabSlider.vue";
import MovieGeners from "../../components/sections/MovieGeners.vue";

// StaticData
import { ottVerticleLatestMovies } from "../../StaticData/data";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
