<template>
  <div class="checkout-page section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 1 </span>
            {{ '' }}
            <span class="cart-page-link">{{ $t('shop.shopping_cart') }} </span>
          </li>
          <li class="cart-page-item">
            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </li>
          <li class="cart-page-item active">
            <span class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"> 2 </span>
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
      <div class="mb-5">
        <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          <div class="woocommerce-info">
            <span class="text-primary"><i class="fa-solid fa-percent"></i></span>
            {{ '' }}
            <span class="text-body ps-2">{{ $t('shop.have_a_coupon') }}</span>
            {{ '' }}
            <a href="#" data-bs-toggle="collapse" data-bs-target="#apply-coupon" class="text-white">{{ $t('shop.enter_code') }}</a>
          </div>
        </div>
        <div id="apply-coupon" class="collapse mt-5">
          <form class="checkout-coupon">
            <p class="mt-0">{{ $t('shop.apply_coupon_code') }}</p>
            <div class="iq-checkout-coupon">
              <input name="coupon-code" type="text" required="required" :placeholder="$t('shop.coupon_code')" class="form-control" />
              <div class="iq-button">
                <a href="#" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('shop.apply_coupon') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <b-row>
        <div class="col-lg-8 col-md-7">
          <form action="#">
            <h5 class="mb-4">{{ $t('shop.billing_details') }}</h5>
            <div class="mb-4">
              <input name="first-name" type="text" required="required" :placeholder="$t('form.first_name')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="last-name" type="text" required="required" :placeholder="$t('form.last_name')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="billing-company" type="text" required="required" :placeholder="$t('shop.company')" class="form-control" />
            </div>
            <div class="mb-4">
              <div class="iq-custom-select">
                <select ref="selectElement" class="form-control" :tabindex="tabindex">
                  <option selected="">{{ $t('shop.india') }}</option>
                  <option value="1">{{ $t('shop.united_kindom') }}</option>
                  <option value="2">{{ $t('shop.united_states') }}</option>
                  <option value="3">{{ $t('shop.australia') }}</option>
                  <option value="1">{{ $t('shop.north_corea') }}</option>
                </select>
              </div>
            </div>
            <div class="mb-4">
              <input name="billing-address" type="text" required="required" :placeholder="$t('form.billing_address')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="billing-address2" type="text" required="required" :placeholder="$t('form.apartment')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="city" type="text" required="required" :placeholder="$t('shop.town_city')" class="form-control" />
            </div>
            <div class="mb-4">
              <div class="iq-custom-select">
                <select ref="selectElement1" class="form-control" :tabindex="tabindex1">
                  <option selected="">{{ $t('shop.colorado') }}</option>
                  <option value="2">{{ $t('shop.alaska') }}</option>
                  <option value="1">{{ $t('shop.hawai') }}</option>
                  <option value="3">{{ $t('shop.texas') }}</option>
                  <option value="1">{{ $t('shop.washington') }}</option>
                </select>
              </div>
            </div>
            <div class="mb-4">
              <input name="postcode" type="text" required="required" :placeholder="$t('form.zip_code')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="phone" type="text" required="required" :placeholder="$t('form.phone')" class="form-control" />
            </div>
            <div class="mb-4">
              <input name="billing-company" type="email" required="required" :placeholder="$t('shop.email_address')" class="form-control rounded-0 mb-5" />
            </div>
            <h5 class="mb-4">{{ $t('shop.additional_information') }}</h5>
            <div class="mb-4">
              <label class="mb-2">{{ $t('shop.order_notes') }}</label>
              <textarea name="your-message" :placeholder="$t('shop.order_notes_eg')" class="form-control mb-5" required=""></textarea>
            </div>
          </form>
        </div>
        <b-col lg="4" md="5">
          <div class="order_review-box border p-4">
            <h5 class="mb-3 mt-0 mt-md-2">{{ $t('shop.product_') }}</h5>
            <div v-for="data in myCart" :key="data" class="checkout-review-order">
              <div class="table-responsive mb-0">
                <checkout-card :thumbnail="data.thumbnail" :slug="data.slug" :product-name="data.product_name" :final-price="data.final_price" />
                <div class="checkout-payment mt-4 pt-3 pb-2">
                  <div class="payment-box border-bottom mb-5 pb-4">
                    <div id="accordionPayment" class="accordion">
                      <div class="accordion-item-payment">
                        <h6 id="payment-1" class="accordion-header">
                          <div class="accordion-button-payment" data-bs-toggle="collapse" data-bs-target="#collapseOnepayment" aria-expanded="true" aria-controls="collapseOnepayment">
                            <span class="form-check">
                              <input id="flexRadioDefault1" class="form-check-input" type="radio" name="flexRadioDefault" checked="checked" />
                              <label class="form-check-label" for="flexRadioDefault1"> {{ $t('shop.bank_transfer') }} </label>
                            </span>
                          </div>
                        </h6>
                        <b-collapse id="collapseOnepayment" class="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                          <div class="accordion-body">{{ $t('shop.make_direct_payment') }}</div>
                        </b-collapse>
                      </div>
                      <div class="accordion-item-payment">
                        <h6 id="payment-2" class="accordion-header">
                          <div class="accordion-button-payment collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwopayment" aria-expanded="false" aria-controls="collapseTwopayment">
                            <span class="form-check">
                              <input id="flexRadioDefault2" class="form-check-input" type="radio" name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault2"> {{ $t('shop.check_payments') }} </label>
                            </span>
                          </div>
                        </h6>
                        <b-collapse id="collapseTwopayment" class="accordion-collapse collapse" aria-labelledby="payment-2" data-bs-parent="#accordionPayment">
                          <div class="accordion-body">{{ $t('shop.cheque_to_store') }}</div>
                        </b-collapse>
                      </div>
                      <div class="accordion-item-payment">
                        <h6 id="payment-3" class="accordion-header">
                          <div class="accordion-button-payment collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThreepayment" aria-expanded="false" aria-controls="collapseThreepayment">
                            <span class="form-check">
                              <input id="flexRadioDefault3" class="form-check-input" type="radio" name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault3"> {{ $t('shop.cod') }} </label>
                            </span>
                          </div>
                        </h6>
                        <b-collapse id="collapseThreepayment" class="accordion-collapse collapse" aria-labelledby="payment-3" data-bs-parent="#accordionPayment">
                          <div class="accordion-body">{{ $t('shop.pay_with_cash') }}</div>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-5">
                    {{ $t('shop.your_personal_data') }}
                    <router-link :to="{ name: 'landing-page.privacy-policy' }" class="final text-primary">
                      {{ $t('shop.privacy_policy') }}
                    </router-link>
                  </p>
                  <div class="iq-button">
                    <router-link :to="{ name: 'landing-page.track-order' }" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t('shop.place_order') }}</span>
                      {{ '' }}
                      <i class="fa-solid fa-play"></i>
                    </router-link>
                  </div>
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
import { ref, onMounted } from 'vue';
import CheckoutCard from '../../components/merchandise/CheckoutCard.vue';
import { myCart } from '../../StaticData/shop';

// choise js
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

const selectElement1 = ref(null);
const tabindex1 = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(selectElement1.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});
</script>
