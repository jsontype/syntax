<template>
  <b-container fluid>
    <b-row class="row">
      <div class="col-sm-12">
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">Show Lists</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                 <router-link :to="{ name: 'show.add-show'}"  class="btn btn-primary">Add Show</router-link>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-view">
                  <table class="data-tables table movie_table " style="width:100%">
                    <thead>
                        <tr>
                          <th>Show</th>
                          <th>Quality</th>
                          <th>Category</th>
                          <th>Seasons</th>
                          <th>Language</th>
                          <th style="width:20%">Description</th>
                          <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(show,index) in this.showList" :key="index">
                          <td>
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img :src="show.file"
                                          class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">{{show.name}}</p>
                                </div>
                              </div>
                          </td>
                          <td>{{show.quality}}</td>
                          <td>{{show.category}}</td>
                          <td>{{show.seasons}}</td>
                          <td>{{show.lang}}</td>
                          <td>
                              <p>{{show.description}}</p>
                          </td>
                          <td>
                              <div class="flex align-items-center list-user-action">
                                <a class="iq-bg-warning" v-b-tooltip.top title="View" href="#"><i class="lar la-eye"></i></a>
                                <router-link :to="{ name: 'show.update-show', params: { id: show.id } }" class="iq-bg-success" v-b-tooltip.top title="Edit" href="#"><i class="ri-pencil-line"></i></router-link>
                                 <a class="iq-bg-primary" v-b-tooltip.top title="Delete" href="#" @click="removeShow(show)"><i class="ri-delete-bin-line"></i></a>
                            </div>
                          </td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../config/pluginInit'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListShow',
  mounted () {
    core.index()
    core.initDataTable()
  },
  computed: {
    ...mapGetters({
      showList: 'Show/showState'
    })
  },
  methods: {
    ...mapActions({
      removeShow: 'Show/removeShowAction'
    })
  },
  data () {
    return {
      newID: 0
    }
  }
}
</script>
