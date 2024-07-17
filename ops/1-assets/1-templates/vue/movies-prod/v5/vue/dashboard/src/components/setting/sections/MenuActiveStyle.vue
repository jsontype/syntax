<template>
  <div class="mb-4">
    <h5 class="mt-4 mb-3">Active Menu Style</h5>
    <div class="d-grid gap-3 grid-cols-2">
      <radio-input
id="navs-rounded" btn-name="sidebar_menu_style" :img-component="true" class-name="text-center"
        input-class="btn-check" label-class="btn btn-border btn-setting-panel d-block overflow-hidden"
        label-title="Rounded One Side" :default-checked="sidebarMenuStyle" value="sidebar-default navs-rounded"
        @on-change="store.sidebar_menu_style"> Rounded One </radio-input>
      <radio-input
id="navs-rounded-all" btn-name="sidebar_menu_style" :img-component="true" label-title="Rounded All"
        class-name="text-center" input-class="btn-check"
        label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarMenuStyle"
        value="sidebar-default navs-rounded-all" @on-change="store.sidebar_menu_style"> Rounded All </radio-input>
      <radio-input
id="navs-pill" btn-name="sidebar_menu_style" :img-component="true" label-title="Pill One Side"
        class-name="text-center" input-class="btn-check"
        label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarMenuStyle"
        value="sidebar-default navs-pill" @on-change="store.sidebar_menu_style"> Pill One Side </radio-input>
      <radio-input
id="navs-pill-all" btn-name="sidebar_menu_style" :img-component="true" label-title="Pill All"
        class-name="text-center" input-class="btn-check"
        label-class="btn btn-border btn-setting-panel d-block overflow-hidden" :default-checked="sidebarMenuStyle"
        value="sidebar-default navs-pill-all" @on-change="store.sidebar_menu_style"> Pill All </radio-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';

//pinia store
import { useSetting } from '@/store/pinia';

import RadioInput from '../../custom/elements/RadioInput.vue';
export default {
  name: 'MenuActiveStyle',
  components: {
    RadioInput,
  },
  setup() {
    const store = useSetting();
    const sidebarMenuStyle = computed(() => store.sidebar_menu_style_value)

    return {
      sidebarMenuStyle,
      store
    };
  },
};
</script>
