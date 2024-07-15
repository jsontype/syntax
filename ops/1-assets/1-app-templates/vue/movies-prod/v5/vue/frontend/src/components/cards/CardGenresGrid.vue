<template>
  <div class="iq-card-geners card-hover-style-two">
    <div class="block-images position-relative w-100">
      <div class="img-box rounded position-relative">
        <img :src="image" alt="geners-img" class="img-fluid object-cover w-100 rounded" loading="lazy" />
        <div class="blog-description">
          <h6 class="mb-0 iq-title">
            <router-link :to="{ name: 'landing-page.view-all' }" class="text-decoration-none text-capitalize line-count-2 p-2">{{ title }}</router-link>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  type: { type: String, default: '' },
});
// params: { filter: 'genres', slug: props.slug, type: props.type }
</script>
