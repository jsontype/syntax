<template>
  <!-- your favourite personality start -->
  <SectionSlider
    :title="$t(title)"
    :list="topTen"
    :slides-per-view="11"
    class="streamit-block personality-card"
  >
    <template #headerLink>
      <nuxt-link
        :to="{ name: 'cast-all-personality' }"
        class="text-primary iq-view-all text-decoration-none flex-none"
        >{{ $t("ott_home.view_all") }}</nuxt-link
      >
    </template>
    <template #default="{ data }">
      <personality-card
        :category="data.category"
        :image="data.image"
        :title="$t(data.title)"
        :category-link="{ path: '/' }"
        :link="{ name: 'cast-detail' }"
      ></personality-card>
    </template>
  </SectionSlider>
  <!-- your favourite personality end -->
</template>

<script setup>
import { ref } from "vue";
import SectionSlider from "../slider/SectionSlider.vue";
import PersonalityCard from "../cards/PersonalityCard.vue";
import { generateImgPath } from "../../StaticData/data";
const title = ref("ott_home.personality");
const topTen = ref([
  {
    image: generateImgPath("/assets/images/cast/01.webp"),
    title: "ott_home.john_abraham",
    category: "detail_page.actor",
  },
  {
    image: generateImgPath("/assets/images/cast/02.webp"),
    title: "ott_home.leena_burton",
    category: "ott_home.actress",
  },
  {
    image: generateImgPath("/assets/images/cast/03.webp"),
    title: "ott_home.lorina_williams",
    category: "ott_home.actress",
  },
  {
    image: generateImgPath("/assets/images/cast/04.webp"),
    title: "ott_home.davina_decorous",
    category: "ott_home.actress",
  },
  {
    image: generateImgPath("/assets/images/cast/05.webp"),
    title: "ott_home.thomas_bailey",
    category: "ott_home.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/06.webp"),
    title: "ott_home.kelly_reilly",
    category: "ott_home.actress",
  },
  {
    image: generateImgPath("/assets/images/cast/07.webp"),
    title: "ott_home.smith_jonas",
    category: "ott_home.director",
  },
  {
    image: generateImgPath("/assets/images/cast/08.webp"),
    title: "ott_home.angel_louis",
    category: "ott_home.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/09.webp"),
    title: "ott_home.millar_joseph",
    category: "detail_page.actor",
  },
  {
    image: generateImgPath("/assets/images/cast/10.webp"),
    title: "ott_home.mark_wilson",
    category: "detail_page.actor",
  },
  {
    image: generateImgPath("/assets/images/cast/11.webp"),
    title: "ott_home.kelley_walker",
    category: "ott_home.producer",
  },
  {
    image: generateImgPath("/assets/images/cast/12.webp"),
    title: "ott_home.amy_sedaris",
    category: "detail_page.actor",
  },
]);
</script>
