<template>
 <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6 col-sm-12 col-12 ">
          <div class="sign-user_card ">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                  <h4 class="mt-3 text-white mb-1 text-center text-size">Hi ! Michael Smith</h4>
                  <p class="text-white text-center textsize">Enter your password to access the admin.</p>
                  <form class="mt-4">
                    <div class="form-group">
                      <input type="email" class="form-control mb-0 border1 textsize" id="exampleInputEmail2" placeholder="Password" autocomplete="off" required>
                    </div>
                    <div class="d-inline-block w-100">
                        <router-link to="/auth/sign-in1" class="btn btn1 float-right">Log In</router-link>
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
  name: 'LockScreen1'
}
</script>
<style scoped>
.text-size{font-size: 22px;}
.textsize{font-size: 16px;}
.border1{ border: none; border-radius: 5px; }
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;font-size: 14px;
}
</style>
