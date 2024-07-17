<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12">
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">{{formType || 'Add'}} Category</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="row">
                  <div class="col-lg-12">
                    <b-form @submit.prevent="processSave()">
                        <b-form-group >
                          <b-form-input type="text" class="form-control" v-model="categories.name" placeholder="Name"  required/>
                        </b-form-group>
                        <b-form-group >
                          <b-form-textarea id="text" v-model="categories.description" name="text" rows="5" class="form-control"
                          placeholder="Description" required></b-form-textarea>
                        </b-form-group>
                        <b-form-group label="Status">
                          <b-form-radio-group
                            :options="options"
                            class="radio-btn"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                            v-model="categories.status"
                          ></b-form-radio-group>
                        </b-form-group>
                        <b-form-group>
                          <button class="btn btn-primary mr-1">Submit</button>
                          <button type="reset" class="btn btn-danger ml-3">cancel</button>
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
import { core } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'

export default {
  name: 'AddCategory',
  mounted () {
    core.index()
    if ('id' in this.$route.params) {
      const selectedCategory = this.categoryList.filter(item => {
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
  computed: {
    ...mapGetters({
      categoryList: 'Category/categoryState'
    })
  },
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
      ]
    }
  },
  methods: {
    saveCategory () {
      const category = this.categoryList
      this.categories.id = parseInt(category[category.length - 1].id) + 1
      this.$store.dispatch('Category/addCategoryAction', this.categories)
      this.$router.push('/category/category-list')
    },
    updateCategory () {
      this.$store.dispatch('Category/updateCategoryAction', this.categories)
      this.$router.push('/category/category-list')
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
