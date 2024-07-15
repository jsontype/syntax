<template>
  <div class=">wishlist-page section-padding">
    <b-container>
      <!-- Title -->
      <h4 class="mb-5">{{ $t("shop.my_wishlist") }}</h4>
      <div class="table-responsive">
        <table class="table cart-table">
          <thead class="border-bottom">
            <tr>
              <th class="fw-500 font-size-18"></th>
              <th class="fw-500 font-size-18">{{ $t("shop.product_name") }}</th>
              <th class="fw-500 font-size-18">{{ $t("shop.unit_price") }}</th>
              <th class="fw-500 font-size-18">{{ $t("shop.stock_status") }}</th>
              <th class="fw-500 font-size-18"></th>
            </tr>
          </thead>
          <tbody v-for="data in myWishlist" :key="data">
            <WishlistCard
              :thumbnail="data.thumbnail"
              :slug="data.slug"
              :product-name="$t(data.product_name)"
              :price="data.price"
              :final-price="data.final_price"
              :stock-status="data.stock_status"
            />
          </tbody>
        </table>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import WishlistCard from "../../components/merchandise/WishlistCard.vue";
import { myWishlist } from "../../StaticData/shop";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Wishlist");
</script>
