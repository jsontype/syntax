<template>
  <img
    :src="image"
    :alt="`cast-${title}`"
    loading="lazy"
    class="img-fluid object-cover mb-4 rounded"
  />
  <div className="text-center">
    <h6 className="mb-0">
      <nuxt-link
        :to="{ name: 'cast-detail' }"
        class="font-size-14 text-decoration-none cast-title text-capitalize"
        >{{ title }}</nuxt-link
      >
    </h6>
    <nuxt-link
      to="#"
      className="font-size-14 text-decoration-none text-capitalize text-body"
      >{{ designation }}</nuxt-link
    >
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  designation: { type: String, default: "" },
});
</script>
