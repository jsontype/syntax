<template>
  <footer class="footer footer-default">
    <div class="container-fluid">
      <div class="footer-top">
        <div class="row">
          <div class="col-xl-3 col-lg-6 mb-5 mb-lg-0">
            <div class="footer-logo">
              <BrandLogo></BrandLogo>
            </div>
            <p class="mb-4 font-size-14">{{ $t('footer.email_us') }} <span class="text-white">customer@streamit.com</span></p>
            <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('footer.customer_services') }}</p>
            <p class="mb-0 contact text-white">+ (480) 555-0103</p>
          </div>
          <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
            <h4 class="footer-link-title">{{ $t('footer.quick_links') }}</h4>
            <ul class="list-unstyled footer-menu">
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.about-us' }"> {{ $t('header.about_us') }} </router-link>
              </li>
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.blogs' }"> {{ $t('header.blog') }} </router-link>
              </li>
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.pricing-plan' }"> {{ $t('header.pricing_plan') }} </router-link>
              </li>
              <li>
                <router-link class="ms-3" :to="{ name: 'landing-page.faq' }"> {{ $t('header.faq') }} </router-link>
              </li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
            <h4 class="footer-link-title">{{ $t('footer.movies_to_watch') }}</h4>
            <ul class="list-unstyled footer-menu">
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.view-all' }"> {{ $t('footer.top_trending') }}</router-link>
              </li>
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.view-all' }"> {{ $t('footer.recommended') }} </router-link>
              </li>
              <li>
                <router-link class="ms-3" :to="{ name: 'landing-page.view-all' }"> {{ $t('footer.popular') }} </router-link>
              </li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-6 mb-5 mb-lg-0">
            <h4 class="footer-link-title">{{ $t('footer.about_company') }}</h4>
            <ul class="list-unstyled footer-menu">
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.contact-us' }">{{ $t('header.contact_us') }} </router-link>
              </li>
              <li class="mb-3">
                <router-link class="ms-3" :to="{ name: 'landing-page.privacy-policy' }"> {{ $t('header.privacy_policy') }} </router-link>
              </li>
              <li>
                <router-link class="ms-3" :to="{ name: 'landing-page.terms-of-use' }"> {{ $t('footer.terms_of_use') }} </router-link>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 col-lg-6">
            <h4 class="footer-link-title">{{ $t('footer.newsletter') }}</h4>
            <div class="mailchimp mailchimp-dark">
              <div class="input-group mb-3 mt-4">
                <input type="text" class="form-control mb-0 font-size-14" :placeholder="$t('footer.email')" aria-describedby="button-addon2" />
                <div class="iq-button">
                  <button id="button-addon2" type="submit" class="btn btn-sm">{{ $t('footer.subscribe') }}</button>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center mt-5">
              <span class="font-size-14 me-2">{{ $t('footer.follow_us') }}</span>
              <ul class="p-0 m-0 list-unstyled widget_social_media">
                <li class="">
                  <a href="https://www.facebook.com/" class="position-relative">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                {{
                  ' '
                }}
                <li class="">
                  <a href="https://twitter.com/" class="position-relative">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                {{
                  ' '
                }}
                <li class="">
                  <a href="https://github.com/" class="position-relative">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                {{
                  ' '
                }}
                <li class="">
                  <a href="https://www.instagram.com/" class="position-relative">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom border-top">
        <div class="row align-items-center">
          <div class="col-md-6">
            <ul class="menu list-inline p-0 d-flex flex-wrap align-items-center">
              <li class="menu-item">
                <router-link :to="{ name: 'landing-page.terms-of-use' }">{{ $t('footer.terms_of_use') }} </router-link>
              </li>
              <li id="menu-item-7316" class="menu-item">
                <router-link :to="{ name: 'landing-page.privacy-policy' }">{{ $t('footer.privacy-policy') }} </router-link>
              </li>
              <li class="menu-item">
                <router-link :to="{ name: 'landing-page.faq' }">{{ $t('header.faq') }} </router-link>
              </li>
              <li class="menu-item">
                <router-link :to="{ name: 'landing-page.play-list' }">{{ $t('footer.watch_list') }} </router-link>
              </li>
            </ul>
            <p class="font-size-14">© <span class="currentYear">2024</span> <span class="text-primary">STREAMIT</span>. {{ $t('footer.desc') }}</p>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <h6 class="font-size-14 pb-1">{{ $t('footer.download_app') }}</h6>
            <div class="d-flex align-items-center">
              <a class="app-image" href="#">
                <img src="/assets/images/footer/google-play.webp" loading="lazy" alt="play-store" />
              </a>
              <br />
              <a class="ms-3 app-image" href="#">
                <img src="/assets/images/footer/apple.webp" loading="lazy" alt="app-store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div id="back-to-top" style="display: none" class="animate__animated" :class="animationClass" @click="scrollToTop">
    <a id="top" class="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" href="#top">
      <i class="fa-solid fa-chevron-up"></i>
    </a>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import BrandLogo from '../brand/BrandLogo.vue';
import { useRoute } from 'vue-router';

const animationClass = ref('animate__fadeIn');

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  if (document.documentElement.scrollTop > 250) {
    animationClass.value = 'animate__fadeIn';
  } else {
    animationClass.value = 'animate__fadeOut';
  }
};
handleScroll();
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const route = useRoute();
watch(
  () => route.name,
  () => {
    scrollToTop();
  }
);
</script>
