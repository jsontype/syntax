<template>
  <div :style= "`background: url(${require('@/assets/images/frontend/login/login1.jpg')});background-repeat: no-repeat; background-size: cover`" >
     <b-container>
        <b-row class="justify-content-center align-items-center height-self-center">
            <b-col lg="5" md="12" class="align-self-center">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3 text-center">Sign in</h3>
                        <sign-in1-form formType="jwt" class="form1"></sign-in1-form>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-center links">
                      Don't have an account?
                    <router-link to="/auth/sign-up1" class="text-primary ml-2">
                      Sign Up
                    </router-link>
                    </div>
                    <div class="d-flex justify-content-center links">
                        <router-link  to="/auth/password-reset1" class="text-primary f-link">Forgot your password?</router-link>
                    </div>
                  </div>
              </div>
            </b-col>
        </b-row>
     </b-container>
  </div>
</template>

<script>
import SignIn1Form from './Forms/SignIn1Form'

export default {
  name: 'SignIn1',
  components: { SignIn1Form },
  data: () => ({}),
  mounted () {
    const loggedIn = localStorage.getItem('access_token')
    if (loggedIn !== undefined && loggedIn !== null) {
      this.$router.push({ name: 'mini.dashboard.home-2' })
    }
  },
  methods: {
  }
}
</script>
