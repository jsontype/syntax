<template>
  <!-- TOP Nav Bar -->
  <header id="main-header">
    <div class="main-header">
      <b-container fluid>
        <b-row>
          <b-col sm="12">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <a href="javascript:void(0)" class="navbar-toggler c-toggler collapsed" @click="openSidebar">
                <div class="navbar-toggler-icon" data-toggle="collapse">
                  <span class="navbar-menu-icon navbar-menu-icon--top" />
                  <span class="navbar-menu-icon navbar-menu-icon--middle" />
                  <span class="navbar-menu-icon navbar-menu-icon--bottom" />
                </div>
              </a>
              <nuxt-link class="navbar-brand" :to="homeURL">
                <img class="img-fluid logo" :src="logo" alt="streamit">
              </nuxt-link>
              <div class="mobile-more-menu">
                <b-navbar-toggle target="dropdownMenuButton" class="more-toggle">
                  <i class="ri-more-line" />
                </b-navbar-toggle>
                <b-collapse id="dropdownMenuButton" class="more-menu">
                  <div class="navbar-right position-relative">
                    <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                      <li v-nav-toggle>
                        <a href="javascript:void(0)" class="search-toggle">
                          <i class="ri-search-line" />
                        </a>
                        <div class="search-box iq-search-bar">
                          <form action="javascript:void(0)" class="searchbox">
                            <div class="form-group position-relative">
                              <input
                                type="text"
                                class="text search-input font-size-12"
                                placeholder="type here to search..."
                              >
                              <i class="search-link ri-search-line" />
                            </div>
                          </form>
                        </div>
                      </li>
                      <li v-nav-toggle class="nav-item nav-icon">
                        <a href="javascript:void(0)" class="search-toggle position-relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            class="noti-svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                            />
                          </svg>
                          <span class="bg-danger dots" />
                        </a>
                        <div class="iq-sub-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body">
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-1.jpg"
                                    class="img-fluid mr-3"
                                    alt="streamit"
                                  >
                                  <div class="media-body">
                                    <h6 class="mb-0 ">Boop Bitty</h6>
                                    <small class="font-size-12"> just now</small>
                                  </div>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-2.jpg"
                                    class="img-fluid mr-3"
                                    alt="streamit"
                                  >
                                  <div class="media-body">
                                    <h6 class="mb-0 ">The Last Breath</h6>
                                    <small class="font-size-12">15 minutes ago</small>
                                  </div>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-3.jpg"
                                    class="img-fluid mr-3"
                                    alt="streamit"
                                  >
                                  <div class="media-body">
                                    <h6 class="mb-0 ">The Hero Camp</h6>
                                    <small class="font-size-12">1 hour ago</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li v-nav-toggle class="nav-item nav-icon">
                        <a
                          href="javascript:void(0)"
                          class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                          data-toggle="search-toggle"
                        >
                          <img src="../../../assets/images/frontend/user/user.jpg" class="img-fluid avatar-40 rounded-circle" alt="user">
                        </a>
                        <div class="iq-sub-dropdown iq-user-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 pl-3 pr-3">
                              <a href="/backend/dashboard" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-file-user-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Admin Dashboard</h6>
                                  </div>
                                </div>
                              </a>
                              <nuxt-link to="/frontend/user/Manage-profile" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-file-user-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0 ">
                                      Manage Profile
                                    </h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <nuxt-link to="/frontend/user/settings" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-settings-4-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0 ">
                                      Settings
                                    </h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <nuxt-link to="/frontend/user/pricing-plan" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-settings-4-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0 ">
                                      Pricing Plan
                                    </h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <a href="/AuthPages/Default/SignUp1" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-logout-circle-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0 ">
                                      Logout
                                    </h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-collapse>
              </div>
              <b-collapse id="navbarSupportedContent" :visible="sidebar" is-nav>
                <div class="menu-main-menu-container">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li v-for="(item,index) in items" :key="index" class="menu-item">
                      <nuxt-link :to="item.link">
                        {{ item.title }}
                      </nuxt-link>
                      <ul v-if="item.child" class="sub-menu">
                        <li v-for="(childitem,childindex) in item.children" :key="childindex" class="menu-item">
                          <nuxt-link :to="childitem.link">
                            {{ childitem.title }}
                          </nuxt-link>
                          <ul v-if="childitem.grandchild" class="sub-menu">
                            <li v-for="(grandchilditem,grandchildindex) in childitem.children" :key="grandchildindex" class="menu-item">
                              <nuxt-link :to="grandchilditem.link">
                                {{ grandchilditem.title }}
                              </nuxt-link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </b-collapse>
              <div class="navbar-right menu-right">
                <ul class="d-flex align-items-center list-inline m-0">
                  <li v-nav-toggle class="nav-item nav-icon">
                    <a href="javascript:void(0)" class="search-toggle device-search">
                      <i class="ri-search-line" />
                    </a>
                    <div class="search-box iq-search-bar d-search">
                      <form action="javascript:void(0)" class="searchbox">
                        <div class="form-group position-relative">
                          <input
                            type="text"
                            class="text search-input font-size-12"
                            placeholder="type here to search..."
                          >
                          <i class="search-link ri-search-line" />
                        </div>
                      </form>
                    </div>
                  </li>
                  <li v-nav-toggle class="nav-item nav-icon">
                    <a href="javascript:void(0)" class="search-toggle" data-toggle="search-toggle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        class="noti-svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                        />
                      </svg>
                      <span class="bg-danger dots" />
                    </a>
                    <div class="iq-sub-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body">
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-1.jpg"
                                class="img-fluid mr-3"
                                alt="streamit"
                              >
                              <div class="media-body">
                                <h6 class="mb-0 ">Boot Bitty</h6>
                                <small class="font-size-12"> just now</small>
                              </div>
                            </div>
                          </a>
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-2.jpg"
                                class="img-fluid mr-3"
                                alt="streamit"
                              >
                              <div class="media-body">
                                <h6 class="mb-0 ">The Last Breath</h6>
                                <small class="font-size-12">15 minutes ago</small>
                              </div>
                            </div>
                          </a>
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-3.jpg"
                                class="img-fluid mr-3"
                                alt="streamit"
                              >
                              <div class="media-body">
                                <h6 class="mb-0 ">The Hero Camp</h6>
                                <small class="font-size-12">1 hour ago</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li v-nav-toggle class="nav-item nav-icon">
                    <a
                      href="javascript:void(0)"
                      class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                      data-toggle="search-toggle"
                    >
                      <img src="../../../assets/images/frontend/user/user.jpg" class="img-fluid avatar-40 rounded-circle" alt="user">
                    </a>
                    <div class="iq-sub-dropdown iq-user-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 pl-3 pr-3">
                          <a href="/backend/dashboard" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-file-user-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0 ">Admin Dashboard</h6>
                              </div>
                            </div>
                          </a>
                          <nuxt-link to="/frontend/user/Manage-profile" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-file-user-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0 ">
                                  Manage Profile
                                </h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/frontend/user/settings" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-settings-4-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0 ">
                                  Settings
                                </h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/frontend/user/pricing-plan" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-settings-4-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0 ">
                                  Pricing Plan
                                </h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <a href="/AuthPages/Default/SignUp1" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-logout-circle-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0 ">
                                  Logout
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { core } from '../../../assets/app/app'
export default {
  name: 'FrontendNav',
  props: {
    homeURL: { type: String, default: () => ('/frontend/landing-page') },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    // eslint-disable-next-line vue/require-default-prop
    items: { type: Array },
    // eslint-disable-next-line vue/require-default-prop
    userprofile: { type: String }
  },
  data () {
    return {
      sidebar: false
    }
  },
  mounted () {
    core.index()
    document.addEventListener('click', this.closeSidebar, true)
  },
  destroyed () {
    document.removeEventListener('click', this.closeSidebar, true)
  },
  methods: {
    openSidebar () {
      if (this.sidebar === false) {
        document.getElementsByTagName('body')[0].classList.add('nav-open')
        this.sidebar = true
      } else {
        document.getElementsByTagName('body')[0].classList.remove('nav-open')
        this.sidebar = false
      }
    }
  }
}
</script>
