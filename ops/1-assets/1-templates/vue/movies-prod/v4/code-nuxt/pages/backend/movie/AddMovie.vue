<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                {{ formType || 'Add' }}  Movie
              </h4>
            </div>
          </div>
          <div class="iq-card-body">
            <b-form >
              <b-row class="row">
                <b-col lg="7">
                  <b-row class="row">
                    <b-form-group class="col-12">
                      <b-form-input v-model="movies.name" type="text" class="form-control" placeholder="Title" required />
                    </b-form-group>
                    <b-form-group class="col-12 form_gallery">
                      <b-form-file
                        placeholder="Upload Image"
                        class="form_gallery-upload"
                        accept="image/jpeg, image/png, image/gif"
                        @change="fileUpload"
                      />
                      <div class="mt-3">
                        Selected file: {{ movies.file ? movies.file.name : '' }}
                      </div>
                    </b-form-group>
                    <b-form-group class="col-md-6 ">
                      <b-form-select v-model="movies.category" class="form-control" required>
                        <option value="">
                          Select Category
                        </option>
                        <b-select-option
                          v-for="(selectOption, indexOpt) in categoryList"
                          :key="indexOpt"
                          v-model="selectOption.name "
                        >
                          {{ selectOption.name }}
                        </b-select-option>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group class="col-sm-6">
                      <b-form-select v-model="movies.quality" class="form-control" :options="qualitySelect">
                        <option value="">
                          Select Quality
                        </option>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group class="col-12 ">
                      <b-form-textarea
                        id="text"
                        v-model="movies.description"
                        name="text"
                        rows="5"
                        class="form-control"
                        placeholder="Description"
                        required
                      />
                    </b-form-group>
                  </b-row>
                </b-col>
                <b-col lg="5">
                  <div class="d-block position-relative">
                    <div class="form_video-upload">
                      <input type="file" accept="video/mp4,video/x-m4v,video/*" multiple>
                      <p>Upload video</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="row">
                <div class="col-sm-6 form-group">
                  <b-form-input v-model="movies.releseDate" type="text" class="form-control" placeholder="Release year" required />
                </div>
                <div class="col-sm-6 form-group">
                  <b-form-select v-model="movies.lang" class="form-control" :options="languageSelect" required>
                    <option value="">
                      Select Language
                    </option>
                  </b-form-select>
                </div>
                <div class="col-sm-12 form-group">
                  <b-form-input v-model="movies.duration" type="text" class="form-control" placeholder="Movie Duration" required />
                </div>
                <div class="col-12 form-group ">
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" class="btn btn-danger">
                    Cancel
                  </button>
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
// import { core } from '../../../assets/app/app'
export default {
  layout: 'BackendLayout',
  name: 'AddMovie',
  data () {
    return {
      formType: false,
      defultImage: require('../../../assets/images/show-thumb/01.jpg'),
      item: {},
      movies: {
        id: 0,
        name: '',
        description: '',
        category: '',
        quality: '',
        releseDate: '',
        lang: '',
        duration: '',
        video_link: '',
        file: ''
      },
      qualitySelect: [
        { value: null, text: 'Choose quality', disabled: true },
        { value: 'FULLHD', text: 'FULLHD' },
        { value: 'HD', text: 'HD' }
      ],
      languageSelect: [
        { value: null, text: 'Choose Language', disabled: true },
        { value: 'English', text: 'English' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Tamil', text: 'Tamil' },
        { value: 'Gujarati', text: 'Gujarati' }
      ],
      categoryList: [
        { id: '1', name: 'Drama', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '2', name: 'Comedy', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '3', name: 'Romance', description: 'Lorem ipsum dolor sit amet', movie: '20' }
      ],
      movieList: [
        {
          id: '1',
          name: '1980',
          description: 'Lorem ipsum dolor sit amet',
          category: 'Action',
          quality: 'HD',
          releseDate: '2010',
          lang: 'Hndi',
          duration: '2h 23m',
          video_link: '',
          file: require('@/assets/images/movie-thumb/07.jpg')
        }
      ]
    }
  },
  computed: {
  },
  mounted () {
    // core.index()
    if ('id' in this.$route.params) {
      const selectedMovie = this.movieList.filter((item) => {
        if (item.id === this.$route.params.id) {
          return item
        }
      })
      if (selectedMovie) {
        this.movies = selectedMovie[0]
        this.formType = 'Edit'
      }
    }
  },
  methods: {
    saveMovie () {
      const movie = this.movieList
      this.movies.id = parseInt(movie[movie.length - 1].id) + 1
      this.$store.dispatch('Movie/addMovieAction', this.movies)
      this.$router.push('backend/movie/MovieList')
    },
    updateMovie () {
      this.movies.file = this.defultImage
      this.$store.dispatch('Movie/updateMovieAction', this.movies)
      this.$router.push('backend/movie/MovieList')
    },
    processSave () {
      if ('id' in this.$route.params) {
        this.updateMovie()
      } else {
        this.saveMovie()
      }
    },
    fileUpload (e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        this.movies.file = reader.result
      }
    }
  }
}
</script>
