<template>
  <default-navbar @menu-open="showOffcanvas" @menu-close="hideOffcanvas">
    <template #navbar-buttons-start>
      <!-- Extra Actions -->
    </template>
    <router-link :to="{ name: 'dashboard.home' }" class="navbar-brand">
      <brand-logo :color="true" />
      <!-- <h4 class="logo-title d-block d-xl-none" data-setting="app_name"><brand-name></brand-name></h4> -->
    </router-link>
    <div class="sidebar-toggle" @click="toggleSidebarMini">
      <i class="icon d-flex">
        <svg class="icon-20" width="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
        </svg>
      </i>
    </div>
    <div class="d-flex align-items-center justify-content-between product-offcanvas">
      <div class="breadcrumb-title border-end pe-3 d-none d-xl-block">
        <small class="mb-0 text-capitalize">{{ $route.meta.name }}</small>
      </div>
      <b-offcanvas id="offcanvass" v-model="responsiveNav" title=""
        :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" class="shadow-none iq-product-menu-responsive"
        bs-offcanvas-zindex="100">
        <horizontal-nav></horizontal-nav>
      </b-offcanvas>
      <div class="d-none d-xl-block">
        <horizontal-nav></horizontal-nav>
      </div>
    </div>
  </default-navbar>
</template>
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import DefaultNavbar from '../custom/navbar/DefaultNavbar.vue';
import HorizontalNav from './HorizontalNav.vue';
import { useSetting } from '@/store/pinia';
export default {
  components: {
    DefaultNavbar,
    HorizontalNav,
  },
  props: {
    fullsidebar: { type: Boolean, default: false },
  },
  setup() {
    const store = useSetting();
    const themeSchemeDirection = computed(() => store.theme_scheme_direction);
    const fullScreen = ref(false);
    const isHidden = ref(false);

    const responsiveNav = ref(false);

    const showOffcanvas = () => {
      responsiveNav.value = true;
    };

    const hideOffcanvas = () => {
      responsiveNav.value = false;
    };

    const openFullScreen = () => {
      if (fullScreen.value) {
        fullScreen.value = false;
        document.exitFullscreen();
      } else {
        fullScreen.value = true;
        document.documentElement.requestFullscreen();
      }
    };

    const toggleSidebarMini = () => {
      document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini');
    };

    // const toggleSidebarMini = () => {
    //   const elementsWithSidebarMini = document.querySelectorAll('.sidebar-mini');

    //   elementsWithSidebarMini.forEach((element) => {
    //     element.classList.remove('sidebar-mini');
    //   });
    // };

    const onscroll = () => {
      const yOffset = document.documentElement.scrollTop;
      const navbar = document.querySelector('.navs-sticky');
      if (navbar !== null) {
        if (yOffset >= 100) {
          navbar.classList.add('menu-sticky');
        } else {
          navbar.classList.remove('menu-sticky');
        }
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', onscroll());
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onscroll());
    });
    return {
      themeSchemeDirection,
      openFullScreen,
      toggleSidebarMini,
      fullScreen,
      isHidden,
      responsiveNav,
      showOffcanvas,
      hideOffcanvas,
    };
  },
};
</script>
<style>
.iq-product-menu-responsive .offcanvas-header {
  display: none;
}

#offcanvass {
  z-index: 100 !important;
}
</style>
