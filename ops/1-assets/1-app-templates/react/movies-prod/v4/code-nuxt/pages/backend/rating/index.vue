<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Rating Lists
              </h4>
            </div>
          </div>
          <div class="iq-card-body">
            <div class="table-responsive">
              <table class="data-tables table movie_table" style="width:100%">
                <thead>
                  <tr>
                    <th style="width: 5%;">
                      No
                    </th>
                    <th style="width: 5%;">
                      Category
                    </th>
                    <th style="width: 15%;">
                      Name
                    </th>
                    <th style="width: 30%;">
                      Description
                    </th>
                    <th style="width: 15%;">
                      Release Date
                    </th>
                    <th style="width: 10%;">
                      Rating
                    </th>
                    <th style="width: 10%;">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in ratings" :key="index">
                    <td>{{ item.no }}</td>
                    <td>
                      {{ item.category }}
                    </td>
                    <td><p>{{ item.name }}</p></td>
                    <td>
                      <p class="mb-0">
                        {{ item.desc }}
                      </p>
                    </td>
                    <td>
                      {{ item.releasedate }}
                    </td>
                    <td><i class="las la-star text-primary mr-2" />{{ item.rating }}</td>
                    <td>
                      <div class="flex align-items-center list-user-action">
                        <a v-b-tooltip:top class="iq-bg-warning" title="View" href="#"><i class="lar la-eye" /></a>
                        <a v-b-tooltip:top class="iq-bg-success" title="Edit" href="#"><i class="ri-pencil-line" /></a>
                        <a v-b-tooltip:top class="iq-bg-primary" title="Delete" href="#"><i class="ri-delete-bin-line" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../assets/app/app'
export default {
  layout: 'BackendLayout',
  name: 'Rating',
  data () {
    return {
      ratings: [
        {
          no: '1',
          category: 'Movie',
          name: 'Man of Street',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          releasedate: '2017',
          rating: '9.2'
        },
        {
          no: '2',
          category: 'Show',
          name: 'Cursed',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          releasedate: '2012',
          rating: '8.5'
        },
        {
          no: '3',
          category: 'Movie',
          name: 'Veronica',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          releasedate: '2018',
          rating: '7.0'
        },
        {
          no: '4',
          category: 'Movie',
          name: 'Troll Hunters',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          releasedate: '2020',
          rating: '9.5'
        },
        {
          no: '5',
          category: 'Show',
          name: 'Gran Torino',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          releasedate: '2019',
          rating: '7.5'
        }
      ]
    }
  },
  mounted () {
    core.index()
    core.initDataTable()
  },
  methods: {
  }
}
</script>
