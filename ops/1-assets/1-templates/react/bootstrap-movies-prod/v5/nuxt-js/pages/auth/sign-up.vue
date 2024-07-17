<template>
  <section
    class="sign-in-page vh-100"
    :style="`background: url(${generateImgPath(
      '/assets/images/pages/01.webp'
    )}); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px;`"
  >
    <div class="container">
      <div
        class="row justify-content-center align-items-center height-self-center vh-100"
      >
        <div class="col-lg-8 col-md-12 align-self-center">
          <div class="user-login-card bg-body">
            <h4 class="text-center mb-5">
              <BrandLogo></BrandLogo>
              {{ $t("form.create_account") }}
            </h4>
            <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
              <div class="col">
                <label class="text-white fw-500 mb-2">{{
                  $t("form.first_name")
                }}</label>
                <input type="text" class="form-control rounded-0" required="" />
              </div>
              <div class="col">
                <label class="text-white fw-500 mb-2">{{
                  $t("form.last_name")
                }}</label>
                <input type="text" class="form-control rounded-0" required="" />
              </div>
              <div class="col">
                <label class="text-white fw-500 mb-2"
                  >{{ $t("form.username") }}*</label
                >
                <input type="text" class="form-control rounded-0" required="" />
              </div>
              <div class="col">
                <label class="text-white fw-500 mb-2"
                  >{{ $t("form.email") }} *</label
                >
                <input
                  type="email"
                  class="form-control rounded-0"
                  required=""
                />
              </div>
              <div class="col">
                <label class="text-white fw-500 mb-2"
                  >{{ $t("form.password") }} *</label
                >
                <input
                  type="password"
                  class="form-control rounded-0"
                  required=""
                />
              </div>
              <div class="col">
                <label class="text-white fw-500 mb-2"
                  >{{ $t("form.confirm_password") }} *</label
                >
                <input
                  type="password"
                  class="form-control rounded-0"
                  required=""
                />
              </div>
            </div>
            <label
              class="list-group-item d-flex align-items-center mt-5 mb-3 text-white"
              ><input class="form-check-input m-0 me-2" type="checkbox" />{{
                $t("form.read_and_accept")
              }}ss
              <nuxt-link :to="{ name: 'extra-terms-of-use' }" class="ms-1"
                >terms &amp; {{ $t("form.terms_conditions") }}*</nuxt-link
              ></label
            >
            <div class="row text-center">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">
                <div class="full-button">
                  <div class="iq-button">
                    <a href="#" class="btn text-uppercase position-relative">
                      <span class="button-text">{{ $t("form.sign_up") }}</span>
                      <i class="fa-solid fa-play"></i>
                    </a>
                  </div>
                  <p class="mt-2 mb-0 fw-normal">
                    {{ $t("form.already_account") }}?<nuxt-link
                      :to="{ name: 'auth-login' }"
                      class="ms-1"
                      >Login</nuxt-link
                    >
                  </p>
                </div>
              </div>
              <div class="col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { generateImgPath } from "../../StaticData/data";

definePageMeta({
  layout: "blank",
});
</script>
