<template>
  <div class="container">
    <div class="row justify-content-center align-items-center height-self-center">
      <div class="col-lg-5 col-md-12 align-self-center">
        <div class="sign-user_card ">
          <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
              <h3 class="mb-3">
                Reset Password
              </h3>
              <p class="text-color">
                Enter your email address and we'll send you an email with instructions to reset your password.
              </p>
              <form class="mt-4">
                <div class="form-group">
                  <input
                    id="exampleInputEmail2"
                    type="email"
                    class="form-control mb-0"
                    placeholder="Email address"
                    autocomplete="off"
                    required
                  >
                </div>
                <div class="d-flex justify-content-end">
                  <nuxt-link to="/AuthPages/Default/SignIn1" class="btn btn1">
                    Reset Password
                  </nuxt-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'AuthLayout',
  name: 'RecoverPassword1'
}
</script>
<style scoped>
.text-color{ color: white}
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;font-size: 14px;
}
</style>
