<template>
  <div class="bd-example">
    <div class="mb-3 form-floating custom-form-floating custom-form-floating-sm form-group">
      <b-form-input id="floatingInput11" type="email" class="form-control" placeholder="Place Holder" />
      <label for="floatingInput11">Small</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input id="floatingInput12" type="email" class="form-control" placeholder="Place Holder" />
      <label for="floatingInput12">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating custom-form-floating-lg form-group">
      <b-form-input id="floatingInput13" type="email" class="form-control" placeholder="Place Holder" />
      <label for="floatingInput13">Large</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input id="floatingInput14" type="email" class="form-control" disabled placeholder="Place Holder" />
      <label for="floatingInput14">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input id="floatingInput15" type="email" class="form-control" :state="true" placeholder="Place Holder" />
      <label for="floatingInput15">Regular</label>
    </div>
    <div class="mb-3 form-floating custom-form-floating form-group">
      <b-form-input id="floatingInput16" type="email" class="form-control" :state="false" placeholder="Place Holder" />
      <label for="floatingInput16">Regular</label>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
