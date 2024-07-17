<template>
 <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6 col-sm-12 col-12 ">
        <div class="sign-user_card ">
          <div class="sign-in-page-data">
            <div class="sign-in-from w-100 m-auto">
              <img src="../../../assets/images/login/mail.png" width="80"  alt="">
                <h3 class="mt-3 mb-0">Success !</h3>
                <p class="text-white text1">A email has been send to <a href="/cdn-cgi/l/email-protection" class="__cf_email__ text-color" data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271">[email&#160;protected]</a> Please check for an email from company and click on the included link to reset your password.</p>
              <div class="d-inline-block w-100">
                  <!-- <router-link :to="{ name: 'dashboard.home-1' }" class="btn btn-hover mt-3">Back to Home</router-link> -->
                  <button type="submit" class="btn btn1" @click="$router.push({name: 'dashboard.home-1'})">Back to Home</button>
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
  name: 'ConfirmMail1'
}
</script>
<style scoped>
.text1{ font-size: 16px;}
.text-color{color: #e20e02!important}
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;font-size: 14px;
}
</style>
