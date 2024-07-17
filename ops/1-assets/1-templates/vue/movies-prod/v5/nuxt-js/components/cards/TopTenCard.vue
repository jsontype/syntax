<template>
  <div class="iq-top-ten-block">
    <div class="block-image position-relative">
      <div class="img-box">
        <nuxt-link class="overly-images" :to="link">
          <img
            :src="imagePath"
            alt="movie-card"
            class="img-fluid object-cover"
            loading="lazy"
          />
        </nuxt-link>
        <span class="top-ten-numbers texture-text">{{ countValue }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  imagePath: { type: String, default: "" },
  countValue: { type: Number, default: 0 },
  link: { type: [String, Object], default: () => "/" },
});
</script>
