<template>
  <h6 class="mt-4 mb-3">Menu Color</h6>
  <div class="d-grid gap-3 grid-cols-3 mb-3">
    <radio-input
id="sidebar-white" tooltip="White Menu" btn-name="sidebar_color" input-class="btn-check"
      label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarcolor"
      value="sidebar-white" @on-change="store.sidebar_color"> Default </radio-input>
    <radio-input
id="sidebar-dark" tooltip="Dark Menu" btn-name="sidebar_color" input-class="btn-check"
      label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarcolor"
      value="sidebar-dark" @on-change="store.sidebar_color"> Dark </radio-input>
    <radio-input
id="sidebar-color" btn-name="sidebar_color" input-class="btn-check"
      label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarcolor"
      tooltip="Colored Menu" value="sidebar-color" @on-change="store.sidebar_color"> Color </radio-input>
  </div>
</template>
<script setup>
import { computed } from 'vue';

//pinia store
import { useSetting } from '@/store/pinia';
import RadioInput from '../../custom/elements/RadioInput.vue';
const store = useSetting();
const sidebarcolor = computed(() => store.sidebar_color_value);
</script>
