<template>
  <div class="wrapper">
    <div class="wrapper vh-100">
      <div class="iq-comingsoon pt-5 h-100 d-flex align-items-center">
        <b-container fluid>
          <div class="d-flex justify-content-center">
            <div class="col-sm-8 text-center">
              <div class="iq-comingsoon-info">
                <router-link to="/">
                  <img src="/assets/images/logo-full.png" class="img-fluid w-25" alt="logo" loading="lazy" />
                </router-link>
                <h2 class="mt-4 mb-1">{{ $t('authentication.stay_tunned') }}</h2>
                <p>{{ $t('authentication.best_experience') }}</p>
                <ul ref="element" class="countdown d-flex align-items-center list-inline row" countdown
                  data-date="May 30 2025 20:20:22">
                  <li class="col-md-6 col-lg-3">
                    <b-card>
                      <div class="iq-card-body"><span data-days>0</span>{{ $t('authentication.days') }}</div>
                    </b-card>
                  </li>
                  <li class="col-md-6 col-lg-3">
                    <b-card>
                      <div class="iq-card-body"><span data-hours>0</span>{{ $t('authentication.hours') }}</div>
                    </b-card>
                  </li>
                  <li class="col-md-6 col-lg-3">
                    <b-card>
                      <div class="iq-card-body"><span data-minutes>0</span>{{ $t('authentication.minutes') }}</div>
                    </b-card>
                  </li>
                  <li class="col-md-6 col-lg-3">
                    <b-card>
                      <div class="iq-card-body"><span data-seconds>0</span>{{ $t('authentication.seconds') }}</div>
                    </b-card>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="col-md-4">
              <form class="iq-comingsoon-form mt-5">
                <div class="form-group">
                  <input id="exampleInputEmail1" type="email" class="form-control comming mb-0 me-2"
                    :placeholder="$t('authentication.enter_email_address')" />
                  <button type="submit" class="btn btn-primary p-2">{{ $t('authentication.subscribe') }}</button>
                </div>
              </form>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useCountdown } from '@/utilities/countdown';
const element = ref(null);
onMounted(() => useCountdown(element.value));
</script>
<!-- <script>
import { core } from '../../config/pluginInit';
const coundown = () => import('@/plugins/countdown.js');
export default {
  name: 'ComingSoon',
  computed: {
    date() {
      var currentDate = new Date();
      var futureDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000);

      var formattedDate = futureDate.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return formattedDate;
    },
  },
  mounted() {
    core.index();
    coundown();
  },
};
</script> -->
