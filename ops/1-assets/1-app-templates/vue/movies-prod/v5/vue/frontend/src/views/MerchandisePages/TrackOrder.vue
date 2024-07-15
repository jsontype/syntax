<template>
  <section class="section-padding">
    <b-container>
      <div class="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
        <ul class="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 1 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('shop.shopping_cart') }} </span>
          </li>
          <li class="cart-page-item">
            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </li>
          <li class="cart-page-item">
            <span class="cart-pre-number border-radius rounded-circle me-1"> 2 </span>
            {{ '' }}
            <span class="cart-page-link"> {{ $t('shop.checkout') }} </span>
          </li>
          <li class="cart-page-item">
            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </li>
          <li class="cart-page-item active">
            <span class="cart-pre-heading badge bg-primary cart-pre-number border-radius rounded-circle me-1"> 3 </span>
            {{}}
            <span class="cart-page-link"> {{ $t('shop.order_summary') }} </span>
          </li>
        </ul>
      </div>
      <div class="order">
        <p class="thank">{{ $t('shop.thankyou') }}</p>
        <ul class="details list-inline">
          <li class="detail">{{ $t('shop.order_number') }}<strong>15823</strong></li>
          <li class="detail text-uppercase">{{ $t('shop.date') }}:<strong class="text-capitalize">June 22, 2022</strong></li>
          <li class="detail">{{ $t('shop.email') }}<strong>jondoe@gmail.com</strong></li>
          <li class="detail text-uppercase">{{ $t('shop.total') }}:<strong>$25.00</strong></li>
          <li class="detail">
            {{ $t('shop.payment_method') }}:<strong>{{ $t('shop.bank_transfer') }}</strong>
          </li>
        </ul>
      </div>
      <h5 class="order_details">{{ $t('shop.order_details') }}</h5>
      <b-row>
        <b-col lg="8">
          <section class="maintable">
            <table class="table table-border">
              <thead>
                <tr>
                  <th>{{ $t('shop.product_') }}</th>
                  <th class="text-end">{{ $t('shop.total') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr class="order_item">
                  <td>{{ $t('shop.bag_pack') }} <strong class="product-quantity">×&nbsp;1</strong></td>
                  <td class="text-end">
                    <span class="amount"
                      ><bdi><span class="">$</span>25.00</bdi></span
                    >
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="order_item">
                  <th>{{ $t('shop.subtotal') }}:</th>
                  <td class="text-end">
                    <span class="amount text-primary"><span class="">$</span>25.00</span>
                  </td>
                </tr>
                <tr class="order_item">
                  <th>{{ $t('shop.payment_method_small') }}:</th>
                  <td class="text-end">{{ $t('shop.bank_transfer') }}</td>
                </tr>
                <tr>
                  <th>{{ $t('shop.total') }}:</th>
                  <td class="text-end">
                    <span class="amount text-primary"><span class="">$</span>25.00</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>
        </b-col>
        <b-col lg="4">
          <div class="bill_section">
            <address>
              <div class="table-responsive bill_table">
                <table class="table mb-3">
                  <thead>
                    <tr>
                      <td>{{ $t('shop.billing_address') }}</td>
                    </tr>
                  </thead>
                  <tbody>
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
                      <td class="last-name text-uppercase">{{ $t('shop.us') }}</td>
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
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup></script>
