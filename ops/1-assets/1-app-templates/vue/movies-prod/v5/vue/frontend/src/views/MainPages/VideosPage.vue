<template>
  <VideoHeroSlider></VideoHeroSlider>

  <PopularVideos></PopularVideos>

  <SpecialsLatestMovies :title="$t('home.specials_latest_videos')"></SpecialsLatestMovies>

  <VideosRecommendedForYou></VideosRecommendedForYou>
</template>
<script setup>
// Hero Slider
import VideoHeroSlider from '../../components/slider/VideoHeroSlider.vue';

// sections
import PopularVideos from '../../components/sections/PopularVideos.vue';
import SpecialsLatestMovies from '../../components/sections/Specials&LatestMovies.vue';
import VideosRecommendedForYou from '../../components/sections/VideosRecommendedForYou.vue';
</script>
