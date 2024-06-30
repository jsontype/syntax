<template>
  <div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <nuxt-link :to="homeURL" class="header-logo">
        <img :src="logo" class="img-fluid" alt="logo">
        <span>{{ appName }}</span>
      </nuxt-link>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div id="wrapper-menu" class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle">
              <i class="las la-bars" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu" :class="horizontal ? 'd-xl-none' : ''">
        <CollapseMenu :items="items" :open="true" :horizontal="horizontal" :sidebar-group-title="sidebarGroupTitle" />
      </nav>
      <div class="p-3" />
    </div>
  </div>
  <!-- TOP Nav Bar -->
</template>

<script>
import CollapseMenu from '../../menus/CollapseMenu'
export default {
  name: 'Sidebar',
  components: {
    CollapseMenu
  },
  props: {
    homeURL: { type: String, default: () => ('/backend/dashboard') },
    items: { type: Array, default: null },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    horizontal: { type: Boolean },
    toggleButton: { type: Boolean, default: true },
    logoShow: { type: Boolean, default: true },
    onlyLogo: { type: Boolean, default: false },
    onlyLogoText: { type: Boolean, default: false },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  data () {
    return {
      appName: 'STREAMIT'
    }
  },
  mounted () {
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
    }
  }
}
</script>
