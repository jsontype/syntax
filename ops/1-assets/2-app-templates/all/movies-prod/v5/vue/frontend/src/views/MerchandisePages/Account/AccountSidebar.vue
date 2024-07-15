<template>
  <div class="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
    <div class="product-menu">
      <ul class="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0">
        <li class="py-3 nav-item">
          <router-link class="nav-link active p-0 bg-transparent" :to="{ name: 'landing-page.merchandise.account' }"><i
              class="fas fa-tachometer-alt" aria-hidden="true"></i> <span class="ms-2">{{ $t('shop.dashboard')
              }}</span></router-link>
        </li>
        <li class="py-3 nav-item">
          <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.merchandise.orders' }"><i
              class="fa fa-list faicon" aria-hidden="true"></i> <span>{{ $t('shop.orders') }}</span></router-link>
        </li>
        <li class="py-3 nav-item">
          <router-link
class="nav-link p-0 bg-transparent"
            :to="{ name: 'landing-page.merchandise.account.download' }"><i
class="fa fa-download faicon"
              aria-hidden="true"></i> <span>{{ $t('shop.downloads') }}</span></router-link>
        </li>
        <li class="py-3 nav-item">
          <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.merchandise.account.address' }"><i
              class="fa fa-map-marker faicon" aria-hidden="true"></i> <span>{{ $t('shop.addresses')
              }}</span></router-link>
        </li>
        <li class="py-3 nav-item">
          <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.merchandise.account.detail' }"><i
              class="fa fa-user faicon" aria-hidden="true"></i> <span>{{ $t('shop.account_details')
              }}</span></router-link>
        </li>
        <li class="py-3 nav-item">
          <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.merchandise.account.logout' }"><i
              class="fa fa-sign-out faicon" aria-hidden="true"></i> <span>{{ $t('shop.logout') }}</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
