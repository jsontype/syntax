<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">Movie Lists</h4>
            </div>
            <div class="iq-card-header-toolbar d-flex align-items-center">
                 <router-link :to="{ name: 'movie.add-movie'}"  class="btn btn-primary">Add Movie</router-link>
            </div>
          </div>
          <div class="iq-card-body">
            <div class="table-view">
                <table class="data-tables table movie_table " style="width:100%">
                  <thead>
                      <tr>
                        <th>Movie</th>
                        <th>Quality</th>
                        <th>Category</th>
                        <th>Release Year</th>
                        <th>Language</th>
                        <th style="width: 20%;">Description</th>
                        <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(movie,index) in this.movieList" :key="index">
                        <td>
                            <div class="media align-items-center">
                              <div class="iq-movie">
                                  <a href="javascript:void(0);"><img
                                        :src="movie.file"
                                        class="img-border-radius avatar-40 img-fluid" alt=""></a>
                              </div>
                              <div class="media-body text-white text-left ml-3">
                                  <p class="mb-0">{{movie.name}}</p>
                                  <small>{{movie.duration}}</small>
                              </div>
                            </div>
                        </td>
                        <td>{{movie.quality}}</td>
                        <td>{{movie.category}}</td>
                        <td>{{movie.releseDate}}</td>
                        <td>{{movie.lang}}</td>
                        <td>
                            <p>
                              {{movie.description}}
                            </p>
                        </td>
                        <td>
                            <div class="flex align-items-center list-user-action">
                              <a class="iq-bg-warning" v-b-tooltip:top title="View" href="#"><i class="lar la-eye"></i></a>
                              <router-link :to="{ name: 'movie.update-movie', params: { id: movie.id } }"  class="iq-bg-success" v-b-tooltip:top title="Edit" href="#"><i class="ri-pencil-line"></i></router-link>
                              <a class="iq-bg-primary" v-b-tooltip:top title="Delete" href="#" @click="removeMovie(movie)"><i class="ri-delete-bin-line"></i></a>
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
import { core } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieList',
  mounted () {
    core.index()
    core.initDataTable()
  },
  computed: {
    ...mapGetters({
      movieList: 'Movie/movieState'
    })
  },
  data () {
    return {
      newID: 0
    }
  },
  methods: {
    removeMovie (item) {
      this.$store.dispatch('Movie/removeMovieAction', item)
    }
  }
}
</script>
