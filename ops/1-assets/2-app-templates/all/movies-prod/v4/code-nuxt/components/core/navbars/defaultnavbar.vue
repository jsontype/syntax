<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="iq-menu-bt d-flex align-items-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle">
              <i class="las la-bars" />
            </div>
          </div>
          <div class="iq-navbar-logo d-flex justify-content-between">
            <nuxt-link :to="homeURL" class="header-logo">
              <img :src="logo" class="img-fluid rounded-normal" alt="logo">
              <div class="logo-title">
                <span class="text-primary text-uppercase">{{ appName }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="iq-search-bar ml-auto">
          <form action="#" class="searchbox">
            <input
              v-model="globalSearch"
              type="text"
              class="text search-input"
              style="cursor: pointer"
              placeholder="Search Here..."
              @click="openSearch"
            >
            <a class="search-link" href="#"><i class="ri-search-line" /></a>
          </form>
        </div>
        <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
          <i class="ri-menu-3-line" />
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <slot name="responsiveRight" />
        </b-collapse>
        <slot name="right" />
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { core } from '../../../assets/app/app'
export default {
  name: 'DefaultNavBar',
  props: {
    homeURL: { type: String, default: () => ('/backend/dashboard') },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    horizontal: { type: Boolean, default: false },
    items: { type: Array, default: null },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  data () {
    return {
      appName: 'STREAMIT',
      globalSearch: '',
      showSearch: false,
      showMenu: false
    }
  },
  mounted () {
    core.index()
    if (!this.horizontal) {
      document.addEventListener('click', this.closeSearch, true)
    }
  },
  methods: {
    miniSidebar () {
      const element = document.querySelector('#wrapper-menu')
      if (element.classList.contains('open')) {
        element.classList.remove('open')
        document.querySelector('body').classList.remove('sidebar-main')
      } else {
        element.classList.add('open')
        document.querySelector('body').classList.add('sidebar-main')
      }
    },
    openSearch () {
      this.showSearch = true
      this.showMenu = 'iq-show'
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null) {
        document.getElementById('searchbox-datalink').classList.add('show-data')
      }
    },
    closeSearch (event) {
      const classList = event.target.classList
      if (!classList.contains('searchbox') && !classList.contains('search-input')) {
        this.removeClass()
      }
    },
    removeClass () {
      this.showSearch = false
      this.showMenu = ''
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null && document.getElementById('searchbox-datalink') !== undefined) {
        document.getElementById('searchbox-datalink').classList.remove('show-data')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse-menu{
    @media (min-width:1300px) {
      display: none;
    }
  }
  .iq-sidebar-menu .iq-menu.hover-menu{
    display: flex;
    @media (max-width:1299px){
      display: none !important;
    }
  }
</style>
