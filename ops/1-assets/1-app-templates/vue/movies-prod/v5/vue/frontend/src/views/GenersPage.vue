<template>
  <section class="section-padding">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.movie_genres') }}</h4>
      </div>
      <b-row class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <b-col v-for="data in list.slice(0, 7)" :key="data" class="col mb-4">
          <card-genres-grid :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></card-genres-grid>
        </b-col>
      </b-row>
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
        <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.tv_show_genres') }}</h4>
      </div>
      <b-row class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <b-col v-for="data in tvShowList.slice(0, 7)" :key="data" class="col mb-4">
          <card-genres-grid :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></card-genres-grid>
        </b-col>
      </b-row>
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
        <h4 class="main-title text-capitalize mb-0">{{ $t('ott_home.video_genres') }}</h4>
      </div>
      <b-row class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <b-col v-for="data in videoList.slice(0, 7)" :key="data" class="col mb-4">
          <card-genres-grid :slug="data.slug" :title="$t(data.title)" :image="data.thumbnail" :type="data.type"></card-genres-grid>
        </b-col>
      </b-row>
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
</template>
<script setup>
import CardGenresGrid from '../components/cards/CardGenresGrid.vue';
import { geners, tvShowGenres, videoGenres } from '../StaticData/data';
const list = geners;
const tvShowList = tvShowGenres;
const videoList = videoGenres;
</script>
