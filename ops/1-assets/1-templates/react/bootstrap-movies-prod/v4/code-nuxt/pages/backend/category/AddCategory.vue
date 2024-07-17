<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">
                Add Category
              </h4>
            </div>
          </div>
          <div class="iq-card-body">
            <div class="row">
              <div class="col-lg-12">
                <b-form>
                  <b-form-group>
                    <b-form-input v-model="categories.name" type="text" class="form-control" placeholder="Name" required />
                  </b-form-group>
                  <b-form-group>
                    <b-form-textarea
                      id="text"
                      v-model="categories.description"
                      name="text"
                      rows="5"
                      class="form-control"
                      placeholder="Description"
                      required
                    />
                  </b-form-group>
                  <b-form-group label="Status">
                    <b-form-radio-group
                      v-model="categories.status"
                      :options="options"
                      class="radio-btn"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    />
                  </b-form-group>
                  <b-form-group>
                    <button class="btn btn-primary mr-1">
                      Submit
                    </button>
                    <button type="reset" class="btn btn-danger">
                      cancel
                    </button>
                  </b-form-group>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  layout: 'BackendLayout',
  name: 'AddCategory',
  data () {
    return {
      formType: false,
      categories: {
        id: 0,
        name: '',
        description: '',
        status: ''
      },
      editing: false,
      newID: 0,
      options: [
        { item: 'enable', name: 'enable' },
        { item: 'disable', name: 'disable' }
      ],
      categoryList: [
        { id: '1', name: 'Drama', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '2', name: 'Comedy', description: 'Lorem ipsum dolor sit amet', movie: '20' },
        { id: '3', name: 'Romance', description: 'Lorem ipsum dolor sit amet', movie: '20' }
      ]
    }
  },
  computed: {
  },
  mounted () {
    // core.index()
    if ('id' in this.$route.params) {
      const selectedCategory = this.categoryList.filter((item) => {
        if (item.id === this.$route.params.id) {
          return item
        }
      })
      if (selectedCategory) {
        this.categories = selectedCategory[0]
        this.formType = 'Edit'
      }
    }
  },
  methods: {
    saveCategory () {
      const category = this.categoryList
      this.categories.id = parseInt(category[category.length - 1].id) + 1
      this.$store.dispatch('Category/addCategoryAction', this.categories)
      this.$router.push('backend/category/CategoryList')
    },
    updateCategory () {
      this.$store.dispatch('Category/updateCategoryAction', this.categories)
      this.$router.push('backend/category/CategoryList')
    },
    processSave () {
      if ('id' in this.$route.params) {
        this.updateCategory()
      } else {
        this.saveCategory()
      }
    }
  }
}
</script>
