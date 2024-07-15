<template>
  <main class="main-content">
    <!-- Header Component Start -->
    <HeaderDefault></HeaderDefault>
    <!-- Header Component End-->

    <!-- Hero Slider, Banner Start -->
    <BreadcrumbWidget v-if="isBreadcrumb"></BreadcrumbWidget>
    <!-- Hero Slider, Banner End -->

    <!-- Main Component Start -->
    <NuxtPage />
    <!-- Main Component Start -->
  </main>

  <!-- Footer Component Start -->
  <FooterDefault></FooterDefault>
  <!-- Footer Component End -->

  <SettingOffcanvas></SettingOffcanvas>
</template>
<script setup>
// Import Vue Rounter Hooks
import { computed } from "vue";
// import { useRoute } from 'vue-router';

// Import Header Components
import HeaderDefault from "../components/partials/HeaderDefault.vue";
import FooterDefault from "../components/partials/FooterDefault.vue";

// Import Header Breadcrumb Component
import BreadcrumbWidget from "../components/BreadcrumbWidget.vue";

import SettingOffcanvas from "../components/SettingOffcanvas.vue";
import { useStremit } from "~/store/streamit";
// import LoaderComponent from "~/components/LoaderComponent.vue";
const store = useStremit();
const isBreadcrumb = computed(() => store.breadcrumb.show);

// const nuxtApp = useNuxtApp();
// const loader = ref(true);
// nuxtApp.hook("page:start", () => {
// loader.value = true;
// });
// nuxtApp.hook("page:finish", () => {
// loader.value = false;
// });
</script>
<style lang="scss"></style>
