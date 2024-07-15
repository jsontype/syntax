<template>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <div class="d-block mb-2">
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"><img width="300"
              height="400" src="/assets/images/shop/product/08.webp" alt="image" loading="lazy" /></nuxt-link>
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"
            class="text-white ms-2">
            Coffee Cup</nuxt-link>
        </div>
      </div>
    </td>
    <td class="fw-500">{{ props.finalPrice }}</td>
    <td>
      <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
            <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
          </svg>
        </button>
        <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
          pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path
              d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <div class="d-block mb-2">
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"><img width="300"
              height="400" src="/assets/images/shop/product/09.webp" alt="image" loading="lazy" /></nuxt-link>
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"
            class="text-white ms-2">
            Medical Box</nuxt-link>
        </div>
      </div>
    </td>
    <td class="fw-500">{{ props.finalPrice }}</td>
    <td>
      <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
            <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
          </svg>
        </button>
        <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
          pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path
              d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <div class="d-block mb-2">
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"><img width="300"
              height="400" src="/assets/images/shop/product/10.webp" alt="image" loading="lazy" /></nuxt-link>
          <nuxt-link :to="{ name: 'merchandise-product-detail', params: { product: props.slug } }"
            class="text-white ms-2">
            Hand Sanitizer Bottle</nuxt-link>
        </div>
      </div>
    </td>
    <td class="fw-500">{{ props.finalPrice }}</td>
    <td>
      <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
            <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
          </svg>
        </button>
        <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input"
          pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path
              d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
</template>
<script setup>
const props = defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
});
</script>
