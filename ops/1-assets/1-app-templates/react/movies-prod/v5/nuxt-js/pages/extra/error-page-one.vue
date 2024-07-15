<template>
  <div class="section-padding vh-100">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <img
            src="/assets/images/pages/404.webp"
            class=""
            alt="404"
            loading="lazy"
          />
          <div
            class="py-3 text-center mt-5 mb-4"
            style="
              background: url('/assets/images/pages/404-bg-patten.webp');
              background-repeat: no-repeat;
              background-position: center center;
              background-size: 68% auto;
            "
          >
            <h4 class="fw-semibold mb-0">
              {{ $t("error.something_wrong") }}
            </h4>
          </div>
          <p class="text-center">{{ $t("error.looking_for") }}</p>
          <div class="text-center mt-4 pt-3">
            <div class="iq-bu tton">
              <nuxt-link
                :to="{ name: 'home' }"
                class="btn text-uppercase position-relative"
              >
                <span class="button-text">{{ $t("error.back_home") }}</span>
                <i class="fa-solid fa-play"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
//layout
definePageMeta({
  layout: "blank",
});
</script>
