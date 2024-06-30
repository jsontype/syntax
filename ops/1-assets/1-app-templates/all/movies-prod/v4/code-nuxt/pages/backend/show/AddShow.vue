<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Add Show
              </h4>
            </div>
          </div>
          <div class="iq-card-body">
            <b-form>
              <b-row class="row">
                <b-form-group class="col-md-6">
                  <input v-model="shows.name" type="text" class="form-control" placeholder="Title" required>
                </b-form-group>
                <b-form-group class="col-md-6 ">
                  <b-form-select v-model="shows.lang" class="form-control" :options="languageSelect" required>
                    <option value="">
                      Select Language
                    </option>
                  </b-form-select>
                </b-form-group>
                <b-form-group class="col-md-6 ">
                  <b-form-select v-model="shows.category" class="form-control" required>
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
                <b-form-group class="col-md-6 " required>
                  <b-form-select v-model="shows.quality" class="form-control" :options="qualitySelect">
                    <option value="">
                      Select Quality
                    </option>
                  </b-form-select>
                </b-form-group>
                <b-form-group class="col-12 form_gallery">
                  <b-form-file
                    placeholder="Upload Image"
                    class="form_gallery-upload"
                    accept="image/jpeg, image/png, image/gif"
                    @change="fileUpload"
                  />
                </b-form-group>
                <b-form-group class="col-md-6 form_gallery ">
                  <label id="gallery3" for="show2">Upload Show Banner</label>
                  <input
                    id="show2"
                    data-name="#gallery3"
                    name="gallery"
                    class="form_gallery-upload"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                  >
                </b-form-group>
                <b-form-group class="col-12 ">
                  <b-form-textarea
                    id="text1"
                    v-model="shows.description"
                    name="text"
                    rows="5"
                    class="form-control"
                    placeholder="Description"
                    required
                  />
                </b-form-group>
              </b-row>
              <b-row class="row">
                <div class="col-12 form-group">
                  <button type="submit" class=" btn btn-primary mr-2">
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
export default {
  layout: 'BackendLayout',
  name: 'AddShow',
  data () {
    return {
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
      ],
      categoryList: [
        { id: '1', name: 'Drama', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '2', name: 'Comedy', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '3', name: 'Romance', description: 'Lorem ipsum dolor sit amet', movie: '20' }
      ],
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
      }
    }
  },
  mounted () {

  },
  methods: {
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
