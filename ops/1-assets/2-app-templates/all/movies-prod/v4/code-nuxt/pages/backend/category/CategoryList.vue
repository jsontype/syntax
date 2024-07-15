<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Category Lists
              </h4>
            </div>
            <div class="iq-card-header-toolbar d-flex align-items-center">
              <nuxt-link to="/backend/category/AddCategory" class="btn btn-primary">
                Add Category
              </nuxt-link>
            </div>
          </div>
          <div class="iq-card-body">
            <div class="table-view">
              <table class="data-tables table movie_table " style="width:100%">
                <thead>
                  <tr>
                    <th style="width:10%;">
                      No
                    </th>
                    <th style="width:20%;">
                      Name
                    </th>
                    <th style="width:40%;">
                      Description
                    </th>
                    <th style="width:10%;">
                      Movie
                    </th>
                    <th style="width:20%;">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(category,index) in categoryList" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                      <p>{{ category.description }}</p>
                    </td>
                    <td>20</td>
                    <td>
                      <div class="flex align-items-center list-user-action">
                        <a
                          v-b-tooltip:top
                          class="iq-bg-warning"
                          title="View"
                          href="#"
                        ><i class="lar la-eye" /></a>
                        <nuxt-link
                          v-b-tooltip:top
                          to="/backend/category/AddCategory"
                          class="iq-bg-success"
                          title="Edit"
                        >
                          <i class="ri-pencil-line" />
                        </nuxt-link>
                        <a
                          v-b-tooltip:top
                          class="iq-bg-primary"
                          title="Delete"
                          href="#"
                        ><i
                          class="ri-delete-bin-line"
                        /></a>
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
  name: 'CategoryList',
  data () {
    return {
      categoryList: [
        { id: '1', name: 'Drama', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '20' },
        { id: '2', name: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '10' },
        { id: '3', name: 'Thriller', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '40' },
        { id: '4', name: 'Thriller', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '40' },
        { id: '5', name: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '45' },
        { id: '6', name: 'Horror', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '50' },
        { id: '7', name: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '70' },
        { id: '8', name: 'Drama', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '80' },
        { id: '9', name: 'Drama', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '30' },
        { id: '10', name: 'Horror', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', movie: '65' }
      ]
    }
  },
  computed: {
  },
  mounted () {
    // core.index()
    core.initDataTable()
  },
  methods: {

  }
}
</script>
