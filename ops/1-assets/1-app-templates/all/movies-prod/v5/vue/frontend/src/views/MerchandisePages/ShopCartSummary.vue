<template>
  <b-container fluid>
    <div class="page-header">
      <ul class="page-items">
        <li class="page_item active">
          <span class="pre-heading"> 1 </span>
          <span class="page_link">{{ $t('shop.shopping_cart') }}</span>
        </li>
        <li class="page_item">
          <span class="pre-heading"> 2 </span>
          <span class="page_link">{{ $t('shop.checkout') }}</span>
        </li>
        <li class="page_item">
          <span class="pre-heading"> 3 </span>
          <span class="page_link">{{ $t('shop.order_summary') }}</span>
        </li>
      </ul>
    </div>
    <div class="order">
      <p class="thank">{{ $t('shop.thankyou') }}</p>
      <ul class="details list-inline">
        <li class="detail">{{ $t('shop.order_number') }}<strong>15823</strong></li>
        <li class="detail">{{ $t('shop.date') }}<strong>June 22, 2022</strong></li>
        <li class="detail">{{ $t('shop.email') }}<strong>jondoe@gmail.com</strong></li>
        <li class="detail">{{ $t('shop.total') }}<strong>$25.00</strong></li>
        <li class="detail">
          {{ $t('shop.payment_method') }}:<strong>{{ $t('shop.bank_transfer') }}</strong>
        </li>
      </ul>
    </div>
    <h5 class="order_details">{{ $t('shop.order_details') }}</h5>
    <b-row>
      <b-col lg="8">
        <section class="maintable">
          <table class="shop_table">
            <thead>
              <tr>
                <th class="product-name">{{ $t('shop.product') }}</th>
                <th class="product-total">{{ $t('shop.total') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="order_item">
                <td class="product-name">
                  <a href="#">{{ $t('shop.bag_pack') }} &nbsp;</a><strong class="product-quantity">×&nbsp;1</strong>
                </td>
                <td class="product-total">
                  <span class="amount"
                    ><bdi><span class="">$</span>25.00</bdi></span
                  >
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="order_item">
                <th scope="row bill-total">{{ $t('shop.subtotal') }}</th>
                <td>
                  <span class="amount"><span class="">$</span>25.00</span>
                </td>
              </tr>
              <tr class="order_item">
                <th scope="row bill-total">{{ $t('shop.payment_method') }}:</th>
                <td>{{ $t('shop.bank_transfer') }}</td>
              </tr>
              <tr>
                <th scope="row bill-total">{{ $t('shop.total_') }}</th>
                <td>
                  <span class="amount"><span class="">$</span>25.00</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </b-col>
      <b-col lg="4">
        <section class="bill_section">
          <h5 class="bill_address">{{ $t('shop.billing_address') }}</h5>
          <address>
            <div class="table-responsive bill_table">
              <table>
                <tbody class="bill_body">
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
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup></script>
