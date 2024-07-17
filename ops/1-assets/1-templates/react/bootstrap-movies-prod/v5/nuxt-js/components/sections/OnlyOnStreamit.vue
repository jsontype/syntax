<template>
  <!-- Only on streamit start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    :slides-per-view="6"
    class="streamit-block"
  >
    <template #headerLink>
      <nuxt-link
        to="view-all"
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
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from "vue";
import SectionSlider from "../slider/SectionSlider.vue";
import CardStyle from "../cards/CardStyle.vue";

import { sectionSliders } from "../../StaticData/data";
const title = ref("ott_home.only_on_streamit");
const topTen = ref(sectionSliders);
</script>
