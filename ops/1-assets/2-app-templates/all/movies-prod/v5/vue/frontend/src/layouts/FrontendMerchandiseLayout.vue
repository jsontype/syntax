<template>
  <!-- Header Component Start -->
  <HeaderMerchandise> </HeaderMerchandise>
  <!-- Header Component End-->

  <!-- Hero Slider, Banner Start -->
  <BreadcrumbWidget v-if="route.meta.beforeWrapper"></BreadcrumbWidget>
  <!-- Hero Slider, Banner End -->

  <!-- Main Component Start -->
  <router-view />
  <!-- Main Component End -->

  <!-- Footer Component Start -->
  <FooterDefault v-if="route.meta.footer === 'default'"></FooterDefault>

  <FooterMerchandise v-else></FooterMerchandise>
  <!-- Footer Component End -->

  <div id="offcanvasCart" class="offcanvas offcanvas-end sidebar-cart border-0 on-rtl end" tabindex="-1" aria-modal="true" role="dialog">
    <div class="offcanvas-header py-4">
      <h5 class="offcanvas-title">{{ $t('shop.shopping_cart') }} (3)</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body py-5">
      <div class="sidebar-cart-content d-flex flex-column justify-content-between">
        <div class="cart-items-container">
          <ul class="cart-items-list m-0 list-inline">
            <li class="cart-item mb-4 pb-4 border-bottom">
              <div class="cart-item-block d-flex gap-3">
                <div class="image flex-shrink-0">
                  <img src="/assets/images/shop/product/02.webp" width="90" alt="product-image" class="img-fluid object-cover" />
                </div>
                <div class="cart-block-content position-relative flex-grow-1 pe-5">
                  <h6 class="mb-36 text-capitalize">{{ $t('shop.believe_mask') }}</h6>
                  <span class="text-primary small">$13.00</span>
                  <div class="mt-3">
                    <div class="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group" @click="newValue -= 1">
                      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0">
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
                  </div>
                  <div class="position-absolute top-0 end-0">
                    <a href="javascript:void();" class="text-white delete-btn text-capitalize">{{ $t('shop.delete') }}</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="cart-item mb-4 pb-4 border-bottom">
              <div class="cart-item-block d-flex gap-3">
                <div class="image flex-shrink-0">
                  <img src="/assets/images/shop/product/04.webp" width="90" alt="product-image" class="img-fluid object-cover" />
                </div>
                <div class="cart-block-content position-relative flex-grow-1 pe-5">
                  <h6 class="mb-36 text-capitalize">{{ $t('shop.black_cap') }}</h6>
                  <span class="text-primary small">$18.00</span>
                  <div class="mt-3">
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
                  </div>
                  <div class="position-absolute top-0 end-0">
                    <a href="javascript:void();" class="text-white delete-btn text-capitalize">{{ $t('shop.delete') }}</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="cart-item">
              <div class="cart-item-block d-flex gap-3">
                <div class="image flex-shrink-0">
                  <img src="/assets/images/shop/product/05.webp" width="90" alt="product-image" class="img-fluid object-cover" />
                </div>
                <div class="cart-block-content position-relative flex-grow-1 pe-5">
                  <h6 class="mb-36 text-capitalize">{{ $t('shop.boxing_gloves') }}</h6>
                  <span class="text-primary small">$18.00</span>
                  <div class="mt-3">
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
                  </div>
                  <div class="position-absolute top-0 end-0">
                    <a href="javascript:void();" class="text-white delete-btn text-capitalize">{{ $t('shop.delete') }}</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cart-progress-container mt-5 pt-5 border-top">
          <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <h5 class="m-0 fw-bold">{{ $t('shop.subtotal') }}</h5>
            <h5 class="m-0 fw-bold">$49.00</h5>
          </div>
          <div class="d-grid gap-3 mt-4">
            <router-link :to="{ name: 'landing-page.merchandise.checkout' }" class="btn bg-primary text-uppercase fw-medium w-100 text-white">
              <span class="button-text small">{{ $t('shop.checkout') }}</span>
            </router-link>

            <router-link :to="{ name: 'landing-page.merchandise.cart' }" class="btn bg-light text-uppercase fw-medium w-100 text-dark">
              <span class="button-text small">{{ $t('shop.view_cart') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <SettingOffcanvas></SettingOffcanvas>
</template>
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
// Import Vue Rounter Hooks
import { useRoute } from 'vue-router';
// Import Header Component
import HeaderMerchandise from '../components/merchandise/partials/HeaderMerchandise.vue';
// Import Footer Component
import FooterMerchandise from '../components/merchandise/partials/FooterMerchandise.vue';
import FooterDefault from '../components/partials/FooterDefault.vue';
// Import Header Breadcrumb Component
import BreadcrumbWidget from '../components/BreadcrumbWidget.vue';
import SettingOffcanvas from '../components/SettingOffcanvas.vue';
const route = useRoute();
const props = defineProps({
  modelValue: {
    type: Number,
    default: 2,
  },
});
const emit = defineEmits(['update:modelValue']);
const newValue = ref(props.modelValue);
watch(newValue, () => {
  emit('update:modelValue', newValue.value);
});
</script>
<style lang="scss"></style>
