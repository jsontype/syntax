<template>
  <AccountLayout>
    <div class="text-body p-4">
      <p class="my-3">{{ $t("shop.default_addresses") }}</p>
      <div
        class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap"
      >
        <h4 class="mb-0">{{ $t("shop.billing_addess") }}</h4>
        <div class="iq-button">
          <a
            href="#"
            class="btn text-uppercase position-relative"
            data-bs-toggle="collapse"
            data-bs-target="#edit-address-1"
            aria-expanded="false"
          >
            <span class="button-text">{{ $t("shop.edit") }}</span>
            <i class="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
      <div id="edit-address-1" class="collapse">
        <div class="text-body mb-4">
          <form>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.first_name") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="first-name"
                value="John"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.last_name") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="last-name"
                value="deo"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t("shop.company_name") }}</label>
              <input
                type="text"
                name="last-name"
                value="Iqonic Design"
                class="form-control"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.country_region") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <div class="mb-5">
                <select
                  class="form-control"
                  aria-label="select country"
                  required="required"
                >
                  <option value="">{{ $t("shop.chooes_a_country") }}</option>
                  <option value="1">{{ $t("shop.india") }}</option>
                  <option value="2">{{ $t("shop.united_kindom") }}</option>
                  <option value="3">{{ $t("shop.united_states") }}</option>
                  <option value="4">{{ $t("shop.australia") }}</option>
                  <option value="5">{{ $t("shop.north_corea") }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.street_address") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="address"
                placeholder="House number and street name"
                value="4517 Kentucky"
                class="form-control mb-3 rounded-0"
                required="required"
              />
              <input
                type="text"
                name="address"
                placeholder="Apartment, suite, unit, etc. (optional)"
                class="form-control"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.town_city") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="city"
                value="Navsari"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.state") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <div class="mb-5">
                <select class="form-control">
                  <option value="" selected="">{{ $t("shop.choose") }}</option>
                  <option value="1">{{ $t("shop.gujraat") }}</option>
                  <option value="2">{{ $t("shop.dehli") }}</option>
                  <option value="3">{{ $t("shop.goa") }}</option>
                  <option value="4">{{ $t("shop.haryana") }}</option>
                  <option value="5">{{ $t("shop.ladakh") }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.pin_code") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="pin code"
                value="396321"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.phone") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="tel"
                name="number"
                value="1234567890"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.email_eaddress") }} &nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="email"
                name="email"
                value="johndeo@gmail.com"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <div class="iq-button">
                <a href="" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t("shop.save_address") }}</span>
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="table-responsive">
        <table class="edit-address w-100">
          <tbody>
            <tr>
              <td class="label-name p-2">{{ $t("shop.name") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.jhon_deo") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.company") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.iqonic_design") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.country") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.india") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.address") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">4517 {{ $t("shop.washington_manchester") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.e_mail") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">johndeo@gmail.com</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.phone") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap"
      >
        <h4 class="mb-0">{{ $t("shop.shipping_address") }}</h4>
        <div class="iq-button">
          <a
            href="#"
            class="btn text-uppercase position-relative"
            data-bs-toggle="collapse"
            data-bs-target="#edit-address-2"
            aria-expanded="false"
          >
            <span class="button-text">{{ $t("shop.edit") }}</span>
            <i class="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
      <div id="edit-address-2" class="collapse">
        <div class="text-body mb-4">
          <form>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.first_name") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="first-name"
                value="John"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.last_name") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="last-name"
                value="deo"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2">{{ $t("shop.company_name") }}</label>
              <input
                type="text"
                name="last-name"
                value="Iqonic Design"
                class="form-control"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.country_region") }} &nbsp;
                <span class="text-danger">*</span></label
              >
              <div class="mb-5">
                <select class="form-control">
                  <option value="" selected="">{{ $t("shop.choose") }}</option>
                  <option value="1">{{ $t("shop.gujraat") }}</option>
                  <option value="2">{{ $t("shop.dehli") }}</option>
                  <option value="3">{{ $t("shop.goa") }}</option>
                  <option value="4">{{ $t("shop.haryana") }}</option>
                  <option value="5">{{ $t("shop.ladakh") }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.street_address") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="address"
                placeholder="House number and street name"
                value="4517 Kentucky"
                class="form-control mb-3 rounded-0"
                required="required"
              />
              <input
                type="text"
                name="address"
                placeholder="Apartment, suite, unit, etc. (optional)"
                class="form-control mb-5 rounded-0"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.town_city") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="city"
                value="Navsari"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.state") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <div class="mb-5">
                <select class="form-control">
                  <option value="" selected="">{{ $t("shop.choose") }}</option>
                  <option value="1">{{ $t("shop.gujraat") }}</option>
                  <option value="2">{{ $t("shop.dehli") }}</option>
                  <option value="3">{{ $t("shop.goa") }}</option>
                  <option value="4">{{ $t("shop.haryana") }}</option>
                  <option value="5">{{ $t("shop.ladakh") }}</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.pin_code") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="text"
                name="pin code"
                value="396321"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.phone") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="tel"
                name="number"
                value="1234567890"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group mb-5">
              <label class="mb-2"
                >{{ $t("shop.email_eaddress") }}&nbsp;
                <span class="text-danger">*</span></label
              >
              <input
                type="email"
                name="email"
                value="johndeo@gmail.com"
                class="form-control"
                required="required"
              />
            </div>
            <div class="form-group">
              <div class="iq-button">
                <a href="" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t("shop.save_address") }}</span>
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="table-responsive">
        <table class="edit-address w-100">
          <tbody>
            <tr>
              <td class="label-name p-2">{{ $t("shop.name") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.jhon_deo") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.company") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.iqonic_design") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.name") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">{{ $t("shop.india") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.address") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">4517 {{ $t("shop.washington_manchester") }}</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.e_mail") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">johndeo@gmail.com</td>
            </tr>
            <tr>
              <td class="label-name p-2">{{ $t("shop.phone") }}</td>
              <td class="seprator p-2"><span>:</span></td>
              <td class="p-2">1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from "./partials/AccountLayout.vue";
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>
