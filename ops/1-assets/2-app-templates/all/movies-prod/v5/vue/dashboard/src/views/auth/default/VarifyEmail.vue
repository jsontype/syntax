<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container class="h-100">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col md="6" sm="12" class="col-12">
          <div class="sign-user_card">
            <b-card-body>
              <div class="sign-in-from w-100 m-auto">
                <b-img src="/assets/images/login/mail.png" width="80" alt=""></b-img>
                <h3 class="mt-3 mb-0 text-gray">{{ $t('authentication.success') }}</h3>
                <p class="text-gray">{{ $t('authentication.email_send') }} <router-link to="" tabindex="0" href="/cdn-cgi/l/email-protection" data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271" class="__cf_email__ bg-dark border-0 p-0 btn btn-primary">[email&nbsp;protected]</router-link> {{ $t('authentication.email_check') }}</p>
                <div class="d-inline-block w-100">
                  <router-link to="/" class="btn btn-primary mt-3">{{ $t('authentication.back_to_home') }}</router-link>
                </div>
              </div>
            </b-card-body>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>

<style lang="scss" scoped></style>
