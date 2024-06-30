<template>
  <img :src="image" :alt="`cast-${title}`" loading="lazy" class="img-fluid object-cover mb-4 rounded" />
  <div className="text-center">
    <h6 className="mb-0">
      <router-link :to="{ name: 'landing-page.cast-detail' }" class="font-size-14 text-decoration-none cast-title text-capitalize">{{ title }}</router-link>
    </h6>
    <router-link to="#" class="font-size-14 text-decoration-none text-capitalize text-body">{{ designation }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  image: { type: String, default: '' },
  designation: { type: String, default: '' },
});
</script>
