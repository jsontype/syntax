<template>
  <div>
    <Loader />
    <NavHeader
      :items="headerItem"
      :userprofile="profile"
      :homeURL="{ name: 'dashboard.home-1' }"
      :logo="logo" v-if="$route.name!=='landing-page.watchvideo'"
    >
      <template slot="responsiveRight">
        <ul
          class="d-flex align-items-center justify-content-end list-inline m-0"
        >
          <li class="nav-item nav-icon" v-nav-toggle>
            <a href="#" class="search-toggle device-search">
              <i class="ri-search-line"></i>
            </a>
            <div class="search-box iq-search-bar d-search">
              <form action="#" class="searchbox">
                <input
                  type="text"
                  class="text search-input font-size-12"
                  placeholder="Type here to search..."
                />
                <i class="search-link ri-search-line"></i>
              </form>
            </div>
          </li>
          <li class="nav-item nav-icon" v-nav-toggle>
            <a
              href="javascript:void(0)"
              class="search-toggle position-relative"
            >
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
              <span class="bg-danger dots"></span>
            </a>
            <div class="iq-sub-dropdown">
              <div class="iq-card shadow-none m-0">
                <div class="iq-card-body  ">
                  <a href="#" class="iq-sub-card">
                    <div class="media align-items-center">
                      <img
                        src="../assets/images/frontend/notify/thumb-1.jpg"
                        class="img-fluid mr-3"
                        alt="streamit"
                      />
                      <div class="media-body">
                        <h6 class="mb-0 ">Boot Bitty</h6>
                        <small class="font-size-12"> just now</small>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="iq-sub-card">
                    <div class="media align-items-center">
                      <img
                        src="../assets/images/frontend/notify/thumb-2.jpg"
                        class="img-fluid mr-3"
                        alt="streamit"
                      />
                      <div class="media-body">
                        <h6 class="mb-0 ">The Last Breath</h6>
                        <small class="font-size-12">15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="iq-sub-card">
                    <div class="media align-items-center">
                      <img
                        src="../assets/images/frontend/notify/thumb-3.jpg"
                        class="img-fluid mr-3"
                        alt="streamit"
                      />
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
          <li class="nav-item nav-icon" v-nav-toggle>
            <a
              href="#"
              class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
            >
              <img
                :src="userProfile"
                class="img-fluid avatar-40 rounded-circle"
                alt="user"
              />
            </a>
            <div class="iq-sub-dropdown iq-user-dropdown">
              <div class="iq-card shadow-none m-0">
                <div class="iq-card-body p-0 pl-3 pr-3">
                  <a
                    :href="$router.resolve({ name: 'dashboard.home-1' }).href"
                    class="iq-sub-card setting-dropdown"
                  >
                    <div class="media align-items-center">
                      <div class="right-icon">
                        <i class="ri-settings-4-line text-primary"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="my-0 ">Admin Dashboard</h6>
                      </div>
                    </div>
                  </a>
                  <router-link
                    :to="{ name: 'landing-page.manage-profile' }"
                    class="iq-sub-card setting-dropdown"
                  >
                    <div class="media align-items-center">
                      <div class="right-icon">
                        <i class="ri-file-user-line text-primary"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="my-0 ">Manage Profile</h6>
                      </div>
                    </div>
                  </router-link>
                  <router-link
                    :to="{ name: 'landing-page.profile-setting' }"
                    class="iq-sub-card setting-dropdown"
                  >
                    <div class="media align-items-center">
                      <div class="right-icon">
                        <i class="ri-settings-4-line text-primary"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="my-0 ">Settings</h6>
                      </div>
                    </div>
                  </router-link>
                  <router-link
                    :to="{ name: 'landing-page.pricing-planning' }"
                    class="iq-sub-card setting-dropdown"
                  >
                    <div class="media align-items-center">
                      <div class="right-icon">
                        <i class="ri-settings-4-line text-primary"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="my-0 ">Pricing Plan</h6>
                      </div>
                    </div>
                  </router-link>
                  <router-link :to="{name:'auth1.sign-in1'}" class="iq-sub-card setting-dropdown">
                    <div class="media align-items-center">
                      <div class="right-icon">
                        <i class="ri-logout-circle-line text-primary"></i>
                      </div>
                      <div class="media-body ml-3">
                        <h6 class="my-0 ">Logout</h6>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </NavHeader>
    <Home id="home" v-if="this.$route.meta.slider === 'true'" />
    <Slider v-if="this.$route.meta.category" />
    <MovieSlider v-if="this.$route.meta.movieslider" />
    <BannerVideo
      v-if="
        this.$route.name == 'landing-page.movie-detail' ||
          this.$route.name == 'landing-page.category-detail'
      "
    />
    <Banner v-if="this.$route.name == 'landing-page.show-single'" />
    <Breadcrumb v-if="this.$route.name == 'landing-page.about' || this.$route.name == 'landing-page.contact'||this.$route.name == 'landing-page.privacypolicy' || this.$route.name == 'landing-page.pricingplan1' ||this.$route.name == 'landing-page.pricingplan2' ||this.$route.name == 'landing-page.faq' ||this.$route.name == 'landing-page.blog' ||this.$route.name == 'landing-page.blogdetail' ||this.$route.name == 'landing-page.pricing-planning' " />
    <div :class="this.$route.meta.mainClass == '' ? '' : 'main-content' ">
      <transition
        name="router-anim"
        :enter-active-class="`animated ${animated.enter}`"
        mode="out-in"
        :leave-active-class="`animated ${animated.exit}`"
      >
        <router-view />
      </transition>
    </div>
    <modeswitch/>
    <Footer v-if="$route.name!=='landing-page.watchvideo'"/>
    <div id="back-to-top">
      <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
    </div>
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import Loader from '../components/core/loader/Loader'
import profile from '../assets/images/frontend/user/user.jpg'
import loader from '../assets/images/logo-full.png'
import Footer from '../views/FrontendPages/Components/Footer/Footer'
import Home from '../views/FrontendPages/Components/Home/Home'
import Slider from '../views/FrontendPages/CategoryPage/Slider'
import MovieSlider from '../views/FrontendPages/MovieCategoryPage/Slider'
import NavHeader from '../components/core/navbars/FrontendNav'
import BannerVideo from '../views/FrontendPages/MovieDetailPage/BannerVideo'
import Banner from '../views/FrontendPages/ShowSinglePage/Banner'
import Breadcrumb from '../views/FrontendPages/Components/Breadcrumb/Breadcrumb'
export default {
  name: 'BackendLayout',
  components: {
    Footer,
    Loader,
    Home,
    NavHeader,
    Slider,
    MovieSlider,
    BannerVideo,
    Banner,
    Breadcrumb
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      profile: '',
      animated: { enter: 'fadeInUp', exit: 'fadeOut' },
      userProfile: profile,
      onlyLogo: false,
      onlyLogoText: false,
      logo: loader,
      headerItem: [
        { title: 'Home', link: '/', child: false },
        { title: 'Movies', link: '/movie-category', child: false },
        { title: 'Tv Shows', link: '/show-category', child: false },
        {
          title: 'Blog',
          link: '#',
          child: true,
          children: [
            {
              title: 'Blog',
              link: '/blog',
              grandchild: false
            },
            {
              title: 'Blog Details',
              link: '/blogdetail',
              grandchild: false
            }
          ]
        },
        {
          title: 'pages',
          link: '#',
          child: true,
          children: [
            {
              title: 'About Us',
              link: '/about',
              grandchild: false
            },
            {
              title: 'Contact',
              link: '/contact',
              grandchild: false
            },
            {
              title: 'FAQ',
              link: '/faq',
              grandchild: false
            },
            {
              title: 'Privacy-Policy',
              link: '/privacy-policy',
              grandchild: false
            },
            {
              title: 'Pricing',
              link: '#',
              grandchild: true,
              children: [
                {
                  title: 'Pricing1',
                  link: '/pricing-plan1'
                },
                {
                  title: 'Pricing2',
                  link: '/pricing-plan2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeLogo (e) {
      this.logo = e
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
@import "../assets/scss/frontend.scss";
</style>
