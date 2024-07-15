<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Movie Lists
              </h4>
            </div>
            <div class="iq-card-header-toolbar d-flex align-items-center">
              <nuxt-link to="/backend/movie/AddMovie" class="btn btn-primary">
                Add Movie
              </nuxt-link>
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
                    <th style="width: 20%;">
                      Description
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(movie,index) in movieList" :key="index">
                    <td>
                      <div class="media align-items-center">
                        <div class="iq-movie">
                          <a href="javascript:void(0);"><img
                            :src="movie.file"
                            class="img-border-radius avatar-40 img-fluid"
                            alt=""
                          ></a>
                        </div>
                        <div class="media-body text-white text-left ml-3">
                          <p class="mb-0">
                            {{ movie.name }}
                          </p>
                          <small>{{ movie.duration }}</small>
                        </div>
                      </div>
                    </td>
                    <td>{{ movie.quality }}</td>
                    <td>{{ movie.category }}</td>
                    <td>{{ movie.releseDate }}</td>
                    <td>{{ movie.lang }}</td>
                    <td>
                      <p>
                        {{ movie.description }}
                      </p>
                    </td>
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
                          to="/backend/movie/AddMovie"
                          class="iq-bg-success"
                          title="Edit"
                          href="#"
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
  name: 'MovieList',
  data () {
    return {
      movieList: [
        {
          id: '1',
          name: '1980',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Action',
          quality: 'HD',
          releseDate: '2010',
          lang: 'Hindi',
          duration: '2h 23m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/02.jpg')
        },
        {
          id: '2',
          name: 'Boop Bitty',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Thriller',
          quality: 'Full HD',
          releseDate: '2017',
          lang: 'English',
          duration: '2h 40m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/08.jpg')
        },
        {
          id: '3',
          name: 'Burning',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Horror',
          quality: 'HD',
          releseDate: '2020',
          lang: 'Hindi',
          duration: '3h',
          video_link: '',
          file: require('@/assets/images/movie-thumb/03.jpg')
        },
        {
          id: '4',
          name: 'Champions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Drama',
          quality: 'Full HD',
          releseDate: '2019',
          lang: 'English',
          duration: '2h 15m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/06.jpg')
        },
        {
          id: '5',
          name: 'Dino Land',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Thriller',
          quality: 'HD',
          releseDate: '2015',
          lang: 'English',
          duration: '1h 40m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/04.jpg')
        },
        {
          id: '6',
          name: 'Last Night',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Horror',
          quality: 'Full HD',
          releseDate: '2019',
          lang: 'English',
          duration: '3h 15m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/01.jpg')
        },
        {
          id: '7',
          name: 'Last Race',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Action',
          quality: 'HD',
          releseDate: '2020',
          lang: 'Hindi',
          duration: '2h 20m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/05.jpg')
        },
        {
          id: '8',
          name: 'Looters',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Drama',
          quality: 'Full HD',
          releseDate: '2014',
          lang: 'English',
          duration: '2h 30m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/07.jpg')
        },
        {
          id: '9',
          name: 'The Illusion',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          category: 'Drama',
          quality: 'Full HD',
          releseDate: '2018',
          lang: 'English',
          duration: '2h 30m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/10.jpg')
        },
        {
          id: '10',
          name: 'The Last Breath',
          description: 'Lorem ipsum dolor sit amet',
          category: 'Action',
          quality: 'Full HD',
          releseDate: '2013',
          lang: 'Hindi',
          duration: '2h 30m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/09.jpg')
        }
      ]

    }
  },
  mounted () {
    core.initDataTable()
  },
  methods: {
  }
}
</script>
