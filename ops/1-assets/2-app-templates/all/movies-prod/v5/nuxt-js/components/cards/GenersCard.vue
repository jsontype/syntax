<template>
  <div class="iq-card-geners card-hover-style-two">
    <div class="block-images position-relative w-100">
      <div class="img-box rounded position-relative">
        <img
          :src="image"
          alt="geners-img"
          class="img-fluid object-cover w-100 rounded"
          loading="lazy"
        />
        <div class="blog-description">
          <h6 class="mb-0 iq-title">
            <nuxt-link
              :to="link"
              class="text-decoration-none text-capitalize line-count-2 p-2"
              >{{ title }}</nuxt-link
            >
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "" },
  link: {
    type: Object,
    default: () => {
      return { name: "view-all" };
    },
  },
});
</script>
