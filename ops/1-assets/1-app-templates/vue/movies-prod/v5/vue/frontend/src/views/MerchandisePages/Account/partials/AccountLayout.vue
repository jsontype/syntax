<template>
  <div class="section-padding service-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
            <div class="product-menu">
              <ul class="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0" role="tablist">
                <li class="pb-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.account' }"
                    ><i class="fas fa-tachometer-alt" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.dashboard') }}</span></router-link
                  >
                </li>
                <li class="py-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.orders' }"
                    ><i class="fa fa-list faicon" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.orders') }}</span></router-link
                  >
                </li>
                <li class="py-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.account.download' }"
                    ><i class="fa fa-download faicon" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.downloads') }}</span></router-link
                  >
                </li>
                <li class="py-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.account.address' }"
                    ><i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.addresses') }}</span></router-link
                  >
                </li>
                <li class="py-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.account.detail' }"
                    ><i class="fa fa-user faicon" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.account_details') }}</span></router-link
                  >
                </li>
                <li class="pt-3 nav-item" role="presentation">
                  <router-link class="nav-link p-0 bg-transparent" :to="{ name: 'landing-page.account.logout' }"
                    ><i class="fas fa-sign-out-alt" aria-hidden="true"></i> <span class="ms-1">{{ $t('shop.logout') }}</span></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-8">
          <div id="product-menu-content" class="tab-content">
            <div id="dashboard" class="tab-pane fade active show" role="tabpanel">
              <div class="myaccount-content text-body p-4">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
