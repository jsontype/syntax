<template>
  <div class="wrapper">
    <div class="pt-5 container vh-100">
      <div class="no-gutters height-self-center row h-100">
        <div class="text-center align-self-center col-sm-12">
          <div class="iq-error position-relative">
            <img src="/assets/images/error/500.png" class="img-fluid iq-error-img" alt="" loading="lazy" />
            <h1 class="text-in-box">500</h1>
            <h2 class="mb-0">{{ $t('authentication.not_working') }}</h2>
            <p>{{ $t('authentication.requested_server_error') }}</p>
            <router-link class="btn btn-primary mt-3" to="/"><i class="ri-home-4-line"></i>{{ $t('authentication.back_to_home') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
