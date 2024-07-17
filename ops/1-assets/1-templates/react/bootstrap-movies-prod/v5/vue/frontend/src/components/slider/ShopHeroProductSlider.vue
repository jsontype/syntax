<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" class="overflow-hidden">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="main-title">{{ props.title }}</h4>
          <router-link :to="{ name: props.viewLink }" class="text-primary iq-view-all">{{ $t('ott_home.view_all') }}</router-link>
        </div>
      </b-col>
    </b-row>
    <div class="favourite-slider">
      <Swiper v-if="render" class="pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" :dir="rtl" :loop="true" :slides-per-view="4" :space-between="30" :navigation="true" :modules="modules">
        <SwiperSlide v-for="data in props.sliderData" :key="data" tag="li" class="slide-item">
          <shop-card :thumbnail="data.thumbnail" :title="$t(data.title)" :slug="data.slug" :time="data.duration" :likes="data.likes" :route-name="props.detailViewLink"></shop-card>
        </SwiperSlide>
      </Swiper>
    </div>
  </b-container>
</template>
<script setup>
// Swiper Components Import
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

// Card Components
import ShopCard from '../card/ShopCard.vue';
import { ref, computed, watch } from 'vue';
import { useSetting } from '../../store/setting/index';
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);
// Swiper Modules
const modules = [Navigation];

// Component Props
const props = defineProps({
  title: { type: String, default: '' },
  sliderData: { type: Array, default: () => [] },
  detailViewLink: { type: String, default: '' },
});
</script>
