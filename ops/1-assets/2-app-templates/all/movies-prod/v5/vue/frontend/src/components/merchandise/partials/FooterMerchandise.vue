<template>
  <footer class="footer-merchandise">
    <div class="footer-top">
      <div class="container-fluid">
        <b-row>
          <b-col sm="6" lg="4">
            <div class="footer-inner">
              <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('footer.customer_services') }}</p>
              <h4 class="mb-0 contact text-white fw-bold"><a href="tel:+4805550103">+ (480) 555-0103</a></h4>
              <span class="d-inline-block mt-4 mb-0 font-size-14">{{ $t('footer.email_us') }} <a href="maito:customer@streamit.com">customer@streamit.com</a></span>
              <div class="mt-5">
                <p class="text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('footer.stay_connected') }}</p>
                <ul class="p-0 mt-4 mb-0 list-unstyled widget_social_media">
                  <li class="me-3">
                    <a target="_blank" href="https://www.facebook.com/" class="position-relative"> <i class="fab fa-facebook"></i> </a>
                  </li>
                  <li class="me-3">
                    <a target="_blank" href="https://www.twitter.com/" class="position-relative"> <i class="fab fa-twitter"></i> </a>
                  </li>
                  <li class="me-3">
                    <a target="_blank" href="https://www.github.com/" class="position-relative"> <i class="fab fa-github"></i> </a>
                  </li>
                  <li class="">
                    <a target="_blank" href="https://www.instagram.com/" class="position-relative"> <i class="fab fa-instagram"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-col lg="4" sm="6" mt-sm="0" mt="5">
            <div class="footer-inner position-relative text-center px-xl-5 px-3">
              <div class="vr text-dark opacity-100 h-100 position-absolute end-0 top-0 d-lg-inline-block d-none"></div>
              <div class="footer-logo">
                <!--Logo -->
                <router-link :to="{ name: 'landing-page.ott' }">
                  <brand-logo />
                </router-link>
              </div>
              <p class="mt-lg-5 mt-4 mb-3 text-uppercase letter-spacing-1 font-size-14 mb-1">{{ $t('footer.best_deals') }}</p>
              <div class="mailchimp mailchimp-dark">
                <div class="input-group mb-3 mt-4">
                  <input type="text" class="form-control mb-0 font-size-14" :placeholder="$t('footer.email')" aria-describedby="button-addon2" />
                  <div class="iq-button">
                    <button id="button-addon2" type="submit" class="btn btn-sm">{{ $t('footer.subscribe') }}</button>
                  </div>
                </div>
                <span class="d-inline-block font-size-14">* {{ $t('footer.email_anyone') }}</span>
              </div>
              <div class="vr text-dark opacity-100 h-100 position-absolute start-0 top-0 d-lg-inline-block d-none"></div>
            </div>
          </b-col>

          <b-col xl="4" lg="6">
            <div class="footer-inner">
              <h5 class="footer-link-title mb-3">{{ $t('footer.quick_links') }}</h5>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled footer-menu mb-0">
                    <li class="mb-2">
                      <router-link :to="{ name: 'landing-page.contact-us' }" class="ms-3">{{ $t('header.contact_us') }}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'landing-page.privacy-policy' }" class="ms-3">{{ $t('header.privacy_policy') }}</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 mt-lg-0 mt-2">
                  <ul class="list-unstyled footer-menu mb-0">
                    <li>
                      <router-link :to="{ name: 'landing-page.terms-of-use' }" class="ms-3">{{ $t('footer.terms_of_use') }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-5">
                <p class="pt-3 mb-3 text-uppercase">{{ $t('footer.payments') }}</p>
                <ul class="list-inline d-flex align-items-center flex-wrap gap-3 m-0">
                  <li>
                    <img src="/assets/images/footer/01.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/02.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/03.webp" alt="visa" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/footer/04.webp" alt="visa" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="footer-bottom bg-body py-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6 text-md-start text-center">
            <p class="m-0 font-size-14 text-capitalize">© <span class="currentYear">2024 </span><router-link :to="{ name: 'landing-page.ott' }">STREAMIT</router-link> {{ $t('footer.all_right_reserved') }}</p>
          </div>
          <div class="col-md-6 text-md-end text-center">
            <p class="m-0 font-size-14">{{ $t('footer.powered_by') }} <a href="https://iqonic.design/" target="_blank">IQONIC DESIGN</a></p>
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
