<template>
  <!-- Upcoming Movies start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    :slides-per-view="6"
    class="upcomimg-block streamit-block"
  >
    <template #headerLink>
      <nuxt-link
        :to="{ name: 'view-all' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
        >{{ $t("ott_home.view_all") }}</nuxt-link
      >
    </template>
    <template #default="{ data }">
      <card-style
        :image="data.image"
        :title="$t(data.title)"
        :movie-time="data.movieTime"
        :watchlist-link="{ name: 'play-list' }"
        :link="{ name: 'movies-detail' }"
      ></card-style>
    </template>
  </SectionSlider>
  <!-- Upcoming Movies end -->
</template>

<script setup>
import { ref } from "vue";

//components
import SectionSlider from "../slider/SectionSlider.vue";
import CardStyle from "../cards/CardStyle.vue";

//static data
import { upcommingMovie } from "../../StaticData/data";

const title = ref("home.upcoming_movies");
const topTen = ref(upcommingMovie);
</script>
