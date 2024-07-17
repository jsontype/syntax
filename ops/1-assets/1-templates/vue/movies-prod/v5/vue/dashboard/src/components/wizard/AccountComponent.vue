<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <div class="col-7">
          <h3 class="mb-4">Account Information:</h3>
        </div>
        <div class="col-5">
          <h2 class="steps text-end fs-5">Step 1 - 4</h2>
        </div>
      </b-row>
      <b-form-group>
        <b-row class="align-items-center">
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">Email: *</label>
              <b-form-input id="input-2202" type="email" name="email" placeholder="Email Id"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">Username: *</label>
              <b-form-input id="input-2202" type="text" name="uname" placeholder="UserName"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">Password: *</label>
              <b-form-input id="input-2202" type="password" name="new-password" placeholder="Password"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group class="mb-3">
              <label for="input-2202" class="form-label">Confirm Password: *</label>
              <b-form-input id="input-2202" type="password" name="confirm-new-password" placeholder="Confirm Password"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form-group>
    </div>
    <a href="#personal" class="btn btn-primary next action-button float-end" value="Next" @click="changeTab(2)">Next</a>
  </fieldset>
</template>
<script>
export default {
  name: 'AccountComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
