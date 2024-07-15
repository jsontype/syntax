<template>
  <div class="section-padding">
    <div class="container-fluid">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
        <div
          v-for="(data, index) in products"
          :key="index + data.product_name"
          class="col mb-5"
        >
          <CardShopGridView
            :thumbnail="data.thumbnail"
            :slug="data.slug"
            :is-sale="data.is_sale"
            :product-name="$t(data.product_name)"
            :price="data.price"
            :final-price="data.final_price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from "../../StaticData/shop";
import CardShopGridView from "../../components/merchandise/CategoryGridView.vue";
import { onMounted } from "vue";
import { useStremit } from "~/store/streamit";

const store = useStremit();

onMounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
