<template>
  <table class="table w-100">
    <tbody>
      <tr class="cart_item">
        <td class="product-name">
          <div class="product-image">
            <img
              width="300"
              height="400"
              :src="props.thumbnail"
              class="cartimg"
              alt="image"
              loading="lazy"
              sizes="(min-width: 960px) 75vw, 100vw"
            />
          </div>
          <div class="text">
            <span>{{ $t(props.productName) }}</span
            ><br /><strong class="product-quantity text-white"
              >{{ $t("shop.qty") }}&nbsp;1</strong
            >
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"
            ><bdi class="text-white">{{ props.finalPrice }}</bdi></span
          >
        </td>
      </tr>
      <tr class="cart_item">
        <td class="product-name">
          <div class="product-image">
            <img
              width="300"
              height="400"
              src="/assets/images/shop/product/07.webp"
              class="cartimg"
              alt="image"
              loading="lazy"
              sizes="(min-width: 960px) 75vw, 100vw"
            />
          </div>
          <div class="text">
            <span>{{ $t(props.productName) }}</span
            ><br /><strong class="product-quantity text-white"
              >{{ $t("shop.qty") }}&nbsp;1</strong
            >
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"
            ><bdi class="text-white">{{ props.finalPrice }}</bdi></span
          >
        </td>
      </tr>
      <tr class="cart_item">
        <td class="product-name">
          <div class="product-image">
            <img
              width="300"
              height="400"
              src="/assets/images/shop/product/05.webp"
              class="cartimg"
              alt="image"
              loading="lazy"
              sizes="(min-width: 960px) 75vw, 100vw"
            />
          </div>
          <div class="text">
            <span>{{ $t(props.productName) }}</span
            ><br /><strong class="product-quantity text-white"
              >{{ $t("shop.qty") }}&nbsp;1</strong
            >
          </div>
        </td>
        <td class="product-total">
          <span class="Price-amount"
            ><bdi class="text-white">{{ props.finalPrice }}</bdi></span
          >
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="border-bottom">
        <td class="ps-0 p-3 fw-500 font-size-18">{{ $t("shop.subtotal") }}</td>
        <td class="pe-0 p-3 fw-500 text-end">
          <span class="mb-0 text-body">{{ props.finalPrice }}</span>
        </td>
      </tr>
      <tr class="border-bottom">
        <td class="ps-0 p-3 fw-500 font-size-18">{{ $t("shop.total") }}</td>
        <td class="pe-0 p-3 fw-500 text-end">
          <span class="text-primary mb-0">{{ props.finalPrice }}</span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
<script setup>
// import { myCart } from '../../../StaticData/shop';
const props = defineProps({
  thumbnail: { type: String, default: "" },
  slug: { type: String, default: "" },
  productName: { type: String, default: "" },
  finalPrice: { type: String, default: "" },
});
</script>
