<template>
  <div class="section-padding-top product-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="product-tab-slider">
            <swiper v-if="render" class="product-tab-slider-thumb" :dir="rtl" :modules="modules" :slide-per-view="1" :loop="true" @swiper="setThumbsSwiper">
              <swiper-slide>
                <img src="/assets/images/shop/product/01.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/02.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/03.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/04.webp" class="img-fluid product-detail-image" @click="toggler = !toggler" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="product-tab-slider-images">
            <swiper v-if="render" class="product-tab-slider-thumb mb-0" :dir="rtl" :loop="true" :modules="modules" :slides-per-view="4" :thumbs="{ swiper: thumbsSwiper }">
              <swiper-slide>
                <img src="/assets/images/shop/product/01.webp" class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/02.webp" class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/03.webp" class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="/assets/images/shop/product/04.webp" class="img-fluid" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-5">
          <h3>{{ $t('shop.believe_mask') }}</h3>
          <div class="mt-2">
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
          <h4 class="price mt-3 mb-0">$13.00</h4>
          <h4 class="ms-2 sale-price mt-3 mb-0"></h4>
          <p class="mt-4 mb-0">{{ $t('shop.many_variations') }}</p>
          <div class="add-product-wrapper mt-5 pb-5">
            <ul class="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
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
              <li class="wish-list">
                <a href="#" class="d-inline-block bg-soft-primary border border-white wishlist-btn" @click="wishlistSwal">
                  <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <div class="iq-button">
                  <a href="#" class="btn btn-sm cart-btn text-uppercase position-relative" @click="cartSwal">
                    <span class="button-text">{{ $t('shop.add_to_cart') }}</span>
                    {{ '' }}
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="product-meta-wrapper">
            <ul class="list-inline m-0 p-0">
              <li class="mb-2">
                <span class="text-white fw-semibold">{{ $t('shop.sku') }} :</span>
                {{ '' }}
                <h6 class="d-inline">{{ $t('shop.bag_pack') }}</h6>
              </li>
              <li class="mb-2">
                <span class="text-white fw-semibold">{{ $t('form.categories') }} :</span>
                {{ '' }}
                <h6 class="d-inline text-primary">{{ $t('shop.uptight_bird') }}</h6>
              </li>
              <li>
                <span class="text-white fw-semibold">{{ $t('shop.tag:') }}</span>
                <h6 class="d-inline text-primary">{{ $t('shop.costume_lighting') }}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-padding-top px-0">
        <div class="product-detail-tabs">
          <ul id="product-tab" class="list-inline nav nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5" role="tablist">
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link active bg-transparent" data-bs-toggle="tab" data-bs-target="#description" role="tab" aria-selected="true">{{ $t('shop.description') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab" data-bs-target="#additional-information" role="tab" aria-selected="false" tabindex="-1">{{ $t('shop.addtional_information') }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a href="javascript:void(0)" class="nav-link bg-transparent" data-bs-toggle="tab" data-bs-target="#reviews" role="tab" aria-selected="false" tabindex="-1">{{ $t('shop.reviews') }}</a>
            </li>
          </ul>
          <div id="product-tab-content" class="tab-content">
            <div id="description" class="tab-pane fade show active" role="tabpanel">
              <p class="m-0">{{ $t('shop.many_variations') }}</p>
            </div>
            <div id="additional-information" class="tab-pane fade" role="tabpanel">
              <div class="table-responsive additional-info-table">
                <table class="table table-border">
                  <tbody>
                    <tr class="text-body">
                      <th class="text-white">{{ $t('shop.color') }}</th>
                      <td>{{ $t('shop.blue_green_red') }}</td>
                    </tr>
                    <tr class="text-body">
                      <th class="text-white">{{ $t('shop.size') }}</th>
                      <td>L, M, S</td>
                    </tr>
                    <tr class="text-body">
                      <th class="text-white">{{ $t('shop.weight') }}</th>
                      <td>50ml, 100ml</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="reviews" class="tab-pane fade" role="tabpanel">
              <h4 class="mb-4">{{ $t('shop.reviews_believe_mask') }}</h4>
              <div class="product-review-list">
                <ul class="list-inline m-0 p-0">
                  <li class="pb-5 mb-5 border-bottom">
                    <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                      <div class="user-image flex-shrink-0">
                        <img src="/assets/images/shop/avatar.webp" alt="user-image" class="img-fluid" loading="lazy" />
                      </div>
                      <div class="about-user">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                          <h5 class="mb-0">{{ $t('shop.jack_stark') }}</h5>
                          <span class="text-uppercase fst-italic fw-semibold published-date"> <i class="fas fa-minus fa-xs"></i> march 2, 2022</span>
                          <div class="mt-2">
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star-half text-warning" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                        <p class="mt-2 mb-0">{{ $t('shop.many_variations') }}</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-5">
                    <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                      <div class="user-image flex-shrink-0">
                        <img src="/assets/images/shop/avatar.webp" alt="user-image" class="img-fluid" loading="lazy" />
                      </div>
                      <div class="about-user">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                          <h5 class="mb-0">{{ $t('shop.john_deo') }}</h5>
                          <span class="text-uppercase fst-italic fw-semibold published-date"> <i class="fas fa-minus fa-xs"></i> march 2, 2022</span>
                          <div class="lh-1 ratting">
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star text-warning" aria-hidden="true"></i>
                            </span>
                            <span>
                              <i class="fa fa-star-half text-warning" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                        <p class="mt-2 mb-0">{{ $t('shop.long_established') }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-5 review-form">
                <h4>{{ $t('shop.add_review') }}</h4>
                <p class="mb-5">{{ $t('shop.email_address_will_not') }} *</p>
                <p class="mb-2">{{ $t('shop.your_rating') }} *</p>
                <form class="needs-validation" novalidate="">
                  <div class="ratting">
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                    <span>
                      <i class="fa fa-star text-warning" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="mb-5 mt-4">
                    <label class="form-label">{{ $t('shop.your_review') }} *</label>
                    <textarea class="form-control rounded-0" required=""></textarea>
                  </div>
                  <div class="mb-5">
                    <label class="form-label">{{ $t('shop.name') }}*</label>
                    <input type="text" class="form-control rounded-0" required="" />
                  </div>
                  <div class="mb-5">
                    <label class="form-label">{{ $t('shop.email') }}*</label>
                    <input type="email" class="form-control rounded-0" required="" />
                  </div>
                  <div class="mb-5 form-check">
                    <input id="exampleCheck1" type="checkbox" class="form-check-input rounded-0" required="" />
                    <label class="form-check-label" for="exampleCheck1">{{ $t('shop.save_name') }}</label>
                  </div>
                  <div class="iq-button">
                    <a href="javascript:void(0);" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t('shop.submit') }}</span>
                      {{ '' }}
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="related-product-block section-padding-top">
      <ProductSection :slides-per-view="4" title="merchandise.related_products" container-class="containerClass"> </ProductSection>
    </div>
  </div>
  <FsLightbox :toggler="toggler" :sources="['/assets/images/shop/product/01.webp', '/assets/images/shop/product/02.webp', '/assets/images/shop/product/03.webp', '/assets/images/shop/product/04.webp']" />
</template>

<script setup>
import FsLightbox from 'fslightbox-vue/v3';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper';
import ProductSection from '../../components/sections/ProductSection.vue';
import { ref, computed, watch, defineProps, defineEmits } from 'vue';
import { useSetting } from '../../store/setting/index';
import Swal from 'sweetalert2';

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
const store = useSetting();
const rtl = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => rtl.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);
const toggler = ref(false);
// Swiper Modules
const modules = [Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
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
</script>
