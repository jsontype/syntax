<template>
  <div>
    <Loader />
    <div class="wrapper">
      <!-- Sidebar  -->
      <Sidebar :items="verticalMenu" :logo="logo" :onlyLogo="onlyLogo" :onlyLogoText="onlyLogoText" @toggle="sidebarMini" :toggleButton="toggleSideIcon" :sidebarGroupTitle="sidebarGroupTitle" />
      <!-- TOP Nav Bar -->
      <DefaultNavBar title="Dashboard" :homeURL="{ name: 'dashboard.home-1' }" :sidebarGroupTitle="sidebarGroupTitle" @toggle="sidebarMini" :logo="logo">
        <template slot="responsiveRight">
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item nav-icon search-content">
              <a href="#" class="search-toggle iq-waves-effect text-gray rounded">
                <i class="ri-search-line"></i>
              </a>
              <form action="#" class="search-box p-0">
                <input type="text" class="text search-input" placeholder="Type here to search...">
                <a class="search-link" href="#"><i class="ri-search-line"></i></a>
              </form>
            </li>
            <li class="nav-item nav-icon" v-nav-toggle>
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
                <i class="ri-notification-2-line" />
                <span class="bg-primary dots"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                      </div>
                      <a href="#" class="iq-sub-card" >
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
                      <a href="#" class="iq-sub-card" >
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
                      <a href="#" class="iq-sub-card" >
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
                      <a href="#" class="iq-sub-card" >
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
            <li class="nav-item nav-icon" v-nav-toggle>
              <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded" >
                <i class="ri-mail-line" />
                <span class="bg-primary dots"></span>
              </a>
             <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
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
            <li class="line-height pt-3 user-profile" v-nav-toggle>
              <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                <img :src="userProfile" class="img-fluid rounded-circle mr-3" alt="user">
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white line-height">Hello Nik jone</h5>
                      <span class="text-white font-size-12">{{ $t('nav.user.available') }}</span>
                    </div>
                    <router-link :to="{ name: 'user.user-profile' }" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-file-user-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
                        </div>
                      </div>
                    </router-link>
                    <router-link :to="{ name: 'user.user-edit' }" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-profile-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.profileEditTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.profileEditSub') }}</p>
                        </div>
                      </div>
                    </router-link>
                   <router-link :to="{ name: 'user.account-setting' }" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-account-box-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
                        </div>
                      </div>
                   </router-link>
                    <router-link :to="{ name: 'user.privacy' }" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-lock-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.privacySettingTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.privacySettingSub')}}</p>
                        </div>
                      </div>
                    </router-link>
                    <div class="d-inline-block w-100 text-center p-3">
                      <a class="bg-primary iq-sign-btn" href="javascript:void(0)" @click="logout" role="button">{{ $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </DefaultNavBar>
      <!-- TOP Nav Bar END -->
      <div id="content-page" class="content-page">
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                    :leave-active-class="`animated ${animated.exit}`">
          <router-view/>
        </transition>
      </div>
    </div>
    <modeswitch />
    <LayoutFooter />
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import Loader from '../components/core/loader/Loader'
import Sidebar from '../components/core/sidebars/Sidebar'
import DefaultNavBar from '../components/core/navbars/DefaultNavBar'
import SideBarItems from '../StaticData/json/SideBar'
import profile from '../assets/images/user/1.jpg'
import loader from '../assets/images/logo.png'
import LayoutFooter from './Components/LayoutFooter'
export default {
  name: 'BackendLayout',
  components: {
    LayoutFooter,
    Loader,
    Sidebar,
    DefaultNavBar
  },
  mounted () {
    this.layoutSetting(this.$route.name)
  },
  computed: {
    toggleSideIcon () {
      var show = true
      return show
    }
  },
  watch: {
    $route: function (to, from) {
      this.layoutSetting(to.name)
    }
  },
  data () {
    return {
      animated: { enter: 'fadeInUp', exit: 'fadeOut' },
      verticalMenu: SideBarItems,
      userProfile: profile,
      onlyLogo: false,
      onlyLogoText: false,
      sidebarGroupTitle: true,
      logo: loader,
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
  methods: {
    layoutSetting (routeName) {
      this.onlyLogo = true
      this.onlyLogoText = true
      this.sidebarGroupTitle = true
      this.logo = loader
    },
    changeLogo (e) {
      this.logo = e
    },
    sidebarMini () {
      core.triggerSet()
      this.$store.dispatch('Setting/miniSidebarAction')
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    },
    routerAnimationChange (e) {
      this.animated = e
    }
  }
}
</script>
<style lang="scss">
@import url("../assets/css/custom.css");
@import url("../assets/css/developer.css");
@import "../assets/scss/backend.scss";
</style>
