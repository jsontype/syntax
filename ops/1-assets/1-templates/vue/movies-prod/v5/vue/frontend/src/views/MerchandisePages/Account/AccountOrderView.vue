<template>
  <div class="container-fluid">
    <b-row>
      <b-col lg="3">
        <AccountSidebar></AccountSidebar>
      </b-col>
      <b-col lg="9">
        <div class="dashboard_content">
          <h5 class="order_details">{{ $t('shop.order_details') }}</h5>
          <div class="row">
            <div class="col-lg-8">
              <div class="maintable">
                <table class="shop_table">
                  <thead>
                    <tr>
                      <th class="product-name">{{ $t('shop.product') }}</th>
                      <th class="product-total">{{ $t('shop.total') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="my-account-order_item">
                      <td class="product-name">
                        <a href="#">{{ $t('shop.bag_pack') }} × 1 </a>
                      </td>
                      <td class="product-total">
                        <span class="amount"
                          ><bdi><span class="">$</span>25.00</bdi></span
                        >
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="my-account-order_item">
                      <th>{{ $t('shop.subtotal') }}</th>
                      <td>
                        <span class="amount"><span class="order-price">$25.00</span></span>
                      </td>
                    </tr>
                    <tr class="my-account-order_item">
                      <th>{{ $t('shop.payment_method') }}:</th>
                      <td>{{ $t('shop.bank_transfer') }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t('shop.total_') }}</th>
                      <td>
                        <span class="amount"><span class="order-price">$25.00</span></span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="col-lg-4 mt-lg-0 mt-md-4">
              <section class="bill_section">
                <h5 class="my-account-bill_address">{{ $t('shop.billing_address') }}</h5>
                <address>
                  <div class="table-responsive bill_table">
                    <table class="mb-4">
                      <tbody class="my-account-bill_body pb-3">
                        <tr>
                          <td class="label-name">{{ $t('shop.name') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('shop.test') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('shop.company') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('shop.test') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('shop.country') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('shop.us') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('shop.address') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">{{ $t('shop.dccc') }}</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('shop.e_mail') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">jondoe@gmail.com</td>
                        </tr>
                        <tr>
                          <td class="label-name">{{ $t('shop.phone') }}</td>
                          <td class="seprator"><span>:</span></td>
                          <td class="last-name">96465216515</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </address>
              </section>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
import AccountSidebar from './AccountSidebar.vue';
</script>
