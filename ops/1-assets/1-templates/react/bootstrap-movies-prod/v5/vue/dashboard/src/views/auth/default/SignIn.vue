<template>
  <section
class="sign-in-page"
    :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <b-form class="" action="/auth/login">
                  <h3 class="text-center">{{ $t('authentication.sign_in') }}</h3>
                  <b-form-group class="mt-3">
                    <b-form-input
id="exampleInputEmail2" type="email" class="mb-0 mt-2"
                      :placeholder="$t('authentication.enter_email')" autocomplete="off" required></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
id="exampleInputPassword2" type="password" class="mb-0 mt-3"
                      :placeholder="$t('authentication.password')" required></b-form-input>
                  </b-form-group>
                  <div class="sign-info d-flex justify-content-between align-items-center">
                    <button type="submit" class="btn btn-primary mt-3">{{ $t('authentication.sign_in') }}</button>
                    <div class="custom-control custom-checkbox d-inline-block">
                      <input id="customCheck" type="checkbox" class="form-check-input mx-2" /><label
                        class="form-check-label" for="customCheck">{{ $t('authentication.remember_me') }}</label>
                    </div>
                  </div>
                </b-form>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                {{ $t('authentication.dont_have_an_account') }} <router-link
to="/auth/register"
                  class="text-primary ms-2">{{ $t('authentication.sign_up') }}</router-link>
              </div>
              <div class="d-flex justify-content-center links">
                <router-link to="/auth/reset-password" class="f-link">{{ $t('authentication.forgot_your_password')
                  }}</router-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- Sign in END -->
    </b-container>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>

<style lang="scss" scoped></style>
