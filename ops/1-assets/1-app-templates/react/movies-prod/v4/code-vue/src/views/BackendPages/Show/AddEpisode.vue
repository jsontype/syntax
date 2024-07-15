<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">{{shows.name}} Episode Lists</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-view">
                  <table class="data-tables table movie_table " style="width:100%">
                    <thead>
                        <tr >
                          <th>Image</th>
                          <th>Episode</th>
                          <th>Sesson</th>
                          <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(episode,index) in this.shows.episodes" :key="index">
                          <td>
                              <img :src="episode.file "
                                          class="img-border-radius avatar-40 img-fluid" alt="">
                          </td>
                          <td >{{episode.name}}</td>
                          <td >{{episode.sesson}}</td>
                          <td>
                              <div class="flex align-items-center list-user-action">
                                <a @click="editEpisode(episode)" class="iq-bg-success"><i class="ri-pencil-line"></i></a>
                                 <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                    data-original-title="Delete" href="#" @click="removeEpisode(episode)"><i
                                      class="ri-delete-bin-line"></i></a>
                            </div>
                          </td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">{{formType || 'Add'}} Episode</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <b-form  @submit.prevent="processSave()">
                  <b-row class="row">
                    <div class="col-12">
                        <h5 class="text-white mb-3">{{formType || 'Add'}} Episode</h5>
                    </div>
                  </b-row>
                  <b-row class="row">
                    <b-col lg="7" >
                      <b-row class="row">
                        <b-form-group class="col-md-6 ">
                             <b-form-select class="form-control"  v-model="episodes.sesson" :options="sesoneSelect"  required>
                              <option value="">Select Sesson</option>
                             </b-form-select>
                        </b-form-group>
                        <b-form-group class="col-md-6 ">
                            <b-form-input  type="text" v-model="episodes.episode" class="form-control" placeholder="Episode No."  />
                        </b-form-group>
                        <b-form-group class="col-md-6 ">
                            <b-form-input type="text" v-model="episodes.name" class="form-control" placeholder="Episode Name" />
                        </b-form-group>
                        <b-form-group class="col-12 form_gallery">
                          <b-form-file
                            @change="fileUpload"
                            placeholder="Upload Image"
                            class="form_gallery-upload"
                            accept="image/jpeg, image/png, image/gif"
                          ></b-form-file>
                        </b-form-group>
                        <b-form-group class="col-md-6 ">
                            <b-form-input type="text"  v-model="episodes.duration" class="form-control" placeholder="Running Time in Minutes" />
                        </b-form-group>
                        <b-form-group class="col-md-6 ">
                          <flat-pickr :config="dateInput" v-model="episodes.date" id="exampleInputdate" class="form-control date-input basicFlatpickr" />
                        </b-form-group>
                        <b-form-group class="col-12 ">
                            <b-form-textarea  id="text" name="text" rows="5" class="form-control" v-model="episodes.text"
                              placeholder="Description"></b-form-textarea>
                        </b-form-group>
                      </b-row>
                    </b-col>
                    <div class="col-lg-5">
                        <div class="d-block position-relative">
                          <div class="form_video-upload">
                              <input type="file" accept="video/mp4,video/x-m4v,video/*" multiple />
                              <p>Upload video</p>
                          </div>
                        </div>
                    </div>
                  </b-row>
                  <b-row class="row">
                    <div class="col-12 form-group">
                        <button type="submit" class=" btn btn-primary mr-2">Submit</button>
                        <button type="reset" @click="reset()" class="btn btn-danger">cancel</button>
                    </div>
                  </b-row>
              </b-form>
            </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../config/pluginInit'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddEpisode',
  mounted () {
    core.index()
    if ('id' in this.$route.params) {
      const selectedShow = this.showList.filter(item => {
        if (item.id === this.$route.params.id) {
          return item
        }
      })
      if (selectedShow) {
        this.shows = selectedShow[0]
      }
    }
  },
  data () {
    return {
      shows: {},
      formType: false,
      dateInput: {
        dateFormat: 'Y-m-d'
      },
      defultImage: require('../../../assets/images/movie-thumb/01.jpg'),
      sesoneSelect: [
        { value: 'Season 1', text: 'Season 1' },
        { value: 'Season 2', text: 'Season 2' },
        { value: 'Season 3', text: 'Season 3' },
        { value: 'Season 4', text: 'Season 4' }
      ],
      episodes: {
        id: 0,
        episode: '',
        sesson: '',
        name: '',
        file: '',
        duration: '',
        date: new Date(),
        text: '',
        video_link: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      categoryList: 'Category/categoryState',
      showList: 'Show/showState'
    })
  },
  methods: {
    reset () {
      this.episodes = {}
      this.formType = false
    },
    editEpisode (episode) {
      const filterEp = this.shows.episodes.find(ep => ep.id === episode.id)
      this.episodes.id = filterEp.id
      this.episodes.episode = filterEp.episode
      this.episodes.sesson = filterEp.sesson
      this.episodes.name = filterEp.name
      this.episodes.date = filterEp.date
      this.episodes.text = filterEp.text
      this.episodes.duration = filterEp.duration
      this.formType = 'Edit'
    },
    saveEpisode () {
      const episode = this.shows.episodes
      if (episode.length > 0) {
        this.episodes.id = parseInt(episode[episode.length - 1].id) + 1
      } else {
        this.episodes.id = 1
      }
      this.$store.dispatch('Show/addEpisodeAction', { episodes: this.episodes, showId: this.$route.params.id })
      this.reset()
    },
    updateEpisode () {
      this.episodes.file = this.defultImage
      this.$store.dispatch('Show/updateEpisodeAction', { episodes: this.episodes, showId: this.$route.params.id })
      this.reset()
    },
    processSave () {
      if (!this.formType) {
        this.saveEpisode()
      } else {
        this.updateEpisode()
      }
    },
    ...mapActions({
      removeEpisode: 'Show/removeEpisodeAction'
    }),
    fileUpload (e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        this.episodes.file = reader.result
      }
    }
  }
}
</script>
