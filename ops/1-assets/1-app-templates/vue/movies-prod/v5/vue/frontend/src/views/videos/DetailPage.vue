<template>
  <div>
    <div class="iq-main-slider site-video">
      <b-container fluid>
        <b-row>
          <b-col lg="12">
            <div class="pt-0">
              <VideoPlayer :options="playerOption"></VideoPlayer>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="details-part">
      <b-container fluid>
        <b-row>
          <b-col lg="12">
            <!-- Movie Description Start-->
            <div class="trending-info mt-4 pt-0 pb-4">
              <b-row>
                <b-col md="9" class="mb-auto col-12">
                  <movie-description></movie-description>
                </b-col>
                <b-col md="3" class="trailor-video col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
                  <a data-fslightbox="html5-video" href="#" class="video-open playbtn block-images position-relative playbtn_thumbnail" @click="toggler = !toggler">
                    <img src="/assets/images/genre/01.webp" class="attachment-medium-large size-medium-large wp-post-image" alt="" loading="lazy" />
                    <span class="content btn btn-transparant iq-button">
                      <i class="fa fa-play me-2 text-white"></i>
                      <span>{{ $t('detail_page.trailer_link') }}</span>
                    </span>
                  </a>
                </b-col>
              </b-row>
            </div>
            <!-- Movie Description End -->
            <!-- Movie Source Start -->
            <movie-sources></movie-sources>
            <!-- Movie Source End -->
          </b-col>
        </b-row>
      </b-container>
      <UpcomingMovies :title="$t('home.upcoming')" padding-top="paddingTop"></UpcomingMovies>
      <FsLightbox :toggler="toggler" :sources="['https://www.youtube.com/embed/QCGq1epI9pQ']" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FsLightbox from 'fslightbox-vue/v3';
import { useEnterExit } from '../../utilities/usePage';

import UpcomingMovies from '../../components/sections/UpcomingMovies.vue';
import MovieSources from '../../components/MovieSources.vue';
import MovieDescription from '../../components/MovieDescription.vue';
import VideoPlayer from '../../components/plugins/VideoPlayer.vue';
const toggler = ref(false);

const playerOption = ref({
  autoplay: false,
  controls: true,
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=QCGq1epI9pQ',
      type: 'video/youtube',
    },
  ],
  youtube: { iv_load_policy: 1 },
});

useEnterExit();
</script>
