<template>
  <b-container>
    <b-row>
      <b-col lg="6">
        <div class="product-block inner-box">
          <div class="product-block">
            <span v-if="props.isSale === true" class="onsale sale text-white bg-primary">{{ $t("shop.sale") }}!</span>
            <span v-else-if="props.isNew === true" class="onsale sale text-white bg-secondary">{{ $t("shop.new")
              }}!</span>
            <a href="#"><i class="fa fa-search fa-1x imagesearch" aria-hidden="true"></i></a>
            <div class="image-wrap">
              <img :src="props.thumbnail" class="img-fluid w-100 img-zoom" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="summary ms-lg-4">
          <h1 class="product-title title-link">{{ $t(props.productName) }}</h1>
          <div class="comment-form-rating ratestar">
            <div class="star">
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span class="text-primary">{{ $t('shop.1_customer_review') }}</span>
            </div>
          </div>
          <p class="price">
            <del>{{ props.price }}</del> <b>&nbsp; {{ props.finalPrice }}</b>
          </p>
          <p class="mb-4 text-white">{{ props.description }}</p>
          <form class="cart mb-4" method="post">
            <div class="cart-btn-wrapper">
              <div class="quantity">
                <label class="screen-reader-text" for="quantity1"></label>
                <button type="button" class="minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
                <input
id="quantity1" type="text" class="qty" step="1" min="1" name="quantity" value="1" title="Qty"
                  placeholder="" disabled />
                <button type="button" class="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
              </div>
              <div class="wishlist">
                <div class="wishlist-fragment on-first-load">
                  <!-- ADD TO WISHLIST -->
                  <div>
                    <router-link to="#" class="">
                      <i class="fa fa-heart-o"></i>
                    </router-link>
                  </div>
                  <!-- COUNT TEXT -->
                </div>
              </div>
              <router-link class="iq-button btn btn-hover" :to="{ name: 'landing-page.merchandise.cart' }">
                {{ $t("shop.add_to_cart") }}
              </router-link>
            </div>
          </form>
          <div class="">
            {{ $t("shop.sku") }}: <span> {{ props.sku }}</span>
          </div>
          <br />
          <div class="mb-3">
            {{ $t("shop.category") }} : <router-link
v-for="categories in props.category" :key="categories"
              :to="{ name: 'landing-page.merchandise.shop' }" class="text-primary ms-2 text-capitalize"> {{ categories
              }},
            </router-link>
          </div>

          <div class="">
            {{ $t("shop.tags") }} :<router-link
v-for="tag in props.tags" :key="tag"
              :to="{ name: 'landing-page.merchandise.shop' }" rel="tag" class="text-primary text-capitalize ms-2">{{ tag
              }},</router-link>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-col lg="12" class="shop-detail">
      <div class="content-details trending-info g-border">
        <ul
          class="trending-pills-header d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center"
          role="tablist">
          <li class="nav-item">
            <a
class="nav-link active show grdeffect" data-bs-toggle="pill" href="#decription-23" role="tab"
              aria-selected="false">{{ $t("shop.description") }}</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link grdeffect" data-bs-toggle="pill" href="#add-24" role="tab" aria-selected="true">{{
              $t("shop.additional_information") }}</a> +
          </li>
          <li class="nav-item">
            <a class="nav-link grdeffect" data-bs-toggle="pill" href="#review-24" role="tab" aria-selected="false">{{
              $t("shop.reviews") }}(0)</a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="decription-23" class="tab-pane fade active show" role="tabpanel">
            <div class="description-content">
              <p>{{ props.description }}</p>
            </div>
          </div>
          <div id="add-24" class="tab-pane fade" role="tabpanel">
            <div class="description-content">
              <table class="addtable mb-5">
                <tbody>
                  <tr>
                    <th class="thwidth">Size</th>
                    <td class="bordertd">
                      <span v-for="data in props.additionalInfo" :key="data" to="#" rel="color">
                        <router-link v-for="sizes in data.size" :key="sizes" to="#" class="ms-2">{{ sizes
                          }},</router-link>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th class="thwidth">{{ $t("shop.color") }}</th>
                    <td class="bordertd">
                      <span v-for="data in props.additionalInfo" :key="data" to="#" rel="color">
                        <router-link v-for="colors in data.color" :key="colors" to="#" class="ms-2">{{ colors
                          }},</router-link>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="review-24" class="tab-pane fade" role="tabpanel">
            <div id="reviews" class="streamit-reviews">
              <div id="comments" class="comments-area validate-form">
                <h2>{{ $t("shop.reviews") }}</h2>
                <p class="masvideos-noreviews mt-3">{{ $t("episode_page.no_reviews") }}.</p>
              </div>
              <div id="review_form_wrapper">
                <div id="review_form">
                  <div id="respond" class="comment-respond">
                    <p id="reply-title" class="comment-reply-title mt-0 mb-0">
                      {{ $t("episode_page.first_review") }} “{{ props.productName
                      }}”</p>
                    <form class="comment-form">
                      <p class="comment-notes">
                        <span id="email-notes">{{ $t("detail_page.published_email") }}.</span>
                        <span class="required-field-message" aria-hidden="true">{{
                          $t("detail_page.required_fields") }} <span class="required" aria-hidden="true">*</span></span>
                      </p>
                      <div class="comment-form-rating ratestar">
                        <label for="rating">{{ ("detail_page.your_rating") }}*</label>
                        <div class="star">
                          <span><i class="ri-star-line"></i></span>
                          <span><i class="ri-star-line"></i></span>
                          <span><i class="ri-star-line"></i></span>
                          <span><i class="ri-star-line"></i></span>
                          <span><i class="ri-star-line"></i></span>
                        </div>
                      </div>
                      <p class="comment-form-comment p-0 mb-3 mt-0">
                        <label for="comment">{{ $t("restricted.your_review") }}&nbsp;<span
                            class="required">*</span></label><textarea
id="comment" name="comment" cols="45" rows="8"
                          required=""></textarea>
                      </p>
                      <p class="comment-form-author mt-3 pe-lg-12 pe-0 namefull">
                        <label for="author">{{ $t("restricted.name") }}&nbsp;<span class="required">*</span></label>
                        <input id="author" name="author" type="text" value="" size="30" required="" />
                      </p>
                      <p class="comment-form-email mt-3 ps-lg-12 pe-0 namefull">
                        <label for="email">{{ $t("restricted.email") }}&nbsp;<span class="required">*</span></label>
                        <input id="email" name="email" type="email" value="" size="30" required="" />
                      </p>
                      <p class="comment-form-cookies-consent">
                        <input id="check11" class="form-check-input" type="checkbox" name="check1" />
                        <label class="form-check-label" for="check11"> {{ $t("restricted.save_name") }}. </label>
                      </p>
                      <p class="form-submit">
                        <button
id="submit" name="submit" type="submit" class="btn btn-hover iq-button mb-4"
                          value="Submit">
                          {{ $t("restricted.submit") }}
                          <span><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-container>
</template>
<script setup>
const props = defineProps({
  slug: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  productName: { type: String, default: '' },
  description: { type: String, default: '' },
  isSale: { type: [String, Boolean], default: true },
  isNew: { type: [String, Boolean], default: true },
  tags: { type: Array, default: () => [] },
  price: { type: String, default: '' },
  finalPrice: { type: String, default: '' },
  additionalInfo: { type: Array, default: () => [] },
  sku: { type: String, default: '' },
  category: { type: String, default: '' },
  size: { type: String, default: '' },
});
</script>
