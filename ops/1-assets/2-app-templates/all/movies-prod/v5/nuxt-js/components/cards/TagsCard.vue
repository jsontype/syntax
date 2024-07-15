<template>
  <nuxt-link :to="{ name: 'view-all' }" class="iq-tag-box">
    <span class="iq-tag">
      {{ props.title }}
    </span>
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  slug: { type: String, default: "" },
  type: { type: String, default: "" },
});

// params: { filter: 'tags', slug: props.slug, type: props.type }
</script>
