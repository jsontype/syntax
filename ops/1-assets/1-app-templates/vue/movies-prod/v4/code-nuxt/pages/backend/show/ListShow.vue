<template>
  <b-container fluid>
    <b-row class="row">
      <div class="col-sm-12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Show Lists
              </h4>
            </div>
            <div class="iq-card-header-toolbar d-flex align-items-center">
              <nuxt-link to="/backend/show/AddShow" class="btn btn-primary">
                Add Show
              </nuxt-link>
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
                    <th>Language</th>
                    <th style="width:20%">
                      Description
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(show,index) in showList" :key="index">
                    <td>
                      <div class="media align-items-center">
                        <div class="iq-movie">
                          <a href="javascript:void(0);"><img
                            :src="show.file"
                            class="img-border-radius avatar-40 img-fluid"
                            alt=""
                          ></a>
                        </div>
                        <div class="media-body text-white text-left ml-3">
                          <p class="mb-0">
                            {{ show.name }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{{ show.quality }}</td>
                    <td>{{ show.category }}</td>
                    <td>{{ show.lang }}</td>
                    <td>
                      <p>{{ show.description }}</p>
                    </td>
                    <td>
                      <div class="flex align-items-center list-user-action">
                        <a
                          v-b-tooltip.top
                          class="iq-bg-warning"
                          title="View"
                          href="#"
                        ><i class="lar la-eye" /></a>
                        <nuxt-link
                          v-b-tooltip.top
                          to="/backend/show/AddShow"
                          class="iq-bg-success"
                          title="Edit"
                          href="#"
                        >
                          <i class="ri-pencil-line" />
                        </nuxt-link>
                        <a
                          v-b-tooltip.top
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
      </div>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../assets/app/app'
export default {
  layout: 'BackendLayout',
  name: 'ListShow',
  data () {
    return {
      showList: [
        {
          id: '1',
          name: 'Arrival 1999',
          category: 'Thriller',
          seasons: '2 Seasons',
          quality: 'Full HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/07.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '2',
          name: 'Day of Darkness',
          category: 'Drama',
          seasons: '3 Seasons',
          quality: 'Full HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/08.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '3',
          name: 'Don Jon',
          category: 'Action',
          seasons: '3 Seasons',
          quality: 'HD',
          lang: 'Hindi',
          file: require('@/assets/images/show-thumb/06.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '4',
          name: 'Megafun',
          category: 'Horror',
          seasons: '3 Seasons',
          quality: 'Full HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/04.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '5',
          name: 'My True Friends',
          category: 'Action',
          seasons: '1 Seasons',
          quality: 'HD',
          lang: 'Hindi',
          file: require('@/assets/images/show-thumb/10.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '6',
          name: 'Night Mare',
          category: 'Thriller',
          seasons: '2 Seasons',
          quality: 'HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/01.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '7',
          name: 'Portable',
          category: 'Horror',
          seasons: '1 Seasons',
          quality: 'HD',
          lang: 'Hindi',
          file: require('@/assets/images/show-thumb/05.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '8',
          name: 'Suffered',
          category: 'Drama',
          seasons: '4 Seasons',
          quality: 'Full HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/02.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '9',
          name: 'The Witcher',
          category: 'Action',
          seasons: '3 Seasons',
          quality: 'Full HD',
          lang: 'Hindi',
          file: require('@/assets/images/show-thumb/03.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

        },
        {
          id: '10',
          name: 'Troll Hunters',
          category: 'Horror',
          seasons: '1 Seasons',
          quality: 'Full HD',
          lang: 'English',
          file: require('@/assets/images/show-thumb/09.jpg'),
          banner: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          episodes: [
            {
              id: 1,
              episode: 'Episode 1',
              sesson: 'Sesson 1',
              name: 'Arrival-1',
              file: require('@/assets/images/movie-thumb/01.jpg'),
              duration: '2h m',
              date: '2020-1-11',
              text: 'Lorem ipsum dolor sit amet',
              video_link: ''

            }
          ]

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
