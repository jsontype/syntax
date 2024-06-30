<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6 col-sm-12 col-12 ">
        <div class="sign-user_card ">
          <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
              <img src="../../../assets/images/login/mail.png" width="80" alt="">
              <h3 class="mt-3 mb-0">
                Success !
              </h3>
              <p class="text-white">
                A email has been send to <a href="javascript:void(0)" class="__cf_email__" data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271"><nuxt-link to="/backend/dashboard">[email&#160;protected]</nuxt-link></a> Please check for an email from company and click on the included link to reset your password.
              </p>
              <div class="d-inline-block w-100">
                <nuxt-link to="/backend/dashboard" class="btn btn1 mt-3">
                  Back to Home
                </nuxt-link>
              </div>
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
  name: 'ConfirmMail1'
}
</script>
<style scoped>
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;font-size: 14px;
}
</style>
