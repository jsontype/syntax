<template>
  <!-- Suggested-Block start -->
  <SectionSlider
    :title="$t(title)"
    :list="suggested"
    :slides-per-view="6"
    class="suggested-block streamit-block"
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
  <!-- Suggested-Block end -->
</template>

<script setup>
import { ref } from "vue";
import SectionSlider from "../slider/SectionSlider.vue";
import CardStyle from "../cards/CardStyle.vue";
import { suggested } from "../../StaticData/data";
const title = ref("home.suggested_block");
</script>
