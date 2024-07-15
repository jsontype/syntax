<template>
  <div class="wrapper">
    <div class="pt-5 container vh-100">
      <div class="no-gutters height-self-center row h-100">
        <div class="col-sm-12 text-center align-self-center">
          <div class="iq-error position-relative">
            <img src="/assets/images/error/404.png" class="img-fluid iq-error-img" alt="" loading="lazy" />
            <h2 class="mb-0 mt-4">{{ $t('authentication.not_found') }}</h2>
            <p>{{ $t('authentication.requested_page') }}</p>
            <router-link class="btn btn-primary mt-3" to="/"><i class="ri-home-4-line"></i>{{ $t('authentication.back_to_home') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
