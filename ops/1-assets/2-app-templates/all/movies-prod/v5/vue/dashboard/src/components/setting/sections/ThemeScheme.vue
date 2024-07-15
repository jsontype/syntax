<template>
  <h5 class="mb-3">Theme</h5>
  <radio-input
id="color-mode-light" btn-name="theme_scheme" class-name="form-check mb-3 w-100"
    input-class="form-check-input custum-redio-btn"
    label-class="form-check-label d-flex align-items-center justify-content-between" :default-checked="themeScheme"
    value="light" @on-change="store.theme_scheme">
    <span>Light Theme</span>
    <div class="text-primary">
      <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="white"></rect>
        <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
        <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
        <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="#DADCE0" stroke-width="0.75"></rect>
      </svg>
    </div>
  </radio-input>
  <radio-input
id="color-mode-dark" btn-name="theme_scheme" class-name="form-check mb-3 w-100"
    input-class="form-check-input custum-redio-btn"
    label-class="form-check-label d-flex align-items-center justify-content-between" :default-checked="themeScheme"
    value="dark" @on-change="store.theme_scheme">
    <span>Dark Theme</span>
    <div class="text-primary">
      <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="#1E2745"></rect>
        <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
        <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
        <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="currentColor" stroke-width="0.75">
        </rect>
      </svg>
    </div>
  </radio-input>
  <radio-input
id="color-mode-auto" btn-name="theme_scheme" class-name="form-check mb-3 w-100"
    input-class="form-check-input custum-redio-btn"
    label-class="form-check-label d-flex align-items-center justify-content-between" :default-checked="themeScheme"
    value="auto" @on-change="store.theme_scheme">
    <span>Device Default</span>
    <div class="Device Default">
      <svg class="rounded" width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="#1E2745"></rect>
        <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
        <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
        <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        <g clip-path="url(#clip0_507_92)">
          <rect width="30" height="27" fill="white"></rect>
          <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
          <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
          <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        </g>
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="#DADCE0" stroke-width="0.75"></rect>
        <defs>
          <clipPath id="clip0_507_92">
            <rect width="30" height="27" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  </radio-input>
</template>
<script setup>
import { computed } from 'vue';
import { useSetting } from '@/store/pinia';
import RadioInput from '../../custom/elements/RadioInput.vue';

const store = useSetting();
const themeScheme = computed(() => store.theme_scheme_value)
// const themeSchemeDirection = computed(() => store.theme_scheme_direction_value)

</script>
