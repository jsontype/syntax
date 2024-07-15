<template>
  <div class="iq-breadcrumb" :style="{ background: 'url(' + generateImgPath('/assets/images/pages/01.webp') + ')' }">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col>
          <nav aria-label="breadcrumb" class="text-center">
            <h2 class="title">{{ $t(route.meta.pageName) }}</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'landing-page.ott' }">{{ $t('header.home') }}</router-link>
              </li>
              <li class="breadcrumb-item active">{{ $t(route.meta.pageName) }}</li>
            </ol>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
const route = useRoute();
</script>
