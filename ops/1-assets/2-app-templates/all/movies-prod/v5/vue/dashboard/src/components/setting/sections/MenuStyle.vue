<template>
  <div>
    <h5 class="mt-4 mb-3">Menu Style</h5>
    <div class="d-grid gap-3 grid-cols-3 mb-4">
      <checkbox-input
id="sidebar-mini" btn-name="sidebar_type" :img-component="true" label-title="Mini"
        :default-checked="menuStyle" value="sidebar-mini" @on-change="store.sidebar_type">
        Mini
      </checkbox-input>
      <checkbox-input
id="sidebar-hover" btn-name="sidebar_type" :img-component="true" label-title="Hover"
        :default-checked="menuStyle" value="sidebar-hover" @on-change="store.sidebar_type"> Hover </checkbox-input>
      <checkbox-input
id="sidebar-soft" btn-name="sidebar_type" :img-component="true" label-title="Hover"
        :default-checked="menuStyle" value="sidebar-soft" @on-change="store.sidebar_type"> Soft </checkbox-input>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useSetting } from '@/store/pinia';
import CheckboxInput from '../../custom/elements/CheckboxInput.vue';
// import _ from 'lodash';
const store = useSetting();
const menuStyle = computed(() => store.sidebar_type_value)

</script>
