<template>
  <div class="wishlist-page section-padding">
    <b-container>
      <!-- Title -->
      <h5 class="mb-5">{{ $t('shop.my_wishlist') }}</h5>
      <div class="table-responsive">
        <table class="table cart-table mb-3">
          <thead class="border-bottom">
            <tr>
              <th class="fw-500 font-size-18"></th>
              <th class="fw-500 font-size-18">{{ $t('shop.product_name') }}</th>
              <th class="fw-500 font-size-18">{{ $t('shop.unit_price') }}</th>
              <th class="fw-500 font-size-18">{{ $t('shop.stock_status') }}</th>
              <th class="fw-500 font-size-18"></th>
            </tr>
          </thead>
          <tbody>
            <WishlistCard
v-for="data in myWishlist" :key="data" :thumbnail="data.thumbnail" :slug="data.slug"
              :product-name="data.product_name" :final-price="data.final_price" :stock-status="data.stock_status" />
          </tbody>
        </table>
      </div>
      <div class="product-social-share mt-5 d-flex flex-wrap align-items-center gap-3">
        <h5 class="mb-0">{{ $t('shop.share_on') }}:</h5>
        <ul class="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-2">
          <li class="flex-shrink-0">
            <router-link
to="https://www.facebook.com/"
              class="d-inline-block border-radius rounded-circle bg-primary text-white text-center" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </router-link>
          </li>
          <li class="flex-shrink-0">
            <a
href="https://twitter.com/"
              class="d-inline-block border-radius rounded-circle bg-info text-white text-center" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="flex-shrink-0">
            <router-link
to="https://in.pinterest.com/"
              class="d-inline-block border-radius rounded-circle bg-danger text-white text-center" target="_blank">
              <i class="fab fa-pinterest-p"></i>
            </router-link>
          </li>
          <li class="flex-shrink-0">
            <router-link
to="https://iqonic.design/"
              class="d-inline-block border-radius rounded-circle bg-warning text-white text-center" target="_blank">
              <i class="far fa-envelope"></i>
            </router-link>
          </li>
          <li class="flex-shrink-0">
            <router-link
to="https://www.whatsapp.com/"
              class="d-inline-block border-radius rounded-circle bg-success text-white text-center" target="_blank">
              <i class="fab fa-whatsapp"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>
<script setup>
import WishlistCard from '../../components/merchandise/WishlistCard.vue';
import { myWishlist } from '../../StaticData/shop';
</script>
