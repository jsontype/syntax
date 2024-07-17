<template>
  <div class="sub-product">
    <div class="inner-box">
      <div class="product-block">
        <span v-if="props.isSale == true" class="onsale bg-primary">
          {{ $t("shop.sale") }}!
        </span>

        <span v-else-if="props.isNew == true" class="onsale bg-primary">
          {{ $t("shop.new") }}!
        </span>
        <div class="image-wrap">
          <nuxt-link :to="{ name: 'merchandise-product-detail' }">
            <div class="product-image">
              <img
                :src="props.thumbnail"
                class="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
          </nuxt-link>

          <div class="buttons-holder">
            <ul class="list-unstyled m-0 p-0">
              <li>
                <nuxt-link class-name="sq-btn" to="#"
                  ><i class="fa fa-eye"></i
                ></nuxt-link>
              </li>
              <li>
                <div class="on-first-load">
                  <div class="add-button">
                    <nuxt-link to="#" class-name="add_to_wishlist">
                      <i class="fa-solid fa-heart" aria-hidden="true"></i>
                    </nuxt-link>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link
                  to="#"
                  class-name="added_to_cart d-flex align-items-center"
                >
                  <i class="fa-solid fa-basket-shopping"></i>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-caption">
          <h5 class="product__title">
            <nuxt-link
              :to="{ name: 'merchandise-product-detail' }"
              class-name="css_prefix-product-title-link"
            >
              {{ $t(props.productName) }}</nuxt-link
            >
          </h5>
          <div class="price-detail">
            <span class="price"
              ><del>{{ props.price }}</del
              >{{ props.finalPrice }}</span
            >
          </div>
          <div class="container-rating">
            <div class="star-rating">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { newProduct } from '../../../StaticData/shop';
const props = defineProps({
  thumbnail: { type: String, default: "" },
  productName: { type: String, default: "" },
  slug: { type: String, default: "" },
  isSale: { type: [String, Boolean], default: true },
  isNew: { type: [String, Boolean], default: true },
  price: { type: String, default: "" },
  finalPrice: { type: String, default: "" },
  // ratting:{type:String, default: ''},
});
</script>
