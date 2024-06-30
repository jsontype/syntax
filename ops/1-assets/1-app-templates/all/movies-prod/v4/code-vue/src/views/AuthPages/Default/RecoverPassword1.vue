<template>
      <div class="container">
        <div class="row justify-content-center align-items-center height-self-center">
            <div class="col-md-6 col-sm-12 col-12">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-1">Reset Password</h3>
                        <p class="text-color">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form class="mt-4">
                          <div class="form-group">
                            <input type="email" class="form-control mb-0 form1 text-size" id="exampleInputEmail2" placeholder="Email address" autocomplete="off" required>
                          </div>
                          <div class="sign-info d-flex justify-content-end">
                            <router-link to="/auth/sign-in1" class="btn btn1">Reset Password</router-link>
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
  name: 'RecoverPassword1'
}
</script>
<style scoped>
.text-color{ color: white}
.text-size{font-size: 16px;}
.form1{ border: none; border-radius: 5px; }
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;font-size: 14px;
}
</style>
