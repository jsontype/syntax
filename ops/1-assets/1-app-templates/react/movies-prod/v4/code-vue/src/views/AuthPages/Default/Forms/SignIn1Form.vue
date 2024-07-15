<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="email" name="E-mail" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <input type="email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="emailInput" aria-describedby="emailHelp"
                 v-model="user.email" placeholder="Enter email" required
                 class="form_1">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="password"  :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="passwordInput"
                 v-model="user.password" placeholder="Password" required
                 class="form_1">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="sign-info">
         <button type="submit" class="btn btn1">Sign in</button>
          <div class="custom-control custom-checkbox d-inline-block">
            <input type="checkbox" class="custom-control-input" :id="formType">
            <label class="custom-control-label text-white" :for="formType">Remember Me</label>
          </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SignIn1Form',
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  mounted () {
    this.user.email = this.$props.email
    this.user.password = this.$props.password
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
  }
}
</script>
<style scoped>
.form_1{
  border: none !important;
  border-radius: 5px !important;
  font-size: 16px !important;
}
.btn1{
  border: none;border-radius: 5px !important;background-color: #e20e02 !important;color: white;
}
</style>
