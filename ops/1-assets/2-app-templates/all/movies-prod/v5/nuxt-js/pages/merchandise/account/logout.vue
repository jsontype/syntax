<template>
  <AccountLayout>
    <div class="p-4">
      <div class="row">
        <div class="col-md-6">
          <h4 class="mb-5 text-primary">{{ $t("shop.login") }}</h4>
          <form method="post" action="#">
            <div class="mb-4">
              <input
                type="text"
                name="user-name"
                class="form-control"
                placeholder="Username or email address *"
                required=""
              />
            </div>
            <div class="mb-4">
              <input
                type="password"
                name="pwd"
                class="form-control"
                placeholder="Password"
                required=""
              />
            </div>
            <label class="custom-form-field mb-5">
              <input type="checkbox" required="required" class="mr-2" />
              <span class="checkmark"></span>
              <span>{{ $t("shop.remember_me") }}</span>
            </label>
            <div class="iq-button">
              <a
                href="javascript:void(0)"
                class="btn text-uppercase position-relative"
              >
                <span class="button-text">{{ $t("shop.login") }}</span>
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </form>
          <div class="mt-3">
            <div class="iq-button link-button">
              <a
                href="javascript:void(0)"
                class="btn text-capitalize position-relative"
              >
                <span class="button-text">{{ $t("shop.lost_password") }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h4 class="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">
            {{ $t("shop.register") }}
          </h4>
          <form method="post" action="#">
            <div class="mb-4">
              <input
                type="text"
                name="user-name"
                placeholder="Username *"
                class="form-control"
                required=""
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                name="email-address"
                placeholder="Email address *"
                class="form-control"
                required=""
              />
            </div>
            <div class="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                class="form-control"
                required=""
              />
            </div>
            <p class="mb-5">
              {{ $t("shop.user_personal_data") }}
              <nuxt-link :to="{ name: 'extra-privacy-policy' }">
                {{ $t("shop.privacy_policy") }}</nuxt-link
              >.
            </p>
            <div class="iq-button">
              <a
                href="javascript:void(0)"
                class="btn text-uppercase position-relative"
              >
                <span class="button-text">{{ $t("shop.register") }}</span>
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </form>
        </div>
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
