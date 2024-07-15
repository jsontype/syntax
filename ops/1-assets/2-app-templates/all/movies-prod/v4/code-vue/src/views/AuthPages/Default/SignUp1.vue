<template>
<div :style= "`background: url(${require('@/assets/images/frontend/login/login1.jpg')});background-repeat: no-repeat; background-size: cover`" >
     <b-container class>
        <b-row class="justify-content-center align-items-center height-self-center ">
            <b-col lg="7" md="12" class="align-self-center form-padding">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data ">
                    <div class="sign-in-from w-100 m-auto">
                        <sign-up1-form ></sign-up1-form>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-center links">
                        Already have an account? <router-link to="/auth/sign-in1" class="text-primary ml-2">
                        Sign in
                      </router-link>
                      </div>
                  </div>
              </div>
            </b-col>
        </b-row>
     </b-container>
</div>
</template>
<script>

import SignUp1Form from './Forms/SignUp1Form'

export default {
  name: 'SignUp1',
  components: { SignUp1Form }
}
</script>
