<template>
  <div class="d-block d-lg-flex align-items-center">
    <h2 class="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block" data-animation-in="fadeInLeft" data-delay-in="0.6" style="opacity: 1; animation-delay: 0.6s">
      {{ $t(videos.title) }}
    </h2>
    <div class="slider-ratting d-flex align-items-center ms-lg-3 ms-0">
      <ul class="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
      </ul>
      <span class="text-white ms-2">{{ videos.rating }} {{ videos.rating_from }}</span>
    </div>
  </div>
  <ul class="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
    <li v-for="data in videos.geners" :key="data" class="trending-list">
      <router-link :to="{ name: 'landing-page.view-all' }" class="text-primary text-capitalize"> {{ $t(data) }}</router-link>
    </li>
  </ul>
  <div class="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
    <span class="badge bg-secondary">{{ $t(videos.certificate) }}</span>
    <span class="ms-3 font-Weight-500 genres-info">{{ videos.duration }}</span>
    <span class="trending-year trending-year-list font-Weight-500 genres-info"> {{ videos.created_at }} </span>
  </div>

  <div class="d-flex align-items-center gap-4 flex-wrap mb-4">
    <ul class="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
      <li class="share">
        <span><i class="fa-solid fa-share-nodes"></i></span>
        <div class="share-box">
          <svg width="15" height="40" viewBox="0 0 15 40" class="share-shape" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
          </svg>
          <div class="d-flex align-items-center">
            <a href="#" class="share-ico"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="share-ico"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="share-ico"><i class="fa-solid fa-link"></i></a>
          </div>
        </div>
      </li>
      {{
        ''
      }}
      <li>
        <span><i class="fa-solid fa-heart"></i></span>
      </li>
      {{
        ''
      }}
      <li>
        <span><i class="fa-solid fa-plus"></i></span>
      </li>
      {{
        ''
      }}
      <li>
        <span><i class="fa-solid fa-download"></i></span>
      </li>
    </ul>
    <div class="movie-detail-select">
      <select ref="selectElement" name="movieselect" class="form-control movie-select" :tabindex="tabindex">
        <option value="1">{{ $t('detail_page.playlist') }}</option>
        <option value="2">{{ $t('detail_page.zombie_island') }}</option>
        <option value="3">{{ $t('detail_page.sand_dust') }}</option>
        <option value="4">{{ $t('detail_page.jumbo_queen') }}</option>
      </select>
    </div>
  </div>

  <ul class="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
    <li class="iq-tag-title text-primary mb-0">
      <i class="fa fa-tags" aria-hidden="true"></i>
      {{ $t('form.tags') }}:
    </li>
    <li v-for="data in videos.geners" :key="data">
      <router-link :to="{ name: 'landing-page.view-all' }" class="title">{{ $t(data) }}</router-link>
      <span class="text-secondary">,</span>
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import { generateImgPath } from '../StaticData/data';
import Choices from 'choices.js';

const selectElement = ref(0);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const videos = {
  id: 1,
  slug: 'zombie-world',
  thumbnail: generateImgPath('/assets/images/genre/01.webp'),
  title: 'detail_page.zombie_island',
  detail: 'detail_page.movie_desc',
  season_type: '2 Season',
  certificate: 'detail_page.horror',
  rating: 4.8,
  likes: 9,
  rating_from: '(imdb)',
  geners: ['ott_home.action', 'ott_home.adventure', 'ott_home.drama'],
  tags: ['ott_home.brother', 'ott_home.brother_relationship', 'ott_home.kings', 'ott_home.vikings'],
  video_link: '',
  video_type: 'video',
  is_restricted: false,

  cast: [
    {
      title: 'detail_page.james_chinlund',
      thumbnail: generateImgPath('/assets/images/genre/g1.webp'),
      as: 'detail_page.as_james',
    },
    {
      title: 'detail_page.james_earl',
      thumbnail: generateImgPath('/assets/images/genre/g2.webp'),
      as: 'detail_page.as_jones',
    },
  ],
  crew: [
    {
      title: 'detail_page.jeff_nathanson',
      thumbnail: generateImgPath('/assets/images/genre/g3.webp'),
      as: 'detail_page.writing',
    },
    {
      title: 'detail_page.irene_mecchi',
      thumbnail: generateImgPath('/assets/images/genre/g5.webp'),
      as: 'detail_page.writing',
    },
    {
      title: 'detail_page.karan_gilchrist',
      thumbnail: generateImgPath('/assets/images/genre/g4.webp'),
      as: 'detail_page.production',
    },
  ],
  created_by_username: 'Admin',
  created_at: '1hr 48mins Feb 2017',
  ranking: '#1 in Series Today ',
  date: 'Nov 2020',
};
</script>
