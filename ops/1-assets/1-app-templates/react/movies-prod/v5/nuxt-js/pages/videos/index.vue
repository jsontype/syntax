<template>
  <VideoHeroSlider></VideoHeroSlider>

  <PopularVideos></PopularVideos>

  <SpecialsLatestMovies></SpecialsLatestMovies>

  <VideosRecommendedForYou></VideosRecommendedForYou>
</template>

<script setup>
// Hero Slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider.vue";

// sections
import PopularVideos from "../../components/sections/PopularVideos.vue";
import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies.vue";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou.vue";
import { useEnterExit } from "~/utilities/usePage";

import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

useEnterExit();
</script>
