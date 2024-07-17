<template>
  <div :class="`searchbox-datalink`" id="searchbox-datalink">
    <ul class="m-0 p-3">
      <h6>Page</h6>
      <template v-if="filteredList.length > 0">
        <li v-for="(item,index) in filteredList" :key="index" class="iq-bg-primary-hover rounded" @click="removeClass">
          <template v-if="!item.is_heading && !item.children" >
            <router-link :to="item.link" v-if="!item.is_heading" class="nav-link  pr-2" @click="removeClass">
              <i :class="item.icon" v-if="item.is_icon_class"/>
              <template v-else v-html="item.icon">
              </template>
              <span>{{ item.title }}</span>
              <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
            </router-link>
          </template>
        </li>
      </template>
      <template v-else>
        <li class="nav-link">Search Not Found</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GlobalSearch',
  props: {
    search: { type: String, default: '' },
    show: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters({
      sidebar: 'Setting/globalSearchState'
    }),
    filteredList () {
      return this.sidebar.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
  },
  data () {
    return {
      globalSearch: ''
    }
  },
  methods: {
    removeClass () {
      document.getElementById('searchbox-datalink').classList.remove('show-data')
      this.$emit('closeSearch', true)
    }
  }
}
</script>
