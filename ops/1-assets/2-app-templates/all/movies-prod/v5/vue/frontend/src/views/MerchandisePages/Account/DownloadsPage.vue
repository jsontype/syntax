<template>
  <AccountLayout>
    <div class="orders-table">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="border-bottom">
              <th class="fw-bolder p-3">{{ $t('shop.product_') }}</th>
              <th class="fw-bolder p-3">{{ $t('shop.download_remaining') }}</th>
              <th class="fw-bolder p-3">{{ $t('shop.expires') }}</th>
              <th class="fw-bolder p-3">{{ $t('shop.download') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 fs-6">{{ $t('shop.electric_toothbrush') }}</td>
              <td class="p-3">∞</td>
              <td class="p-3 fs-6">{{ $t('shop.never') }}</td>
              <td class="p-3">
                <a href="#" class="p-2 bg-primary text-white fs-6">{{ $t('shop.product_demo') }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from './partials/AccountLayout.vue';
</script>
