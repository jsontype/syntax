<template>
  <AccountLayout>
    <div class="row">
      <div class="col-md-6">
        <h4 class="mb-5 text-primary">{{ $t('shop.login') }}</h4>
        <form method="post" action="#">
          <div class="mb-4">
            <input type="text" name="user-name" class="form-control" :placeholder="$t('form.username_or_email')" required="" />
          </div>
          <div class="mb-4">
            <input type="password" name="pwd" class="form-control" :placeholder="$t('form.password')" required="" />
          </div>
          <label class="custom-form-field mb-5">
            <input type="checkbox" required="required" class="mr-2" />
            <span class="checkmark"></span>
            <span>{{ $t('shop.remember_me') }}</span>
          </label>
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('shop.login') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </form>
        <div class="mt-3">
          <div class="iq-button link-button">
            <a href="javascript:void(0)" class="btn text-capitalize position-relative">
              <span class="button-text">{{ $t('shop.lost_password') }}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4 class="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">{{ $t('shop.register') }}</h4>
        <form method="post" action="#">
          <div class="mb-4">
            <input type="text" name="user-name" :placeholder="$t('form.username')" class="form-control" required="" />
          </div>
          <div class="mb-4">
            <input type="email" name="email-address" :placeholder="$t('shop.email_address')" class="form-control" required="" />
          </div>
          <div class="mb-4">
            <input type="password" name="password" :placeholder="$t('form.password')" class="form-control" required="" />
          </div>
          <p class="mb-5">
            {{ $t('shop.user_personal_data') }} <router-link :to="{ name: 'landing-page.privacy-policy' }"> {{ $t('shop.privacy_policy') }}</router-link
            >.
          </p>
          <div class="iq-button">
            <a href="javascript:void(0)" class="btn text-uppercase position-relative">
              <span class="button-text">{{ $t('shop.register') }}</span>
              {{ '' }}
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
</script>
