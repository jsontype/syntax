<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Default Validation</h4>
      </div>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
      <form @submit.prevent="formSubmit">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="validationDefault01">First name</label>
            <input id="validationDefault01" type="text" class="form-control" required="" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="validationDefault02">Last name</label>
            <input id="validationDefault02" type="text" class="form-control" required="" />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="form-group input-group">
              <span id="basic-addon1" class="input-group-text">@</span>
              <input id="validationCustomUsername" type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" required="" />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="validationDefault03">City</label>
            <input id="validationDefault03" type="text" class="form-control" required="" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="validationDefault04">State</label>
            <select id="validationDefault04" class="form-select" required="">
              <option selected="" disabled="" value="">Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="validationDefault05">Zip</label>
            <input id="validationDefault05" type="text" class="form-control" required="" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input id="invalidCheck2" class="form-check-input" type="checkbox" value="" required="" />
            <label class="form-check-label" for="invalidCheck2"> Agree to terms and conditions </label>
          </div>
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formSubmit = () => {};
</script>
