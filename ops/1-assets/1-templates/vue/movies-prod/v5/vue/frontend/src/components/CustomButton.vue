<template>
  <div v-if="linkButton === true" class="iq-button link-button">
    <router-link :to="link" class="btn text-capitalize position-relative">
      <span class="button-text">{{ buttonTitle }}</span>
    </router-link>
  </div>
  <div v-else class="iq-button">
    <router-link :to="link" class="btn text-uppercase position-relative">
      <span class="button-text">{{ buttonTitle }}</span>
      {{ '' }}
      <i class="fa-solid fa-play"></i>
    </router-link>
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
