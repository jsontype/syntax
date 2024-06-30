<template>
  <AccountLayout>
    <p>
      {{ $t("shop.hello_jenny") }}
      <nuxt-link :to="{ name: 'auth-login' }">{{
        $t("shop.log_out")
      }}</nuxt-link>
    </p>
    <p>
      {{ $t("shop.your_account") }}
      <a href="#">{{ $t("shop.recent_orders") }}</a
      >,{{ $t("shop.manage_your") }}
      <a href="#">{{ $t("shop.shipping_billing") }}</a
      >, {{ $t("shop.and") }} <a href="#">{{ $t("shop.edit_password") }}</a
      >.
    </p>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from "./partials/AccountLayout.vue";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>
