<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Custom Validation</h4>
      </div>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
      <form :class="`row g-3 needs-validation ${valid ? 'was-validated' : ''}`" novalidate="" @submit.prevent="formSubmit">
        <b-col md="6">
          <label for="validationCustom01" class="form-label">First name</label>
          <input id="validationCustom01" type="text" class="form-control" required="" />
          <div class="valid-feedback">Looks good!</div>
        </b-col>
        <b-col md="6">
          <label for="validationCustom02" class="form-label">Last name</label>
          <input id="validationCustom02" type="text" class="form-control" required="" />
          <div class="valid-feedback">Looks good!</div>
        </b-col>
        <b-col md="6">
          <label for="validationCustomUsername01" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span id="inputGroupPrepend" class="input-group-text">@</span>
            <input id="validationCustomUsername01" type="text" class="form-control" aria-describedby="inputGroupPrepend" required="" />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </b-col>
        <b-col md="6">
          <label for="validationCustom03" class="form-label">City</label>
          <input id="validationCustom03" type="text" class="form-control" required="" />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </b-col>
        <b-col md="6">
          <label for="validationCustom04" class="form-label">State</label>
          <select id="validationCustom04" class="form-select" required="">
            <option selected="" disabled="" value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </b-col>
        <b-col md="6">
          <label for="validationCustom05" class="form-label">Zip</label>
          <input id="validationCustom05" type="text" class="form-control" required="" />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </b-col>
        <div class="col-12">
          <div class="form-check">
            <input id="invalidCheck" class="form-check-input" type="checkbox" value="" required="" />
            <label class="form-check-label" for="invalidCheck"> Agree to terms and conditions </label>
            <div class="invalid-feedback">You must agree before submitting.</div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
export default {
  setup() {
    const v = useVuelidate();
    return {
      v,
    };
  },
  data() {
    return {
      valid: false,
      form: {
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
      },
    };
  },
  validations() {
    return {
      form: {
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        username: {
          required,
        },
        city: {
          required,
        },
        state: {
          required,
        },
        zip: {
          required,
        },
        agree: {
          required,
        },
      },
    };
  },
  methods: {
    async formSubmit() {
      this.valid = true;
      const result = await this.v.$validate();
      if (result) {
        // this.valid = true
      }
    },
  },
};
</script>
