<template>
  <b-container>
    <b-row class="align-items-center">
      <b-col lg="3"></b-col>
      <b-col lg="6" md="12">
        <div class="title-box text-center">
          <h2 class="">{{ $t("about_us.mastermind_team") }}</h2>
          <p class="mb-0">
            {{ $t("about_us.streamit_build") }} <br />{{
              $t("about_us.envato_author")
            }}
          </p>
        </div>
      </b-col>
      <b-col lg="3"></b-col>
    </b-row>
    <div class="row about-us-detail">
      <div v-for="(data, index) of lists" :key="index" class="col-md-3 mb-4">
        <ProfileCard
          :name="$t(data.name)"
          :designation="$t(data.designation)"
          :image="data.image"
        ></ProfileCard>
      </div>
    </div>
  </b-container>
</template>
<script setup>
import { reactive } from "vue";
import ProfileCard from "../../../components/cards/ProfileCard.vue";
import { generateImgPath } from "../../../StaticData/data";
const lists = reactive([
  {
    image: generateImgPath("/assets/images/pages/team1.webp"),
    designation: "about_us.ceo",
    name: "about_us.tonny_smith",
  },
  {
    image: generateImgPath("/assets/images/pages/team2.webp"),
    designation: "about_us.designer",
    name: "about_us.barry_tech",
  },
  {
    image: generateImgPath("/assets/images/pages/team3.webp"),
    designation: "about_us.developer",
    name: "about_us.kep_john",
  },
  {
    image: generateImgPath("/assets/images/pages/team4.webp"),
    designation: "about_us.designer",
    name: "about_us.monty_rock",
  },
]);
</script>
