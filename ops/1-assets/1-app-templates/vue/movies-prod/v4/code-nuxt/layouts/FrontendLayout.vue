<template>
  <div data-spy="scroll" data-offset="80">
    <frontendnav :items="headerItem" :userprofile="profile" :home-u-r-l="url" :logo="logo" />
    <nuxt />
    <modeswitch />
    <Footer>
      <template v-slot:column1>
        <div class="widget text-left">
          <div class="menu-footer-link-1-container">
            <ul id="menu-footer-link-1" class="menu p-0">
              <li id="menu-item-7314" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
                <nuxt-link to="">
                  Terms Of Use
                </nuxt-link>
              </li>
              <li id="menu-item-7316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                <nuxt-link to="/frontend/privacy-policy">
                  Privacy-Policy
                </nuxt-link>
              </li>

              <li id="menu-item-7315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315">
                <nuxt-link to="/frontend/faq">
                  FAQ
                </nuxt-link>
              </li>
              <li id="menu-item-7118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                <nuxt-link to="/frontend/watchvideo">
                  Watch List
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="widget text-left">
          <div class="textwidget">
            <p><small>© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</small></p>
          </div>
        </div>
      </template>
      <template v-slot:column2>
        <h6 class="footer-link-title">
          Follow Us :
        </h6>
        <ul class="info-share">
          <li><a target="_blank" href="#"><i class="ri-facebook-fill" /></a></li>
          <li><a target="_blank" href="#"><i class="fab fa-twitter" /></a></li>
          <li><a target="_blank" href="#"><i class="fab fa-google-plus-g" /></a></li>
          <li><a target="_blank" href="#"><i class="fab fa-github" /></a></li>
        </ul>
      </template>
      <template v-slot:column3>
        <div class="widget text-left">
          <div class="textwidget">
            <h6 class="footer-link-title">
              Streamit App
            </h6>
            <div class="d-flex align-items-center">
              <a class="app-image" href="#">
                <img src="@/assets/images/frontend/footer/01.jpg" alt="play-store">
              </a><br>
              <a class="ml-3 app-image" href="#"><img src="@/assets/images/frontend/footer/02.jpg" alt="app-store"></a>
            </div>
          </div>
        </div>
      </template>
    </Footer>
    <ScrollTop />
  </div>
</template>
<script>
import { core } from '../assets/app/app'
import loader from '../assets/images/logo-full.png'
import profile from '../assets/images/frontend/user/user.jpg'
export default {
  name: 'FrontendLayout',
  data () {
    return {
      profile,
      url: '/frontend/landing-page',
      logo: loader,
      headerItem: [
        { title: 'Home', link: '/frontend/landing-page', child: false },
        { title: 'Movies', link: '/frontend/movie-category', child: false },
        { title: 'Tv Shows', link: '/frontend/category-page', child: false },
        {
          title: 'Blog',
          link: '#',
          child: true,
          children: [
            {
              title: 'Blog',
              link: '/frontend/blog',
              grandchild: false
            },
            {
              title: 'Blog Details',
              link: '/frontend/blog-detail',
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
              link: '/frontend/about-us',
              grandchild: false
            },
            {
              title: 'Contact',
              link: '/frontend/contact-page',
              grandchild: false
            },
            {
              title: 'FAQ',
              link: '/frontend/faq',
              grandchild: false
            },
            {
              title: 'Privacy-Policy',
              link: '/frontend/privacy-policy',
              grandchild: false
            },
            {
              title: 'Pricing',
              link: '#',
              grandchild: true,
              children: [
                {
                  title: 'Pricing1',
                  link: '/frontend/pricing-plan1'
                },
                {
                  title: 'Pricing2',
                  link: '/frontend/pricing-plan2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    core.index()
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
@import url('~@/assets/css/frontend/dark.css');
@import url('../assets/css/frontend/typography.css');
@import url('../assets/css/frontend/variable.css');
@import url('../assets/css/frontend/style.css');
@import url('../assets/css/frontend/responsive.css');
@import url('../assets/css/developer.css');
@import url('../assets/css/frontend/typography-rtl.css');
@import url('../assets/css/frontend/spacer.css');
</style>
