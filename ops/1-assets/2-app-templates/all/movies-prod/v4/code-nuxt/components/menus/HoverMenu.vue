<template>
  <ul :id="idName" tag="ul" :class="className">
    <li v-for="(item,index) in items" :key="index" :class="item.is_heading ? 'iq-menu-title' :''">
      <i v-if="item.is_heading && hideListMenuTitle" class="ri-subtract-line" />
      <span v-if="item.is_heading">{{ item.name }}</span>
      <nuxt-link v-if="!item.is_heading" :to="item.link" :class="`iq-waves-effect`">
        <i v-if="item.is_icon_class" :class="item.icon" />
        <template v-else>
          {{ item.icon }}
        </template>
        <span>{{ item.name }}</span>
        <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
        <small v-if="hideListMenuTitle" :class="item.append_class">
          {{ item.append }}
        </small>
      </nuxt-link>
      <List v-if="item.children" :items="item.children" :sidebar-group-title="hideListMenuTitle" :id-name="item.name" :class-name="`iq-submenu ${item.class_name}`" />
    </li>
  </ul>
</template>
<script>
import { core } from '../../../assets/app/app'
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
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  computed: {
    hideListMenuTitle () {
      return this.sidebarGroupTitle
    }
  },
  mounted () {
  },
  methods: {
    activeLink (item) {
      return core.getActiveLink(item, this.$route.name)
    }
  }
}
</script>

<style scoped>
  .iq-submenu{
    max-height: 300px;
    overflow-y: scroll;
  }
</style>
