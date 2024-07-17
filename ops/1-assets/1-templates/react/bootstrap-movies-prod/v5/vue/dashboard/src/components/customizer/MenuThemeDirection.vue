<template>
  <b-dropdown class="nav-item" variant="none p-0" no-caret>
    <template #button-content>
      <a id="langues-drop" href="#" class="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
        <svg class="icon-24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"></path>
        </svg>
      </a>
    </template>
    <div class="dropdown-menu-end">
      <li data-setting="attribute">
        <b-dropdown-item class="d-flex align-items-center" variant="none">
          <div iid="theme-scheme-direction-ltr" btn-name="theme_scheme_direction" :img-component="true" label-title="LTR" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" :default-checked="themeSchemeDirection" value="ltr" @on-change="store.theme_scheme_direction" />
          <label class="d-block" for="theme-scheme-direction-ltr">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9702 19.757L15.3502 5.27201C15.1884 4.62224 14.8136 4.04541 14.2856 3.63359C13.7576 3.22177 13.1068 2.99871 12.4372 3.00001H11.5602C10.8911 2.99938 10.2411 3.22275 9.71368 3.63452C9.18629 4.04628 8.81191 4.62274 8.65022 5.27201L5.03022 19.757C4.9679 20.0135 5.00954 20.2843 5.14605 20.5102C5.28257 20.7362 5.50288 20.899 5.75895 20.9631C6.01502 21.0273 6.28606 20.9875 6.51297 20.8527C6.73988 20.7178 6.90424 20.4986 6.97022 20.243L8.28022 15H15.7202L17.0302 20.243C17.0962 20.4986 17.2606 20.7178 17.4875 20.8527C17.7144 20.9875 17.9854 21.0273 18.2415 20.9631C18.4976 20.899 18.7179 20.7362 18.8544 20.5102C18.9909 20.2843 19.0325 20.0135 18.9702 19.757V19.757ZM8.78022 13L10.5912 5.75801C10.6449 5.5414 10.7696 5.34903 10.9454 5.21163C11.1213 5.07423 11.3381 4.99972 11.5612 5.00001H12.4392C12.6624 4.99972 12.8792 5.07423 13.055 5.21163C13.2308 5.34903 13.3556 5.5414 13.4092 5.75801L15.2192 13H8.78022Z" fill="currentColor"></path>
            </svg>
            <span class="ms-2 mb-0"> LTR </span>
          </label>
        </b-dropdown-item>
      </li>
      <li data-setting="attribute">
        <b-dropdown-item class="d-flex align-items-center" variant="none">
          <div iid="theme-scheme-direction-rtl" btn-name="theme_scheme_direction" :img-component="true" label-title="RTL" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" :default-checked="themeSchemeDirection" value="rtl" @on-change="store.theme_scheme_direction" />
          <label class="d-block" for="theme-scheme-direction-rtl">
            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C10.08 4 8.5 5.58 8.5 7.5C8.5 8.43 8.88 9.28 9.5 9.91C7.97 10.91 7 12.62 7 14.5C7 17.53 9.47 20 12.5 20C14.26 20 16 19.54 17.5 18.66L16.5 16.93C15.28 17.63 13.9 18 12.5 18C10.56 18 9 16.45 9 14.5C8.99823 13.7298 9.2513 12.9806 9.71978 12.3692C10.1883 11.7578 10.8458 11.3186 11.59 11.12L16.8 9.72L16.28 7.79L11.83 9C11.08 8.9 10.5 8.28 10.5 7.5C10.5 6.66 11.16 6 12 6C12.26 6 12.5 6.07 12.75 6.2L13.75 4.47C13.22 4.16 12.61 4 12 4Z" fill="currentColor"></path>
            </svg>
            <span class="ms-2 mb-0"> RTL </span>
          </label>
        </b-dropdown-item>
      </li>
    </div>
  </b-dropdown>
</template>
<script setup>
import { computed } from 'vue';

//pinia store
import { useSetting } from '@/store/pinia';

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
</script>
<style scoped>
.dropdown-menu-end {
  right: 0;
  left: auto;
}
</style>
