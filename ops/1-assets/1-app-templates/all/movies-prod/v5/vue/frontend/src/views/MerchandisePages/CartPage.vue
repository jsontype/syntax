<template>
  <div class="checkout-page section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
          <li class="cart-page-item">
            <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"> 1 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('shop.shopping_cart') }} </span>
          </li>
          <li class="cart-page-item">
            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </li>
          <li class="cart-page-item active">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 2 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('shop.checkout') }} </span>
          </li>
          <li class="cart-page-item">
            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </li>
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 3 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('shop.order_summary') }} </span>
          </li>
        </ul>
      </div>

      <b-row>
        <b-col lg="8">
          <div class="table-responsive mb-0 mb-lg-3">
            <table class="table cart-table mb-3 mb-lg-0" cellspacing="0">
              <thead class="border-bottom">
                <tr>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('shop.product_') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('shop.price') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('shop.quantity') }}</th>
                  <th scope="col" class="font-size-18 fw-500">{{ $t('shop.subtotal') }}</th>
                  <th scope="col" class="font-size-18 fw-500"></th>
                </tr>
              </thead>
              <tbody v-for="data in myCart" :key="data">
                <ProductCart :thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
              </tbody>
            </table>
          </div>
          <div class="coupon-main d-flex justify-content-between gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
            <div class="wrap-coupon d-flex align-items-center gap-3 flex-wrap">
              <label>{{ $t('shop.coupon') }} :</label>
              <input class="form-control d-inline-block w-auto me-2" name="coupon_code" type="text" :placeholder="$t('shop.coupon_code')" />
              <div class="d-inline-block">
                <div class="iq-button">
                  <a href="#" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('shop.apply_coupon') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="button-primary">
              <div class="iq-button">
                <a href="#" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('shop.update_cart') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="cart_totals p-4">
            <h5 class="mb-3 font-size-18 fw-500">{{ $t('shop.cart_total') }}</h5>
            <div class="css_prefix-woocommerce-cart-box table-responsive mb-0">
              <span v-for="data in myCart" :key="data">
                <table class="table">
                  <ShopCartTotal :final-price="data.final_price" />
                </table>
              </span>
              <div class="button-primary">
                <div class="iq-button">
                  <router-link :to="{ name: 'landing-page.checkout' }" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('shop.proceed_to_checkout') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import ProductCart from '../../components/merchandise/cart/ProductCart.vue';
import ShopCartTotal from '../../components/merchandise/cart/CartTotal.vue';
import { myCart } from '../../StaticData/shop';
</script>
