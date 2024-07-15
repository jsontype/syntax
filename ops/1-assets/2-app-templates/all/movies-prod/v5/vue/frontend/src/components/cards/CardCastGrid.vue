<template>
  <div class="iq-cast">
    <img :src="props.image" class="img-fluid" alt="castImg" loading="lazy" />
    <div class="card-img-overlay iq-cast-body">
      <h6 class="cast-title fw-500">
        <router-link :to="{ name: 'landing-page.cast-detail' }">{{ $t(props.title) }} </router-link>
      </h6>
      <span class="cast-subtitle">
        {{ $t(props.designation) }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '' },
  id: { type: String, default: '' },
  designation: { type: String, default: '' },
});
</script>
