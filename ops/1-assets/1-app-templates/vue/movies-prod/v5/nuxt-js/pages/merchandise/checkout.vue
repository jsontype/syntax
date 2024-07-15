<template>
  <div class="checkout-page section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul
          class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap"
        >
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1">
              1
            </span>
            <span class="cart-page-link"> {{ $t("shop.shopping_cart") }} </span>
          </li>
          <li class="cart-page-item">
            <svg
              width="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </li>
          <li class="cart-page-item active">
            <span
              class="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1"
            >
              2
            </span>
            <span class="cart-page-link"> {{ $t("shop.checkout") }} </span>
          </li>
          <li class="cart-page-item">
            <svg
              width="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </li>
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1">
              3
            </span>
            <span class="cart-page-link"> {{ $t("shop.order_summary") }} </span>
          </li>
        </ul>
      </div>
      <div class="mb-5">
        <div
          class="d-flex align-items-center justify-content-center gap-3 flex-wrap"
        >
          <div class="woocommerce-info">
            <span class="text-primary"
              ><i class="fa-solid fa-percent"></i
            ></span>
            <span class="text-body ps-2">{{ $t("shop.have_a_coupon") }}</span>
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#apply-coupon"
              class="text-white"
              >{{ $t("shop.enter_code") }}</a
            >
          </div>
        </div>
        <div id="apply-coupon" class="collapse mt-5">
          <form class="checkout-coupon">
            <p class="mt-0">
              {{ $t("shop.apply_coupon_code") }}
            </p>
            <div class="iq-checkout-coupon">
              <input
                name="coupon-code"
                type="text"
                required="required"
                placeholder="Coupon code"
                class="form-control"
              />
              <div class="iq-button">
                <a href="#" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t("shop.apply_coupon") }}</span>
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
            <h5 class="mb-4">{{ $t("shop.billing_details") }}</h5>
            <div class="mb-4">
              <input
                name="first-name"
                type="text"
                required="required"
                placeholder="shop.first_name"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="last-name"
                type="text"
                required="required"
                placeholder="shop.last_name"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="billing-company"
                type="text"
                required="required"
                placeholder="shop.company_name"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <select class="form-control">
                <option selected="">{{ $t("shop.india") }}</option>
                <option value="1">{{ $t("shop.united_kindom") }}</option>
                <option value="2">{{ $t("shop.united_states") }}</option>
                <option value="3">{{ $t("shop.australia") }}</option>
                <option value="1">{{ $t("shop.north_corea") }}</option>
              </select>
            </div>
            <div class="mb-4">
              <input
                name="billing-address"
                type="text"
                required="required"
                placeholder="shop.billing_address"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="billing-address2"
                type="text"
                required="required"
                placeholder="shop.apartment"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="city"
                type="text"
                required="required"
                placeholder="Town / City"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <select class="form-control">
                <option selected="">{{ $t("shop.colorado") }}</option>
                <option value="2">{{ $t("shop.alaska") }}</option>
                <option value="1">{{ $t("shop.hawai") }}</option>
                <option value="3">{{ $t("shop.texas") }}</option>
                <option value="1">{{ $t("shop.washington") }}</option>
              </select>
            </div>
            <div class="mb-4">
              <input
                name="postcode"
                type="text"
                required="required"
                placeholder="ZIP Code"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="phone"
                type="tel"
                required="required"
                placeholder="Phone Number"
                class="form-control"
              />
            </div>
            <div class="mb-4">
              <input
                name="billing-company"
                type="email"
                required="required"
                placeholder="E-mail Address"
                class="form-control rounded-0 mb-5"
              />
            </div>
            <h5 class="mb-4">{{ $t("shop.additional_information") }}</h5>
            <div class="mb-4">
              <label class="mb-2">{{ $t("shop.order_notes") }}</label>
              <textarea
                name="your-message"
                placeholder="Notes about your order, e.g. special notes for delivery."
                class="form-control mb-5"
                required=""
              ></textarea>
            </div>
          </form>
        </div>
        <b-col lg="4" md="5">
          <div class="order_review-box border p-4">
            <h5 class="mb-3 mt-0 mt-md-2">{{ $t("shop.product") }}</h5>
            <div
              v-for="data in myCart"
              :key="data"
              class="checkout-review-order"
            >
              <div class="table-responsive">
                <checkout-card
                  :thumbnail="data.thumbnail"
                  :slug="data.slug"
                  :product-name="$t(data.product_name)"
                  :final-price="data.final_price"
                />
                <div id="payment" class="checkout-payment mt-4 pt-3 pb-2">
                  <div class="payment-box border-bottom mb-5 pb-4">
                    <div class="payli">
                      <div class="form-check">
                        <input
                          id="directradio1"
                          class="form-check-input"
                          type="radio"
                          name="directradio"
                        />
                        <label class="form-check-label" for="directradio1">
                          {{ $t("shop.bank_transfer") }}
                        </label>
                      </div>
                      <div class="bank">
                        <p>
                          {{ $t("shop.make_direct_payment") }}
                        </p>
                      </div>
                    </div>
                    <div class="payli">
                      <div class="form-check">
                        <input
                          id="checkradio1"
                          class="form-check-input"
                          type="radio"
                          name="checkradio"
                        />
                        <label class="form-check-label" for="checkradio1">
                          {{ $t("shop.cheque_payments") }}
                        </label>
                      </div>
                      <div class="rpay">
                        <p>
                          {{ $t("shop.cheque_to_store") }}
                        </p>
                      </div>
                    </div>
                    <div class="payli">
                      <div class="form-check">
                        <input
                          id="cashradio1"
                          class="form-check-input"
                          type="radio"
                          name="cashradio"
                        />
                        <label class="form-cash-label" for="cashradio1">
                          {{ $t("shop.cod") }}
                        </label>
                      </div>
                      <div class="rpay">
                        <p>{{ $t("shop.pay_with_cash") }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="place-order">
                    <p class="">
                      {{ $t("shop.your_personal_data") }}
                      <nuxt-link
                        :to="{ name: 'extra-privacy-policy' }"
                        class="final text-primary"
                        target="_blank"
                      >
                        {{ $t("shop.privacy_policy") }}</nuxt-link
                      >.
                    </p>
                    <div class="iq-button">
                      <nuxt-link
                        :to="{ name: 'merchandise-track-order' }"
                        class="btn text-uppercase position-relative"
                      >
                        <span class="button-text">{{
                          $t("shop.place_order")
                        }}</span>
                        <i class="fa-solid fa-play"></i>
                      </nuxt-link>
                    </div>
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
//components
import CheckoutCard from "../../components/merchandise/CheckoutCard.vue";

//data
import { myCart } from "../../StaticData/shop";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Checkout");
</script>
