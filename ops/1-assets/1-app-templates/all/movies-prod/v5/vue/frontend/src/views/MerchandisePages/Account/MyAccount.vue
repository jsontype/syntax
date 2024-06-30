<template>
  <AccountLayout>
    <p>
      {{ $t('shop.hello_jenny') }} <router-link :to="{ name: 'landing-page.login-page' }">{{ $t('shop.log_out') }}</router-link
      >)
    </p>
    <p>
      {{ $t('shop.your_account') }} <a href="javascript:void(0)">{{ $t('shop.recent_orders') }}</a
      >, {{ $t('shop.manage_your') }} <a href="javascript:void(0)">{{ $t('shop.shipping_billing') }}</a
      >, {{ $t('shop.and') }} <a href="javascript:void(0)">{{ $t('shop.edit_password') }}</a
      >.
    </p>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
</script>
