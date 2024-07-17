<template>
  <div class="section-padding">
    <!-- Shop Category Page -->
    <b-container>
      <b-row>
        <b-col lg="3">
          <div class="shop-box">
            <h5 class="mb-4 text-uppercase">
              {{ $t("shop.product_categories") }}
            </h5>
            <ul class="list-unstyled p-0 m-0 shop-list-checkbox">
              <li>{{ $t("shop.activeman") }}</li>
              <li>
                <div class="d-flex align-items-center justify-content-between">
                  <span>{{ $t("shop.disney_world") }}</span>
                  <a class="checkbox collapsed" data-bs-toggle="collapse" href="#categoriesone" role="button"
                    aria-expanded="false" aria-controls="categoriesone">
                  </a>
                </div>
                <div id="categoriesone" class="collapse" style="">
                  <ul class="list-unstyled ps-2 mt-3">
                    <li>{{ $t("shop.fantasia") }}</li>
                  </ul>
                </div>
              </li>
              <li>{{ $t("shop.galaxy_heaven") }}</li>
              <li>{{ $t("shop.haunted_halloween") }}</li>
              <li>{{ $t("shop.marvel_studios") }}</li>
              <li>{{ $t("shop.monster_house") }}</li>
              <li>{{ $t("shop.quick_game") }}</li>
              <li>{{ $t("shop.the_flashv") }}</li>
              <li>{{ $t("shop.the_madrid") }}</li>
              <li>{{ $t("shop.the_champion") }}</li>
              <li>{{ $t("shop.uptight_birds") }}</li>
              <li>{{ $t("shop.warner_bros") }}</li>
            </ul>
          </div>
          <div class="shop_container">
            <h5 class="">{{ $t("shop.price_filter") }}</h5>
            <div class="form-group my-4 product-range">
              <!-- Price Range Slider -->
              <div id="product-price-range" style="background-color: aliceblue"
                class="range-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                <div class="noUi-base">
                  <div class="noUi-connects">
                    <div class="noUi-connect" style="transform: translate(0%, 0px) scale(0.4, 1)"></div>
                  </div>
                  <div class="noUi-origin" style="transform: translate(-1000%, 0px); z-index: 5">
                    <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider"
                      aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="20.0" aria-valuenow="0.0"
                      aria-valuetext="0.00">
                      <div class="noUi-touch-area"></div>
                    </div>
                  </div>
                  <div class="noUi-origin" style="transform: translate(-600%, 0px); z-index: 6">
                    <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider"
                      aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50.0" aria-valuenow="20.0"
                      aria-valuetext="20.00">
                      <div class="noUi-touch-area"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- new -->
            </div>
            <div class="d-flex align-items-center my-3">
              <small>{{ $t("shop.price") }} &nbsp;</small>
              <small id="lower-value">&nbsp; $11</small>
              <small id="lower-value">&nbsp; - &nbsp;</small>
              <small id="upper-value">&nbsp;$50</small>
            </div>
          </div>
          <div class="shop_container">
            <h5 class="mb-4">{{ $t("shop.product_size") }}</h5>

            <ul class="shop_list_checkbox list-unstyled">
              <li>
                <label class="shop_checkbox_label" for="l1">L</label>
                <input type="hidden" value="L" />
              </li>
              <li>
                <label class="shop_checkbox_label" for="m1">M</label>
                <input type="hidden" value="M" />
              </li>
              <li>
                <label class="shop_checkbox_label" for="s1">S</label>
                <input type="hidden" value="S" />
              </li>
            </ul>
          </div>
          <h5 class="mb-4">{{ $t("shop.product") }}</h5>
          <span v-for="data in newProduct" :key="data">
            <ShopCategorySidebar :thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name"
              :price="data.price" :final-price="data.final_price" :additional-info="data.additional_info" />
          </span>
        </b-col>
        <b-col lg="9">
          <div class="d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap">
            <p v-if="filterWiseProducts.length > 1">
              {{ $t("shop.showing_all") }} {{ filterWiseProducts.length }}
              {{ $t("shop.products") }}
            </p>
            <p v-else>{{ $t("shop.showing_single_product") }}</p>
            <div class="d-flex align-items-center">
              <div class="product-view-button">
                <ul id="pills-tab"
                  class="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center"
                  role="tablist">
                  <li class="nav-item ms-2" role="presentation">
                    <button id="list-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0" data-bs-toggle="pill"
                      data-bs-target="#pills-list-view" type="button" role="tab" aria-controls="pills-list-view"
                      aria-selected="true">
                      <span class="btn-inner">
                        <svg class="hover_effect active_effect" width="18" height="16" viewBox="0 0 18 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1379_355)">
                            <path d="M3.42857 0H0V3.42857H3.42857V0Z" fill=""></path>
                            <path d="M18 0.857422H6V2.57171H18V0.857422Z" fill=""></path>
                            <path d="M3.42857 6H0V9.42857H3.42857V6Z" fill=""></path>
                            <path d="M18 6.85742H6V8.57171H18V6.85742Z" fill=""></path>
                            <path d="M3.42857 12H0V15.4286H3.42857V12Z" fill=""></path>
                            <path d="M18 12.8574H6V14.5717H18V12.8574Z" fill=""></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1379_355">
                              <rect width="18" height="15.4286" fill=""></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item ms-2" role="presentation">
                    <button id="grid-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0" data-bs-toggle="pill"
                      data-bs-target="#pills-grid-view" type="button" role="tab" aria-controls="pills-grid-view"
                      aria-selected="false">
                      <span class="btn-inner">
                        <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.57143 0H0V8.57143H8.57143V0Z" fill=""></path>
                          <path d="M17.9999 0H9.42847V8.57143H17.9999V0Z" fill=""></path>
                          <path d="M8.57143 9.42871H0V18.0001H8.57143V9.42871Z" fill=""></path>
                          <path d="M17.9999 9.42871H9.42847V18.0001H17.9999V9.42871Z" fill=""></path>
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item ms-2" role="presentation">
                    <button id="grid-three-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0 active show"
                      data-bs-toggle="pill" data-bs-target="#pills-grid-three-view-tab" type="button" role="tab"
                      aria-controls="pills-grid-three-view-tab" aria-selected="false">
                      <span class="btn-inner">
                        <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.90909 0H0V4.90909H4.90909V0Z" fill=""></path>
                          <path d="M11.4545 0H6.54541V4.90909H11.4545V0Z" fill=""></path>
                          <path d="M17.9999 0H13.0908V4.90909H17.9999V0Z" fill=""></path>
                          <path d="M4.90909 6.5459H0V11.455H4.90909V6.5459Z" fill=""></path>
                          <path d="M11.4545 6.5459H6.54541V11.455H11.4545V6.5459Z" fill=""></path>
                          <path d="M17.9999 6.5459H13.0908V11.455H17.9999V6.5459Z" fill=""></path>
                          <path d="M4.90909 13.0908H0V17.9999H4.90909V13.0908Z" fill=""></path>
                          <path d="M11.4545 13.0908H6.54541V17.9999H11.4545V13.0908Z" fill=""></path>
                          <path d="M17.9999 13.0908H13.0908V17.9999H17.9999V13.0908Z" fill=""></path>
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li class="nav-item ms-2" role="presentation">
                    <button id="grid-four-view-tab" class="nav-link btn-sm btn-icon rounded-pill p-0"
                      data-bs-toggle="pill" data-bs-target="#pills-grid-four-view-tab" type="button" role="tab"
                      aria-controls="pills-grid-four-view-tab" aria-selected="false">
                      <span class="btn-inner">
                        <svg class="hover_effect active_effect" width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.85714 0H0V3.85714H3.85714V0Z" fill=""></path>
                          <path d="M8.5715 0H4.71436V3.85714H8.5715V0Z" fill=""></path>
                          <path d="M13.2856 0H9.42847V3.85714H13.2856V0Z" fill=""></path>
                          <path d="M18 0H14.1428V3.85714H18V0Z" fill=""></path>
                          <path d="M3.85714 4.71387H0V8.57101H3.85714V4.71387Z" fill=""></path>
                          <path d="M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z" fill=""></path>
                          <path d="M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z" fill=""></path>
                          <path d="M18 4.71387H14.1428V8.57101H18V4.71387Z" fill=""></path>
                          <path d="M3.85714 9.42871H0V13.2859H3.85714V9.42871Z" fill=""></path>
                          <path d="M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z" fill=""></path>
                          <path d="M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z" fill=""></path>
                          <path d="M18 9.42871H14.1428V13.2859H18V9.42871Z" fill=""></path>
                          <path d="M3.85714 14.1426H0V17.9997H3.85714V14.1426Z" fill=""></path>
                          <path d="M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z" fill=""></path>
                          <path d="M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z" fill=""></path>
                          <path d="M18 14.1426H14.1428V17.9997H18V14.1426Z" fill=""></path>
                        </svg>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="iq-custom-select d-inline-block shop-select">
                <b-form-select name="cars" class=" form-control season-select">
                  <b-form-select-option value="season1">{{
                $t("shop.default_sorting")
              }}</b-form-select-option>

                  <b-form-select-option>{{
                  $t("shop.sort_by_popularity")
                }}</b-form-select-option>
                  <b-form-select-option>{{
                  $t("shop.sort_by_rating")
                }}</b-form-select-option>
                  <b-form-select-option>{{
                  $t("shop.sort_by_latest")
                }}</b-form-select-option>
                  <b-form-select-option>{{
                  $t("shop.price_low_to_high")
                }}</b-form-select-option>
                  <b-form-select-option>{{
                  $t("shop.price_high_to_low")
                }}</b-form-select-option>
                </b-form-select>
              </div>
            </div>
          </div>

          <div id="pills-tabContent" class="tab-content">
            <!-- List View -->
            <div id="pills-list-view" class="tab-pane fade" role="tabpanel" aria-labelledby="list-view-tab">
              <b-row class="row-cols-1">
                <CardShopListView v-for="data in newProduct" :key="data" :thumbnail="data.thumbnail" :slug="data.slug"
                  :is-sale="data.is_sale" :product-name="data.product_name" :price="data.price"
                  :final-price="data.final_price" />
              </b-row>
            </div>

            <!-- Grid View -->
            <div id="pills-grid-view" class="tab-pane fade" role="tabpanel" aria-labelledby="grid-view-tab">
              <b-row cols="1" cols-md="2" :cols-lg="row">
                <b-col v-for="data in filterWiseProducts" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :slug="data.slug" :is-sale="data.is_sale"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
            <!-- Three Grid view -->
            <div id="pills-grid-three-view-tab" class="tab-pane fade active show" role="tabpanel"
              aria-labelledby="grid-three-view-tab">
              <b-row cols="1" :cols-md="3" :cols-lg="row">
                <b-col v-for="data in filterWiseProducts" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :slug="data.slug" :is-sale="data.is_sale"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
            <!-- Four Grid View -->
            <div id="pills-grid-four-view-tab" class="tab-pane fade" role="tabpanel">
              <b-row cols="1" cols-md="4" :cols-lg="row">
                <b-col v-for="data in filterWiseProducts" :key="data">
                  <CardShopGridView :thumbnail="data.thumbnail" :slug="data.slug" :is-sale="data.is_sale"
                    :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

//components
import ShopCategorySidebar from "../../components/merchandise/ShopCategorySidebar.vue";
import CardShopGridView from "../../components/merchandise/CategoryGridView.vue";
import CardShopListView from "../../components/merchandise/CategoryListView.vue";

//data
import { newProduct, products } from "../../StaticData/shop";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

const { addBreadcrumb } = useBreadcrumb();
addBreadcrumb("Shop");

const row = ref();
const route = useRoute();

let filterWiseProducts = products;

const changeGridColumn = (gridType) => {
  switch (gridType) {
    case "pills-grid-view":
      row.value = 2;
      break;
    case "pills-grid-three-four-view-tab":
      row.value = 3;
      break;
    case "pills-grid-four-view-tab":
      row.value = 4;
      break;

    default:
      break;
  }
};

changeGridColumn(route.params.grid);

watch(
  () => route.params.grid,
  (gridType) => {
    changeGridColumn(gridType);
  }
);

definePageMeta({
  layout: "merchandise",
});
</script>
