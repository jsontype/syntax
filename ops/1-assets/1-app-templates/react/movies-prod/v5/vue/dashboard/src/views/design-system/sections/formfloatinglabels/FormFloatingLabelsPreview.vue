s
<template>
  <div class="bd-example">
    <b-form>
      <div class="mb-3 form-floating">
        <b-form-input id="floatingInput1" type="email" class="form-control" placeholder="name@example.com" />
        <label for="floatingInput1">Email address</label>
      </div>
      <div class="mb-3 form-floating">
        <b-form-input id="floatingPassword" type="password" class="form-control" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="mb-3 form-floating form-group">
        <b-form-input id="floatingInput2" type="email" class="form-control" disabled placeholder="Place Holder" />
        <label for="floatingInput2">Regular</label>
      </div>
      <div class="mb-3 form-floating form-group">
        <b-form-input id="floatingInput3" type="email" class="form-control" :state="true" placeholder="Place Holder" />
        <label for="floatingInput3">Regular</label>
      </div>
      <div class="form-floating form-group">
        <b-form-input id="floatingInput4" type="email" class="form-control" :state="false" placeholder="Place Holder" />
        <label for="floatingInput4">Regular</label>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
