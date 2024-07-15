<template>
  <li class="d-flex align-items-center mb-4">
    <div class="top-product-img pe-3">
      <img :src="props.thumbnail" class="img-fluid" loading="lazy" />
    </div>
    <div class="">
      <router-link :to="{ name: 'landing-page.merchandise.shop' }" class="">{{ $t(props.productName) }}</router-link>
      <div>
        <del>{{ props.price }}</del> {{ props.finalPrice }}
      </div>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  thumbnail: { type: String, default: '' },
  slug: { type: String, default: '' },
  productName: { type: String, default: '' },
  value: { type: String, default: '' },
  size: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  additionalInfo: { type: Array, default: () => [] },
});
</script>
