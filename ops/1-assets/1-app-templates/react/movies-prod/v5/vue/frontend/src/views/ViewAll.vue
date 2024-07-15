<template>
  <div class="section-padding">
    <b-container fluid>
      <div class="card-style-grid">
        <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
          <b-col v-for="data in viewAll" :key="data" class="mb-4">
            <card-style :image="data.image" :title="$t(data.title)" :movie-time="data.movieTime" :watchlist-link="{ path: '/playlist' }" :link="{ path: '/movies-detail' }"></card-style>
          </b-col>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import CardStyle from '../components/cards/CardStyle.vue';
import { generateImgPath } from '../StaticData/data';
const viewAll = [
  {
    image: generateImgPath('/assets/images/movies/related/01.webp'),
    title: 'episode_page.giikre',
    movieTime: '2hr 12mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/02.webp'),
    title: 'episode_page.yoshi',
    movieTime: '1hr 22mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/03.webp'),
    title: 'episode_page.we_gare',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/04.webp'),
    title: 'episode_page.avengers',
    movieTime: '1hr 45mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/05.webp'),
    title: 'episode_page.chosfies',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/06.webp'),
    title: 'episode_page.tf_oaler',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/related/07.webp'),
    title: 'episode_page.another_danger',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/01.webp'),
    title: 'episode_page.crw',
    movieTime: '2hr 12mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/02.webp'),
    title: 'episode_page.batte_wiire',
    movieTime: '1hr 22mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/03.webp'),
    title: 'episode_page.goal',
    movieTime: '2hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/04.webp'),
    title: 'episode_page.dandacg',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/05.webp'),
    title: 'episode_page.mexcan',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/06.webp'),
    title: 'episode_page.oit_moleld',
    movieTime: '1hr 30mins',
  },
  {
    image: generateImgPath('/assets/images/movies/popular/07.webp'),
    title: 'episode_page.another_danger',
    movieTime: '1hr 30mins',
  },
];
</script>
