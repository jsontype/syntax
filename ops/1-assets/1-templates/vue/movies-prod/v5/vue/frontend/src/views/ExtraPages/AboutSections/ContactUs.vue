<template>
  <section class="section-padding" style="background-color: var(--bs-gray-900)">
    <b-container>
      <b-row class="about-us-row text-center align-items-center">
        <b-col md="6">
          <div class="text-center">
            <img
width="497" height="477" src="/assets/images/pages/map.webp" class="attachment-large size-large" alt=""
              loading="lazy" />
          </div>
        </b-col>
        <b-col md="6">
          <div class="text-left iq-title-box iq-title-default">
            <h2 class="text-capitalize text-start">{{ $t('about_us.contact_here') }}</h2>
            <p class="mb-0 text-start">{{ $t('about_us.streamit_located') }} <a
                href="mailto:info@medyapim.com">hello@streamit.com</a> {{ $t('about_us.tech_related') }}</p>
            <b-row class="mt-2 iq-rtl-direction">
              <b-col md="4">
                <div class="counter">
                  <Vue3autocounter ref="counter" :start-amount="0" :end-amount="4" />
                </div>
                <div class="counter-title">{{ $t('about_us.branch') }}</div>
              </b-col>
              <b-col md="4">
                <div class="iq-contact-list">
                  <div class="counter">
                    <Vue3autocounter ref="counter" :start-amount="0" :end-amount="500" suffix=" +" />
                  </div>
                  <div class="counter-title">{{ $t('about_us.employee') }}</div>
                </div>
              </b-col>
              <b-col md="4">
                <div class="iq-contact-list">
                  <div class="counter">
                    <Vue3autocounter ref="counter" :start-amount="0" :end-amount="1000" suffix=" +" separator="" />
                  </div>
                  <div class="counter-title">{{ $t('about_us.client') }}</div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Vue3autocounter from 'vue3-autocounter';
export default {
  name: 'WidgetBasic',
  components: {
    Vue3autocounter,
  },
};
</script>
