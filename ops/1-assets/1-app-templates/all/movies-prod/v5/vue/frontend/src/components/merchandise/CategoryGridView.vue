<template>
  <div class="product-block">
    <span v-if="props.isSale === true" class="onsale sale text-white bg-primary">{{ $t('shop.sale!') }}</span>
    <span v-else-if="props.isNew === true" class="onsale sale text-white bg-primary">{{ $t('shop.new!') }}</span>
    <div class="image-wrap">
      <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }">
        <div class="product-image"><img :src="props.thumbnail" class="img-fluid w-100" alt="shopImg-{{id}}" loading="lazy" /></div>
      </router-link>
      <div class="buttons-holder">
        <ul class="list-unstyled m-0 p-0">
          <li>
            <router-link class="sq-btn" to="#" data-bs-toggle="modal" data-bs-target="static">
              <i class="fa fa-eye" aria-hidden="true" @click="modal = true"></i>
              <b-modal id="woosq-popup" v-model="modal" hide-header hide-footer body-class="p-0 ">
                <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal" aria-label="Close" @click="modal = false"></button>
                <b-row class="align-items-center">
                  <b-col md="6">
                    <img src="/assets/images/shop/product/01.webp" class="object-cover" alt="shop-img" />
                  </b-col>
                  <b-col md="6">
                    <div class="entry-summary p-md-4">
                      <h3>{{ $t('shop.bag_pack') }}</h3>
                      <div class="review">
                        <span>
                          <i class="fa fa-star text-warning" aria-hidden="true"></i>
                        </span>
                        {{ '' }}
                        <span>
                          <i class="fa fa-star text-warning" aria-hidden="true"></i>
                        </span>
                        {{ '' }}
                        <span>
                          <i class="fa fa-star text-warning" aria-hidden="true"></i>
                        </span>
                        {{ '' }}
                        <span>
                          <i class="fa fa-star text-warning" aria-hidden="true"></i>
                        </span>
                        {{ '' }}
                        <span>
                          <i class="fa fa-star text-warning" aria-hidden="true"></i>
                        </span>
                      </div>
                      <h4 class="price text-white mt-3"><del class="text-body fw-normal me-1">$48.00</del>$28.00</h4>
                      <p>{{ $t('shop.desc1') }}</p>
                      <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                        <li>
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
                        </li>
                        <li>
                          <div class="iq-button">
                            <a href="#" class="btn btn-sm text-uppercase position-relative cart-btn" @click="cartSwal">
                              <span class="button-text">{{ $t('shop.add_to_cart') }}</span>
                              {{ '' }}
                              <i class="fa-solid fa-play"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center gap-2">
                        <span class="fw-semibold text-white">{{ $t('shop.sku') }}{{ '' }} :</span>
                        <span>{{ $t('shop.bag_pack') }}</span>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                        <span class="fw-semibold text-white">{{ $t('shop.category') }}</span>
                        <span class="text-primary">{{ $t('shop.uptight_bird') }}</span>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                        <span class="fw-semibold text-white">{{ $t('shop.tags') }}</span>
                        <span class="text-primary">{{ $t('shop.costume') }}</span>
                        <span class="text-primary">{{ $t('shop.lighting') }}</span>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-modal>
            </router-link>
          </li>
          <li>
            <!-- ADD TO WISHLIST -->
            <router-link to="#" class="add_to_wishlist" @click="wishlistSwal"><i class="fa-solid fa-heart"></i> </router-link>
            <!-- COUNT TEXT -->
          </li>
          <li>
            <router-link to="#" class="added_to_cart d-flex align-items-center" @click="cartSwal">
              <i class="fa-solid fa-basket-shopping"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-caption">
      <h5 class="product__title">
        <router-link :to="{ name: 'landing-page.merchandise.shop.detail' }" class="title-link"> {{ $t(props.productName) }}</router-link>
      </h5>
      <div class="price-detail">
        <div class="price">
          <del>{{ props.price }}</del
          >{{ props.finalPrice }}
        </div>
      </div>
      <div class="container-rating">
        <div class="star-rating">
          <div class="star-rating text-primary">
            <span>
              <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </span>
            {{ '' }}
            <span>
              <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </span>
            {{ '' }}
            <span>
              <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </span>
            {{ '' }}
            <span>
              <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </span>
            {{ '' }}
            <span>
              <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import Swal from 'sweetalert2';
const props = defineProps({
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  isSale: { type: [String, Boolean], default: '' },
  isNew: { type: [String, Boolean], default: '' },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  additionalInfo: { type: Array, default: () => [] },
  modelValue: { type: Number, default: 2 },
});
const emit = defineEmits(['update:modelValue']);

const newValue = ref(props.modelValue);

watch(newValue, () => {
  emit('update:modelValue', newValue.value);
});
const wishlistSwal = () => {
  Swal.fire({
    title: 'Added!',
    text: 'Your item has been added to the wishlist.',
    icon: 'success',
    confirmButtonText: 'Ok',
    background: '#141314',
    color: '#ffffff',
  });
};
const cartSwal = () => {
  Swal.fire({
    title: 'Added!',
    text: 'Your item has been added to the cart.',
    icon: 'success',
    confirmButtonText: 'Ok',
    background: '#141314',
    color: '#ffffff',
  });
};
const modal = ref(false);
</script>
