<template>
  <div>
    <h6 class="d-inline-block mb-3 me-2">Page Style</h6>
  </div>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input
id="page-layout-boxed" input-class="btn-check" btn-name="page_layout"
      label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="pageLayout"
      value="container" @on-change="store.page_layout"> Boxed </radio-input>
    <radio-input
id="page-layout-full-width" input-class="btn-check" btn-name="page_layout"
      label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="pageLayout"
      value="container-fluid" @on-change="store.page_layout"> Full Width </radio-input>
  </div>
</template>
<script setup>
import { computed } from 'vue';

//pinia store
import { useSetting } from '@/store/pinia';
import RadioInput from '../../custom/elements/RadioInput.vue';

const store = useSetting();
const pageLayout = computed(() => store.page_layout_value)

</script>
