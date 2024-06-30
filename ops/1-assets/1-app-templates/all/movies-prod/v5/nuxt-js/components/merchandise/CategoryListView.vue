<template>
  <b-col>
    <div class="product-block product-list">
      <b-row>
        <b-col md="4" class="ps-0">
          <span v-if="props.isSale === true" class="onsale bg-primary"
            >Sale!</span
          >
          <span
            v-else-if="props.isNew === true"
            class="onsale sale text-white bg-primary"
            >New!</span
          >
          <div class="image-wrap">
            <nuxt-link :to="{ name: 'merchandise-product-detail' }">
              <div class="product-image">
                <img
                  :src="props.thumbnail"
                  class="img-fluid w-100"
                  alt="shoplistImg-{{id}}"
                  loading="lazy"
                />
              </div>
            </nuxt-link>
            <div class="buttons-holder">
              <ul class="list-unstyled m-0 p-0">
                <li>
                  <a
                    class="sq-btn"
                    href="#viewmodal-{{id}}"
                    data-bs-toggle="modal"
                    data-bs-target="#viewmodal-{{id}}"
                    ><i class="fa fa-eye" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col md="8">
          <div class="product-caption">
            <h5 class="product_title">
              <nuxt-link
                :to="{ name: 'merchandise-shop' }"
                class="title-link"
                >{{ $t(props.productName) }}</nuxt-link
              >
            </h5>
            <div class="price-detail">
              <span class="price"
                ><del>{{ props.price }}</del> {{ props.finalPrice }}</span
              >
            </div>
            <div class="container-rating">
              <div class="star-rating text-primary">
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
                  <i
                    class="fa fa-star-half text-warning"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <ul class="iq-button-holder list-inline d-flex flex-wrap gap-3">
              <li>
                <div class="iq-button">
                  <nuxt-link
                    to="#"
                    class="btn btn-sm cart-btn text-uppercase position-relative"
                    @click="cartSwal"
                  >
                    <span class="button-text">{{
                      $t("shop.add_to_cart")
                    }}</span>
                    <i class="fa-solid fa-play"></i>
                  </nuxt-link>
                </div>
              </li>
              <li>
                <nuxt-link
                  to="#"
                  class="add_to_wishlist wishlist-btn"
                  @click="wishlistSwal"
                  ><i class="far fa-heart"></i
                ></nuxt-link>
              </li>
            </ul>
            <p class="blog-desc line-count-2">
              {{ $t("shop.desc1") }}
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>
<script setup>
//plugins
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const props = defineProps({
  thumbnail: { type: String, default: "" },
  slug: { type: String, default: "" },
  productName: { type: String, default: "" },
  isSale: { type: [String, Boolean], default: "" },
  isNew: { type: [String, Boolean], default: "" },
  price: { type: String, default: "" },
  ratings: { type: String, default: "" },
  finalPrice: { type: String, default: "" },
  additionalInfo: { type: Array, default: () => [] },
});

const cartSwal = () => {
  Swal.fire({
    title: "Added!",
    text: "Your item has been added to the cart.",
    icon: "success",
    confirmButtonText: "Ok",
    background: "#141314",
    color: "#ffffff",
  });
};
const wishlistSwal = () => {
  Swal.fire({
    title: "Added!",
    text: "Your item has been added to the wishlist.",
    icon: "success",
    confirmButtonText: "Ok",
    background: "#141314",
    color: "#ffffff",
  });
};
</script>
