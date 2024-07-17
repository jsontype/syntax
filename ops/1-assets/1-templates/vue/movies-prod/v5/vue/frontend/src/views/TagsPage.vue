<template>
  <div>
    <section class="section-padding">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.movie_tag') }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in list.slice(0, 12)" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"> </TagsCard>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('ott_home.load_more') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding-bottom">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.tv_show_tag') }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in tvShowsList" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"> </TagsCard>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('ott_home.load_more') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding-bottom">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.video_tag') }}</h4>
        </div>
        <ul class="row mb-0 list-inline">
          <li v-for="data in videoList" :key="data" class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <router-link :to="{ name: 'landing-page.blogs' }">
              <TagsCard :slug="data.slug" :title="$t(data.title)" :type="data.type"></TagsCard>
            </router-link>
          </li>
        </ul>
        <div class="text-center">
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('ott_home.load_more') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import TagsCard from '../components/cards/TagsCard.vue';
import { movieTags, tvShowsTags, videoTags } from '../StaticData/data';
const list = movieTags.slice(0, 12);
const tvShowsList = tvShowsTags;
const videoList = videoTags;
</script>
