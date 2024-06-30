<template>
  <!-- Only on streamit start -->
  <SectionSlider
    :title="$t(title)"
    :list="geners"
    :slides-per-view="6"
    class="streamit-block"
  >
    <template #headerLink>
      <nuxt-link
        :to="{ name: 'genres-all-genre' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
        >{{ $t("ott_home.view_all") }}</nuxt-link
      >
    </template>
    <template #default="{ data }">
      <geners-card
        :image="data.thumbnail"
        :title="$t(data.title)"
      ></geners-card>
    </template>
  </SectionSlider>
  <!-- Only on streamit end -->
</template>

<script setup>
import { ref } from "vue";

//components
import SectionSlider from "../slider/SectionSlider.vue";
import GenersCard from "../cards/GenersCard.vue";

//static data
import { geners } from "../../StaticData/data";

const title = ref("ott_home.movie_geners");
</script>
