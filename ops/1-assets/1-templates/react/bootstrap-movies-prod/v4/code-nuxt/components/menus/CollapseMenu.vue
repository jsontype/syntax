<template>
  <b-collapse :id="idName" tag="ul" :class="className" :visible="open" :accordion="accordianName">
    <li v-for="(item,index) in items" :key="index" :class=" !hideListMenuTitle? 'p-0' : item.is_heading ? 'iq-menu-title' :activeLink(item) && item.children ? 'active' : activeLink(item) ? 'active' : ''">
      <i v-if="item.is_heading && hideListMenuTitle" class="ri-subtract-line" />
      <span v-if="item.is_heading && hideListMenuTitle">{{ item.title }}</span>
      <nuxt-link v-if="!item.is_heading" v-b-toggle="item.name" :to="item.link" :class="`iq-waves-effect ${activeLink(item) && item.children ? 'active' : activeLink(item) ? 'active' : ''}`">
        <i v-if="item.is_icon_class" :class="item.icon" />
        <template v-else>
          {{ item.icon }}
        </template>
        <span>{{ item.title }}</span>
        <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
        <small v-if="hideListMenuTitle" :class="item.append_class">
          {{ item.append }}
        </small>
      </nuxt-link>
      <List
        v-if="item.children"
        :items="item.children"
        :sidebar-group-title="hideListMenuTitle"
        :open="item.link.name !== '' && activeLink(item) && item.children ? true : !!(item.link.name !== '' && activeLink(item))"
        :id-name="item.name"
        :accordian-name="`sidebar-accordion-${item.class_name}`"
        :class-name="`iq-submenu ${item.class_name}`"
      />
    </li>
  </b-collapse>
</template>
<script>
// import { core } from '../../../assets/app/app'
import List from './CollapseMenu'
export default {
  name: 'List',
  components: {
    List
  },
  props: {
    items: { type: Array, default: null },
    className: { type: String, default: 'iq-menu' },
    open: { type: Boolean, default: false },
    idName: { type: String, default: 'sidebar' },
    accordianName: { type: String, default: 'sidebar' },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  computed: {
    hideListMenuTitle () {
      return this.sidebarGroupTitle
    }
  },
  
  methods: {
    activeLink (item) {
    //   return core.getActiveLink(item, this.$route.name)
    }
  }
}
</script>
