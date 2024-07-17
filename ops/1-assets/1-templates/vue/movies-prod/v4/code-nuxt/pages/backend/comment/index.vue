<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Comment Lists
              </h4>
            </div>
          </div>
          <div class="iq-card-body">
            <div class="table-responsive">
              <table class="data-tables table movie_table" style="width:100%">
                <thead>
                  <tr>
                    <th style="width: 10%;">
                      No
                    </th>
                    <th style="width: 20%;">
                      Title
                    </th>
                    <th style="width: 10%;">
                      Author
                    </th>
                    <th style="width: 25%;">
                      Description
                    </th>
                    <th style="width: 15%;">
                      Created Date
                    </th>
                    <th style="width: 10%;">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in comment" :key="index">
                    <td>{{ item.no }}</td>
                    <td>
                      {{ item.title }}
                    </td>
                    <td>{{ item.author }}</td>
                    <td>
                      <p class="mb-0">
                        {{ item.desc }}
                      </p>
                    </td>
                    <td>
                      {{ item.date }}
                    </td>
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
  name: 'Comment',
  data () {
    return {
      comment: [
        {
          no: '1',
          title: 'Lorem ipsum dolor',
          author: 'Nick Allen',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '21 Jul, 2020'
        },
        {
          no: '2',
          title: 'Lorem ipsum dolor',
          author: 'Hans Olo',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '12 Jun, 2020'
        },
        {
          no: '3',
          title: 'Lorem ipsum dolor',
          author: 'Lynn Guini',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '01 Jan, 2020'
        },
        {
          no: '4',
          title: 'Lorem ipsum dolor',
          author: 'aaronottix',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '19 Mar, 2020'
        },
        {
          no: '5',
          title: 'Lorem ipsum dolor',
          author: 'Marge Arita',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '21 Aug, 2020'
        },
        {
          no: '6',
          title: 'Lorem ipsum dolor',
          author: 'Bill Dabear',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '15 May, 2020'
        },
        {
          no: '7',
          title: 'Lorem ipsum dolor',
          author: 'Brock Lee',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          date: '07 Jul, 2020'
        }
      ]
    }
  },
  mounted () {
    // core.index()
    core.initDataTable()
  },
  methods: {
  }
}
</script>
