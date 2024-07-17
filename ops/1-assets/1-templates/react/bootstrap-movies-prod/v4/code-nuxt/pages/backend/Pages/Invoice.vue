<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <iq-card>
          <template v-slot:body>
            <b-row>
              <b-col cols="6">
                <img :src="image" alt="logo" class="img-fluid w-20">
              </b-col>
              <b-col cols="6" align-self="center">
                <h4 class="mb-0 float-right">
                  {{ title }}
                </h4>
              </b-col>
              <b-col sm="12">
                <hr class="mt-3">
                <h5 class="mb-0">
                  {{ invoice.name }}
                </h5>
                <p>{{ invoice.description }}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <div class="table-responsive-sm">
                  <b-table :items="invoice.order">
                    <template v-slot:cell(orderStatus)>
                      <span class="badge badge-danger">Unpaid</span>
                    </template>
                    <template v-slot:cell(billingAddress)="data">
                      <p>
                        {{ data.value }}
                      </p>
                    </template>
                    <template v-slot:cell(shippingAddress)="data">
                      <p>
                        {{ data.value }}
                      </p>
                    </template>
                  </b-table>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <h5>{{ invoice.summary }}</h5>
                <div class="table-responsive-sm">
                  <b-table-simple striped class="text-center">
                    <thead>
                      <tr>
                        <th v-for="(item,index) in invoice.orderSummaryFields" :key="index" :class="item.key === 'item' ? 'text-left' : ''">
                          {{ item.label }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(body, bodyKey) in invoice.orderSummary" :key="bodyKey">
                        <template v-for="(item,index) in invoice.orderSummaryFields">
                          <th v-if="item.key === 'id'" :key="item.key+index">
                            {{ body[item.key] }}
                          </th>
                          <td v-else-if="item.key === 'item'" :key="item.key+index" class="text-left">
                            <h6 class="mb-0">
                              {{ body[item.key].title }}
                            </h6>
                            <p class="mb-0">
                              {{ body[item.key].description }}
                            </p>
                          </td>
                          <td v-else :key="item.key+index" :class="item.key === 'total' ? 'font-weight-bold' : ''">
                            {{ body[item.key] }}
                          </td>
                        </template>
                      </tr>
                    </tbody>
                  </b-table-simple>
                </div>
                <h5>{{ invoice.detail }}</h5>
                <div class="table-responsive-sm">
                  <b-table-simple striped>
                    <thead>
                      <tr>
                        <th v-for="(item,index) in invoice.OrderDetailField" :key="index" :class="item.key === 'bank' ? 'text-left' : ''">
                          {{ item.label }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(body, bodyKey) in invoice.OrderDetails" :key="bodyKey">
                        <template v-for="(item,index) in invoice.OrderDetailField">
                          <th v-if="item.key === 'bank'" :key="item.key+index">
                            {{ body[item.key] }}
                          </th>
                          <td v-else :key="item.key+index" :class="item.key === 'total' ? 'font-weight-bold' : ''">
                            {{ body[item.key] }}
                          </td>
                        </template>
                      </tr>
                    </tbody>
                  </b-table-simple>
                </div>
              </b-col>
              <b-col lg="12 " class="text-right">
                <b-button variant="link mr-3">
                  <i class="ri-printer-line" />
                  Download Print
                </b-button>
                <b-button variant="primary">
                  Submit
                </b-button>
              </b-col>
              <b-col sm="12" class="mt-5">
                <b class="text-danger">Notes: </b>
                <p>{{ invoice.note }}</p>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../assets/app/app'

export default {
  layout: 'BackendLayout',
  name: 'Invoice',
  data () {
    return {
      image: require('../../../assets/images/logo.png'),
      title: 'Invoice',
      invoice: {
        name: 'Hello, Barry Techs',
        summary: 'Order Summary',
        detail: 'Order Detail',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        order: [
          {
            orderDate: 'Jan 17, 2016',
            orderStatus: 2,
            orderID: '250028',
            billingAddress: 'PO Box 16122 Collins Street West <br> Victoria 8007 Australia <br> Phone: +123 456 7890 <br> Email: demo@core.com <br> Web: www.core.com',
            shippingAddress: 'PO Box 16122 Collins Street West <br> Victoria 8007 Australia <br> Phone: +123 456 7890 <br> Email: demo@core.com <br> Web: www.core.com'
          }
        ],
        orderSummaryFields: [
          {
            key: 'id',
            label: '#'
          },
          {
            key: 'item',
            label: 'Item'
          },
          {
            key: 'quantity',
            label: 'Quantity'
          },
          {
            key: 'price',
            label: 'Price'
          },
          {
            key: 'total',
            label: 'Total'
          }
        ],
        orderSummary: [
          {
            id: 1,
            item: {
              title: 'Web Design',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            quantity: '5',
            price: '$120',
            total: '$2,880.00'
          },
          {
            id: 2,
            item: {
              title: 'Web Design',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            quantity: '5',
            price: '$120',
            total: '$2,880.00'
          },
          {
            id: 3,
            item: {
              title: 'Web Design',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            quantity: '5',
            price: '$120',
            total: '$2,880.00'
          },
          {
            id: 4,
            item: {
              title: 'Web Design',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            quantity: '5',
            price: '$120',
            total: '$2,880.00'
          }
        ],
        OrderDetailField: [
          {
            key: 'bank',
            label: 'Bank'
          },
          {
            key: 'accNo',
            label: 'Acc.No'
          },
          {
            key: 'dueDate',
            label: 'Due Date'
          },
          {
            key: 'subTotal',
            label: 'Sub-total'
          },
          {
            key: 'discount',
            label: 'Discount'
          },
          {
            key: 'total',
            label: 'Total'
          }
        ],
        OrderDetails: [
          {
            bank: 'Threadneedle St',
            accNo: '12333456789',
            dueDate: '12 November 2019',
            subTotal: '$4597.50',
            discount: '10%',
            total: '$4137.75 USD'
          }
        ],
        note: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
      }
    }
  },
  mounted () {
    core.index()
  }
}
</script>
