<template>
  <aside id="first-tour" :class="`sidebar sidebar-base sidebar-default navs-rounded-all ${sidebarType.join(' ')} ${sidebarColor} ${sidebarMenuStyle}`" data-toggle="main-sidebar" data-sidebar="responsive">
    <div class="sidebar-header d-flex align-items-center justify-content-start">
      <router-link :to="{ name: 'dashboard.home' }" class="navbar-brand">
        <brand-logo />
      </router-link>
      <div class="sidebar-toggle" @click="toggleSidebarMini">
        <i class="chevron-right">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </i>
        <i class="chevron-left">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white" transform="rotate(180)">
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
      <slot name="profile-card"></slot>
      <div class="sidebar-list">
        <slot></slot>
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>

<script>
import { computed, onMounted } from 'vue';
import Scrollbar from 'smooth-scrollbar';

import { useSetting } from '@/store/pinia';

import BrandLogo from '../logo/BrandLogo.vue';
export default {
  setup() {
    // const onlyLogo = ref(true);

    const store = useSetting();
    const sidebarType = computed(() => store.sidebar_type_value);
    const sidebarColor = computed(() => [store.sidebar_color_value]);
    const sidebarMenuStyle = computed(() => [store.sidebar_menu_style_value]);

    const toggleSidebarMini = () => {
      document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini');
    };

    onMounted(() => {
      Scrollbar.init(document.querySelector('.data-scrollbar'), { continuousScrolling: false });
    });

    return {
      toggleSidebarMini,
      component: {
        BrandLogo,
      },
      sidebarType,
      sidebarColor,
      sidebarMenuStyle,
    };
  },
};
</script>
