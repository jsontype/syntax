<template>
  <div class="section-padding-bottom">
    <div class="profile-box">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div class="d-flex align-items-center gap-3">
            <div class="account-logo d-flex align-items-center position-relative">
              <img src="/assets/images/pages/profile.webp" class="img-fluid object-cover rounded-3" alt="profile" loading="lazy" />
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div>
              <h6 class="font-size-18 text-capitalize text-white fw-500">{{ $t('playlist.admin') }}</h6>
              <span class="font-size-14 text-white fw-500">admin@admin.com</span>
            </div>
          </div>
          <div class="iq-button">
            <router-link :to="{ name: 'landing-page.pricing-plan' }" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('playlist.subscription') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="container-fluid">
        <div class="content-details iq-custom-tab-style-two">
          <b-tabs class="trending-custom-tab" content-class="px-0" pills nav-class="d-flex justify-content-center nav nav-pills tab-header">
            <b-tab :title="$t('header.playlist')" active>
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('playlist.my_playlist') }}</h5>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <div v-for="data in playlistData" :key="'playlist' + data.title" class="col mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :view_count="data.view_count"></WatchlistCard>
                  </div>
                </div>
              </div>
              <create-playlist buttonname="playlist.create_playlist"></create-playlist>
            </b-tab>
            <b-tab :title="$t('header.watchlist')">
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('playlist.my_watchlist') }}</h5>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <div v-for="data in playlistData.slice(0, 4)" :key="'playlist' + data.title" class="col mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :view_count="data.view_count"></WatchlistCard>
                  </div>
                </div>
              </div>
              <create-playlist buttonname="sweetalert.create_watchlist"></create-playlist>
            </b-tab>
            <b-tab :title="$t('header.favorites')">
              <div class="overflow-hidden animate__animated animate__fadeInUp">
                <div class="d-flex align-items-center justify-content-between my-4">
                  <h5 class="main-title text-capitalize mb-0">{{ $t('playlist.my_favourite') }}</h5>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                  <div v-for="data in playlistData" :key="'playlist' + data.title" class="col mb-4">
                    <WatchlistCard :image="data.image" :title="$t(data.title)" :category="$t(data.category)" :views="$t(data.views)" :view_count="data.view_count"></WatchlistCard>
                  </div>
                </div>
              </div>
              <create-playlist buttonname="playlist.create_playlist"></create-playlist>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import WatchlistCard from '../components/cards/WatchlistCard.vue';
import CreatePlaylist from '../components/CreatePlaylist.vue';
import { generateImgPath } from '../StaticData/data';
onMounted(() => {
  document.body.classList.add('custom-header-relative');
});

onUnmounted(() => {
  document.body.classList.remove('custom-header-relative');
});

const playlistData = [
  {
    image: generateImgPath('/assets/images/movies/playlist/01.webp'),
    title: 'playlist.play_list1',
    category: 'playlist.public',
    view_count: '3',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/02.webp'),
    title: 'playlist.play_list2',
    category: 'playlist.private',
    view_count: '1',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/03.webp'),
    title: 'playlist.play_list3',
    category: 'playlist.public',
    view_count: '10',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/04.webp'),
    title: 'playlist.play_list4',
    category: 'playlist.public',
    view_count: '30',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/05.webp'),
    title: 'playlist.play_list5',
    category: 'playlist.private',
    view_count: '2',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/06.webp'),
    title: 'playlist.play_list6',
    category: 'playlist.public',
    view_count: '10',
    views: 'playlist.views',
  },
  {
    image: generateImgPath('/assets/images/movies/playlist/07.webp'),
    title: 'playlist.play_list7',
    category: 'playlist.public',
    view_count: '50',
    views: 'playlist.views',
  },
];
</script>
