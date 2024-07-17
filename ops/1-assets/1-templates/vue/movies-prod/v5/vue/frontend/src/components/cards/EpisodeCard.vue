<template>
  <div class="episode-block">
    <div class="block-image position-relative">
      <router-link :to="link">
        <img :src="image" class="img-fluid img-zoom" loading="lazy" />
      </router-link>
      <div class="episode-number">{{ showEpisod }}</div>
      <div class="episode-play">
        <router-link :to="{ name: 'landing-page.episode' }" tabindex="0">
          <i class="fa-solid fa-play"></i>
          {{ '' }}
        </router-link>
      </div>
    </div>
    <div class="epi-desc p-3">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="border-gredient-left text-white rel-date">{{ episodDate }}</span>
        <span class="text-primary run-time">{{ episodTime }}</span>
      </div>
      <router-link :to="{ name: 'landing-page.episode' }">
        <h5 class="epi-name text-white mb-0">{{ $t(episodTitle) }}</h5>
      </router-link>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: { type: String, default: '' },
  link: { type: String, default: '/' },
  showEpisod: { type: String, default: '' },
  episodDate: { type: String, default: '' },
  episodTime: { type: String, default: '' },
  episodTitle: { type: String, default: '' },
});
</script>
