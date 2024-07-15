<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="iq-menu-bt d-flex align-items-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle"><i class="las la-bars"></i></div>
          </div>
          <div class="iq-navbar-logo d-flex justify-content-between">
            <router-link :to="homeURL" class="header-logo">
              <img :src="logo" class="img-fluid rounded-normal" alt="logo">
              <div class="logo-title">
                <span class="text-primary text-uppercase">{{ appName }}</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="iq-search-bar ml-auto">
          <form action="#" class="searchbox">
            <input type="text" class="text search-input" style="cursor: pointer" @click="openSearch" v-model="globalSearch"
                    placeholder="Search Here...">
            <a class="search-link" href="#"><i class="ri-search-line"></i></a>
          </form>
        </div>
        <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
          <i class="ri-menu-3-line"></i>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <slot name="responsiveRight"/>
        </b-collapse>
        <slot name="right"/>
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { APPLOGONAME } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultNavBar',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home-1' }) },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    horizontal: { type: Boolean, default: false },
    items: { type: Array },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  mounted () {
    if (!this.horizontal) {
      document.addEventListener('click', this.closeSearch, true)
    }
  },
  computed: {
    ...mapGetters({
      bookmark: 'Setting/bookmarkState'
    })
  },
  data () {
    return {
      appName: APPLOGONAME,
      globalSearch: '',
      showSearch: false,
      showMenu: false
    }
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
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
