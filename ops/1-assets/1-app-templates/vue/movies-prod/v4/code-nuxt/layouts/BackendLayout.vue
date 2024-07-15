<template>
  <div data-spy="scroll" data-offset="80">
    <div class="wrapper">
      <!-- Sidebar  -->
      <Sidebar
        :items="verticalMenu"
        :logo="loader"
        :only-logo="onlyLogo"
        :only-logo-text="onlyLogoText"
        :toggle-button="toggleSideIcon"
        :sidebar-group-title="sidebarGroupTitle"
        @toggle="sidebarMini"
      />
      <!-- TOP Nav Bar -->
      <defaultnavbar title="Dashboard" home-u-r-l="/backend/dashboard" :sidebar-group-title="sidebarGroupTitle" :logo="loader" @toggle="sidebarMini">
        <template slot="responsiveRight">
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item nav-icon search-content toggleClass">
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
                <i class="ri-search-line" />
              </a>
              <form action="javascript:void(0)" class="search-box p-0">
                <input type="text" class="text search-input" placeholder="Type here to search...">
                <a class="search-link" href="javascript:void(0)"><i class="ri-search-line" /></a>
              </form>
            </li>
            <li v-nav-toggle class="nav-item nav-icon toggleClass">
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
                <i class="ri-notification-2-line" />
                <span class="bg-primary dots" />
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">
                        All Notifications<small class="badge  badge-light float-right pt-1">4</small>
                      </h5>
                    </div>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/1.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Emma Watson Barry</h6>
                          <small class="float-right font-size-12">Just Now</small>
                          <p class="mb-0">95 MB</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/02.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">New customer is join</h6>
                          <small class="float-right font-size-12">5 days ago</small>
                          <p class="mb-0">Cyst Barry</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/03.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Two customer is left</h6>
                          <small class="float-right font-size-12">2 days ago</small>
                          <p class="mb-0">Cyst Barry</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/04.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">New Mail from Fenny</h6>
                          <small class="float-right font-size-12">3 days ago</small>
                          <p class="mb-0">Cyst Barry</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li v-nav-toggle class="nav-item nav-icon dropdown toggleClass">
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
                <i class="ri-mail-line" />
                <span class="bg-primary dots" />
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">
                        All Messages<small class="badge  badge-light float-right pt-1">5</small>
                      </h5>
                    </div>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/1.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Barry Emma Watson</h6>
                          <small class="float-left font-size-12">13 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/02.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                          <small class="float-left font-size-12">20 Apr</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/03.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Why do we use it?</h6>
                          <small class="float-left font-size-12">30 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="../assets/images/user/04.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Variations Passages</h6>
                          <small class="float-left font-size-12">12 Sep</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li v-nav-toggle class="line-height pt-3 user-profile toggleClass">
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect d-flex align-items-center">
                <img :src="userprofile" class="img-fluid rounded-circle mr-3" alt="user">
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white line-height">
                        Hello Nik jone
                      </h5>
                      <span class="text-white font-size-12">Available</span>
                    </div>
                    <nuxt-link to="/backend/user/Profile" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-file-user-line" />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">
                            My Profile
                          </h6>
                          <p class="mb-0 font-size-12">
                            View personal profile details
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/backend/user/ProfileEdit" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-profile-line" />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">
                            Edit Profile
                          </h6>
                          <p class="mb-0 font-size-12">
                            Modify your personal details
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/backend/user/AccountSetting" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-account-box-line" />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">
                            Account Settings
                          </h6>
                          <p class="mb-0 font-size-12">
                            Manage your account paramater
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/backend/user/Privacy" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-lock-line" />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">
                            Privacy Settings
                          </h6>
                          <p class="mb-0 font-size-12">
                            Control your privacy paramater
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <div class="d-inline-block w-100 text-center p-3">
                      <a class="bg-primary iq-sign-btn" href="javascript:void(0)" role="button" @click="logout"> Signout <i class="ri-login-box-line ml-2" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </defaultnavbar>
      <!-- TOP Nav Bar END -->
      <div id="content-page" class="content-page">
        <nuxt />
      </div>
    </div>
    <modeswitch  />
    <LayoutFooter />
  </div>
</template>
<script>
import SideBarItems from '../config/SideBar.json'
import loader from '../assets/images/logo.png'
import profile from '../assets/images/user/1.jpg'
import LayoutFooter from './Components/LayoutFooter'
export default {
  name: 'BackendLayout',
  components: {
    LayoutFooter
  },
  data () {
    return {
      verticalMenu: SideBarItems,
      loader,
      onlyLogo: false,
      onlyLogoText: false,
      sidebarGroupTitle: true,
      sidebarMini: false,
      userprofile: profile,
      message: [
        { image: require('../assets/images/user/user-1.jpg'), name: 'Nik Emma Watson', date: '13 jan' },
        { image: require('../assets/images/user/user-2.jpg'), name: 'Greta Life', date: '14 Jun' },
        { image: require('../assets/images/user/user-3.jpg'), name: 'Barb Ackue', date: '16 Aug' },
        { image: require('../assets/images/user/user-4.jpg'), name: 'Anna Sthesia', date: '21 Sept' },
        { image: require('../assets/images/user/user-5.jpg'), name: 'Bob Frapples', date: '29 Sept' }
      ],
      notification: [
        { image: require('../assets/images/user/user-1.jpg'), name: 'Nik Emma Watson', date: '23 hour ago', description: 'Enjoy smart access to videos, games' },
        { image: require('../assets/images/user/user-2.jpg'), name: 'Greta Life', date: '14 hour ago', description: 'Google Chromecast: Enjoy a world of entertainment' },
        { image: require('../assets/images/user/user-3.jpg'), name: 'Barb Ackue', date: '16 hour ago', description: 'Dell Inspiron Laptop: Get speed and performance from' },
        { image: require('../assets/images/user/user-4.jpg'), name: 'Anna Sthesia', date: '21 hour ago', description: 'Deliver your favorite playlist anywhere in your home ' },
        { image: require('../assets/images/user/user-5.jpg'), name: 'Bob Frapples', date: '11 hour ago', description: 'MacBook Air features up to 8GB of memory, a fifth-generation' }
      ]
    }
  },
  computed: {
    toggleSideIcon () {
      const show = true
      return show
    }
  },
  mounted () {
  },
  methods: {
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.push('/AuthPages/Default/SignIn1')
    }
  },
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  }
}
</script>
<style>
@import url('../assets/css/custom.css');
@import url('../assets/css/backend/variable.css');
@import url('../assets/css/backend/typography.css');
@import url('../assets/css/backend/style.css');
@import url('../assets/css/backend/responsive.css');
@import url('../assets/css/backend/dark.css');
@import url('../assets/css/backend/typography-rtl.css');
@import url('../assets/css/backend/spacer.css');
</style>
