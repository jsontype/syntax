<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <div class="col-7">
          <h3 class="mb-4">Personal Information:</h3>
        </div>
        <div class="col-5">
          <h2 class="steps text-end fs-5">Step 2 - 4</h2>
        </div>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group class="mt-3 mt-md-0">
            <label for="input-2202" class="form-label">First Name: *</label>
            <b-form-input id="input-2202" type="text" class="form-control" name="fname" placeholder="First Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3 mt-md-0">
            <label for="input-2203" class="form-label">Last Name: *</label>
            <b-form-input id="input-2203" type="text" class="form-control" name="lname" placeholder="Last Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3">
            <label for="input-2204" class="form-label">Contact No.: *</label>
            <b-form-input id="input-2204" type="text" class="form-control" name="phno" placeholder="Contact No." />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group class="mt-3 mb-3">
            <label for="input-2205" class="form-label">Alternate Contact No.: *</label>
            <b-form-input id="input-2205" type="text" class="form-control" name="phno_2" placeholder="Alternate Contact No." />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <a href="#payment" class="btn btn-primary next action-button float-end" value="Next" @click="changeTab(3)">Next</a>
    <a href="#account" class="btn btn-dark previous action-button-previous float-end me-1" value="Previous" @click="changeTab(1)">Previous</a>
  </fieldset>
</template>
<script>
export default {
  name: 'PersonalComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
