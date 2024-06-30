<template>
  <tr data-item="list">
    <td>
      <nuxt-link
        to="#"
        class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0"
      >
        <span class="btn-inner"><i class="far fa-trash-alt"></i></span>
      </nuxt-link>
    </td>
    <td class="product-thumbnail">
      <nuxt-link
        class="mb-2 me-3"
        :to="{
          name: 'merchandise-product-detail',
          params: { product: props.slug },
        }"
      >
        <img :src="props.thumbnail" class="avatar-80" loading="lazy" />
      </nuxt-link>
      <span class="mt-2">{{ $t(props.productName) }}</span>
    </td>
    <td>
      <span class="fw-500">{{ props.price }}</span>
      {{ props.finalPrice }}
    </td>
    <td class="product-stock-status">
      <span class="wishlist-in-stock">
        {{ $t(props.stockStatus) }}
      </span>
    </td>
    <td>
      <div class="iq-button">
        <nuxt-link
          :to="{ name: 'merchandise-product-detail' }"
          class="btn text-uppercase position-relative"
        >
          <span class="button-text">{{ $t("shop.view_product") }}</span>
          <i class="fa-solid fa-play"></i>
        </nuxt-link>
      </div>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  thumbnail: { type: String, default: "" },
  slug: { type: String, default: "" },
  productName: { type: String, default: "" },
  price: { type: String, default: "" },
  stockStatus: { type: String, default: "" },
  finalPrice: { type: String, default: "" },
});
</script>
