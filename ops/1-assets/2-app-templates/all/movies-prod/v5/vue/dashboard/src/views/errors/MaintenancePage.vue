<template>
  <div class="wrapper">
    <div class="mt-0 iq-maintenance">
      <div class="p-0 container-fluid">
        <div class="row no-gutters">
          <div class="col-sm-12 text-center">
            <div class="">
              <img src="/assets/images/error/02.png" class="img-fluid" alt="" loading="lazy" />
              <h3 class="mt-4 mb-1">{{ $t('authentication.performing_maintenance') }}</h3>
              <p>{{ $t('authentication.back_in_somtime') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-lg-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="ri-3x text-primary">
                  <i class="fa-regular fa-window-maximize"></i>
                </i>
                <h5 class="card-title mt-1">{{ $t('authentication.why_down') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="ri-3x text-primary">
                  <i class="fa-regular fa-clock"></i>
                </i>
                <h5 class="card-title mt-1">{{ $t('authentication.what_is_down') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="ri-3x text-primary"> <i class="fa-solid fa-circle-info"></i></i>

                <h5 class="card-title mt-1">{{ $t('authentication.do_you_need_support') }}</h5>
                <p class="mb-0">{{ $t('authentication.why_down_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
