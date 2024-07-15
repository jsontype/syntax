<template>
  <div class="section-padding service-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
            <div class="product-menu">
              <ul
                class="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0"
                role="tablist"
              >
                <li class="pb-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account' }"
                    ><i class="fas fa-tachometer-alt" aria-hidden="true"></i>
                    <span class="ms-2">{{
                      $t("shop.dashboard")
                    }}</span></nuxt-link
                  >
                </li>
                <li class="py-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account-order' }"
                    ><i class="fa fa-list faicon" aria-hidden="true"></i>
                    <span class="ms-2">{{ $t("shop.orders") }}</span></nuxt-link
                  >
                </li>
                <li class="py-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account-download' }"
                    ><i class="fa fa-download faicon" aria-hidden="true"></i>
                    <span class="ms-2">{{
                      $t("shop.downloads")
                    }}</span></nuxt-link
                  >
                </li>
                <li class="py-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account-address' }"
                    ><i class="fa fa-map-marker faicon" aria-hidden="true"></i>
                    <span class="ms-2">{{
                      $t("shop.addresses")
                    }}</span></nuxt-link
                  >
                </li>
                <li class="py-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account-detail' }"
                    ><i class="fa fa-user faicon" aria-hidden="true"></i>
                    <span class="ms-2">{{
                      $t("shop.account_details")
                    }}</span></nuxt-link
                  >
                </li>
                <li class="pt-3 nav-item">
                  <nuxt-link
                    class="nav-link p-0 bg-transparent"
                    :to="{ name: 'merchandise-account-logout' }"
                    ><i class="fa fa-sign-out faicon" aria-hidden="true"></i>
                    <span class="ms-2">{{ $t("shop.logout") }}</span></nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-8">
          <div class="myaccount-content text-body p-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
