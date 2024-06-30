<template>
  <section class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 my-4">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="main-title text-capitalize mb-0">
              favourite-personality
            </h5>
          </div>
        </div>
      </div>
      <b-row
        class="row row-cols-xl-5 row-cols-md-2 row-cols-1 personality-card"
      >
        <b-col v-for="data in cast.slice(0, 14)" :key="data" class="mb-4">
          <cast-card
            :title="data.title"
            :designation="data.designation"
            :image="data.profile_image"
          ></cast-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script setup>
//components
import CastCard from "~/components/cards/CastCard.vue";

//data
import { cast } from "../../StaticData/data";

//custom hook
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("View All");
</script>
