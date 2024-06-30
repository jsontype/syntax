<template>
  <div class="bd-example">
    <b-form-input class="form-group form-group-filled" placeholder="Enter Text"></b-form-input>
    <b-input-group class="form-group form-group-filled" prepend="@">
      <b-form-input placeholder="Addon"></b-form-input>
    </b-input-group>
    <b-input-group class="form-group form-group-filled" append="@">
      <b-form-input placeholder="Addon"></b-form-input>
    </b-input-group>
    <div class="form-group form-group-filled">
      <b-form-input id="input-valid6" :state="true" placeholder="Enter text"></b-form-input>
    </div>
    <div class="form-group form-group-filled">
      <b-form-input id="input-invalid5" :state="false" placeholder="Enter text"></b-form-input>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
