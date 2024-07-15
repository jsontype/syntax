<template>
  <tr data-item="list">
    <td>
      <router-link
to="#" class="btn btn-icon btn-danger delete-btn text-end bg-transparent text-body border-0"
        @click="deleteSwal()">
        <span class="btn-inner"><i class="far fa-trash-alt"></i></span>
      </router-link>
    </td>
    <td>
      <div class="product-thumbnail">
        <router-link class="mb-2 me-3" :to="{ name: 'landing-page.merchandise.shop.detail' }">
          <img :src="props.thumbnail" class="avatar-80" loading="lazy" />
        </router-link>
        {{ '' }}
        <span class="mt-2">{{ $t(props.productName) }}</span>
      </div>
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
        <router-link
:to="{ name: 'landing-page.merchandise.shop.detail' }"
          class="btn text-uppercase position-relative">
          <span class="button-text">{{ $t('shop.view_product') }}</span>
          {{ '' }}
          <i class="fa-solid fa-play"></i>
        </router-link>
      </div>
    </td>
  </tr>
</template>
<script setup>
import Swal from 'sweetalert2';
const props = defineProps({
  thumbnail: { type: String, default: '' },
  slug: { type: String, default: '' },
  productName: { type: String, default: '' },
  price: { type: String, default: '' },
  stockStatus: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
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
