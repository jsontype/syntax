<template>
  <div v-if="linkButton === true" class="iq-button link-button">
    <nuxt-link :to="{ name: link }" class="btn text-capitalize position-relative">
      <span class="button-text">{{ buttonTitle }}</span>
    </nuxt-link>
  </div>
  <div v-else class="iq-button">
    <nuxt-link :to="link" class="btn text-uppercase position-relative">
      <span class="button-text">{{ buttonTitle }}</span>
      <i class="fa-solid fa-play"></i>
    </nuxt-link>
  </div>
</template>
<script setup>
defineProps({
  buttonTitle: { type: String, default: '' },
  link: {
    type: Object,
    default: () => {
      return { path: '' };
    },
  },
  linkButton: { type: Boolean, default: false },
});
</script>
