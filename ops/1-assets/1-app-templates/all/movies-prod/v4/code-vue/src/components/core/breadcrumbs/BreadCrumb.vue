<template>
  <b-col cols="12">
    <iq-card>
      <b-row class="d-flex align-items-center mb-2">
        <b-col md="9">
          <div class="d-flex align-items-center">
            <h4 class="mb-0 p-3 ml-2">{{ page.name }}</h4>
            <b-breadcrumb :items="page.breadCrumb" class="bg-transparent mb-0 mt-1" />
          </div>
        </b-col>
        <b-col md="3" class="text-right">
          <b-button variant="none" class="text-primary" @click="addToBookmark(currentRoute)" v-if="!selectedBookmark"><i class="ri-star-line font-size-24"></i></b-button>
          <b-button variant="none" class="text-warning" @click="removeToBookmark(currentRoute)" v-else><i class="ri-star-fill font-size-24"></i></b-button>
        </b-col>
      </b-row>
    </iq-card>
  </b-col>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BreadCrumb',
  watch: {
    $route (to, from) {
      this.checkRoute()
    }
  },
  mounted () {
    this.currentRoute = this.navList.find(item => item.link.name === this.$route.name)
    const book = this.bookmark.find(item => item.link.name === this.$route.name)
    if (book !== undefined) {
      this.selectedBookmark = true
    }
  },
  computed: {
    ...mapGetters({
      page: 'Setting/activePage',
      navList: 'Setting/globalSearchState',
      bookmark: 'Setting/bookmarkState'
    })
  },
  data () {
    return {
      bookmarkSearch: '',
      currentRoute: {},
      selectedBookmark: false
    }
  },
  methods: {
    ...mapActions({
      addToBookmarkState: 'Setting/addBookmarkAction',
      removeToBookmarkState: 'Setting/removeBookmarkAction'
    }),
    removeToBookmark (item) {
      this.removeToBookmarkState(item)
      this.selectedBookmark = false
    },
    addToBookmark (item) {
      this.addToBookmarkState(item)
      this.selectedBookmark = true
    },
    checkRoute () {
      this.currentRoute = this.navList.find(item => item.link.name === this.$route.name)
      const book = this.bookmark.find(item => item.link.name === this.$route.name)
      if (book !== undefined) {
        this.selectedBookmark = true
      } else {
        this.selectedBookmark = false
      }
    }
  }
}
</script>
