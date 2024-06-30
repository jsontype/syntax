<template>
  <div>
    <section class="iq-tags-section pt-4">
      <div class="container-fluid" style="margin-top: 3em">
        <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
          <h4 class="main-title">{{ $t("ott_home.movie_tag") }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in list.slice(0, 12)" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type">
            </TagsCard>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button mb-4">
            <nuxt-link :to="{}" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t("ott_home.load_more") }}</span>
              <i class="fa-solid fa-play"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="iq-tags-section pt-4">
      <div class="container-fluid">
        <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
          <h4 class="main-title">{{ $t("ott_home.tv_show_tag") }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in tvShowsList" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type">
            </TagsCard>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button mb-4">
            <nuxt-link :to="{}" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t("ott_home.load_more") }}</span>
              <i class="fa-solid fa-play"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="iq-tags-section pt-4">
      <div class="container-fluid">
        <div class="iq-main-header d-flex align-items-center justify-content-between mt-5 mt-lg-0">
          <h4 class="main-title">{{ $t("ott_home.video_tag") }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in videoList" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <nuxt-link :to="{ name: 'blogs' }">
              <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"></TagsCard>
            </nuxt-link>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button mb-4">
            <nuxt-link :to="{}" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t("ott_home.load_more") }}</span>
              <i class="fa-solid fa-play"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
//components
import TagsCard from "../components/cards/TagsCard.vue";

//static data
import { movieTags, tvShowsTags, videoTags } from "../StaticData/data";

//custom hook
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Tags");

const list = movieTags.slice(0, 12);
const tvShowsList = tvShowsTags;
const videoList = videoTags;
</script>
