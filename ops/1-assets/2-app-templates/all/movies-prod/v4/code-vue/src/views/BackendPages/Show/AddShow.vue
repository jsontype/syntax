<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">Add Show</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <b-form @submit.prevent="processSave()">
                  <b-row class="row">
                    <b-form-group class="col-md-6">
                        <input v-model="shows.name" type="text" class="form-control" placeholder="Title" required>
                    </b-form-group>
                    <b-form-group class="col-md-6 ">
                      <b-form-select  class="form-control" v-model="shows.lang" :options="languageSelect" required>
                        <option value="">Select Language</option>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group class="col-md-6 ">
                       <b-form-select v-model="shows.category"  class="form-control" required>
                          <option value="">Select Category</option>
                              <b-select-option  v-model="selectOption.name " v-for="(selectOption, indexOpt) in categoryList"  :key="indexOpt"
                               >
                                  {{ selectOption.name }}
                              </b-select-option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group class="col-md-6 " required>
                       <b-form-select class="form-control" v-model="shows.quality" :options="qualitySelect">
                         <option value="">Select Quality</option>
                       </b-form-select>
                    </b-form-group>
                      <b-form-group class="col-12 form_gallery">
                          <b-form-file
                            @change="fileUpload"
                            placeholder="Upload Image"
                            class="form_gallery-upload"
                            accept="image/jpeg, image/png, image/gif"
                          ></b-form-file>
                        </b-form-group>
                    <b-form-group class="col-md-6 form_gallery ">
                        <label id="gallery3" for="show2">Upload Show Banner</label>
                        <input data-name="#gallery3" id="show2" name="gallery" class="form_gallery-upload"
                          type="file" accept=".png, .jpg, .jpeg">
                    </b-form-group>
                    <b-form-group class="col-12 ">
                        <b-form-textarea v-model="shows.description" id="text1" name="text" rows="5" class="form-control"
                          placeholder="Description" required></b-form-textarea>
                    </b-form-group>
                  </b-row>
                  <b-row class="row">
                    <div class="col-12 form-group">
                        <button type="submit" class=" btn btn-primary mr-2">Submit</button>
                        <button type="reset" class="btn btn-danger">cancel</button>
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
import { mapGetters } from 'vuex'

export default {
  name: 'AddShow',
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
  computed: {
    ...mapGetters({
      categoryList: 'Category/categoryState',
      showList: 'Show/showState'
    })
  },
  data () {
    return {
      item: {},
      defultImage: require('../../../assets/images/show-thumb/01.jpg'),
      shows: {
        id: this.$route.params.id1,
        name: '',
        category: '',
        quality: '',
        lang: '',
        file: '',
        banner: '',
        description: '',
        episodes: []
      },
      selected: null,
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
      ]
    }
  },
  methods: {
    saveShow () {
      const show = this.showList
      this.shows.id = parseInt(show[show.length - 1].id) + 1
      this.$store.dispatch('Show/addShowAction', this.shows)
      this.$router.push('/show/show-list')
    },
    updateShow () {
      this.shows.file = this.defultImage
      this.$store.dispatch('Show/updateShowAction', this.shows)
      this.$router.push('/show/show-list')
    },
    processSave () {
      if ('id' in this.$route.params) {
        this.updateShow()
      } else {
        this.saveShow()
      }
    },
    fileUpload (e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        this.shows.file = reader.result
      }
    }
  }
}
</script>
