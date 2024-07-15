<template>
  <section
class="sign-in-page"
    :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <b-col lg="5" md="12" class="align-self-center form-padding">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h2 class="mb-2">{{ $t('authentication.account_de_activate') }}</h2>
                <p class="mt-2">{{ $t('authentication.details') }}</p>
                <b-form class="mt-4" action="/auth/login">
                  <b-form-group class="mt-3 form-group">
                    <label for="email">{{ $t('authentication.account_email') }}</label>
                    <b-form-input
id="email" type="email" aria-describedby="email"
                      :placeholder="$t('authentication.xyz@example')"></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <label for="name">{{ $t('authentication.account_username') }}</label>
                    <b-form-input
id="name" type="text" aria-describedby="name"
                      :placeholder="$t('authentication.xyz')"></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="primary" class="mt-4">{{ $t('authentication.de_activate')
                    }}</b-button>
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
<style lang="scss" scoped></style>
