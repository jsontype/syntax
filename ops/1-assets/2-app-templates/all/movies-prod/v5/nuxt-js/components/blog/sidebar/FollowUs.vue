<template>
  <div class="widget">
    <h5 class="widget-title position-relative">{{ $t("form.follow_us") }} :</h5>
    <ul class="p-0 m-0 list-unstyled widget_social_media">
      <li class="">
        <nuxt-link to="https://www.facebook.com/" class="position-relative"
          ><i class="fab fa-facebook"></i
        ></nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="https://twitter.com/" class="position-relative"
          ><i class="fab fa-twitter"></i
        ></nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="https://github.com/" class="position-relative"
          ><i class="fab fa-github"></i
        ></nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="https://www.instagram.com/" class="position-relative"
          ><i class="fab fa-instagram"></i
        ></nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
