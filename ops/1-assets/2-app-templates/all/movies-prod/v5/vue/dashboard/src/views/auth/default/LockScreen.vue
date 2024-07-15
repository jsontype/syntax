<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <div class="container h-100">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col md="6" sm="12" class="col-12">
          <div class="sign-user_card">
            <div class="card-body">
              <div class="sign-in-from w-100 m-auto">
                <h4 class="mt-3 mb-0 text-center">{{ $t('authentication.michael_smith') }}</h4>
                <p class="text-white text-center">{{ $t('authentication.admin_password') }}</p>
                <form class="mt-4">
                  <div class="form-group">
                    <input id="exampleInputEmail2" type="email" class="form-control mb-0" :placeholder="$t('authentication.password')" autocomplete="off" required />
                  </div>
                  <div class="d-inline-block w-100 d-flex justify-content-start">
                    <router-link to="/auth/login" class="btn btn-primary float-right">{{ $t('authentication.log_in') }}</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script setup>
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
