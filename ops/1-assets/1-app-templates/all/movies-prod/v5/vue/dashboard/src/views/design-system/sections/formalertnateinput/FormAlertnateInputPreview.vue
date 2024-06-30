<template>
  <div class="bd-example">
    <b-form-input class="form-group form-group-alt" placeholder="Enter text"></b-form-input>
    <b-input-group class="form-group form-group-alt" prepend="@">
      <b-form-input placeholder="Addon"></b-form-input>
    </b-input-group>
    <b-input-group class="form-group form-group-alt" append="@">
      <b-form-input placeholder="Addon"></b-form-input>
    </b-input-group>
    <div class="form-group form-group-alt">
      <b-form-input id="input-valid" :state="true" placeholder="Enter text"></b-form-input>
    </div>
    <div class="form-group form-group-alt">
      <b-form-input id="input-invalid4" :state="false" placeholder="Enter text"></b-form-input>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
