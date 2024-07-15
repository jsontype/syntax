<template>
  <!--Logo Start-->
  <div class="logo-default">
    <router-link class="navbar-brand text-primary" :to="{name: 'landing-page.ott'}">
      <img class="img-fluid logo" src="/assets/images/logo.webp" loading="lazy" alt="streamit" />
    </router-link>
  </div>
  <div class="logo-hotstar">
    <router-link class="navbar-brand text-primary" :to="{name: 'landing-page.ott'}">
      <img class="img-fluid logo" src="/assets/images/logo-hotstar.webp" loading="lazy" alt="streamit" />
    </router-link>
  </div>
  <div class="logo-prime">
    <router-link class="navbar-brand text-primary" :to="{name: 'landing-page.ott'}">
      <img class="img-fluid logo" src="/assets/images/logo-prime.webp" loading="lazy" alt="streamit" />
    </router-link>
  </div>
  <div class="logo-hulu">
    <router-link class="navbar-brand text-primary" :to="{name: 'landing-page.ott'}">
      <img class="img-fluid logo" src="/assets/images/logo-hulu.webp" loading="lazy" alt="streamit" />
    </router-link>
  </div>
  <!-- Logo End -->
</template>
<script setup></script>
