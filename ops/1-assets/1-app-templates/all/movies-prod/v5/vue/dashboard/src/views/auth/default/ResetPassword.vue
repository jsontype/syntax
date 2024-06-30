<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">{{ $t('authentication.reset_password') }}</h3>
                <p class="text-body">{{ $t('authentication.email_address') }}</p>
                <b-form class="mt-4">
                  <b-form-group class="mb-3">
                    <b-form-input id="exampleInputEmail2" type="email" :placeholder="$t('authentication.enter_email')" autocomplete="off" required></b-form-input>
                  </b-form-group>
                  <div class="sign-info">
                    <button type="button" class="btn btn-btn btn-primary">{{ $t('authentication.reset') }}</button>
                  </div>
                </b-form>
              </div>
            </div>
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
