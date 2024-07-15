<template>
  <div :class="`${classlist}`">
    <div class="block-image position-relative">
      <div class="img-box">
        <router-link class="overly-images" :to="link">
          <img :src="imagePath" alt="movie-card" class="img-fluid object-cover" loading="lazy" />
        </router-link>
        <span class="top-ten-numbers texture-text">{{ countValue }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  imagePath: { type: String, default: '' },
  countValue: { type: Number, default: 0 },
  link: { type: [String, Object], default: () => '/' },
  classlist: { type: String, default: '' },
});
</script>
