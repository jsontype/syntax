<template>
  <img :src="image" alt="personality" class="img-fluid object-cover mb-4 rounded" loading="lazy" />
  <div class="text-center">
    <h6 class="mb-0">
      <router-link :to="link" class="font-size-14 text-decoration-none cast-title text-capitalize">{{ $t(title)
      }}</router-link>
    </h6>
    <router-link :to="categoryLink" class="font-size-14 text-decoration-none text-capitalize text-body">{{ $t(category)
    }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  category: { type: String, default: '' },
  categoryLink: {
    type: [String, Object],
    default: () => '/',
  },
  link: {
    type: [String, Object],
    default: () => '/',
  },
  image: { type: String, default: '' },
});
</script>
