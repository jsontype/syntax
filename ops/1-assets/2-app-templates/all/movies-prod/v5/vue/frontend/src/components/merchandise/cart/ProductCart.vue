<template>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="d-block mb-2"><img class="avatar-80" src="/assets/images/shop/product/08.webp" alt="image" loading="lazy" /></router-link>
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="text-white">{{ $t('shop.coffee_cup') }}</router-link>
      </div>
    </td>
    <td class="fw-500">{{ props.finalPrice }}</td>
    <td>
      <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0" @click="newValue -= 1">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
            <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
          </svg>
        </button>
        <input v-model="newValue" type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0" @click="newValue += 1">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0" @click="deleteSwal()">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="d-block mb-2"><img class="avatar-80" src="/assets/images/shop/product/09.webp" alt="image" loading="lazy" /></router-link>
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="text-white">{{ $t('shop.medical_box') }}</router-link>
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
        <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0" @click="deleteSwal()">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
  <tr class="list">
    <td class="product-name" data-title="Product">
      <div class="product-thumbnail d-flex align-items-center gap-3">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="d-block mb-2"><img class="avatar-80" src="/assets/images/shop/product/10.webp" alt="image" loading="lazy" /></router-link>
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="text-white">{{ $t('shop.hand_sanitizer') }}</router-link>
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
        <input type="text" class="btn btn-sm btn-outline-light input-display border-0" data-qty="input" pattern="^(0|[1-9][0-9]*)$" minlength="1" maxlength="2" value="2" title="Qty" />
        <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
            <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </td>
    <td>
      <span class="fw-500">{{ props.finalPrice }}</span>
    </td>
    <td>
      <button class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0" @click="deleteSwal()">
        <span class="btn-inner">
          <i class="far fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
</template>
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import Swal from 'sweetalert2';
const props = defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  modelValue: { type: Number, default: 2 },
});

const emit = defineEmits(['update:modelValue']);

const newValue = ref(props.modelValue);

watch(newValue, () => {
  emit('update:modelValue', newValue.value);
});
const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    backdrop: 'rgba(60,60,60,0.8)',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor: '#c03221',
    background: '#141314',
    color: '#ffffff',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    }
  });
};
</script>
