<template>
  <div class="iq-cast">
    <img :src="props.image" class="img-fluid" alt="castImg" loading="lazy" />
    <div class="card-img-overlay iq-cast-body">
      <h6 class="cast-title fw-500">
        <nuxt-link :to="{ name: 'cast-detail' }"
          >{{ $t(props.title) }}
        </nuxt-link>
      </h6>
      <span class="cast-subtitle">
        {{ props.designation }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "" },
  id: { type: String, default: "" },
  designation: { type: String, default: "" },
});
</script>
