<template>
  <div class="episode-block">
    <div class="block-image position-relative">
      <nuxt-link :to="{ name: link }">
        <img :src="image" class="img-fluid img-zoom" loading="lazy" />
      </nuxt-link>
      <div class="episode-number">{{ showEpisod }}</div>
      <div class="episode-play">
        <nuxt-link :to="{ name: 'tv-shows-episode' }" tabindex="0"
          ><i class="fa-solid fa-play"></i
        ></nuxt-link>
      </div>
    </div>
    <div class="epi-desc p-3">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="border-gredient-left text-white rel-date">{{
          episodDate
        }}</span>
        <span class="text-primary run-time">{{ episodTime }}</span>
      </div>
      <nuxt-link :to="{ name: 'tv-shows-episode' }">
        <h5 class="epi-name text-white mb-0">{{ episodTitle }}</h5>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: { type: String, default: "" },
  link: { type: String, default: "/" },
  showEpisod: { type: String, default: "" },
  episodDate: { type: String, default: "" },
  episodTime: { type: String, default: "" },
  episodTitle: { type: String, default: "" },
});
</script>
