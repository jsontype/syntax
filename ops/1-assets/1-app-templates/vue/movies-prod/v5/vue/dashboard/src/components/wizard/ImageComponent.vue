<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <div class="col-7">
          <h3 class="mb-4">Image Upload:</h3>
        </div>
        <div class="col-5">
          <h2 class="steps text-end fs-5">Step 3 - 4</h2>
        </div>
      </b-row>
      <div class="form-group">
        <label class="form-label">Upload Your Photo:</label>
        <input type="file" class="form-control" name="pic" accept="image/*" />
      </div>
      <div class="form-group">
        <label class="form-label">Upload Signature Photo:</label>
        <input type="file" class="form-control" name="pic-2" accept="image/*" />
      </div>
    </div>
    <a href="#" class="btn btn-primary next action-button float-end" value="Submit" @click="changeTab(4)">Submit</a>
    <a href="#" class="btn btn-dark previous action-button-previous float-end me-1" value="Previous" @click="changeTab(2)">Previous</a>
  </fieldset>
</template>
<script>
export default {
  name: 'ImageComponent',
  emits: ['onClick'],
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value);
    };
    return { props, changeTab };
  },
};
</script>
