<template>
  <main class="main-content">
    <!-- Header Component Start -->
    <HeaderDefault></HeaderDefault>
    <!-- Header Component End-->

    <!-- Hero Slider, Banner Start -->
    <BreadcrumbWidget v-if="route.meta.beforeWrapper"></BreadcrumbWidget>
    <!-- Hero Slider, Banner End -->

    <!-- Main Component Start -->
    <router-view />
    <!-- Main Component Start -->
  </main>

  <!-- Footer Component Start -->
  <FooterDefault></FooterDefault>
  <!-- Footer Component End -->

  <SettingOffcanvas></SettingOffcanvas>
</template>
<script setup>
// Import Vue Rounter Hooks
import { useRoute } from 'vue-router';

// Import Header Components
import HeaderDefault from '../components/partials/HeaderDefault.vue';
import FooterDefault from '../components/partials/FooterDefault.vue';

// Import Header Breadcrumb Component
import BreadcrumbWidget from '../components/BreadcrumbWidget.vue';

import SettingOffcanvas from '../components/SettingOffcanvas.vue';

const route = useRoute();
</script>
<style lang="scss"></style>
