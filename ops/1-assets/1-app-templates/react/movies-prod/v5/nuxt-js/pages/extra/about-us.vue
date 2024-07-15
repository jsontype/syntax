<template>
  <section class="section-padding">
    <team-section></team-section>
  </section>
  <contact-us></contact-us>
  <work-section></work-section>
</template>

<script setup>
//components
import TeamSection from "./AboutSections/TeamSection.vue";
import ContactUs from "./AboutSections/ContactUs.vue";
import WorkSection from "./AboutSections/WorkSection.vue";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("About Us");
</script>
