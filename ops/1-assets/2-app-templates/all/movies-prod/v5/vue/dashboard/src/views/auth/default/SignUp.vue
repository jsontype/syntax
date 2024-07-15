<template>
  <section class="sign-in-page" :style="{ 'background-image': 'url(' + generateImgPath('/assets/images/login/login.webp') + ')' }">
    <b-container>
      <b-row class="justify-content-center align-items-center height-self-center">
        <div class="align-self-center col-md-12 col-lg-7 form-padding">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <form action="/" class="">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.username') }}</label
                        ><input id="exampleInputEmail2" :placeholder="$t('authentication.enter_full_name')" autocomplete="off" required="" type="text" class="mb-0 form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.e_mail') }}</label
                        ><input id="exampleInputEmail3" :placeholder="$t('authentication.enter_email')" autocomplete="off" required="" type="email" class="mb-0 form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.first_name') }}</label
                        ><input id="exampleInputEmail4" :placeholder="$t('authentication.first_name')" autocomplete="off" required="" type="text" class="mb-0 form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.last_name') }}</label
                        ><input id="exampleInputEmail5" :placeholder="$t('authentication.last_name')" autocomplete="off" required="" type="email" class="mb-0 form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.password') }}</label
                        ><input id="exampleInputPassword6" :placeholder="$t('authentication.password')" required="" type="password" class="mb-0 form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">{{ $t('authentication.repeat_password') }}</label
                        ><input id="exampleInputPassword7" :placeholder="$t('authentication.password')" required="" type="password" class="mb-0 form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="form-check my-2">
                    <input id="customRadio1" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio1">{{ $t('authentication.premium') }}</label>
                  </div>
                  <div class="form-check">
                    <input id="customRadio2" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio2">{{ $t('authentication.basic') }}</label>
                  </div>
                  <div class="form-check">
                    <input id="customRadio3" type="radio" name="customRadio" class="form-check-input" /><label class="form-check-label" for="customRadio3">{{ $t('authentication.free-free') }}</label>
                  </div>
                  <button type="button" class="btn btn-btn btn-primary my-2">{{ $t('authentication.sign_up') }}</button>
                </form>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                {{ $t('authentication.already_have_an_account') }} <router-link to="/auth/login" class="text-primary ms-2">{{ $t('authentication.sign_in') }}</router-link>
              </div>
            </div>
          </div>
        </div>
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
