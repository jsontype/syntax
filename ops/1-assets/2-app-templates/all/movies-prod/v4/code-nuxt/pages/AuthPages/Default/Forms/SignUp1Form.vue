<template>
  <form class="" action="index.html">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail2">Username</label>
          <input
            id="exampleInputEmail2"
            type="text"
            class="form-control mb-0 btn-border"
            placeholder="Enter Full Name"
            autocomplete="off"
            required
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail3">E-mail</label>
          <input
            id="exampleInputEmail3"
            type="email"
            class="form-control mb-0 btn-border"
            placeholder="Enter email"
            autocomplete="off"
            required
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail2">First Name</label>
          <input
            id="exampleInputEmail2"
            type="text"
            class="form-control mb-0 btn-border"
            placeholder="First Name"
            autocomplete="off"
            required
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail3">Last Name</label>
          <input
            id="exampleInputEmail3"
            type="text"
            class="form-control mb-0 btn-border"
            placeholder="Last Name"
            autocomplete="off"
            required
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputPassword2">Password</label>
          <input id="exampleInputPassword2" type="password" class="form-control mb-0 btn-border" placeholder="Password" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Repeat Password</label>
          <input id="exampleInputPassword2" type="password" class="form-control mb-0 btn-border" placeholder="Password" required>
        </div>
      </div>
    </div>
    <div class="custom-control custom-radio my-2">
      <input id="customRadio1" type="radio" name="customRadio" class="custom-control-input">
      <label class="custom-control-label" for="customRadio1">Premium-$39 / 3 Months
        with a 5 day free trial</label>
    </div>
    <div class="custom-control custom-radio my-2">
      <input id="customRadio2" type="radio" name="customRadio" class="custom-control-input">
      <label class="custom-control-label" for="customRadio2"> Basic- $19 / 1 Month</label>
    </div>
    <div class="custom-control custom-radio my-2">
      <input id="customRadio3" type="radio" name="customRadio" class="custom-control-input">
      <label class="custom-control-label" for="customRadio3">Free-Free</label>
    </div>

    <button type="submit" class="btn btn-hover btn-hover my-2">
      Sign Up
    </button>
  </form>
</template>

<script>
export default {
  name: 'SignUp1Form'
}
</script>
<style scoped>
.btn-hover { background: var(--iq-primary-hover); border: 1px solid var(--iq-primary-hover); color: var(--iq-white); transition: color 0.3s ease; display: inline-block; vertical-align: middle; -webkit-transform: perspective(1px) translateZ(0); transform: perspective(1px) translateZ(0); box-shadow: 0 0 1px rgba(0, 0, 0, 0); position: relative; border-radius: 5px; }
.btn-border{border: 1px solid #404043; border-radius: unset !important;}
</style>
