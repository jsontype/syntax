<template>
  <AccountLayout>
    <div class="orders-table table-responsive">
      <table class="table">
        <thead>
          <tr class="border-bottom">
            <th class="fw-bolder p-3">{{ $t("shop.order") }}</th>
            <th class="fw-bolder p-3">{{ $t("shop.date") }}</th>
            <th class="fw-bolder p-3">{{ $t("shop.status") }}</th>
            <th class="fw-bolder p-3">{{ $t("shop.total") }}</th>
            <th class="fw-bolder p-3">{{ $t("shop.actions") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-bottom">
            <td class="text-primary fs-6">
              <router-link to="/acc-order-view" class="order-number"
                >#{{ order.number }}</router-link
              >
            </td>
            <td>{{ formatDate(order.date) }}</td>
            <td>{{ $t(order.status) }}</td>
            <td>{{ order.total }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div v-if="order.status !== 'Completed'" class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{ $t("shop.pay") }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
                <div class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{ $t("shop.view") }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
                <div v-if="order.status !== 'Completed'" class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{ $t("shop.cancel") }}</span>
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
<script setup>
import AccountLayout from "./partials/AccountLayout.vue";
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");

const orders = [
  {
    id: 15827,
    number: 15827,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.cancelled",
    total: "$50.00 for 2 items",
  },
  {
    id: 15822,
    number: 15822,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.on_hold",
    total: "$25.00 for 1 item",
  },
  {
    id: 15820,
    number: 15820,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.processing",
    total: "$19.00 for 1 item",
  },
  {
    id: 15819,
    number: 15819,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.completed",
    total: "$44.00 for 2 items",
  },
  {
    id: 15818,
    number: 15818,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.completed",
    total: "$25.00 for 1 item",
  },
  {
    id: 15816,
    number: 15816,
    date: "2022-06-23T07:19:23+00:00",
    status: "shop.completed",
    total: "$50.00 for 2 items",
  },
];

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
</script>
