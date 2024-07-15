<template>
  <div class="rtl-box">
    <a id="settingbutton" class=" btn-icon btn-setting" :class="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" data-bs-toggle="offcanvas" data-bs-target="#live-customizer" role="button" aria-controls="live-customizer">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 20 20" fill="white">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
      </svg>
    </a>
    <nav id="live-customizer" class="offcanvas live-customizer" :class="themeSchemeDirection !== 'ltr' ? 'offcanvas-start' : 'offcanvas-end'" tabindex="-1" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="live-customizer-label">
      <div class="offcanvas-header">
        <div class="d-flex align-items-center">
          <h5 id="live-customizer-label" class="offcanvas-title text-dark">{{ $t('setting.live_customizer') }}</h5>
        </div>
        <div class="d-flex gap-1 align-items-center">
          <button class="btn btn-icon text-primary" data-reset="settings" data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Reset All Settings" data-bs-original-title="Reset All Settings" @click="store.reset_state()">
            <span class="btn-inner">
              <i class="fa-solid fa-arrows-rotate"></i>
            </span>
          </button>
          <button type="button" class="btn btn-icon btn-close px-0 text-reset shadow-none text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div class="offcanvas-body pt-0">
        <div class="modes row row-cols-2 gx-2">
          <div class="col">
            <div data-setting="attribute" class="text-center w-100" @click="store.theme_scheme_direction('ltr')">
              <input id="theme-scheme-direction-ltr" type="radio" value="ltr" class="btn-check" name="theme_scheme_direction" data-prop="dir" :checked="store.theme_scheme_direction_value == 'ltr'" />
              <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-direction-ltr"> {{ $t('setting.ltr') }} </label>
            </div>
          </div>
          <div class="col">
            <div data-setting="attribute" class="text-center w-100" @click="store.theme_scheme_direction('rtl')">
              <input id="theme-scheme-direction-rtl" type="radio" value="rtl" class="btn-check" name="theme_scheme_direction" data-prop="dir" :checked="store.theme_scheme_direction_value == 'rtl'" />
              <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-direction-rtl"> {{ $t('setting.rtl') }} </label>
            </div>
          </div>
        </div>
        <div class="modes mt-3">
          <div class="color-customizer mb-3">
            <h6 class="mb-0 title-customizer">{{ $t('setting.color_customizer') }}</h6>
          </div>
          <div class="row row-cols-2 gx-2">
            <div class="col mb-3">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('dark')">
                <input id="theme-scheme-color-netflix" type="radio" value="dark" class="btn-check" name="theme_style_appearance" data-prop="data-bs-theme" :checked="store.theme_style_appearance_value == 'dark'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-netflix"> {{ $t('setting.netflix') }} </label>
              </div>
            </div>
            <div class="col mb-3">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('hotstar')">
                <input id="theme-scheme-color-hotstar" type="radio" value="hotstar" class="btn-check" name="theme_style_appearance" data-prop="data-bs-theme" :checked="store.theme_style_appearance_value == 'hotstar'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-hotstar"> {{ $t('setting.hotstar') }} </label>
              </div>
            </div>
            <div class="col">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('amazonprime')">
                <input id="theme-scheme-color-prime" type="radio" value="amazonprime" class="btn-check" name="theme_style_appearance" data-prop="data-bs-theme" :checked="store.theme_style_appearance_value == 'amazonprime'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-prime"> {{ $t('setting.prime') }} </label>
              </div>
            </div>
            <div class="col">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('hulu')">
                <input id="theme-scheme-color-hulu" type="radio" value="hulu" class="btn-check" name="theme_style_appearance" data-prop="data-bs-theme" :checked="store.theme_style_appearance_value == 'hulu'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-hulu"> {{ $t('setting.hulu') }} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useSetting } from '../store/setting';
import { ref, computed, watch } from 'vue';
const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
const render = ref(true);
watch(
  () => themeSchemeDirection.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);
</script>
