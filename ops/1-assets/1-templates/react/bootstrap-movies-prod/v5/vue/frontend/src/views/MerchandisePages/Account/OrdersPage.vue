<template>
  <AccountLayout>
    <div class="orders-table table-responsive">
      <table class="table">
        <thead>
          <tr class="border-bottom">
            <th class="fw-bolder p-3">{{ $t('shop.order') }}</th>
            <th class="fw-bolder p-3">{{ $t('shop.date') }}</th>
            <th class="fw-bolder p-3">{{ $t('shop.status') }}</th>
            <th class="fw-bolder p-3">{{ $t('shop.total') }}</th>
            <th class="fw-bolder p-3">{{ $t('shop.actions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-bottom">
            <td class="text-primary fs-6">
              <router-link to="#" class="order-number">#{{ order.number }}</router-link>
            </td>
            <td>{{ order.date }}</td>
            <td>{{ $t(order.status) }}</td>
            <td>{{ order.total }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div v-if="order.action === 'action_button'" class="iq-button">
                  <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('shop.pay') }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
                <div class="iq-button">
                  <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('shop.view') }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
                <div v-if="order.action === 'action_button'" class="iq-button">
                  <a href="javascript:void(0)" class="btn text-uppercase position-relative">
                    <span class="button-text">{{ $t('shop.cancel') }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AccountLayout>
</template>
<script>
import AccountLayout from './partials/AccountLayout.vue';
export default {
  components: {
    AccountLayout,
  },
  data() {
    return {
      orders: [
        {
          id: 32604,
          number: 32604,
          date: 'October 28, 2022',
          status: 'shop.cancelled',
          total: '$215.00 For 0 Items',
          action: 'action_button',
        },
        {
          id: 32584,
          number: 32584,
          date: 'October 27, 2022',
          status: 'shop.on_hold',
          total: '$522.00 For 0 Items',
          action: 'action_button',
        },
        {
          id: 31756,
          number: 31756,
          date: 'October 19, 2022',
          status: 'shop.processing',
          total: '$243.00 For 0 Items',
          action: 'action_button',
        },
        {
          id: 23663,
          number: 23663,
          date: 'October 7, 2022',
          status: 'shop.completed',
          total: '$123.00 For 0 Items',
        },
        {
          id: 23612,
          number: 23612,
          date: 'October 7, 2022',
          status: 'shop.completed',
          total: '$64.00 For 0 Items',
        },
        {
          id: 19243,
          number: 19243,
          date: 'April 1, 2022',
          status: 'shop.completed',
          total: '$159.00 For 0 Items',
        },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      // Implement date formatting logic here if needed
      return new Date(dateString).toLocaleDateString();
    },
  },
};
</script>
